import React from 'react';
import { Camera, Search, UserCheck, ArrowRight, Layers } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Two Ways to Get Hired</h2>
           <p className="text-zinc-400">Whether you're actively looking or just showing off your best work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Flow 1: Active Application */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative border border-zinc-800 bg-zinc-900/30 p-8 rounded-3xl h-full">
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">Path 1: Job-First</span>
                        <Search className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">The "Video Cover Letter"</h3>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-white shrink-0">1</div>
                            <p className="text-zinc-400 text-sm">Recruiter posts a specific Video Req (e.g. "Sell me this pen").</p>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-white shrink-0">2</div>
                            <p className="text-zinc-400 text-sm">You record a 60s targeted pitch answering their prompt.</p>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-white shrink-0">3</div>
                            <p className="text-zinc-400 text-sm">Recruiter watches on Desktop. Shortcuts let them hire in seconds.</p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Flow 2: Project Showcase */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative border border-zinc-800 bg-zinc-900/30 p-8 rounded-3xl h-full">
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">Path 2: Project-First</span>
                        <Layers className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">The "Passive Showcase"</h3>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-white shrink-0">1</div>
                            <p className="text-zinc-400 text-sm">You just shipped a cool feature? Record a 15s demo of it.</p>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-white shrink-0">2</div>
                            <p className="text-zinc-400 text-sm">Tag it "Gig" or "Full-Time" and set your rate.</p>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-white shrink-0">3</div>
                            <p className="text-zinc-400 text-sm"><strong>AI matching</strong> pushes your video to recruiters looking for that exact skill.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Center Connector */}
        <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-4 px-6 py-3 bg-zinc-900 rounded-full border border-zinc-800">
                <UserCheck size={20} className="text-brand-500" />
                <span className="text-zinc-300 text-sm">Both paths lead to the same Inbox.</span>
            </div>
        </div>

      </div>
    </section>
  );
};