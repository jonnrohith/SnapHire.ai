import React from 'react';
import { Smartphone, Zap, Ghost, Monitor, Briefcase, Play, ShieldCheck, Keyboard } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-32 bg-black text-white relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Why SnapHire?</h2>
          <p className="text-zinc-400 text-lg max-w-xl">
             We combined the addiction of TikTok with the utility of LinkedIn, optimized for the desktop "Command Center" workflow recruiters actually use.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
          
          {/* Main Feature: Desktop Command Center */}
          <div className="md:col-span-6 lg:col-span-8 row-span-2 rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black z-0"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Monitor className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Desktop Command Center</h3>
              <p className="text-zinc-400 max-w-md text-lg">
                Recruiters don't hire on phones. Our web app features full-bleed vertical video, zero-latency playback, and instant keyboard actions.
              </p>
            </div>
            
             {/* Abstract Keyboard Visual */}
            <div className="mt-12 flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
               <div className="h-12 w-12 rounded border border-zinc-700 flex items-center justify-center font-mono text-xs bg-zinc-800 shadow-[0_4px_0_0_rgba(39,39,42,1)] active:translate-y-[4px] active:shadow-none transition-all">J</div>
               <div className="h-12 w-12 rounded border border-zinc-700 flex items-center justify-center font-mono text-xs bg-zinc-800 shadow-[0_4px_0_0_rgba(39,39,42,1)] active:translate-y-[4px] active:shadow-none transition-all">K</div>
               <div className="h-12 w-12 rounded border border-zinc-700 flex items-center justify-center font-mono text-xs bg-zinc-800 shadow-[0_4px_0_0_rgba(39,39,42,1)] active:translate-y-[4px] active:shadow-none transition-all">L</div>
               <div className="h-12 w-32 rounded border border-zinc-700 flex items-center justify-center font-mono text-xs bg-zinc-800 shadow-[0_4px_0_0_rgba(39,39,42,1)] active:translate-y-[4px] active:shadow-none transition-all">SPACE</div>
            </div>
          </div>

          {/* Feature: Job-First Flow */}
          <div className="md:col-span-3 lg:col-span-4 rounded-3xl bg-zinc-900 border border-zinc-800 p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-4 right-4 p-2 bg-blue-500/20 rounded-full">
               <Briefcase className="text-blue-500" size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white mt-8">Job-First</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
               Recruiters post a req. Candidates reply with a specific 60s pitch. It's a video cover letter that actually gets watched.
            </p>
          </div>

          {/* Feature: Project-First Flow */}
          <div className="md:col-span-3 lg:col-span-4 rounded-3xl bg-zinc-900 border border-zinc-800 p-8 relative overflow-hidden group hover:border-purple-500/50 transition-colors">
             <div className="absolute top-4 right-4 p-2 bg-purple-500/20 rounded-full">
               <Play className="text-purple-500" size={20} />
             </div>
             <h3 className="text-xl font-bold mb-2 text-white mt-8">Project-First</h3>
             <p className="text-zinc-500 text-sm leading-relaxed">
               Candidates post "Showcase" videos of recent work. Our AI matches their skills to your open roles instantly.
             </p>
          </div>

           {/* Feature: Dual Mode */}
           <div className="md:col-span-3 lg:col-span-4 rounded-3xl bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-center">
             <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">Full-Time</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">Gig / Contract</span>
             </div>
             <h3 className="text-xl font-bold mb-2 text-white">Hybrid Feed</h3>
             <p className="text-zinc-500 text-sm leading-relaxed">
               Filter by "Permanent" or "Contract" instantly. One platform for all your hiring needs.
             </p>
          </div>

          {/* Feature: Ghost Mode */}
          <div className="md:col-span-3 lg:col-span-4 rounded-3xl bg-zinc-900 border border-zinc-800 p-8 relative overflow-hidden group">
             <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-30 transition-opacity">
               <Ghost size={120} />
             </div>
             <h3 className="text-xl font-bold mb-2 text-white">Ghost Mode</h3>
             <p className="text-zinc-500 text-sm leading-relaxed">
               Employed top talent posts anonymously with face blur. Reveal identity only when accepting a DM request.
             </p>
          </div>

           {/* Feature: Transparency */}
           <div className="md:col-span-6 lg:col-span-4 rounded-3xl bg-zinc-900 border border-zinc-800 p-8">
             <div className="flex items-center gap-3 mb-4 text-green-400">
                <ShieldCheck size={24} />
                <span className="font-bold">Verified Recruiters</span>
             </div>
             <p className="text-zinc-500 text-sm leading-relaxed">
               Recruiters must verify via work email API (no GMail). Spammers and scams are blocked at the door.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};