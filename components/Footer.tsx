import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="max-w-xs">
            <h2 className="text-xl font-bold text-white mb-4">SnapHire.</h2>
            <p className="text-zinc-500 text-sm">
              The first mobile-first hiring platform built for the video generation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div>
              <h3 className="text-white font-bold mb-4 text-sm">Product</h3>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">For Seekers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Recruiters</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
             <div>
              <h3 className="text-white font-bold mb-4 text-sm">Company</h3>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
             <div>
              <h3 className="text-white font-bold mb-4 text-sm">Legal</h3>
              <ul className="space-y-3 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-zinc-600 text-xs">© 2024 SnapHire Inc.</p>
           <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              <span className="text-zinc-600 text-xs">All Systems Nominal</span>
           </div>
        </div>
      </div>
    </footer>
  );
};