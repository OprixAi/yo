import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Cpu, Database, Zap, BarChart, Globe, Shield, ArrowRight, X, Check } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Cpu, Database, Zap, BarChart, Globe, Shield
};

const Services: React.FC = () => {
  const { content } = useSite();
  // State to track which service is currently open in the modal
  const [selectedService, setSelectedService] = useState<any | null>(null);

  return (
    <div className="pt-20 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Intelligent <span className="text-oprix-accent">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Deploy modular AI agents designed to handle specific high-value tasks within your SAP ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {content.services.items.map((item) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div 
                key={item.id} 
                onClick={() => setSelectedService(item)}
                className="group relative glass-panel p-10 rounded-2xl border border-white/5 hover:border-oprix-accent transition-all duration-300 cursor-pointer"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight className="w-6 h-6 text-oprix-accent -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
                <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-oprix-accent/50 transition-colors">
                  <Icon className="w-7 h-7 text-white group-hover:text-oprix-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">{item.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center text-oprix-accent font-semibold text-sm mt-4">
                  Explore Service <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Integration Diagram Placeholder */}
        <div className="bg-gray-900/50 border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-display font-bold mb-8">How It Fits Your Stack</h2>
            <div className="relative h-64 md:h-96 flex items-center justify-center">
               {/* Abstract diagram */}
               <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
               <div className="flex justify-between w-full max-w-4xl relative z-10 px-4 md:px-0">
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center w-40">
                    <Database className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <span className="font-bold block">SAP S/4HANA</span>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center">
                    <div className="animate-pulse text-oprix-accent font-mono text-xs mb-2">SYNCING DATA...</div>
                    <div className="w-16 h-16 rounded-full bg-oprix-accent flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                       <Cpu className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center w-40">
                    <BarChart className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <span className="font-bold block">PowerBI / Tableau</span>
                  </div>
               </div>
            </div>
            <p className="text-gray-400 mt-8">Oprix acts as the intelligent middleware layer, extracting data, processing it, and pushing insights back to your dashboard of choice.</p>
        </div>
      </div>

      {/* Detail Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setSelectedService(null)}
          ></div>
          <div className="relative glass-panel bg-[#13131f] border border-white/10 rounded-2xl max-w-2xl w-full p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
             <button 
               onClick={() => setSelectedService(null)}
               className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors"
             >
               <X className="w-6 h-6" />
             </button>

             <div className="flex items-center space-x-4 mb-6">
               <div className="w-12 h-12 bg-oprix-accent/20 rounded-lg flex items-center justify-center border border-oprix-accent/30">
                  {iconMap[selectedService.icon] && React.createElement(iconMap[selectedService.icon], { className: "w-6 h-6 text-oprix-accent" })}
               </div>
               <h2 className="text-3xl font-display font-bold">{selectedService.title}</h2>
             </div>

             <div className="space-y-6">
                <div>
                   <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Description</h3>
                   <p className="text-gray-300 text-lg leading-relaxed">{selectedService.details}</p>
                </div>

                <div>
                   <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Key Benefits</h3>
                   <div className="grid gap-3">
                      {selectedService.benefits && selectedService.benefits.map((benefit: string, idx: number) => (
                        <div key={idx} className="flex items-start">
                           <Check className="w-5 h-5 text-oprix-accent mr-3 shrink-0" />
                           <span className="text-gray-300">{benefit}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex justify-end">
                   <button 
                     onClick={() => setSelectedService(null)}
                     className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors mr-3"
                   >
                     Close
                   </button>
                   <button className="px-6 py-2 bg-oprix-accent hover:bg-oprix-accentHover text-white font-semibold rounded-lg shadow-lg shadow-teal-500/20">
                     Request Demo
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;