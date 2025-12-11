import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, MessageSquare, Image as ImageIcon, Send, X, Loader2, Bot, Wand2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { ContentText } from '../types';

interface AiAssistantProps {
  text: ContentText['ai'];
  isRTL: boolean;
}

const ASPECT_RATIOS = ["1:1", "2:3", "3:2", "3:4", "4:3", "9:16", "16:9", "21:9"];

export const AiAssistant: React.FC<AiAssistantProps> = ({ text, isRTL }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'generate' | 'analyze'>('chat');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', content: string}[]>([]);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedRatio, setSelectedRatio] = useState("1:1");
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  // Initialize Gemini
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setIsLoading(true);

    try {
      if (activeTab === 'chat') {
        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput('');

        const chat = ai.chats.create({
          model: 'gemini-3-pro-preview',
          config: {
            systemInstruction: "You are a creative brand strategist assistant for Solarix, Senna, and Krishna Traders.",
          }
        });

        // Simple chat history for context (last 5 turns)
        const history = messages.slice(-5).map(m => ({
             role: m.role,
             parts: [{ text: m.content }]
        }));

        const response = await ai.models.generateContent({
            model: 'gemini-3-pro-preview',
            contents: [...history, { role: 'user', parts: [{ text: userMsg }] }]
        });
        
        setMessages(prev => [...prev, { role: 'model', content: response.text || "No response" }]);

      } else if (activeTab === 'generate') {
        setGeneratedImage(null);
        const response = await ai.models.generateContent({
          model: 'gemini-3-pro-image-preview',
          contents: { parts: [{ text: input }] },
          config: {
            imageConfig: {
              aspectRatio: selectedRatio,
              imageSize: "1K" // gemini-3-pro-image supports size
            }
          }
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
           if (part.inlineData) {
             setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
           }
        }

      } else if (activeTab === 'analyze') {
         const response = await ai.models.generateContent({
           model: 'gemini-2.5-flash',
           contents: `Analyze this content and provide improvements or insights: ${input}`,
         });
         setAnalysisResult(response.text || "Could not analyze.");
      }
    } catch (error) {
      console.error(error);
      const errText = "Error processing request. Please try again.";
      if (activeTab === 'chat') setMessages(prev => [...prev, { role: 'model', content: errText }]);
      else if (activeTab === 'analyze') setAnalysisResult(errText);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-solarix-dark to-solarix-medium text-white rounded-full shadow-2xl hover:scale-105 transition-transform border border-solarix-accent/30 group"
      >
        <Sparkles className="w-6 h-6 animate-pulse group-hover:text-solarix-accent" />
      </button>

      {/* Main Interface Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:p-6 pointer-events-none">
          <div className="bg-white dark:bg-gray-900 w-full sm:w-[400px] h-[80vh] sm:h-[600px] shadow-2xl rounded-t-2xl sm:rounded-2xl flex flex-col pointer-events-auto overflow-hidden border border-gray-200 dark:border-gray-800 animate-in slide-in-from-bottom duration-300">
            
            {/* Header */}
            <div className="p-4 bg-solarix-dark text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-solarix-accent" />
                <h3 className="font-bold">{text.trigger}</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded">
                <X size={20} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
              <button 
                onClick={() => setActiveTab('chat')}
                className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'chat' ? 'text-solarix-dark dark:text-solarix-accent border-b-2 border-solarix-accent' : 'text-gray-500'}`}
              >
                <MessageSquare size={16} /> {text.tabs.chat}
              </button>
              <button 
                onClick={() => setActiveTab('generate')}
                className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'generate' ? 'text-solarix-dark dark:text-solarix-accent border-b-2 border-solarix-accent' : 'text-gray-500'}`}
              >
                <ImageIcon size={16} /> {text.tabs.generate}
              </button>
              <button 
                onClick={() => setActiveTab('analyze')}
                className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${activeTab === 'analyze' ? 'text-solarix-dark dark:text-solarix-accent border-b-2 border-solarix-accent' : 'text-gray-500'}`}
              >
                <Wand2 size={16} /> {text.tabs.analyze}
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900" ref={chatScrollRef}>
              
              {/* CHAT TAB */}
              {activeTab === 'chat' && (
                <div className="space-y-4">
                  {messages.length === 0 && (
                    <div className="text-center text-gray-400 mt-10">
                      <Bot size={48} className="mx-auto mb-2 opacity-20" />
                      <p>{text.chatPlaceholder}</p>
                    </div>
                  )}
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.role === 'user' 
                          ? 'bg-solarix-dark text-white rounded-br-none' 
                          : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-bl-none shadow-sm'
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                     <div className="flex justify-start">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-bl-none border border-gray-200 dark:border-gray-700">
                           <Loader2 className="w-4 h-4 animate-spin text-solarix-medium" />
                        </div>
                     </div>
                  )}
                </div>
              )}

              {/* GENERATE TAB */}
              {activeTab === 'generate' && (
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                    <label className="text-xs font-bold uppercase text-gray-500 mb-2 block">Aspect Ratio</label>
                    <div className="grid grid-cols-4 gap-2 mb-2">
                        {ASPECT_RATIOS.map(ratio => (
                            <button 
                                key={ratio}
                                onClick={() => setSelectedRatio(ratio)}
                                className={`text-xs py-1 px-2 rounded border ${selectedRatio === ratio ? 'bg-solarix-accent text-solarix-dark border-solarix-accent' : 'border-gray-300 dark:border-gray-600 hover:border-solarix-accent'}`}
                            >
                                {ratio}
                            </button>
                        ))}
                    </div>
                  </div>

                  {isLoading ? (
                    <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-xl flex items-center justify-center animate-pulse">
                        <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                    </div>
                  ) : generatedImage ? (
                    <div className="relative group">
                       <img src={generatedImage} alt="Generated" className="w-full rounded-xl shadow-lg border border-gray-200" />
                       <a href={generatedImage} download="generated-brand.png" className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow hover:bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity">
                         <ImageIcon size={16} />
                       </a>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400 mt-10">
                      <ImageIcon size={48} className="mx-auto mb-2 opacity-20" />
                      <p>{text.genPlaceholder}</p>
                    </div>
                  )}
                </div>
              )}

              {/* ANALYZE TAB */}
              {activeTab === 'analyze' && (
                <div className="space-y-4">
                   {isLoading ? (
                     <div className="space-y-2">
                        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2 animate-pulse"></div>
                     </div>
                   ) : analysisResult ? (
                     <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                        {analysisResult}
                     </div>
                   ) : (
                    <div className="text-center text-gray-400 mt-10">
                      <Wand2 size={48} className="mx-auto mb-2 opacity-20" />
                      <p>{text.analyzePlaceholder}</p>
                    </div>
                   )}
                </div>
              )}

            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={
                     activeTab === 'chat' ? text.chatPlaceholder :
                     activeTab === 'generate' ? text.genPlaceholder : 
                     text.analyzePlaceholder
                  }
                  className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-solarix-accent outline-none text-sm"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-solarix-dark hover:bg-solarix-medium text-white p-3 rounded-xl disabled:opacity-50 transition-colors"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};