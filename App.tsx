import React, { useState } from 'react';
import { PhoneDemo } from './components/PhoneDemo';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { Check, Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';

// --- SUPABASE SETUP ---
const supabaseUrl = 'https://sqnmvhqjzcxlcgfejqeq.supabase.co';
const supabaseKey = 'sb_publishable_QUuLQ8664c83sWTt2I-Gcg_N4OV7JF1';
const supabase = createClient(supabaseUrl, supabaseKey);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Hero Waitlist State
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Recruiter Waitlist State
  const [recruiterEmail, setRecruiterEmail] = useState('');
  const [isRecruiterSubmitted, setIsRecruiterSubmitted] = useState(false);
  const [isRecruiterLoading, setIsRecruiterLoading] = useState(false);

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      // Send to Supabase
      const { error } = await supabase
        .from('waitlist')
        .insert({ email: email, type: 'seeker' });
      
      if (error) throw error;
      
      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecruiterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recruiterEmail) return;

    setIsRecruiterLoading(true);

    try {
      // Send to Supabase
      const { error } = await supabase
        .from('waitlist')
        .insert({ email: recruiterEmail, type: 'recruiter' });
      
      if (error) throw error;

      setIsRecruiterSubmitted(true);
      setRecruiterEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsRecruiterLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-black overflow-x-hidden relative">
      
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid-white bg-[size:32px_32px] pointer-events-none opacity-[0.15] z-0" />
      
      {/* Top Gradient Fade */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

      {/* Floating Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
        <nav className="glass-card rounded-full px-6 py-3 flex items-center justify-between gap-8 md:gap-12 shadow-2xl shadow-black/50">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-sm" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">SnapHire</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Desktop Feed
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              How it Works
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleNavClick(e, 'pricing')}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Recruiters
            </a>
          </div>

          <div className="flex items-center gap-3">
             <button 
               onClick={scrollToWaitlist}
               className="hidden md:block px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors"
             >
              Join Waitlist
            </button>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center">
           <div className="flex flex-col items-center gap-8 text-2xl">
             <a 
               href="#features" 
               onClick={(e) => handleNavClick(e, 'features')}
               className="text-zinc-300 hover:text-white"
             >
               Features
             </a>
             <a 
               href="#how-it-works" 
               onClick={(e) => handleNavClick(e, 'how-it-works')}
               className="text-zinc-300 hover:text-white"
             >
               How it Works
             </a>
             <a 
               href="#pricing" 
               onClick={(e) => handleNavClick(e, 'pricing')}
               className="text-zinc-300 hover:text-white"
             >
               Recruiters
             </a>
             <button 
               onClick={scrollToWaitlist}
               className="px-8 py-3 rounded-full bg-white text-black font-bold"
             >
               Join Waitlist
             </button>
           </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-6">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl z-20">
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.9] mb-8"
              >
                Hire at the <br/>
                <span className="text-zinc-600">Speed of Sight.</span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-10 max-w-xl mx-auto lg:mx-0"
              >
                <p className="text-lg text-zinc-400 font-light leading-relaxed mb-4">
                  The video-first career feed.
                  <span className="text-white font-medium"> Talent records on mobile or desktop. </span> 
                  You hire on the command center.
                </p>
                <div className="flex items-start gap-3 p-4 bg-zinc-900/30 rounded-xl border border-zinc-800">
                   <Zap className="text-brand-500 flex-shrink-0 mt-1" size={18} />
                   <p className="text-sm text-zinc-300 text-left">
                     AI automatically matches your project or demo with job descriptions and recruiters looking for exactly your experience.
                   </p>
                </div>
              </motion.div>

              <motion.div 
                id="waitlist-section" // TARGET FOR SCROLLING
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16"
              >
                 <form onSubmit={handleWaitlistSubmit} className="flex w-full max-w-md gap-2 p-1 bg-zinc-900/50 rounded-full border border-zinc-800 backdrop-blur-sm">
                    {!isSubmitted ? (
                      <>
                        <input 
                          type="email" 
                          placeholder="work@company.com" 
                          className="flex-1 bg-transparent border-none text-white px-4 py-3 text-sm focus:outline-none placeholder:text-zinc-600"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isLoading}
                          required
                        />
                        <button 
                          type="submit" 
                          disabled={isLoading}
                          className="bg-white hover:bg-zinc-200 text-black font-bold px-6 py-3 rounded-full transition-all flex items-center gap-2 text-sm whitespace-nowrap disabled:opacity-50"
                        >
                          {isLoading ? 'Joining...' : 'Get Early Access'}
                        </button>
                      </>
                    ) : (
                      <div className="w-full flex items-center justify-center gap-2 py-3 text-brand-400 font-medium">
                        <Check size={18} /> You're on the list!
                      </div>
                    )}
                 </form>
              </motion.div>

              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.5 }}
                 className="flex items-center justify-center lg:justify-start gap-8 border-t border-zinc-900 pt-8"
              >
                 <div>
                    <div className="text-2xl font-bold text-white">Keyboard</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Navigation</div>
                 </div>
                 <div>
                    <div className="text-2xl font-bold text-white">Real-time</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Matches</div>
                 </div>
                 <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Video</div>
                 </div>
              </motion.div>
            </div>

            {/* Right Phone/Desktop Mockup */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full flex justify-center lg:justify-end relative"
            >
              {/* Glow behind mockups */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-purple-500/10 blur-[80px] rounded-full opacity-50" />
              <PhoneDemo />
            </motion.div>
          </div>
        </div>
      </header>

      <div id="features">
        <Features />
      </div>

      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* Recruiter Section */}
      <section id="pricing" className="py-32 border-t border-zinc-900 bg-black relative">
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-20 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Built for Recruiters.</h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Your desk is your cockpit. We built SnapHire to be fast, keyboard-driven, and data-rich.
                <span className="text-white block mt-2">Hire without touching your mouse.</span>
              </p>
            </div>

            {/* Coming Soon State */}
            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-900/30 p-12 md:p-20 text-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-white bg-[size:32px_32px] pointer-events-none opacity-[0.05]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-400 text-xs font-bold uppercase tracking-wider mb-6">
                      <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                      Launching Soon
                   </div>
                   <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Recruiter Access Opening Q1 2026</h3>
                   <p className="text-zinc-400 max-w-lg mx-auto mb-10 text-lg">
                      We are currently onboarding a select group of beta partners. Join the waitlist to secure your spot and get 3 months of "Headhunter" status for free.
                   </p>

                   {/* Recruiter Waitlist Form */}
                   <form onSubmit={handleRecruiterSubmit} className="flex flex-col sm:flex-row w-full max-w-md gap-3">
                      {!isRecruiterSubmitted ? (
                        <>
                          <input 
                            type="email" 
                            placeholder="work@company.com" 
                            className="flex-1 bg-black/50 border border-zinc-700 text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-white placeholder:text-zinc-600 transition-colors"
                            value={recruiterEmail}
                            onChange={(e) => setRecruiterEmail(e.target.value)}
                            disabled={isRecruiterLoading}
                            required
                          />
                          <button 
                            type="submit" 
                            disabled={isRecruiterLoading}
                            className="bg-white hover:bg-zinc-200 text-black font-bold px-8 py-3.5 rounded-xl transition-all whitespace-nowrap disabled:opacity-50"
                          >
                            {isRecruiterLoading ? 'Joining...' : 'Join Waitlist'}
                          </button>
                        </>
                      ) : (
                        <div className="w-full bg-brand-900/20 border border-brand-500/20 rounded-xl py-3.5 text-brand-400 font-medium flex items-center justify-center gap-2">
                          <Check size={20} /> You've been added to the priority list.
                        </div>
                      )}
                   </form>
                   <p className="text-zinc-600 text-xs mt-4">Limited spots available for the beta cohort.</p>
                </div>
            </div>
         </div>
      </section>

      {/* Target Audiences Ticker */}
      <section className="py-12 border-y border-zinc-900 bg-black overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="flex w-max animate-marquee">
           {[...Array(2)].map((_, i) => (
             <div key={i} className="flex gap-12 pr-12">
                {[
                  'React Developers', 'UX Designers', 'SDR / Sales', 'Video Editors', 
                  'Marketing Leads', 'Product Managers', 'No-Code Builders',
                  'Data Scientists', 'DevOps Engineers', 'Mobile Developers', 
                  'Copywriters', 'Creative Directors', 'Cybersecurity Analysts', 
                  'Blockchain Developers', 'Growth Hackers', 'Customer Success'
                ].map((role) => (
                  <div key={role} className="text-2xl font-bold text-zinc-800 uppercase tracking-tighter hover:text-white transition-colors cursor-default whitespace-nowrap">
                    {role}
                  </div>
                ))}
             </div>
           ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-black">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black"></div>
         <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tighter">
              The clock is ticking.<br/>So is your career.
            </h2>
            <button 
              onClick={scrollToWaitlist}
              className="bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Join Waitlist
            </button>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;