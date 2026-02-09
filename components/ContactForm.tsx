
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Lead } from '../types';
import { Language } from '../translations';

const ContactForm: React.FC<{ lang: Language }> = ({ lang }) => {
  const [formData, setFormData] = useState<Partial<Lead>>({
    profile: 'Autre'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const labels = {
    fr: {
      title: "Exprimer mon besoin",
      lastName: "Nom",
      firstName: "Prénom",
      email: "Email",
      profile: "Profil",
      subject: "Sujet",
      message: "Message / Besoin",
      consent: "En soumettant ce formulaire, vous acceptez que vos données soient traitées par EDUCFORMA.",
      submit: "Envoyer ma demande",
      loading: "Envoi en cours...",
      successTitle: "Demande envoyée !",
      successMsg: (name: string) => `Merci ${name}. Nous avons bien reçu votre demande et reviendrons vers vous sous 24 à 48 heures.`,
      reset: "Envoyer un autre message"
    },
    en: {
      title: "Tell us your needs",
      lastName: "Last Name",
      firstName: "First Name",
      email: "Email",
      profile: "Profile",
      subject: "Subject",
      message: "Message / Needs",
      consent: "By submitting this form, you agree to your data being processed by EDUCFORMA.",
      submit: "Send my request",
      loading: "Sending...",
      successTitle: "Request sent!",
      successMsg: (name: string) => `Thank you ${name}. We have received your request and will get back to you within 24 to 48 hours.`,
      reset: "Send another message"
    }
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center space-y-4 border border-green-50">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-black">{labels.successTitle}</h3>
        <p className="text-black">{labels.successMsg(formData.firstName || "")}</p>
        <button onClick={() => setIsSubmitted(false)} className="text-blue-600 font-semibold hover:underline">
          {labels.reset}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-50">
      <h3 className="text-2xl font-bold text-black mb-6">{labels.title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">{labels.lastName}</label>
            <input required type="text" className="w-full rounded-lg border-slate-200 px-4 py-2 bg-white text-black" onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">{labels.firstName}</label>
            <input required type="text" className="w-full rounded-lg border-slate-200 px-4 py-2 bg-white text-black" onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">{labels.email}</label>
          <input required type="email" className="w-full rounded-lg border-slate-200 px-4 py-2 bg-white text-black" onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">{labels.profile}</label>
          <select className="w-full rounded-lg border-slate-200 px-4 py-2 bg-white text-black" onChange={(e) => setFormData({...formData, profile: e.target.value as any})}>
             {lang === 'fr' ? (
                <>
                  <option value="Parent">Parent</option>
                  <option value="Jeune">Jeune (12-25 ans)</option>
                  <option value="Immigrant">Nouvel arrivant</option>
                  <option value="Entreprise">Entreprise / Manager</option>
                  <option value="Institution">Institution scolaire</option>
                  <option value="Autre">Autre</option>
                </>
             ) : (
                <>
                  <option value="Parent">Parent</option>
                  <option value="Jeune">Youth (12-25 years)</option>
                  <option value="Immigrant">Newcomer</option>
                  <option value="Entreprise">Company / Manager</option>
                  <option value="Institution">School / Institution</option>
                  <option value="Autre">Other</option>
                </>
             )}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">{labels.subject}</label>
          <input required type="text" className="w-full rounded-lg border-slate-200 px-4 py-2 bg-white text-black" onChange={(e) => setFormData({...formData, subject: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-1">{labels.message}</label>
          <textarea required rows={4} className="w-full rounded-lg border-slate-200 px-4 py-2 bg-white text-black" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
        </div>
        <p className="text-xs text-black">{labels.consent}</p>
        <button disabled={loading} type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:bg-blue-300">
          {loading ? labels.loading : <><Send size={20} /> {labels.submit}</>}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
