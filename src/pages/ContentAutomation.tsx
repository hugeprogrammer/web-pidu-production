/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Clock, 
  Zap, 
  Share2, 
  AlertTriangle, 
  Play, 
  PenTool, 
  Image as ImageIcon, 
  Calendar, 
  FileText,
  Star
} from "lucide-react";
import { Header, Footer, fadeIn } from "../components/Common";

const ContentAutomation = () => {
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
                Tự động hóa <span className="text-[#F5C542] font-bold mx-1">90%</span> quy trình content fanpage
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.1] mb-8 tracking-tighter">
                Bạn vẫn đang đăng bài{" "}
                <span className="block italic">thủ công mỗi ngày?</span>
                <span className="bg-gradient-to-r from-[#F5C542] to-[#FFD700] bg-clip-text text-transparent"> Hãy để AI làm thay bạn</span>
              </h1>
              <p className="text-sm md:text-lg text-[#A0A0A0] max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                Tự động tạo nội dung, tạo hình ảnh và đăng bài theo lịch – không cần làm tay. Giải pháp tối ưu cho doanh nghiệp muốn phủ sóng mạng xã hội mà không mất thời gian.
              </p>
              <a 
                href="https://drive.google.com/uc?export=download&id=1S2s4809PgvdLWvm_bMEK9tkHmF1bNL6P"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-center bg-[#F5C542] text-black px-12 py-5 rounded-full font-black uppercase text-xs tracking-[0.25em] shadow-[0_0_30px_rgba(245,197,66,0.3)] hover:shadow-[0_0_45px_rgba(245,197,66,0.5)] transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer"
              >
                XEM DEMO NGAY
              </a>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-zinc-950/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Mất hàng giờ nghĩ content", desc: "Mỗi ngày phải loay hoay tìm ý tưởng và viết caption.", icon: <Clock className="text-[#F5C542]" /> },
                { title: "Không có designer", desc: "Chi phí thuê designer quá cao hoặc tự làm ảnh quá xấu.", icon: <PenTool className="text-[#F5C542]" /> },
                { title: "Đăng bài không đều", desc: "Bận rộn khiến fanpage bị 'bỏ hoang', làm giảm reach.", icon: <AlertTriangle className="text-amber-500" /> },
                { title: "Sai giờ vàng", desc: "Quên đăng bài vào những khung giờ khách hàng online nhiều nhất.", icon: <Calendar className="text-orange-400" /> },
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

        <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div {...fadeIn} className="mb-20">
              <h2 className="text-[#F5C542] text-[10px] uppercase tracking-[0.25em] font-black mb-4">GIẢI PHÁP CỐT LÕI</h2>
              <h3 className="font-display text-3xl md:text-5xl font-bold mb-6">AI Content Automation cho Fanpage</h3>
              <p className="text-[#A0A0A0] max-w-2xl mx-auto">Hệ thống giúp bạn tự động từ A → Z việc quản lý và phát triển nội dung trên các Fanpage Facebook.</p>
            </motion.div>

            <div className="max-w-4xl mx-auto mb-32">
              <motion.div {...fadeIn} className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center flex-col gap-4">
                   <Play className="w-16 h-16 text-[#F5C542] fill-[#F5C542]" />
                   <span className="text-xs font-bold uppercase tracking-widest text-[#A0A0A0]">Xem hệ thống hoạt động thực tế</span>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div {...fadeIn} className="bg-zinc-900/30 border border-white/5 p-10 rounded-[2.5rem] text-left">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                   <div className="p-3 bg-[#F5C542]/10 rounded-xl text-[#F5C542]"><FileText className="w-6 h-6" /></div>
                   Tạo nội dung bằng AI
                </h4>
                <ul className="space-y-4 text-sm text-[#A0A0A0]">
                  <li>• Tự động viết caption thu hút theo ngữ cảnh.</li>
                  <li>• Viết theo nhiều lĩnh vực: Bán hàng, Spa, BĐS, Công nghệ...</li>
                  <li>• Tùy chỉnh tone giọng: Hài hước, Chuyên nghiệp, Câu chuyện...</li>
                </ul>
              </motion.div>
              <motion.div {...fadeIn} className="bg-zinc-900/30 border border-white/5 p-10 rounded-[2.5rem] text-left">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                   <div className="p-3 bg-[#F5C542]/10 rounded-xl text-[#F5C542]"><ImageIcon className="w-6 h-6" /></div>
                   Tự động tạo hình ảnh
                </h4>
                <ul className="space-y-4 text-sm text-[#A0A0A0]">
                  <li>• AI tự tạo ảnh minh họa từ nội dung bài viết.</li>
                  <li>• Đa dạng phong cách thiết kế, không lo bản quyền.</li>
                  <li>• Không cần chờ đợi designer, có ảnh ngay lập tức.</li>
                </ul>
              </motion.div>
              <motion.div {...fadeIn} className="bg-zinc-900/30 border border-white/5 p-10 rounded-[2.5rem] text-left">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                   <div className="p-3 bg-[#F5C542]/10 rounded-xl text-[#F5C542]"><Share2 className="w-6 h-6" /></div>
                   Đăng bài tự động
                </h4>
                <ul className="space-y-4 text-sm text-[#A0A0A0]">
                  <li>• Kết nối và đăng bài trực tiếp lên Fanpage Facebook.</li>
                  <li>• Hỗ trợ quản lý và đăng bài đa kênh/đa Fanpage.</li>
                  <li>• Tự động tối ưu hóa hiển thị khi đăng.</li>
                </ul>
              </motion.div>
              <motion.div {...fadeIn} className="bg-zinc-900/30 border border-white/5 p-10 rounded-[2.5rem] text-left">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                   <div className="p-3 bg-[#F5C542]/10 rounded-xl text-[#F5C542]"><Calendar className="w-6 h-6" /></div>
                   Đăng bài theo lịch
                </h4>
                <ul className="space-y-4 text-sm text-[#A0A0A0]">
                  <li>• Thiết lập lịch đăng cho cả tuần hoặc cả tháng chỉ trong 5 phút.</li>
                  <li>• Tự động căn chỉnh và đăng bài vào khung giờ vàng.</li>
                  <li>• Theo dõi trạng thái đăng bài và lịch sử content.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 md:py-40 px-4 md:px-12 lg:px-24 bg-[#08080B]">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-24">
              <h2 className="text-[#F5C542] text-[10px] uppercase tracking-[0.25em] font-black mb-4">QUY TRÌNH HOẠT ĐỘNG</h2>
              <h3 className="font-display text-3xl md:text-5xl font-bold">Hệ thống hoạt động như thế nào?</h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeIn} className="relative aspect-video bg-zinc-900 rounded-[3rem] border border-white/5 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/dtxb2d9mq/image/upload/v1776762425/Screenshot_2026-04-21_160654_vhiidc.png" 
                    alt="Mô tả hình ảnh workflow" 
                    className="w-full h-auto max-h-full object-contain rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                  />
                </div>
              </motion.div>
              <div className="space-y-10">
                 {[
                   { step: "01", title: "Nhập sản phẩm", desc: "Bạn chỉ cần nhập tên sản phẩm hoặc chủ đề bài viết." },
                   { step: "02", title: "AI viết Caption", desc: "Hệ thống tự động biên soạn nội dung thu hút và chuẩn bán hàng." },
                   { step: "03", title: "AI tạo Hình ảnh", desc: "Tự động thiết kế ảnh minh họa phù hợp với nội dung caption." },
                   { step: "04", title: "Lên lịch đăng", desc: "Chọn ngày giờ hoặc để AI tự tối ưu thời gian đăng tốt nhất." },
                   { step: "05", title: "Tự động đăng", desc: "Bài viết sẽ tự động xuất hiện trên Fanpage đúng kế hoạch." },
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-8 group">
                      <div className="text-3xl font-black text-zinc-900 group-hover:text-[#F5C542] transition-colors">{item.step}</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                        <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Tiết kiệm 90%", desc: "Giảm thiểu tối đa thời gian bỏ ra cho việc làm content mỗi ngày." },
                  { title: "Không cần designer", desc: "Tự tạo hình ảnh chất lượng cao mà không tốn thêm chi phí." },
                  { title: "Phủ sóng đều đặn", desc: "Giữ tương tác Fanpage luôn ở mức cao nhất bằng bài đăng liên tục." },
                  { title: "Tăng reach tự nhiên", desc: "Tối ưu hóa thuật toán Facebook bằng content phong phú và đúng giờ." },
                ].map((item, idx) => (
                  <motion.div key={idx} {...fadeIn} className="bg-zinc-900/20 p-8 rounded-[2rem] border border-white/5 text-center">
                    <div className="text-[#F5C542] font-black text-4xl mb-4"><Star className="w-10 h-10 mx-auto fill-[#F5C542]" /></div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-4 md:px-12 lg:px-24 text-center">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto">
            <h3 className="font-display text-4xl md:text-6xl font-bold mb-10 leading-tight">Bắt đầu tự động hóa fanpage của bạn ngay hôm nay</h3>
            <a 
              href="https://drive.google.com/uc?export=download&id=17y7aJUGHN8W6MS8_i4UtwamU4mTtIhfu"
              download
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="bg-[#F5C542] text-black px-16 py-6 rounded-full font-black uppercase text-sm tracking-[0.25em] shadow-[0_20px_50px_rgba(245,197,66,0.2)] hover:shadow-[0_25px_60px_rgba(245,197,66,0.4)] transition-all transform hover:-translate-y-2">
                Nhận demo miễn phí
              </button>
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContentAutomation;
