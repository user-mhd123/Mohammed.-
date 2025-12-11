import React from 'react';
import { X, Phone, Mail, Instagram, User } from 'lucide-react';
import { CONTACT_DETAILS } from '../constants';
import { ContentText } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  text: ContentText['contact'];
  isRTL: boolean;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, text, isRTL }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="bg-solarix-dark p-6 flex justify-between items-center text-white">
          <h2 className="text-2xl font-bold font-sans">{text.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
            
          {/* Admin Name */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-solarix-light rounded-full text-solarix-dark">
              <User size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">{text.nameLabel}</p>
              <p className="text-lg font-bold text-gray-800">{CONTACT_DETAILS.name}</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-full text-green-600">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">{text.phoneLabel}</p>
              <a href={`https://wa.me/${CONTACT_DETAILS.whatsapp}`} target="_blank" rel="noreferrer" className="text-lg font-bold text-gray-800 hover:text-green-600 transition-colors">
                +{CONTACT_DETAILS.whatsapp}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">{text.emailLabel}</p>
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors break-all">
                {CONTACT_DETAILS.email}
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-pink-100 rounded-full text-pink-600">
              <Instagram size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase">{text.instaLabel}</p>
              <a href={`https://instagram.com/${CONTACT_DETAILS.instagram}`} target="_blank" rel="noreferrer" className="text-lg font-bold text-gray-800 hover:text-pink-600 transition-colors">
                @{CONTACT_DETAILS.instagram}
              </a>
            </div>
          </div>

        </div>

        <div className="p-4 bg-gray-50 text-center">
            <button 
                onClick={onClose}
                className="px-8 py-2 bg-solarix-dark text-solarix-accent font-bold rounded-full hover:bg-solarix-medium transition-all"
            >
                {text.close}
            </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;