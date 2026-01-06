import React from 'react';
import { ArrowRight, CheckCircle, Database, Layers, TrendingUp } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { content } = useSite();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Abstract grid background */}
           <div className="w-full h-full" style={{ 
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-oprix-accent/10 border border-oprix-accent/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-oprix-accent animate-pulse"></span>
              <span className="text-oprix-accent text-xs font-semibold uppercase tracking-wider">Oprix AI v2.0 Live</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
              {content.home.heroTitle.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'gradient-text' : 'text-white'}>{word} </span>
              ))}
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              {content.home.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-oprix-accent hover:bg-oprix-accentHover text-white font-semibold rounded-lg transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center">
                {content.home.heroCta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-lg transition-all flex items-center justify-center backdrop-blur-sm">
                View Capabilities
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-1/3 h-2/3 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30 animate-pulse">
            <path fill="#14b8a6" d="M42.7,-73.2C55.9,-67.1,67.4,-57.6,76.5,-46.3C85.6,-35,92.3,-21.9,91.8,-8.9C91.3,4.2,83.6,17.2,74.5,28.6C65.4,40,54.9,49.8,43.5,58.3C32.1,66.8,19.8,74.1,6.3,76.2C-7.2,78.3,-21.9,75.2,-35.1,68.2C-48.3,61.2,-60,50.3,-68.9,37.6C-77.8,24.9,-83.9,10.4,-82.9,-3.6C-81.9,-17.6,-73.8,-31.1,-63.4,-42.2C-53,-53.3,-40.3,-62,-27.3,-68.3C-14.3,-74.6,-1,-78.5,12.7,-78.4L26.4,-78.3Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="border-y border-white/5 bg-black/20 backdrop-blur-sm py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Processes Automated', value: '1M+' },
                { label: 'Efficiency Gain', value: '45%' },
                { label: 'Enterprise Clients', value: '200+' },
                { label: 'ROI in Year 1', value: '3.5x' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
           </div>
         </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{content.home.valuePropTitle}</h2>
            <p className="text-lg text-gray-400">{content.home.valuePropDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-oprix-accent/50 transition-all duration-300 group">
               <div className="w-12 h-12 bg-oprix-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-oprix-accent/20 transition-colors">
                 <Layers className="w-6 h-6 text-oprix-accent" />
               </div>
               <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
               <p className="text-gray-400 leading-relaxed">Deploys directly into SAP S/4HANA without disrupting core business logic or requiring extensive downtime.</p>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-oprix-accent/50 transition-all duration-300 group">
               <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                 <TrendingUp className="w-6 h-6 text-purple-400" />
               </div>
               <h3 className="text-xl font-bold mb-3">Predictive Forecasting</h3>
               <p className="text-gray-400 leading-relaxed">Uses historical ERP data to predict inventory shortages, cash flow gaps, and maintenance needs.</p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-oprix-accent/50 transition-all duration-300 group">
               <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                 <Database className="w-6 h-6 text-emerald-400" />
               </div>
               <h3 className="text-xl font-bold mb-3">Data Hygiene</h3>
               <p className="text-gray-400 leading-relaxed">Automated cleansing of master data ensures your decision-making is based on the single source of truth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Designed for the Modern Enterprise</h2>
                 <div className="space-y-6">
                    {[
                      "SOC2 Type II Compliant Security",
                      "Real-time SAP RFC Connectivity",
                      "Customizable AI Models per Department",
                      "Full Audit Trail & Governance"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-oprix-accent mr-4 shrink-0" />
                        <span className="text-lg text-gray-300">{feature}</span>
                      </div>
                    ))}
                 </div>
                 <div className="mt-10">
                   <Link to="/resources" className="text-oprix-accent font-semibold hover:text-white transition-colors flex items-center">
                     Read Technical Documentation <ArrowRight className="ml-2 w-4 h-4" />
                   </Link>
                 </div>
              </div>
              <div className="relative">
                 <div className="absolute inset-0 bg-oprix-accent/20 blur-[80px] rounded-full"></div>
                 <div className="relative glass-panel border border-white/10 rounded-xl p-6 shadow-2xl">
                    {/* Fake UI for Dashboard */}
                    <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-gray-500 font-mono">system_monitor.exe</div>
                    </div>
                    <div className="space-y-4 font-mono text-sm text-emerald-400">
                       <div className="flex justify-between"><span>> connecting to sap_prod_01...</span> <span>[OK]</span></div>
                       <div className="flex justify-between"><span>> analyzing workflow_cycles...</span> <span>[DONE]</span></div>
                       <div className="flex justify-between"><span>> detecting inefficiencies...</span> <span className="text-yellow-400">[24 FOUND]</span></div>
                       <div className="flex justify-between"><span>> optimizing logic_stream...</span> <span className="animate-pulse">...</span></div>
                       <div className="h-32 mt-4 bg-black/40 rounded border border-white/5 p-2 text-xs text-gray-500">
                         {/* Simple bar chart visualization */}
                         <div className="flex items-end space-x-2 h-full justify-around pt-4">
                            <div className="w-8 bg-gray-700 h-[40%] rounded-t"></div>
                            <div className="w-8 bg-gray-700 h-[60%] rounded-t"></div>
                            <div className="w-8 bg-gray-700 h-[30%] rounded-t"></div>
                            <div className="w-8 bg-oprix-accent h-[85%] rounded-t shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
                            <div className="w-8 bg-gray-700 h-[50%] rounded-t"></div>
                         </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to Optimize?</h2>
           <p className="text-xl text-gray-400 mb-10">Join the forward-thinking enterprises using Oprix AI to define the future of work.</p>
           <Link to="/contact" className="inline-block px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors">
             Schedule a Consultation
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;