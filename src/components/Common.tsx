/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Nếu đang ở trang chủ, chỉ cần cuộn xuống
    if (location.pathname === "/") {
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Nếu đang ở trang khác, điều hướng về trang chủ kèm theo hash #features
      // Bạn có thể xử lý việc cuộn sau khi load trang ở component Home
      navigate("/#features");
      
      // Mẹo nhỏ: Để cuộn ngay lập tức sau khi chuyển trang, thêm một timeout nhỏ
      setTimeout(() => {
        const featuresSection = document.getElementById("features");
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center font-black text-black group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            P
          </div>
          <span className="font-display font-bold text-lg tracking-tighter uppercase whitespace-nowrap">
            PIDU <span className="text-gold">DIGITAL</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
          <button onClick={scrollToFeatures} className="hover:text-gold transition-colors uppercase tracking-[0.2em] font-bold">Giải pháp</button>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => (
  <footer className="py-12 px-4 md:px-12 lg:px-24 bg-black border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center font-black text-black">P</div>
          <span className="font-display font-bold text-lg tracking-tighter uppercase whitespace-nowrap text-white">PIDU <span className="text-gold">DIGITAL</span></span>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5 hover:bg-gold hover:text-black transition-all cursor-pointer">
            <Facebook className="w-5 h-5 text-white group-hover:text-black" />
          </div>
          <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5 hover:bg-gold hover:text-black transition-all cursor-pointer text-white">
             <span className="text-xs font-bold">Zalo</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/5 hover:bg-gold hover:text-black transition-all cursor-pointer">
            <Instagram className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-widest text-gray-500 font-bold border-t border-white/5 pt-8 text-center md:text-left">
        <p>© 2026 Pidu Digital. Giải pháp tự động hóa thông minh.</p>
        <div className="flex gap-8 justify-center">
          <Link to="#" className="hover:text-gold">Điều khoản</Link>
          <Link to="#" className="hover:text-gold">Bảo mật</Link>
        </div>
      </div>
    </div>
  </footer>
);