import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Star, User, Search, Command, Home, Inbox, Zap, MoreHorizontal, Ghost, DollarSign, Clock } from 'lucide-react';
import { DemoProfile } from '../types';

const PROFILES: DemoProfile[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Senior Frontend (React/Three.js)",
    salary: "$140k - $160k",
    type: "Full-time",
    isAnonymous: false,
    videoColor: "bg-gradient-to-br from-zinc-700 to-zinc-900"
  },
  {
    id: 2,
    name: "Hidden Talent",
    role: "Product Designer @ Stealth",
    salary: "$100/hr",
    type: "Gig/Project",
    isAnonymous: true,
    videoColor: "bg-gradient-to-br from-indigo-900 to-slate-900"
  },
  {
    id: 3,
    name: "Jordan Lee",
    role: "SDR / Account Exec",
    salary: "$80k Base + Comm",
    type: "Full-time",
    isAnonymous: false,
    videoColor: "bg-gradient-to-br from-stone-800 to-neutral-900"
  }
];

export const PhoneDemo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROFILES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const profile = PROFILES[currentIndex];

  return (
    <div className="relative w-full max-w-[800px] h-[400px] md:h-[500px] flex items-center justify-center">
      
      {/* LAPTOP MOCKUP (Background/Main) */}
      <div className="relative w-[90%] md:w-[650px] h-[350px] md:h-[420px] bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden z-10 transition-transform duration-500 hover:scale-[1.01]">
         {/* Laptop Header */}
         <div className="h-9 border-b border-zinc-800 bg-zinc-900/90 flex items-center px-4 gap-4">
            <div className="flex gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="flex-1 max-w-sm mx-auto h-6 bg-black rounded border border-zinc-800 flex items-center px-3 text-[10px] text-zinc-500 gap-2">
               <Search size={10} />
               <span>Search by skill, budget, or availability...</span>
               <div className="ml-auto flex items-center gap-1 opacity-50">
                 <Command size={8} /> <span className="text-[8px]">K</span>
               </div>
            </div>
         </div>

         {/* Laptop Body */}
         <div className="flex-1 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-14 bg-zinc-900 border-r border-zinc-800 flex flex-col items-center py-4 gap-6 hidden sm:flex">
               <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-bold text-xs">SH</div>
               <div className="flex flex-col gap-5 mt-2">
                  <div className="text-white relative p-1.5 bg-zinc-800 rounded-md">
                    <Home size={16} />
                  </div>
                  <div className="text-zinc-600 hover:text-white transition-colors"><Inbox size={16} /></div>
                  <div className="text-zinc-600 hover:text-white transition-colors"><Star size={16} /></div>
                  <div className="text-zinc-600 hover:text-white transition-colors"><User size={16} /></div>
               </div>
            </div>

            {/* Main Feed Area */}
            <div className="flex-1 bg-black relative p-4 flex gap-4">
                {/* Active Video Card */}
                <div className="flex-1 h-full rounded-lg overflow-hidden relative border border-zinc-800 group">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={profile.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 ${profile.videoColor}`}
                      >
                         <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <div className="w-32 h-32 rounded-full border border-white/20 animate-pulse"></div>
                         </div>
                         
                         {/* AI Match Badge */}
                         <div className="absolute top-4 left-4 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                            <Zap size={10} fill="currentColor" /> 98% AI Match
                         </div>

                         {/* Desktop Video Details */}
                         <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                             <div className="flex justify-between items-end">
                                <div>
                                   <div className="flex gap-2 mb-2">
                                      <span className="px-1.5 py-0.5 rounded text-[9px] bg-zinc-800 text-white border border-zinc-700">
                                        {profile.salary}
                                      </span>
                                      <span className="px-1.5 py-0.5 rounded text-[9px] bg-white/20 text-white">
                                        {profile.type}
                                      </span>
                                   </div>
                                   <h2 className={`text-lg font-bold text-white ${profile.isAnonymous ? 'blur-[4px]' : ''}`}>{profile.name}</h2>
                                   <p className="text-xs text-zinc-300">{profile.role}</p>
                                </div>
                                <div className="flex gap-2">
                                   <button className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/10">
                                      <Heart size={14} />
                                   </button>
                                   <button className="h-8 px-3 rounded-full bg-white text-black font-bold flex items-center gap-1.5 hover:bg-zinc-200 text-[10px]">
                                      <MessageCircle size={12} /> Contact
                                   </button>
                                </div>
                             </div>
                         </div>
                      </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Panel: Candidates List */}
                <div className="w-48 hidden md:flex flex-col gap-3">
                   <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
                      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Top Matches</div>
                   </div>
                   {[1, 2, 3].map((i) => (
                      <div key={i} className="h-16 bg-zinc-900/50 rounded border border-zinc-800 p-2 flex gap-2 hover:bg-zinc-900 transition-colors cursor-pointer">
                         <div className="w-12 h-full bg-zinc-800 rounded flex-shrink-0"></div>
                         <div className="flex flex-col justify-center gap-1.5">
                            <div className="w-20 h-1.5 bg-zinc-700 rounded-full"></div>
                            <div className="w-10 h-1.5 bg-zinc-800 rounded-full"></div>
                         </div>
                      </div>
                   ))}
                </div>
            </div>
         </div>
      </div>

      {/* MOBILE PHONE (Foreground/Overlapping) */}
      <div className="absolute right-[-10px] bottom-[-20px] md:right-[-30px] md:bottom-[-40px] z-20 transition-transform duration-500 hover:-translate-y-2">
         <div className="relative w-[140px] h-[280px] md:w-[180px] md:h-[360px] bg-black rounded-[24px] border-[4px] border-zinc-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-14 h-4 bg-black rounded-b-lg z-20 flex items-center justify-center">
                <div className="w-8 h-2 bg-zinc-900/50 rounded-full"></div>
            </div>

            {/* Screen Content */}
            <div className="relative w-full h-full text-white bg-zinc-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`w-full h-full flex flex-col justify-end p-3 ${profile.videoColor} relative`}
                >
                  {/* Anonymous Indicator */}
                  {profile.isAnonymous && (
                    <div className="absolute top-8 left-2 flex items-center gap-1 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10">
                      <Ghost size={8} className="text-zinc-400" />
                      <span className="text-[8px] text-zinc-300 font-medium">Ghost</span>
                    </div>
                  )}

                  {/* Main Content Info */}
                  <div className="space-y-2 mb-8 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full border border-white/20 flex items-center justify-center overflow-hidden ${profile.isAnonymous ? 'bg-zinc-800 blur-[1px]' : 'bg-zinc-200'}`}>
                        {!profile.isAnonymous && <img src={`https://picsum.photos/seed/${profile.id}/100`} className="w-full h-full object-cover" alt="avatar" />}
                      </div>
                      <div>
                        <h3 className={`font-bold text-xs leading-tight text-white ${profile.isAnonymous ? 'blur-[3px] opacity-70' : ''}`}>
                          {profile.name}
                        </h3>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      <div className="flex items-center gap-0.5 bg-white/10 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/5">
                        <DollarSign size={8} className="text-emerald-400" />
                        <span className="text-[8px] font-medium">{profile.salary}</span>
                      </div>
                      <div className="flex items-center gap-0.5 bg-white/10 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/5">
                        <Zap size={8} className="text-yellow-400" />
                        <span className="text-[8px]">Available</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Actions */}
                  <div className="absolute bottom-10 right-2 flex flex-col items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-zinc-800/80 backdrop-blur-md flex items-center justify-center border border-white/10">
                        <Heart size={10} />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-zinc-800/80 backdrop-blur-md flex items-center justify-center border border-white/10">
                        <MessageCircle size={10} />
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none"></div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Home Indicator */}
            <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-zinc-600 rounded-full z-20"></div>
         </div>
      </div>
      
    </div>
  );
};