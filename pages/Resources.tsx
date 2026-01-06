import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'Q1', manual: 4000, ai: 2400 },
  { name: 'Q2', manual: 3000, ai: 1398 },
  { name: 'Q3', manual: 2000, ai: 9800 },
  { name: 'Q4', manual: 2780, ai: 3908 },
  { name: 'Q5', manual: 1890, ai: 4800 },
];

const Resources: React.FC = () => {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Insights & Intelligence</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Latest research, whitepapers, and case studies on enterprise automation.
          </p>
        </div>

        {/* Featured Case Study with Chart */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 mb-20 border border-white/10">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-oprix-accent font-bold tracking-wider text-sm mb-2 block">FEATURED REPORT</span>
                <h2 className="text-3xl font-bold mb-4">The State of ERP Automation 2025</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  We analyzed over 500 SAP implementations to understand where AI delivers the highest ROI. The results point to supply chain predictive modeling as the key differentiator.
                </p>
                <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors">
                   <Download className="w-5 h-5" />
                   <span>Download PDF (4.2MB)</span>
                </button>
              </div>
              <div className="bg-black/40 rounded-xl p-6 h-80 border border-white/5">
                 <h4 className="text-sm font-gray-500 mb-4 text-center">Productivity Index (AI vs Manual)</h4>
                 <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Line type="monotone" dataKey="ai" stroke="#14b8a6" strokeWidth={3} dot={{r: 4}} />
                      <Line type="monotone" dataKey="manual" stroke="#64748b" strokeWidth={2} strokeDasharray="5 5" />
                    </LineChart>
                 </ResponsiveContainer>
              </div>
           </div>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
                   <div className="absolute inset-0 bg-oprix-accent/0 group-hover:bg-oprix-accent/10 transition-colors z-10"></div>
                   <img src={`https://picsum.photos/600/400?random=${i + 10}`} alt="Article Cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-oprix-accent mb-2">
                   <span>WHITE PAPER</span>
                   <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                   <span>5 MIN READ</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-oprix-accent transition-colors">Optimizing Accounts Payable with Computer Vision</h3>
                <p className="text-sm text-gray-500 line-clamp-2">Learn how deep learning algorithms can reduce invoice processing errors by 98% within existing workflows.</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;