
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Mic2, Globe, Building2, GraduationCap, Image as ImageIcon, 
  RefreshCw, UserCheck, ChevronRight, ArrowRight, ShieldCheck, Zap, ArrowLeft, LayoutGrid,
  Sparkles, Check, TrendingUp, Target, MessageSquare, Users, CheckCircle2, X, ListChecks, Clock, Award,
  Phone, Mail, Calendar
} from 'lucide-react';
import Layout from './components/Layout.tsx';
import ContactForm from './components/ContactForm.tsx';
import { TRANSLATED_CONTENT, CONTACT_INFO, PERMANENT_FOUNDER_PORTRAIT, PERMANENT_FOUNDER_ACTION } from './constants.tsx';
import { ServiceDetail } from './types.ts';
import { Language, translations } from './translations.ts';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [lang, setLang] = useState<Language>('fr');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, selectedServiceId]);

  const t = translations[lang];
  const content = TRANSLATED_CONTENT[lang];

  const selectedService = useMemo(() => {
    if (!selectedServiceId) return null;
    return content.services.find(s => s.id === selectedServiceId) || null;
  }, [selectedServiceId, content]);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'formations': return <GraduationCap size={32} />;
      case 'conferences': return <Mic2 size={32} />;
      case 'ateliers': return <Zap size={32} />;
      case 'coaching': return <Target size={32} />;
      case 'programmes': return <Calendar size={32} />;
      default: return <Target size={32} />;
    }
  };

  const renderHomePage = () => (
    <div className="space-y-32 pb-20 bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" alt="Education" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
          <div className="max-w-4xl space-y-10">
            <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter whitespace-pre-line">
              {t.hero.title} <br/><span className="text-blue-500">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-2xl text-slate-200 leading-relaxed max-w-xl font-medium">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button onClick={() => setActivePage('services')} className="bg-blue-600 text-white px-10 py-5 rounded-3xl text-xl font-black hover:bg-blue-700 hover:scale-105 transition-all shadow-2xl shadow-blue-500/40 flex items-center gap-3">
                {t.hero.btnSecondary} <ChevronRight size={24} />
              </button>
              <button onClick={() => setActivePage('founder')} className="glass text-white px-10 py-5 rounded-3xl text-xl font-black hover:bg-white/20 transition-all border border-white/20">
                {t.nav.founder}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Summary */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
          <div className="space-y-6">
            <h2 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">{(t as any).homeSections.servicesTitle}</h2>
            <p className="text-xl text-slate-500 max-w-2xl">{lang === 'fr' ? "Une gamme complète d'expertises pour tous les publics." : "A full range of expertise tailored for all audiences."}</p>
          </div>
          <button onClick={() => setActivePage('services')} className="text-blue-600 font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-all">
            {lang === 'fr' ? 'Voir tous les services' : 'All services'} <ArrowRight size={24} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((service) => (
            <div key={service.id} onClick={() => setSelectedServiceId(service.id)} className="group bg-slate-50 p-10 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer border border-transparent hover:border-blue-100 flex flex-col h-full">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {getServiceIcon(service.id)}
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium line-clamp-3 mb-8 flex-grow">{service.summary}</p>
              <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {lang === 'fr' ? 'En savoir plus' : 'Learn more'} <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About (Target & Mission) */}
      <section className="bg-slate-50 py-32 rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                {(t as any).homeSections.aboutTitle}
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">{(t as any).homeSections.aboutDesc}</h1>
            </div>
            
            <div className="space-y-8">
              <p className="text-2xl text-slate-600 leading-loose font-light">
                {lang === 'fr' 
                  ? "Propulser les jeunes, les nouveaux arrivants et les leaders vers l'excellence par une éducation innovante et un accompagnement humain durable. Notre mission est de transformer les parcours de vie à Montréal et à l'international."
                  : "Propelling youth, newcomers, and leaders towards excellence through innovative education and sustainable human support. Our mission is to transform life paths in Montreal and globally."}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: lang === 'fr' ? 'Jeunes (5-25 ans)' : 'Youth (5-25 yrs)', icon: Users },
                  { label: lang === 'fr' ? 'Nouveaux Arrivants' : 'Newcomers', icon: Globe },
                  { label: lang === 'fr' ? 'Cadres & Leaders' : 'Leaders & Execs', icon: Building2 },
                  { label: lang === 'fr' ? 'Entreprises & Gouvernements' : 'Corps & Gov', icon: ShieldCheck }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <item.icon size={20} />
                    </div>
                    <span className="font-black text-slate-800 uppercase tracking-widest text-[10px]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => setActivePage('about')} className="bg-slate-900 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
              {lang === 'fr' ? 'Notre Vision Complète' : 'Our Full Vision'}
            </button>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" alt="About" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-amber-400 p-10 rounded-[3rem] shadow-2xl max-w-[220px] -rotate-3 hidden lg:block">
              <div className="text-4xl font-black text-blue-900 mb-1">100%</div>
              <p className="text-[10px] font-black text-blue-900/60 uppercase tracking-widest leading-tight">Engagement pour votre réussite</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-950 py-32 rounded-[4rem] mx-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs">{(t as any).homeSections.contactTitle}</h2>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">{(t as any).homeSections.contactDesc}</h1>
              <p className="text-xl text-slate-400 font-medium">{lang === 'fr' ? 'Parlons de vos objectifs et trouvons ensemble le parcours idéal.' : "Let's discuss your goals and find the perfect path together."}</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-8 rounded-[3rem] border border-white/5 bg-white/5 shadow-2xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-1">{lang === 'fr' ? 'Appelez-nous' : 'Call us'}</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-3xl font-black text-white hover:text-blue-400 transition-all tracking-tighter">{CONTACT_INFO.phone}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-8 rounded-[3rem] border border-white/5 bg-white/5 shadow-2xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-1">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-3xl font-black text-white hover:text-blue-400 transition-all tracking-tighter break-all">{CONTACT_INFO.email}</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm lang={lang} />
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
      </section>
    </div>
  );

  const renderFounderPage = () => (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <div className="inline-block bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            {t.founderSection.badge}
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            {t.founderSection.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Images Column - Displaying both uploaded pictures */}
          <div className="space-y-8">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[3/4.2] bg-slate-100 flex items-center justify-center">
              <img 
                src={PERMANENT_FOUNDER_ACTION} 
                alt="Action - M. Ousmane Ndiaye at Ville de Montréal" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "https://educforma.ca/images/1000033268.jpg"; }}
              />
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-square bg-slate-100 max-w-md mx-auto lg:ml-0 flex items-center justify-center">
              <img 
                src={PERMANENT_FOUNDER_PORTRAIT} 
                alt="Portrait - M. Ousmane Ndiaye" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.src = "https://educforma.ca/images/1000033272.jpg"; }}
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-10">
            <div className="prose prose-2xl prose-slate max-w-none">
              <h2 className="text-4xl font-black text-slate-900 leading-tight italic border-l-8 border-amber-500 pl-8 mb-12">
                "{t.founderSection.quote}"
              </h2>
              
              <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-light text-justify">
                <p className="font-bold text-slate-900 text-2xl">{content.founder.intro}</p>
                <p className="whitespace-pre-line">{content.founder.content}</p>
                
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 my-10">
                  <p className="text-slate-900 font-bold mb-6 text-lg uppercase tracking-widest">{t.founderSection.objectivesLabel}</p>
                  <div className="grid grid-cols-1 gap-4">
                    {content.founder.points.map((p, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-blue-50 font-bold text-slate-800">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                          <Check size={16} className="text-white" />
                        </div>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="whitespace-pre-line">
                  {content.founder.conclusion}
                </div>
                
                <div className="pt-12 border-t border-slate-200 mt-12">
                  <p className="font-black text-slate-900 text-2xl mb-2">{content.founder.signature}</p>
                  <p className="text-blue-600 font-black text-4xl uppercase tracking-tighter leading-none">{content.founder.name}</p>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-4 flex items-center gap-2">
                    <TrendingUp size={16} /> {t.founderSection.experience}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServicesPage = () => (
    <div className="py-24 max-w-7xl mx-auto px-6 space-y-24 animate-in fade-in duration-700 bg-white">
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs">{t.nav.services}</h2>
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none">{lang === 'fr' ? 'Nos' : 'Our'} <span className="text-blue-600">{lang === 'fr' ? 'Expertises' : 'Expertise'}</span></h1>
        <p className="text-2xl text-slate-500 font-medium">{t.serviceLabels.desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {content.services.map((service) => (
          <div 
            key={service.id} 
            onClick={() => setSelectedServiceId(service.id)}
            className="group bg-white rounded-[4rem] overflow-hidden shadow-xl border border-slate-50 flex flex-col hover:scale-[1.02] transition-all duration-500 cursor-pointer h-[600px]"
          >
            <div className="relative h-1/2 overflow-hidden bg-slate-100">
              <img src={service.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={service.title} />
              <div className="absolute top-8 left-8 bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                {service.category}
              </div>
            </div>
            <div className="p-12 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-4">{service.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed line-clamp-3 font-medium">{service.summary}</p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                 <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                    <LayoutGrid size={18} /> {service.subServices.length} {lang === 'fr' ? 'Modules' : 'Modules'}
                 </div>
                 <div className="text-blue-600 font-black text-sm uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    {lang === 'fr' ? 'Voir détails' : 'See details'} <ArrowRight size={20} />
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderServiceDetail = (service: ServiceDetail) => (
    <div className="py-24 max-w-7xl mx-auto px-6 animate-in fade-in zoom-in duration-500 bg-white">
      <button 
        onClick={() => setSelectedServiceId(null)}
        className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest mb-12 hover:translate-x-[-4px] transition-transform"
      >
        <ArrowLeft size={20} /> {t.serviceLabels.back}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 items-center border-b border-slate-100 pb-20">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
            {service.category}
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">{service.title}</h1>
          <p className="text-2xl text-slate-600 leading-relaxed font-medium">{service.summary}</p>
          <p className="text-xl text-slate-500 leading-relaxed">{service.fullDescription}</p>
          
          {service.formats && (
            <div className="flex flex-wrap gap-3 pt-4">
              {service.formats.map((f, i) => (
                <span key={i} className="bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">{f}</span>
              ))}
            </div>
          )}
        </div>
        <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[550px] relative bg-slate-50 border-8 border-white flex items-center justify-center">
          <img 
             src={service.image} 
             className="w-full h-full object-cover block" 
             alt={service.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        </div>
      </div>

      <div className="space-y-20 pt-10">
        <div className="grid grid-cols-1 gap-12">
          {service.subServices.map((sub, idx) => (
            <div key={idx} className="bg-white p-12 lg:p-16 rounded-[4rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col gap-10 border-l-8 border-l-blue-600">
              <div className="space-y-4">
                 <div className="flex flex-wrap items-center gap-4">
                   <h3 className="text-3xl font-black text-slate-900">{sub.title}</h3>
                   {sub.duration && (
                     <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest">
                       <Clock size={16} /> {sub.duration}
                     </div>
                   )}
                 </div>
                 <p className="text-xl text-slate-600 leading-relaxed font-medium">{sub.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {sub.points && sub.points.length > 0 && (
                  <div className="space-y-6">
                    <h4 className="font-black text-[12px] uppercase tracking-widest text-blue-600 flex items-center gap-3">
                       <ListChecks size={20} className="shrink-0" /> {lang === 'fr' ? 'Axes clés' : 'Key Modules'}
                    </h4>
                    <ul className="space-y-4">
                      {sub.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                           <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-1 font-bold text-xs">🔹</div>
                           <span className="text-lg text-slate-700 font-bold leading-snug">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-10">
                  {sub.objectives && sub.objectives.length > 0 && (
                    <div className="space-y-6">
                      <h4 className="font-black text-[12px] uppercase tracking-widest text-amber-500 flex items-center gap-3">
                         <Target size={20} className="shrink-0" /> {t.serviceLabels.objectives}
                      </h4>
                      <div className="bg-slate-50 p-8 rounded-3xl space-y-4">
                        {sub.objectives.map((obj, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <Check size={20} className="text-green-500 shrink-0" />
                            <span className="text-lg font-bold text-slate-800">{obj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {sub.deliverable && (
                    <div className="space-y-6">
                      <h4 className="font-black text-[12px] uppercase tracking-widest text-indigo-500 flex items-center gap-3">
                         <Award size={20} className="shrink-0" /> {lang === 'fr' ? 'Livrable / Certification' : 'Deliverable / Certification'}
                      </h4>
                      <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex items-center gap-4">
                         <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600">
                           <Award size={24} />
                         </div>
                         <span className="text-lg font-black text-indigo-900">{sub.deliverable}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-slate-950 p-16 rounded-[4rem] text-center text-white space-y-10 shadow-2xl">
           <MessageSquare size={48} className="mx-auto text-blue-400" />
           <h2 className="text-4xl md:text-5xl font-black max-w-2xl mx-auto">{lang === 'fr' ? "Besoin d'un parcours sur mesure ?" : "Need a custom path?"}</h2>
           <p className="text-xl text-slate-400 max-w-xl mx-auto">{lang === 'fr' ? "Nos experts conçoivent des solutions adaptées à vos défis spécifiques." : "Our experts design solutions tailored to your specific challenges."}</p>
           <button 
              onClick={() => { setSelectedServiceId(null); setActivePage('contact'); }}
              className="bg-blue-600 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/20"
            >
              {t.serviceLabels.enroll}
            </button>
        </div>
      </div>
    </div>
  );

  const renderAboutPage = () => (
    <div className="py-24 max-w-7xl mx-auto px-6 space-y-32 animate-in fade-in duration-700 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
          <div className="inline-block bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
            {lang === 'fr' ? 'À propos de EDUCFORMA' : 'About EDUCFORMA'}
          </div>
          <h2 className="text-7xl md:text-8xl font-black leading-none tracking-tighter">{lang === 'fr' ? 'Notre' : 'Our'} <span className="text-blue-600">{lang === 'fr' ? 'Mission' : 'Mission'}</span></h2>
          <p className="text-2xl text-slate-600 leading-loose font-light">
            {lang === 'fr' 
              ? "L'Académie Internationale EDUCFORMA a pour mission de propulser les individus et les organisations vers l'excellence par une éducation innovante, une orientation stratégique et un accompagnement humain durable."
              : "The EDUCFORMA International Academy's mission is to propel individuals and organizations towards excellence through innovative education, strategic guidance, and sustainable human support."}
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] bg-blue-600 rounded-[4rem] rotate-2 shadow-2xl overflow-hidden">
             <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-80" alt="About" />
          </div>
          <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[3rem] shadow-2xl max-w-xs -rotate-3 border border-white/20">
             <div className="text-5xl font-black text-blue-600 mb-2">100%</div>
             <p className="font-bold text-slate-800 text-lg">{lang === 'fr' ? 'Engagement total pour votre réussite.' : 'Total commitment to your success.'}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { icon: ShieldCheck, title: lang === 'fr' ? "Excellence" : "Excellence", desc: lang === 'fr' ? "La rigueur et la qualité dans chaque module pour des résultats concrets." : "Rigor and quality in every module for concrete results." },
          { icon: Users, title: lang === 'fr' ? "Humain" : "Human", desc: lang === 'fr' ? "Placer l'individu au centre de chaque décision et accompagnement." : "Placing the individual at the center of every decision and support." },
          { icon: Zap, title: lang === 'fr' ? "Innovation" : "Innovation", desc: lang === 'fr' ? "Des outils pédagogiques modernes adaptés aux défis de demain." : "Modern pedagogical tools adapted to tomorrow's challenges." }
        ].map((v, i) => (
          <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl hover:-translate-y-3 transition-transform duration-500">
            <v.icon size={48} className="text-blue-600 mb-8" />
            <h3 className="text-3xl font-black mb-4">{v.title}</h3>
            <p className="text-slate-500 text-xl leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const getContent = () => {
    if (selectedService) return renderServiceDetail(selectedService);
    switch (activePage) {
      case 'home': return renderHomePage();
      case 'founder': return renderFounderPage();
      case 'services': return renderServicesPage();
      case 'about': return renderAboutPage();
      case 'contact': return (
        <div className="py-24 max-w-7xl mx-auto px-6 bg-white min-h-[90vh] flex items-center justify-center">
           <div className="w-full bg-slate-950 rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center border border-slate-900">
             <div className="lg:w-1/2 space-y-10 relative z-10 text-white">
                <div className="inline-block bg-blue-500/10 text-blue-400 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-blue-500/20">
                  {lang === 'fr' ? 'Analyse de besoins' : 'Needs analysis'}
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                  {lang === 'fr' ? 'Exprimez votre' : 'Tell us your'} <br/><span className="text-blue-500">{lang === 'fr' ? 'Besoin' : 'Need'}</span>
                </h1>
                <p className="text-2xl text-slate-400 leading-relaxed max-w-md font-medium">
                  {lang === 'fr' 
                    ? "Parlons de vos objectifs et trouvons ensemble le parcours idéal pour votre transformation." 
                    : "Let's discuss your goals and find the perfect path for your transformation together."}
                </p>
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-4 text-slate-400">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-blue-400"><Phone size={20}/></div>
                      <span className="font-bold">{CONTACT_INFO.phone}</span>
                   </div>
                   <div className="flex items-center gap-4 text-slate-400">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-blue-400"><Mail size={20}/></div>
                      <span className="font-bold">{CONTACT_INFO.email}</span>
                   </div>
                </div>
             </div>
             
             <div className="lg:w-1/2 w-full relative z-10">
               <div className="bg-white rounded-[3rem] p-1 shadow-2xl">
                 <ContactForm lang={lang} />
               </div>
             </div>

             {/* Background accents for "framing" */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
           </div>
        </div>
      );
      default: return renderHomePage();
    }
  };

  const handleNavigate = (page: string, serviceId?: string) => {
    setSelectedServiceId(null);
    if (serviceId) {
      setSelectedServiceId(serviceId);
      setActivePage('services');
    } else {
      setActivePage(page);
    }
    window.scrollTo(0, 0);
  };

  return (
    <Layout activePage={activePage} onNavigate={handleNavigate} lang={lang} setLang={setLang}>
      {getContent()}
    </Layout>
  );
};

export default App;
