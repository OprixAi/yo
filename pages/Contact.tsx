import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { content } = useSite();
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl font-display font-bold mb-8">Start Your Transformation</h1>
            <p className="text-xl text-gray-400 mb-12">
              Ready to automate your enterprise? Reach out to our solution architects for a tailored consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                 <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-oprix-accent" />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                    <p className="text-gray-400 text-lg">{content.contact.email}</p>
                 </div>
              </div>
              
              <div className="flex items-start space-x-6">
                 <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-oprix-accent" />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-white mb-1">Headquarters</h3>
                    <p className="text-gray-400 text-lg">{content.contact.address}</p>
                 </div>
              </div>

              <div className="flex items-start space-x-6">
                 <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-oprix-accent" />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-white mb-1">Call Support</h3>
                    <p className="text-gray-400 text-lg">{content.contact.phone}</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent</h3>
                <p className="text-gray-400">Thank you for contacting Oprix AI. A representative will be in touch within 24 hours.</p>
                <button onClick={() => setIsSent(false)} className="mt-8 text-oprix-accent hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-oprix-accent focus:outline-none transition-colors"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-400">Company</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-oprix-accent focus:outline-none transition-colors"
                      value={formState.company}
                      onChange={e => setFormState({...formState, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Work Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-oprix-accent focus:outline-none transition-colors"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400">Message</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-oprix-accent focus:outline-none transition-colors"
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-oprix-accent hover:bg-oprix-accentHover text-white font-bold py-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
