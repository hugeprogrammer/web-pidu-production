/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Users, 
  Database, 
  Search, 
  PenTool, 
  Share2, 
  Clock, 
  AlertTriangle, 
  Zap, 
  LayoutDashboard,
  CheckCircle2
} from "lucide-react";
import { Header, Footer, fadeIn } from "../components/Common";

const GroupAutomation = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-[#F5C542]/30 selection:text-[#F5C542] font-sans antialiased overflow-x-hidden">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-12 lg:px-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-[radial-gradient(circle_at_center,_rgba(245,197,66,0.05))] blur-[140px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-900/80 border border-white/5 text-[11px] md:text-sm text-[#A0A0A0] mb-8 shadow-xl">
                Tự động hóa marketing cộng đồng 24/7
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.1] mb-8 tracking-tighter">
                Tự động đăng bài lên hàng trăm{" "}
                <span className="block italic text-gold">Group Facebook mỗi ngày</span>
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"> Không cần làm thủ công</span>
              </h1>
              <p className="text-sm md:text-lg text-[#A0A0A0] max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                Scale marketing trên Group Facebook lên một tầm cao mới. Tự động lấy dữ liệu, viết lại nội dung bằng AI và phân phối bài viết đa luồng.
              </p>
                <a 
                  href="https://drive.google.com/uc?export=download&id=1IdvCX3JH7Oa-LCVdRkf0GdZhpkCbiTT0"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-[#F5C542] text-black px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.25em] shadow-[0_0_30px_rgba(245,197,66,0.3)] hover:shadow-[0_0_45px_rgba(245,197,66,0.5)] transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer"
                >
                  XEM DEMO NGAY
                </a>
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Mất quá nhiều thời gian", desc: "Đăng bài thủ công lên từng group tốn hàng giờ mỗi ngày.", icon: <Clock className="text-red-500" /> },
                { title: "Mất Reach trầm trọng", desc: "Không đăng bài đều đặn khiến thuật toán Facebook bỏ qua cộng đồng của bạn.", icon: <AlertTriangle className="text-gold" /> },
                { title: "Khó scale số lượng", desc: "Sức người có hạn, không thể quản lý và phủ sóng hàng trăm group cùng lúc.", icon: <Users className="text-[#F5C542]" /> },
                { title: "Nội dung trùng lặp", desc: "Dễ bị Facebook đánh dấu spam vì đăng nội dung giống hệt nhau.", icon: <Zap className="text-orange-400" /> },
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeIn} className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900 transition-all hover:border-[#F5C542]/20 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-[#A0A0A0] text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-24">
              <h2 className="text-[#F5C542] text-[10px] uppercase tracking-[0.25em] font-black mb-4">QUY TRÌNH HOẠT ĐỘNG</h2>
              <h3 className="font-display text-3xl md:text-5xl font-bold">Hệ thống vận hành như thế nào?</h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                {[
                  { step: "01", title: "Lấy nội dung từ Google Sheet", desc: "Đọc danh sách sản phẩm hoặc chủ đề trực tiếp từ database của bạn." },
                  { step: "02", title: "Cào bài từ đối thủ", desc: "Tùy chọn săn tìm những bài viết đang trending nhất của đối thủ cạnh tranh." },
                  { step: "03", title: "AI viết lại nội dung", desc: "Dùng trí tuệ nhân tạo viết lại 100% caption để tránh trùng lặp và spam." },
                  { step: "04", title: "Tự động phân phối", desc: "Phân bổ bài viết vào các danh sách group mục tiêu một cách thông minh." },
                  { step: "05", title: "Đăng lên hàng loạt Group", desc: "Tự động đăng bài đa luồng, đảm bảo mật độ phủ sóng dày đặc." },
                ].map((item, idx) => (
                  <motion.div key={idx} {...fadeIn} className="flex gap-8 group">
                    <div className="text-3xl font-black text-zinc-900 group-hover:text-[#F5C542] transition-colors">{item.step}</div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="bg-zinc-900/50 aspect-video rounded-[3rem] border border-white/5 flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5C542]/5 to-transparent animate-pulse" />
                  <div className="w-full h-full rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
                    <img 
                      src="https://res.cloudinary.com/dtxb2d9mq/image/upload/v1776754969/Screenshot_2026-04-21_140206_dxsgro.png" 
                      alt="Mô tả hình ảnh workflow" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-32 bg-[#08080B] px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Đăng hàng loạt group", desc: "Hỗ trợ đăng không giới hạn số lượng cộng đồng khách hàng tiềm năng.", icon: <Share2 /> },
                { title: "Random nội dung", desc: "Thuật toán xáo trộn từ ngữ và hình ảnh tự động để lách bộ lọc spam Facebook.", icon: <Zap /> },
                { title: "AI Rewrite Content", desc: "Tự động biến 1 bài viết thành 100 phiên bản khác nhau nhưng vẫn giữ nguyên ý nghĩa.", icon: <PenTool /> },
                { title: "Google Sheet Sync", desc: "Mọi thay đổi trên trang tính sẽ được cập nhật ngay lập tức vào hệ thống đăng bài.", icon: <Database /> },
                { title: "Lên lịch thông minh", desc: "Thiết lập thời gian đăng riêng biệt cho từng group để tối ưu hóa tương tác.", icon: <Clock /> },
                { title: "Báo cáo Real-time", desc: "Theo dõi trạng thái bài đăng, link bài viết và tương tác ngay trên dashboard.", icon: <LayoutDashboard /> },
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeIn} className="bg-zinc-900/30 border border-white/5 p-10 rounded-[2rem] hover:border-[#F5C542]/30 transition-all text-left">
                  <div className="w-14 h-14 bg-[#F5C542]/10 flex items-center justify-center rounded-2xl text-[#F5C542] mb-8 shadow-inner">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 md:py-40 px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto text-center">
             <motion.div {...fadeIn} className="mb-20">
                <h3 className="font-display text-3xl md:text-5xl font-bold mb-8">Hệ thống quản lý trực quan</h3>
             </motion.div>
             <motion.div {...fadeIn} className="bg-zinc-950 border border-white/10 rounded-[2.5rem] p-4 md:p-12 shadow-2xl relative">
                <div className="absolute top-4 left-6 flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/30" />
                   <div className="w-3 h-3 rounded-full bg-orange-500/30" />
                   <div className="w-3 h-3 rounded-full bg-emerald-500/30" />
                </div>
                <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div className="bg-zinc-900 rounded-2xl p-6 border border-white/5 text-left">
                      <p className="text-[10px] text-zinc-500 font-bold uppercase mb-4 tracking-widest">Danh sách Group</p>
                      <div className="space-y-3 opacity-50">
                         <div className="h-4 bg-zinc-800 rounded w-full" />
                         <div className="h-4 bg-zinc-800 rounded w-[80%]" />
                         <div className="h-4 bg-zinc-800 rounded w-full" />
                         <div className="h-4 bg-zinc-800 rounded w-[60%]" />
                      </div>
                   </div>
                   <div className="bg-zinc-900 rounded-2xl p-6 border border-white/5 text-left col-span-2">
                      <p className="text-[10px] text-zinc-500 font-bold uppercase mb-4 tracking-widest">Lịch đăng bài hôm nay</p>
                      <div className="space-y-4">
                         {[1,2,3].map(i => (
                           <div key={i} className="flex items-center gap-4 border-b border-white/5 pb-4 last:border-0">
                              <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-[#F5C542]"><CheckCircle2 className="w-5 h-5" /></div>
                              <div className="flex-grow">
                                 <div className="h-3 bg-zinc-800 rounded w-[40%] mb-2" />
                                 <div className="h-2 bg-zinc-800 rounded w-[20%]" />
                              </div>
                              <div className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded-full">ĐÃ ĐĂNG</div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
                <div className="mt-8 text-xs font-bold text-zinc-600 uppercase tracking-widest">Dashboard Preview Placeholder</div>
             </motion.div>
          </div>
        </section>

        {/* CTA Section */}

      </main>

      <Footer />
    </div>
  );
};

export default GroupAutomation;
