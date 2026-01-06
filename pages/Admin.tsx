import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Save, RefreshCw, Layout, Type, Image as ImageIcon } from 'lucide-react';

const Admin: React.FC = () => {
  const { content, updateContent, resetContent } = useSite();
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'services'>('home');

  // Helper to handle nested updates safely
  const handleChange = (section: any, key: string, value: string) => {
    updateContent(section, { [key]: value });
  };

  return (
    <div className="pt-20 pb-24 min-h-screen bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-display font-bold">Admin Dashboard</h1>
            <p className="text-gray-400">Manage website content and settings.</p>
          </div>
          <button 
            onClick={resetContent}
            className="flex items-center px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg hover:bg-red-500/20 transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset Defaults
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-3 space-y-2">
             <button 
               onClick={() => setActiveTab('home')}
               className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === 'home' ? 'bg-oprix-accent text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
             >
               <Layout className="w-4 h-4 mr-3" /> Home Page
             </button>
             <button 
               onClick={() => setActiveTab('about')}
               className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === 'about' ? 'bg-oprix-accent text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
             >
               <Type className="w-4 h-4 mr-3" /> About Page
             </button>
             <button 
               onClick={() => setActiveTab('services')}
               className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${activeTab === 'services' ? 'bg-oprix-accent text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
             >
               <ImageIcon className="w-4 h-4 mr-3" /> Services
             </button>
          </div>

          {/* Editor Area */}
          <div className="col-span-12 md:col-span-9 bg-gray-900 rounded-xl border border-white/5 p-8">
             {activeTab === 'home' && (
               <div className="space-y-6">
                 <h2 className="text-xl font-bold mb-6 pb-2 border-b border-white/5">Home Section Editing</h2>
                 
                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-gray-400">Hero Headline</label>
                   <input 
                     type="text" 
                     className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-oprix-accent focus:outline-none"
                     value={content.home.heroTitle}
                     onChange={(e) => handleChange('home', 'heroTitle', e.target.value)}
                   />
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-gray-400">Hero Subtitle</label>
                   <textarea 
                     rows={3}
                     className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-oprix-accent focus:outline-none"
                     value={content.home.heroSubtitle}
                     onChange={(e) => handleChange('home', 'heroSubtitle', e.target.value)}
                   />
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-gray-400">Value Prop Title</label>
                   <input 
                     type="text" 
                     className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-oprix-accent focus:outline-none"
                     value={content.home.valuePropTitle}
                     onChange={(e) => handleChange('home', 'valuePropTitle', e.target.value)}
                   />
                 </div>
                 
                 <div className="p-4 bg-green-500/10 border border-green-500/20 rounded flex items-center text-green-400 text-sm">
                   <Save className="w-4 h-4 mr-2" />
                   Changes are saved automatically to local storage.
                 </div>
               </div>
             )}

             {activeTab === 'about' && (
               <div className="space-y-6">
                 <h2 className="text-xl font-bold mb-6 pb-2 border-b border-white/5">About Section Editing</h2>
                 
                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-gray-400">Mission Statement</label>
                   <textarea 
                     rows={4}
                     className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-oprix-accent focus:outline-none"
                     value={content.about.missionDesc}
                     onChange={(e) => handleChange('about', 'missionDesc', e.target.value)}
                   />
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-semibold text-gray-400">Vision Statement</label>
                   <textarea 
                     rows={4}
                     className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-oprix-accent focus:outline-none"
                     value={content.about.visionDesc}
                     onChange={(e) => handleChange('about', 'visionDesc', e.target.value)}
                   />
                 </div>
               </div>
             )}

             {activeTab === 'services' && (
               <div className="space-y-6">
                 <h2 className="text-xl font-bold mb-6 pb-2 border-b border-white/5">Services List (Read Only in Demo)</h2>
                 <p className="text-gray-500 italic">Advanced array editing would be implemented here in a full production CMS. Currently showcasing text field binding only.</p>
                 
                 <div className="space-y-4 opacity-50 pointer-events-none">
                    {content.services.items.map((item, idx) => (
                      <div key={idx} className="p-4 border border-white/10 rounded bg-black">
                        <div className="font-bold">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.desc}</div>
                      </div>
                    ))}
                 </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
