import React, { useState, useEffect } from 'react';
import { Menu, Globe, ArrowRight, Target, Lightbulb, Users, User, CheckCircle, Zap, Shield, Smartphone, Truck, Package, Shirt, Car, Award, CreditCard, Activity, Watch, Droplet, Layout, PenTool, Coffee, Map } from 'lucide-react';
import { TEXT_CONTENT } from './constants';
import { Language } from './types';
import { SolarixLogo } from './components/SolarixLogo';
import { KrishnaLogo } from './components/KrishnaLogo';
import { SennaLogo } from './components/SennaLogo';
import { FlowfitLogo } from './components/FlowfitLogo';
import { CaleoLogo } from './components/CaleoLogo';
import { ChargeLogo } from './components/ChargeLogo';
import { AmoraLogo } from './components/AmoraLogo';
import ContactModal from './components/ContactModal';
import { AiAssistant } from './components/AiAssistant';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  const content = TEXT_CONTENT[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
    document.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <div className={`min-h-screen ${isRTL ? 'font-arabic' : 'font-sans'} text-gray-800 relative`}>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-solarix-dark/95 backdrop-blur-md text-white z-40 border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SolarixLogo className="w-10 h-10 fill-solarix-accent" />
            <span className="text-2xl font-bold tracking-tight">{content.nav.brand}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 hover:text-solarix-accent transition-colors px-3 py-1 rounded-full border border-white/20 hover:border-solarix-accent"
            >
              <Globe size={18} />
              <span className="uppercase font-bold text-sm">{lang}</span>
            </button>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="bg-solarix-accent text-solarix-dark px-6 py-2 rounded-full font-bold hover:bg-white transition-colors shadow-[0_0_15px_rgba(204,255,0,0.3)]"
            >
              {content.nav.contact}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-solarix-dark text-white flex items-center overflow-hidden">
        {/* Decorative Squiggle */}
        <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
           <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-solarix-accent" strokeWidth="2">
             <path d="M0 200 C 100 200, 100 100, 200 100 C 300 100, 300 300, 400 300 C 500 300, 500 0, 600 0" />
           </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isRTL ? 'md:order-last' : ''}`}>
            <div className="inline-block border border-solarix-accent text-solarix-accent px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
              {content.hero.subtitle}
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-tight text-white">
              {content.hero.title}
              <span className="text-solarix-accent">.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              {content.about.visionText}
            </p>
            <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="group bg-solarix-accent text-solarix-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center gap-2"
                >
                  {content.nav.contact}
                  <ArrowRight className={`transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            {/* Abstract visual representing the brand */}
            <div className="relative w-full aspect-square bg-gradient-to-tr from-solarix-medium to-transparent rounded-full flex items-center justify-center border border-white/10">
               <SolarixLogo className="w-1/2 h-1/2 fill-solarix-accent animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values / About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-solarix-dark mb-4">{content.about.title}</h2>
            <div className="w-20 h-1 bg-solarix-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* About Card */}
            <div className="p-8 rounded-3xl bg-gray-50 border hover:border-solarix-accent transition-all hover:shadow-xl group">
              <div className="w-16 h-16 bg-solarix-light rounded-2xl flex items-center justify-center text-solarix-dark mb-6 group-hover:bg-solarix-accent transition-colors">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold text-solarix-dark mb-4">{content.about.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {content.about.description}
              </p>
            </div>

            {/* Mission Card */}
            <div className="p-8 rounded-3xl bg-solarix-dark text-white border border-solarix-dark hover:border-solarix-accent transition-all hover:shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-32 bg-solarix-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-solarix-accent mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{content.about.missionTitle}</h3>
              <p className="text-gray-300 leading-relaxed">
                {content.about.missionText}
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-8 rounded-3xl bg-gray-50 border hover:border-solarix-accent transition-all hover:shadow-xl group">
              <div className="w-16 h-16 bg-solarix-light rounded-2xl flex items-center justify-center text-solarix-dark mb-6 group-hover:bg-solarix-accent transition-colors">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-solarix-dark mb-4">{content.about.visionTitle}</h3>
              <p className="text-gray-600 leading-relaxed">
                {content.about.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section (Logo & Type) */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Logo Construction Grid */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-solarix-dark mb-8">{content.guidelines.logoConstruction}</h3>
              <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-200 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 grid-pattern opacity-30"></div>
                 {/* Geometric lines simulation */}
                 <div className="relative w-64 h-64 border border-gray-300 rounded-full flex items-center justify-center">
                    <div className="absolute w-full h-[1px] bg-gray-300 rotate-45"></div>
                    <div className="absolute w-full h-[1px] bg-gray-300 -rotate-45"></div>
                    <div className="absolute w-full h-[1px] bg-gray-300 rotate-90"></div>
                    <div className="absolute w-full h-[1px] bg-gray-300"></div>
                    <div className="w-48 h-48 border border-gray-300 rounded-full flex items-center justify-center">
                        <SolarixLogo className="w-32 h-32 fill-solarix-dark" />
                    </div>
                 </div>
              </div>
            </div>

            {/* Typography & Colors */}
            <div className="flex-1 space-y-12">
              
              {/* Colors */}
              <div>
                <h3 className="text-3xl font-bold text-solarix-dark mb-8">{content.guidelines.colorPalette}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-solarix-dark p-6 rounded-2xl text-white aspect-video flex flex-col justify-end">
                    <span className="font-mono text-sm opacity-60">#032F23</span>
                    <span className="font-bold">Forest Dark</span>
                  </div>
                  <div className="bg-solarix-accent p-6 rounded-2xl text-solarix-dark aspect-video flex flex-col justify-end">
                    <span className="font-mono text-sm opacity-60">#CCFF00</span>
                    <span className="font-bold">Neon Lime</span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl text-gray-800 border border-gray-200 aspect-video flex flex-col justify-end">
                    <span className="font-mono text-sm opacity-60">#FFFFFF</span>
                    <span className="font-bold">White</span>
                  </div>
                  <div className="bg-solarix-medium p-6 rounded-2xl text-white aspect-video flex flex-col justify-end">
                    <span className="font-mono text-sm opacity-60">#0A4F3C</span>
                    <span className="font-bold">Leaf Green</span>
                  </div>
                </div>
              </div>

               {/* Typography */}
               <div>
                <h3 className="text-3xl font-bold text-solarix-dark mb-8">{content.guidelines.typography}</h3>
                <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Primary Font</p>
                    <p className="text-4xl font-bold text-solarix-dark">Gilroy / Cairo</p>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="grid grid-cols-2 gap-4 text-solarix-dark">
                    <span className="font-light">Light</span>
                    <span className="font-normal">Regular</span>
                    <span className="font-semibold">Semibold</span>
                    <span className="font-black">Bold</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-4">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
                    abcdefghijklmnopqrstuvwxyz<br/>
                    0123456789
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SENNA IDENTITY SECTION */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4DFF00]/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-start gap-8 mb-16">
            <SennaLogo className="w-64 h-20" />
            <p className="text-[#4DFF00] font-mono uppercase tracking-[0.2em]">{content.senna.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] border border-[#222] hover:border-[#4DFF00] transition-colors">
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <Car className="text-[#4DFF00] w-12 h-12" />
                <div>
                   <h3 className="text-2xl font-bold text-white mb-2">{content.senna.items.car}</h3>
                   <div className="h-1 w-12 bg-[#4DFF00] group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1603584173870-7b299f5869c2?auto=format&fit=crop&q=80&w=800" alt="Car" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>

            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#4DFF00]">
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
               <img src="https://images.unsplash.com/photo-1552066344-2464c1135c32?auto=format&fit=crop&q=80&w=800" alt="Racing Gear" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:opacity-70 transition-opacity" />
               <div className="absolute inset-0 flex items-center justify-center z-20">
                  <SennaLogo className="w-32 h-32 text-black opacity-40" iconOnly />
               </div>
               <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                  <Award className="text-black w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-black text-black uppercase">{content.senna.items.helmet}</h3>
               </div>
            </div>

            <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] border border-[#222] hover:border-[#4DFF00] transition-colors">
              <img src="https://images.unsplash.com/photo-1589330694653-4a8b6f4e28aa?auto=format&fit=crop&q=80&w=800" alt="Stationery" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="absolute top-0 right-0 p-8 z-10">
                  <CreditCard className="text-[#4DFF00] w-10 h-10" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 z-10">
                   <h3 className="text-2xl font-bold text-white mb-2">{content.senna.items.card}</h3>
                   <p className="text-gray-400 text-sm">Minimalist & Bold</p>
              </div>
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4DFF00 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* KRISHNA IDENTITY SECTION */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#0A9748] font-bold tracking-widest uppercase mb-2 block">{content.krishna.subtitle}</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A9748]">{content.krishna.title}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div className="bg-gray-50 rounded-3xl p-12 border border-dashed border-gray-300 relative">
               <div className="absolute top-4 left-6 text-gray-400 text-sm font-mono uppercase tracking-widest">{content.guidelines.logoConstruction}</div>
               <div className="flex items-center justify-center h-full min-h-[300px]">
                  <KrishnaLogo className="w-64 h-64" showGrid={true} />
               </div>
               <div className="absolute bottom-6 right-6 flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0A9748] shadow-sm"></div>
                  <div className="w-8 h-8 rounded-full bg-[#8AC640] shadow-sm"></div>
               </div>
            </div>

            <div className="space-y-8 flex flex-col justify-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Logo Concept</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {content.krishna.concept}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-[#0A9748] text-white rounded-2xl">
                   <div className="text-sm opacity-80 mb-1">Primary Green</div>
                   <div className="font-mono text-xl">#0A9748</div>
                </div>
                <div className="p-6 bg-[#8AC640] text-white rounded-2xl">
                   <div className="text-sm opacity-80 mb-1">Leaf Light</div>
                   <div className="font-mono text-xl">#8AC640</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="group relative bg-[#0A9748] rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                   <div className="bg-white p-4 rounded-2xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform">
                      <KrishnaLogo className="w-16 h-16" />
                   </div>
                   <h4 className="text-white font-bold text-2xl mb-2">KRISHNA</h4>
                   <p className="text-white/80 font-mono text-sm uppercase tracking-widest">TRADERS</p>
                   
                   <div className="mt-12 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-bold border border-white/30">
                      {content.krishna.items.feed}
                   </div>
                   
                   <div className="absolute bottom-0 w-full h-32 bg-white flex items-end justify-center pb-4 opacity-90">
                      <Package className="text-[#0A9748] w-12 h-12" />
                   </div>
                </div>
             </div>

             <div className="group relative bg-gray-100 rounded-3xl overflow-hidden aspect-[4/5] border border-gray-200">
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800" alt="Truck" className="w-full h-full object-cover mix-blend-multiply opacity-50" />
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                   <div className="self-end bg-white p-2 rounded-lg shadow-sm">
                      <KrishnaLogo className="w-10 h-10" />
                   </div>
                   <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-3 mb-2 text-[#0A9748]">
                         <Truck className="w-6 h-6" />
                         <span className="font-bold">{content.krishna.items.truck}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                         <div className="w-2/3 h-full bg-[#0A9748]"></div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="group relative bg-white rounded-3xl overflow-hidden aspect-[4/5] border border-gray-200 flex items-center justify-center">
                <div className="relative w-64 h-80 bg-gray-50 rounded-[40px] shadow-inner border border-gray-100 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[#f8fafc]"></div>
                    <Shirt className="w-48 h-48 text-gray-200 stroke-1" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="flex flex-col items-center">
                          <KrishnaLogo className="w-12 h-12 mb-2" />
                          <span className="font-bold text-gray-800 text-xs tracking-widest">STAFF</span>
                       </div>
                    </div>
                </div>
                <div className="absolute bottom-8 text-gray-400 font-mono text-xs uppercase tracking-widest">{content.krishna.items.tshirt}</div>
             </div>
          </div>

        </div>
      </section>

      {/* FLOWFIT SECTION */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <FlowfitLogo className="w-48 h-16" />
              <p className="text-[#7CFC00] font-bold mt-2 tracking-widest">{content.flowfit.subtitle}</p>
            </div>
            <Activity className="text-[#7CFC00] w-12 h-12 hidden md:block" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#222] p-8 rounded-2xl hover:bg-[#252525] transition-colors border-t-4 border-[#7CFC00]">
                <div className="h-48 flex items-center justify-center bg-[#111] rounded-xl mb-6">
                    <Droplet className="w-16 h-16 text-[#7CFC00]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{content.flowfit.items.bottle}</h3>
            </div>
             <div className="bg-[#222] p-8 rounded-2xl hover:bg-[#252525] transition-colors border-t-4 border-[#7CFC00]">
                <div className="h-48 flex items-center justify-center bg-[#111] rounded-xl mb-6">
                    <Watch className="w-16 h-16 text-[#7CFC00]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{content.flowfit.items.watch}</h3>
            </div>
             <div className="bg-[#222] p-8 rounded-2xl hover:bg-[#252525] transition-colors border-t-4 border-[#7CFC00]">
                <div className="h-48 flex items-center justify-center bg-[#111] rounded-xl mb-6">
                    <Package className="w-16 h-16 text-[#7CFC00]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{content.flowfit.items.bag}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CALEO PAY SECTION */}
      <section className="py-24 bg-[#DFFF00]">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <CaleoLogo className="w-64 h-24 mx-auto mb-4" color="#000" />
                <h2 className="text-3xl font-bold text-black">{content.caleo.subtitle}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[600px] bg-black rounded-[40px] p-4 shadow-2xl mx-auto w-full max-w-sm border-8 border-gray-900">
                    <div className="h-full bg-white rounded-[32px] overflow-hidden relative">
                         <div className="bg-[#DFFF00] p-8 pb-12">
                            <h3 className="text-2xl font-bold mb-2">Hello, User</h3>
                            <p className="text-3xl font-black">$ 1,098.50</p>
                         </div>
                         <div className="p-4 space-y-4">
                             <div className="flex gap-4 overflow-x-auto pb-2">
                                <div className="w-32 h-32 bg-black rounded-2xl flex-shrink-0 flex items-center justify-center text-white">
                                    <Zap />
                                </div>
                                <div className="w-32 h-32 bg-gray-100 rounded-2xl flex-shrink-0"></div>
                             </div>
                             <div className="bg-gray-50 p-4 rounded-xl flex justify-between items-center">
                                 <div>
                                     <p className="font-bold">Transfer Sent</p>
                                     <p className="text-xs text-gray-500">Today, 10:00 AM</p>
                                 </div>
                                 <span className="font-bold text-red-500">-$50.00</span>
                             </div>
                         </div>
                         <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 p-4 flex justify-around">
                             <Layout className="text-black" />
                             <Activity className="text-gray-300" />
                             <User className="text-gray-300" />
                         </div>
                    </div>
                </div>

                <div className="space-y-8">
                     <div className="bg-black text-[#DFFF00] p-8 rounded-3xl">
                         <CreditCard className="w-12 h-12 mb-4" />
                         <h3 className="text-2xl font-bold mb-2">{content.caleo.items.card}</h3>
                         <div className="w-full h-40 rounded-xl bg-gradient-to-br from-[#333] to-black border border-gray-800 relative p-6 flex flex-col justify-between mt-4">
                            <CaleoLogo className="w-20 h-8" color="white" />
                            <div className="text-gray-400 font-mono">**** **** **** 4242</div>
                         </div>
                     </div>
                     <div className="bg-white p-8 rounded-3xl shadow-lg">
                         <Target className="w-12 h-12 mb-4 text-black" />
                         <h3 className="text-2xl font-bold mb-2">{content.caleo.items.brand}</h3>
                         <p className="text-gray-600">Adaptive, modern, and secure financial identity.</p>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* CHARGE SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-b border-gray-200 pb-8">
                <ChargeLogo className="w-48 h-16" color="#CCFF00" />
                <span className="text-xl font-bold text-gray-400 uppercase tracking-widest">{content.charge.subtitle}</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
                <div className="col-span-2 row-span-2 bg-[#f4f4f4] rounded-2xl p-8 flex flex-col justify-between group overflow-hidden relative">
                     <div className="absolute top-0 right-0 p-8 opacity-10">
                        <ChargeLogo className="w-64 h-64" color="black" />
                     </div>
                     <div className="relative z-10">
                        <h3 className="text-2xl font-bold">{content.charge.items.stationery}</h3>
                        <p className="text-gray-500">Letterhead & Branding</p>
                     </div>
                     <div className="bg-white shadow-xl p-8 max-w-xs transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                        <ChargeLogo className="w-24 h-8 mb-4" />
                        <div className="space-y-2">
                            <div className="h-2 bg-gray-100 w-full"></div>
                            <div className="h-2 bg-gray-100 w-5/6"></div>
                            <div className="h-2 bg-gray-100 w-4/6"></div>
                        </div>
                     </div>
                </div>
                <div className="bg-black text-[#CCFF00] rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                    <Smartphone className="w-12 h-12 mb-4" />
                    <span className="font-bold">{content.charge.items.mobile}</span>
                </div>
                <div className="bg-[#CCFF00] rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                     <PenTool className="w-12 h-12 mb-4 text-black" />
                     <span className="font-bold text-black">{content.charge.items.logo}</span>
                </div>
                 <div className="col-span-2 bg-gray-900 rounded-2xl relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 grid-pattern opacity-20"></div>
                      <ChargeLogo className="w-48 h-16 relative z-10" color="white" />
                </div>
            </div>
        </div>
      </section>

      {/* AMORA SECTION */}
      <section className="py-24 bg-[#004d40] text-[#D8FF28]">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <AmoraLogo className="w-48 h-20 mx-auto" />
                  <p className="mt-4 font-mono uppercase tracking-[0.3em] opacity-80">{content.amora.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  <div className="relative group bg-[#003d33] rounded-3xl overflow-hidden aspect-[3/4]">
                      <div className="absolute inset-0 flex items-center justify-center">
                          <Shirt className="w-64 h-64 text-[#D8FF28] opacity-10 group-hover:opacity-20 transition-opacity" />
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <AmoraLogo className="w-24 h-12 mb-4" />
                          <div className="bg-[#D8FF28] text-[#004d40] px-4 py-1 rounded font-bold text-sm">
                              {content.amora.items.wear}
                          </div>
                      </div>
                  </div>

                  <div className="flex flex-col gap-8">
                       <div className="flex-1 bg-[#D8FF28] rounded-3xl flex items-center justify-center p-8 text-[#004d40]">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-[#004d40] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-2xl">
                                    <AmoraLogo className="w-12 h-6" color="#D8FF28" />
                                </div>
                                <h3 className="font-bold">{content.amora.items.app}</h3>
                            </div>
                       </div>
                       <div className="flex-1 bg-[#00695c] rounded-3xl flex items-center justify-center p-8 relative overflow-hidden">
                           <Map className="w-32 h-32 absolute -right-4 -bottom-4 opacity-20" />
                           <div className="relative z-10 text-center">
                               <h3 className="text-2xl font-bold mb-2">{content.amora.items.sign}</h3>
                               <p className="opacity-70 text-sm">Wayfinding & Environmental</p>
                           </div>
                       </div>
                  </div>

                   <div className="relative bg-[#00251a] rounded-3xl overflow-hidden p-8 flex flex-col justify-end">
                       <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#D8FF28]/10 to-transparent"></div>
                       <Watch className="w-16 h-16 mb-6 text-[#D8FF28]" />
                       <h3 className="text-3xl font-bold text-white mb-2">Smart</h3>
                       <h3 className="text-3xl font-bold text-[#D8FF28]">Integration.</h3>
                   </div>
              </div>
          </div>
      </section>

      {/* DIGITAL / VOLTX SECTION */}
      <section className="py-24 relative overflow-hidden bg-black text-white border-t border-solarix-accent/20">
        <div className="absolute inset-0 opacity-30">
             <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(204,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-solarix-accent">
                <Zap className="fill-current" />
                <span className="font-mono uppercase tracking-widest">Digital Future</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black leading-none">
                {content.digital.title}
                <span className="text-solarix-accent">.</span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-solarix-accent pl-6">
                {content.digital.description}
              </p>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {content.digital.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square bg-gradient-to-br from-solarix-dark to-black rounded-3xl border border-solarix-accent/20 p-8 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.15)]">
                 <div className="absolute inset-0 bg-solarix-accent opacity-5 blur-3xl"></div>
                 
                 <div className="relative w-48 h-48">
                    <SolarixLogo className="w-full h-full fill-none stroke-solarix-accent stroke-2 drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]" />
                 </div>

                 <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 animate-bounce" style={{ animationDuration: '3s' }}>
                    <Shield className="text-solarix-accent w-8 h-8 mb-2" />
                    <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                 </div>
                 <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 animate-bounce" style={{ animationDuration: '4s' }}>
                    <Smartphone className="text-white w-8 h-8 mb-2" />
                    <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <SolarixLogo className="w-12 h-12 fill-white" />
          </div>
          <p className="mb-4">&copy; {new Date().getFullYear()} Solarix Energy. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
             <button onClick={() => setIsContactOpen(true)} className="hover:text-solarix-accent transition-colors">
                {content.contact.title}
             </button>
             <a href="#" className="hover:text-solarix-accent transition-colors">{content.guidelines.title}</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AiAssistant text={content.ai} isRTL={isRTL} />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        text={content.contact}
        isRTL={isRTL}
      />

    </div>
  );
};

export default App;