
import React, { useState } from 'react';
import { 
  Menu, X, Phone, Mail, Instagram, Linkedin, Facebook, MapPin, Globe, 
  ChevronDown, GraduationCap, Mic2, Zap, Target, Calendar 
} from 'lucide-react';
import Logo from './Logo.tsx';
import { CONTACT_INFO, TRANSLATED_CONTENT } from '../constants.tsx';
import { Language, translations } from '../translations.ts';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (page: string, serviceId?: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const t = translations[lang].nav;
  const footerT = translations[lang].footer;
  const currentServices = TRANSLATED_CONTENT[lang].services;

  const navLinks = [
    { name: t.home, id: 'home' },
    { name: t.founder, id: 'founder' },
    { name: t.services, id: 'services' },
    { name: t.about, id: 'about' },
    { name: t.contact, id: 'contact' },
  ];

  // Map service IDs to specific icons for the dropdown
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'formations': return <GraduationCap size={16} />;
      case 'conferences': return <Mic2 size={16} />;
      case 'ateliers': return <Zap size={16} />;
      case 'coaching': return <Target size={16} />;
      case 'programmes': return <Calendar size={16} />;
      default: return <Target size={16} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
            <Logo />
          </div>

          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div key={link.id} className="relative group">
                <button
                  onClick={() => onNavigate(link.id)}
                  onMouseEnter={() => link.id === 'services' && setIsServicesOpen(true)}
                  className={`text-sm font-black uppercase tracking-widest transition-all relative py-2 flex items-center gap-1 ${
                    activePage === link.id ? 'text-blue-600' : 'text-slate-500 hover:text-blue-500'
                  }`}
                >
                  {link.name}
                  {link.id === 'services' && <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />}
                  {activePage === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
                  )}
                </button>

                {/* Services Dropdown */}
                {link.id === 'services' && (
                  <div 
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
                  >
                    <div className="p-4 bg-slate-50 border-b border-slate-100">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        {lang === 'fr' ? 'Explorez nos expertises' : 'Explore our expertise'}
                      </p>
                    </div>
                    {currentServices.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => { onNavigate('services', s.id); setIsServicesOpen(false); }}
                        className="w-full text-left px-6 py-4 hover:bg-blue-50 transition-colors flex items-center gap-3 group/item"
                      >
                        <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all shadow-sm">
                           {getServiceIcon(s.id)}
                        </div>
                        <span className="text-sm font-bold text-slate-700 group-hover/item:text-blue-600">
                          {s.category}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="h-8 w-px bg-slate-200 mx-4"></div>
            
            <div className="flex items-center gap-6">
              <div className="relative">
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  onBlur={() => setTimeout(() => setIsLangMenuOpen(false), 200)}
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <Globe size={18} className="text-blue-600" /> {lang.toUpperCase()} <ChevronDown size={14} className={isLangMenuOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
                </button>
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-4 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden w-32 py-2 animate-in fade-in slide-in-from-top-2">
                    <button onClick={() => setLang('fr')} className={`w-full px-6 py-3 text-left font-bold text-xs uppercase tracking-widest ${lang === 'fr' ? 'bg-blue-50 text-blue-600' : 'text-slate-600'}`}>FR</button>
                    <button onClick={() => setLang('en')} className={`w-full px-6 py-3 text-left font-bold text-xs uppercase tracking-widest ${lang === 'en' ? 'bg-blue-50 text-blue-600' : 'text-slate-600'}`}>EN</button>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => onNavigate('contact')}
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:scale-105 transition-all shadow-xl shadow-slate-200"
              >
                {t.cta}
              </button>
            </div>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-3 rounded-2xl bg-slate-50 text-slate-900 hover:bg-blue-50 hover:text-blue-600 transition-all">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-b border-slate-100 p-8 space-y-4 animate-in slide-in-from-top duration-300 shadow-2xl overflow-y-auto max-h-[calc(100vh-6rem)]">
            {navLinks.map((link) => (
              <div key={link.id}>
                <button
                  onClick={() => { onNavigate(link.id); setIsMenuOpen(false); }}
                  className={`block w-full text-left p-6 rounded-3xl text-3xl font-black ${
                    activePage === link.id ? 'bg-blue-50 text-blue-600' : 'text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
                {link.id === 'services' && (
                   <div className="pl-6 pt-2 space-y-2">
                      {currentServices.map(s => (
                        <button key={s.id} onClick={() => { onNavigate('services', s.id); setIsMenuOpen(false); }} className="block w-full text-left p-3 text-xl font-bold text-slate-500 hover:text-blue-600 flex items-center gap-3">
                          {getServiceIcon(s.id)} {s.category}
                        </button>
                      ))}
                   </div>
                )}
              </div>
            ))}
            <div className="pt-8 border-t border-slate-100 flex gap-4">
              <button onClick={() => setLang('fr')} className={`flex-1 py-4 rounded-2xl font-black ${lang === 'fr' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>FR</button>
              <button onClick={() => setLang('en')} className={`flex-1 py-4 rounded-2xl font-black ${lang === 'en' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>EN</button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-950 text-white py-32 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="space-y-10">
            {/* Logo in footer matches header colors style */}
            <Logo className="scale-110 origin-left" forceLight={true} />
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              {footerT.desc}
            </p>
            <div className="flex space-x-8 items-center">
              <a href="https://www.facebook.com/share/1DknjUyJ4Z/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><Facebook size={28} /></a>
              <a href="https://www.instagram.com/educ_forma?igsh=MWNqaGplbDRoa2Q5eA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><Instagram size={28} /></a>
              <a href="https://www.linkedin.com/in/%E2%9C%94%EF%B8%8Fousmane-ndiaye-91831a18?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={28} /></a>
              <a href="https://www.tiktok.com/@educforma" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.26v5.48c.01 3.82-2.06 7.46-5.51 9.12-3.45 1.66-7.67 1.25-10.74-1.04-3.07-2.29-4.51-6.43-3.66-10.15.85-3.72 3.91-6.62 7.68-7.3 1.05-.19 2.13-.19 3.19-.01V8.48c-.68-.13-1.39-.13-2.08-.01-1.45.24-2.76 1.13-3.52 2.38-.76 1.25-1 2.76-.68 4.2.32 1.44 1.25 2.71 2.54 3.42 1.29.71 2.87.84 4.26.35 1.39-.49 2.48-1.63 2.91-3.03.11-.36.17-.74.18-1.12l-.01-14.65Z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-black mb-10 text-xl uppercase tracking-widest text-blue-400">Navigation</h3>
            <ul className="space-y-6 text-slate-400 text-lg font-bold">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">{translations[lang].nav.home}</button></li>
              <li><button onClick={() => onNavigate('founder')} className="hover:text-white transition-colors">{translations[lang].nav.founder}</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">{translations[lang].nav.services}</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">{translations[lang].nav.about}</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black mb-10 text-xl uppercase tracking-widest text-blue-400">Contact</h3>
            <ul className="space-y-6 text-slate-400 text-lg">
              <li className="flex items-start gap-4">
                <MapPin size={24} className="text-blue-400 shrink-0 mt-1" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={24} className="text-blue-400" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="font-black text-white hover:text-blue-400 transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={24} className="text-blue-400" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="font-black text-xl uppercase tracking-widest text-blue-400">Newsletter</h3>
            <p className="text-slate-400 text-lg">{lang === 'fr' ? 'Rejoignez notre réseau de leaders.' : 'Join our network of leaders.'}</p>
            <div className="flex flex-col gap-4">
              <input type="email" placeholder="votre@email.ca" className="bg-slate-900 border-slate-800 rounded-2xl px-6 py-5 text-white w-full focus:ring-2 focus:ring-blue-500 transition-all outline-none" />
              <button className="bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/40">S’abonner</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-600 font-bold uppercase tracking-widest text-[10px] gap-6">
          <div>&copy; {new Date().getFullYear()} Académie Internationale EDUCFORMA. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</div>
          <div className="flex gap-10">
             <button className="hover:text-white transition-colors">{lang === 'fr' ? 'Confidentialité' : 'Privacy'}</button>
             <button className="hover:text-white transition-colors">{lang === 'fr' ? 'Mentions Légales' : 'Legal'}</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
