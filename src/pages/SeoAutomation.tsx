/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Globe, 
  Database, 
  Search, 
  PenTool, 
  LayoutDashboard, 
  CheckCircle2, 
  Zap, 
  Target, 
  TrendingUp,
  FileText,
  MousePointer2
} from "lucide-react";
import { Header, Footer, fadeIn } from "../components/Common";

const SeoAutomation = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-[#F5C542]/30 selection:text-[#F5C542] font-sans antialiased overflow-x-hidden">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-12 lg:px-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-[radial-gradient(circle_at_center,_rgba(245,197,66,0.05))] blur-[140px] pointer-events-none" />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-900/80 border border-white/5 text-[11px] md:text-sm text-[#A0A0A0] mb-8 shadow-xl">
                Tối ưu hóa thứ hạng Google không cần thuê content writer
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.1] mb-8 tracking-tighter">
                Viết bài SEO mỗi ngày{" "}
                <span className="block italic text-gold">mà không cần viết</span>
                <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent underline decoration-[#F5C542]"> AI tự động tạo và đăng bài lên Wordpress</span>
              </h1>
              <p className="text-sm md:text-lg text-[#A0A0A0] max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                Scale website SEO mạnh mẽ với hệ thống tự động: từ nghiên cứu từ khóa, cào nội dung đối thủ, đến việc viết bài chuẩn SEO và đăng bài định kỳ.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1N0gvZMOcXJQxLmnImM8X_9lCjRqBgpPY"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block text-center bg-[#F5C542] text-black px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.25em] shadow-[0_0_30px_rgba(245,197,66,0.3)] hover:shadow-[0_0_45px_rgba(245,197,66,0.5)] transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer"
                  >
                    BẮT ĐẦU NGAY
                  </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/20 shadow-inner">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Viết bài SEO tốn quá nhiều thời gian", desc: "Mất 2-3 tiếng cho mỗi bài viết chất lượng.", icon: <FileText className="text-red-500" /> },
                { title: "Thuê content tốn chi phí", desc: "Ngân sách bỏ ra hàng tháng quá lớn cho đội ngũ viết bài.", icon: <MousePointer2 className="text-[#F5C542]" /> },
                { title: "Không đủ số lượng", desc: "Đăng quá ít bài không đủ để Google đánh giá cao website của bạn.", icon: <TrendingUp className="text-orange-400" /> },
                { title: "Khó scale website", desc: "Rất mệt mỏi khi phải quản lý cùng lúc nhiều site vệ tinh.", icon: <Globe className="text-[#F5C542]" /> },
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeIn} className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900 transition-all hover:border-[#F5C542]/20 group">
                  <div className="mb-4 group-hover:rotate-12 transition-transform">{item.icon}</div>
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
              <h2 className="text-[#F5C542] text-[10px] uppercase tracking-[0.25em] font-black mb-4">QUY TRÌNH SEO TỰ ĐỘNG</h2>
              <h3 className="font-display text-3xl md:text-5xl font-bold">Hệ thống vận hành như thế nào?</h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                {[
                  { step: "01", title: "Nhập keyword từ Google Sheet", desc: "Cung cấp danh sách từ khóa mục tiêu hoặc chủ đề cần viết bài." },
                  { step: "02", title: "Cào bài top Google", desc: "AI thâm nhập và phân tích nội dung của những bài đang đứng Top 1." },
                  { step: "03", title: "AI phân tích & viết lại", desc: "Dùng LLM cao cấp để biên soạn nội dung Unique 100%, tránh trùng lặp." },
                  { step: "04", title: "Tối ưu SEO On-page", desc: "Tự động chèn Title, Meta Description, Heading H1-H3 chuẩn cấu trúc." },
                  { step: "05", title: "Đăng bài lên Wordpress", desc: "Kết nối trực tiếp qua API để publish bài viết hoàn chỉnh kèm ảnh minh họa." },
                ].map((item, idx) => (
                  <motion.div key={idx} {...fadeIn} className="flex gap-8 group">
                    <div className="text-2xl font-black text-zinc-900 group-hover:text-[#F5C542] transition-colors">{item.step}</div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div {...fadeIn} className="bg-zinc-900 aspect-video rounded-[3rem] border border-white/5 flex items-center justify-center p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8">
                   <Zap className="w-12 h-12 text-[#F5C542] opacity-20" />
                </div>
                  <div className="w-full h-full rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
                    <img 
                      src="https://res.cloudinary.com/dtxb2d9mq/image/upload/v1778553405/Screenshot_2026-05-12_093557_smiqln.png" 
                      alt="Mô tả hình ảnh workflow" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Checklist */}
        <section className="py-20 md:py-32 bg-[#08080B] px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "AI viết bài SEO", desc: "Tối ưu hóa độ dài bài viết, keyword density và trải nghiệm người dùng.", icon: <FileText /> },
                { title: "Rewrite tránh trùng lặp", desc: "Kiểm tra và đảm bảo nội dung unique 100% trước khi xuất bản.", icon: <Search /> },
                { title: "Tối ưu cấu trúc SEO", desc: "Tự động tạo các thẻ alt ảnh, internal link và external link thông minh.", icon: <CheckCircle2 /> },
                { title: "Auto Publish Wordpress", desc: "Thêm danh mục, trích dẫn bài viết và cài đặt thumbnail tự động.", icon: <Globe /> },
                { title: "Lên lịch bài viết", desc: "Phân phối bài đăng rải rác trong ngày để website duy trì cập nhật.", icon: <Database /> },
                { title: "Nghiên cứu Keyword AI", desc: "Gợi ý những từ khóa ngách có độ cạnh tranh thấp nhưng traffic cao.", icon: <Target /> },
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeIn} className="bg-zinc-900/30 border border-white/5 p-10 rounded-[2rem] hover:border-[#F5C542]/30 transition-all text-left">
                  <div className="w-14 h-14 bg-[#F5C542]/10 flex items-center justify-center rounded-2xl text-[#F5C542] mb-8">
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

export default SeoAutomation;
