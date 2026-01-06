import React from 'react';
import { useSite } from '../context/SiteContext';
import { Target, Eye, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const { content } = useSite();

  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Redefining Enterprise Intelligence</h1>
          <p className="text-xl text-gray-400">
            We are a team of data scientists, SAP architects, and automation experts dedicated to the next industrial revolution.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="glass-panel p-10 rounded-2xl border-l-4 border-oprix-accent">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-oprix-accent/10 rounded-lg">
                <Target className="w-8 h-8 text-oprix-accent" />
              </div>
              <h2 className="text-2xl font-bold font-display">{content.about.missionTitle}</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {content.about.missionDesc}
            </p>
          </div>
          
          <div className="glass-panel p-10 rounded-2xl border-l-4 border-purple-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Eye className="w-8 h-8 text-purple-500" />
              </div>
              <h2 className="text-2xl font-bold font-display">{content.about.visionTitle}</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              {content.about.visionDesc}
            </p>
          </div>
        </div>

        {/* Culture/Values Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold font-display mb-12 text-center">Our Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-white">Precision First</h3>
                <p className="text-gray-400">In enterprise ERP, close enough isn't good enough. Our models are tuned for 99.9% accuracy.</p>
             </div>
             <div className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-white">Security by Design</h3>
                <p className="text-gray-400">We treat data sovereignty as a fundamental right. Your data never leaves your secure perimeter.</p>
             </div>
             <div className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-white">Radical Efficiency</h3>
                <p className="text-gray-400">We don't just automate; we optimize. We ruthlessly eliminate waste in every digital workflow.</p>
             </div>
          </div>
        </div>

        {/* Team Section Placeholder */}
        <div className="glass-panel rounded-3xl p-12 text-center">
           <Users className="w-12 h-12 text-gray-500 mx-auto mb-6" />
           <h2 className="text-3xl font-bold mb-4">Led by Industry Veterans</h2>
           <p className="text-gray-400 max-w-2xl mx-auto mb-10">Our leadership brings decades of experience from SAP, Oracle, Google, and McKinsey.</p>
           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group">
                   <div className="w-full aspect-square bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
                      <img src={`https://picsum.photos/400/400?random=${i}`} alt="Team Member" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                   </div>
                   <h4 className="font-bold text-lg">Executive Name</h4>
                   <p className="text-sm text-oprix-accent">Title / Role</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
