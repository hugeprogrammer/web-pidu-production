/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Instagram, 
  Database, 
  Search, 
  PenTool, 
  Image as ImageIcon, 
  Calendar, 
  Zap, 
  Heart,
  MessageCircle,
  Play,
  CheckCircle2
} from "lucide-react";
import { Header, Footer, fadeIn } from "../components/Common";

const InstagramAutomation = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-[#F5C542]/30 selection:text-[#F5C542] font-sans antialiased overflow-x-hidden">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-12 lg:px-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-[radial-gradient(circle_at_center,_rgba(245,197,66,0.06))] blur-[140px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-900/80 border border-white/5 text-[11px] md:text-sm text-[#A0A0A0] mb-8 shadow-xl">
                Bùng nổ tương tác Instagram bằng sức mạnh AI
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.1] mb-8 tracking-tighter">
                Instagram của bạn có đang{" "}
                <span className="block italic text-gold">chết vì thiếu content?</span>
                <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"> AI tạo content + hình ảnh + đăng bài tự động</span>
              </h1>
              <p className="text-sm md:text-lg text-[#A0A0A0] max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                Tự động hóa toàn bộ quy trình từ khâu ý tưởng, thiết kế hình ảnh đến việc đăng bài. Biến Instagram thành kênh kéo khách hàng thụ động hiệu quả nhất.
              </p>
                  <a 
                    href="https://drive.google.com/uc?export=download&id=16sZrnw-FQaaSA0Zhij5GWYFb6JWho9Lp"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-[#F5C542] text-black px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.25em] shadow-[0_0_30px_rgba(245,197,66,0.3)] hover:shadow-[0_0_45px_rgba(245,197,66,0.5)] transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer"
                  >
                    TRẢI NGHIỆM NGAY
                  </a>
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Không có ý tưởng", desc: "Mỗi ngày phải loay hoay tìm concept và viết caption cho Reels/Post.", icon: <Zap className="text-gold" /> },
                { title: "Không có designer", desc: "Ảnh Pinterest thì cũ, tự làm Canva thì lâu mà không đẹp chuyên nghiệp.", icon: <PenTool className="text-[#F5C542]" /> },
                { title: "Đăng bài không đều", desc: "Bận rộn khiến profile Instagram bị 'mất tích' trên feed người theo dõi.", icon: <Calendar className="text-orange-400" /> },
                { title: "Mất quá nhiều thời gian", desc: "Dành cả buổi sáng chỉ để edit 1 tấm ảnh và viết 1 đoạn caption.", icon: <Instagram className="text-[#F5C542]" /> },
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeIn} className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900 transition-all hover:border-[#F5C542]/20 text-center md:text-left">
                  <div className="mb-4 inline-block">{item.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-[#A0A0A0] text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 md:py-40 px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-24">
              <h2 className="text-[#F5C542] text-[10px] uppercase tracking-[0.25em] font-black mb-4">FLOW VẬN HÀNH</h2>
              <h3 className="font-display text-3xl md:text-5xl font-bold">Hành trình từ Ý tưởng đến Bài đăng</h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="bg-zinc-900 aspect-square rounded-[3rem] border border-white/5 flex items-center justify-center p-12 relative overflow-hidden order-2 lg:order-1">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,197,66,0.1),_transparent_70%)]" />
                  <div className="w-full h-full rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
                    <img 
                      src="https://res.cloudinary.com/dtxb2d9mq/image/upload/v1778553236/Screenshot_2026-05-12_092843_qm8b0m.png" 
                      alt="Mô tả hình ảnh workflow" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
              </div>
              <div className="space-y-12 order-1 lg:order-2">
                {[
                  { step: "01", title: "Lấy dữ liệu từ Google Sheet", desc: "Tự động đọc các campaign hoặc danh sách sản phẩm từ trang tính." },
                  { step: "02", title: "Cào bài từ đối thủ", desc: "Học hỏi từ những bài viết có lượng tương tác cao nhất trên Instagram toàn cầu." },
                  { step: "03", title: "AI viết lại caption", desc: "Sử dụng ngôn ngữ viral, trẻ trung và chuẩn văn hóa Instagram." },
                  { step: "04", title: "AI tạo hình ảnh", desc: "Tạo hình ảnh độc quyền, chất lượng cao từ yêu cầu nội dung caption." },
                  { step: "05", title: "Lên lịch & Auto post", desc: "Tự động đăng bài vào khung giờ followers của bạn online nhiều nhất." },
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
            </div>
          </div>
        </section>

        {/* Features Checklist */}
        <section className="py-20 md:py-32 bg-[#08080B] px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "AI Caption Generator", desc: "Tạo caption đa dạng phong cách: sâu sắc, hài hước hay chuẩn bán hàng.", icon: <PenTool /> },
                { title: "AI Image Generator", desc: "Tối ưu hóa hình ảnh theo tỉ lệ 4:5 hoặc 9:16 cho Reels và Story.", icon: <ImageIcon /> },
                { title: "Auto Post Instagram", desc: "Hoàn toàn rảnh tay, hệ thống tự động kết nối và đăng bài trực tiếp.", icon: <Instagram /> },
                { title: "Scheduler thông minh", desc: "Phân bổ lịch đăng đều đặn mà không cần vào ứng dụng hàng ngày.", icon: <Calendar /> },
                { title: "Content Rewrite", desc: "Biến nội dung cũ thành phiên bản mới mẻ và trendy hơn.", icon: <Search /> },
                { title: "Multi-Account Sync", desc: "Quản lý đồng thời nhiều profile Instagram cùng lúc một cách dễ dàng.", icon: <Database /> },
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeIn} className="bg-zinc-900/30 border border-white/5 p-10 rounded-[2rem] hover:border-[#F5C542]/30 transition-all text-left group">
                  <div className="w-14 h-14 bg-[#F5C542]/10 flex items-center justify-center rounded-2xl text-[#F5C542] mb-8 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InstagramAutomation;
