/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  MapPin, 
  MessageSquare, 
  Zap, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  ThumbsUp, 
  Command, 
  Play,
  ArrowRight,
  Monitor,
  CheckCircle2
} from "lucide-react";
import { Header, Footer, fadeIn } from "../components/Common";

const GoogleMapAutomation = () => {
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
                Tự động trả lời <span className="text-[#F5C542] font-bold mx-1">100%</span> review Google Maps
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.1] mb-8 tracking-tighter">
                Bạn đang bỏ sót hàng loạt{" "}
                <span className="block italic">review trên Google Maps?</span>
                <span className="bg-gradient-to-r from-[#F5C542] to-[#FFD700] bg-clip-text text-transparent"> Hãy để AI trả lời thay bạn</span>
              </h1>
              <p className="text-sm md:text-lg text-[#A0A0A0] max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                Tự động đọc review, tạo câu trả lời chuyên nghiệp và đăng phản hồi chỉ trong vài giây. Giúp nâng cao uy tín cửa hàng và cải thiện Local SEO vượt trội.
              </p>
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1VBG7QVAzFuUWFqGQP2gkD2p2zHYynlWd"
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
                { title: "Không kịp trả lời", desc: "Khách hàng chờ đợi quá lâu dẫn đến trải nghiệm xấu.", icon: <Clock className="text-[#F5C542]" /> },
                { title: "Review xấu bị bỏ qua", desc: "Review tiêu cực không được xử lý kịp gây ảnh hưởng uy tín.", icon: <AlertCircle className="text-red-500" /> },
                { title: "Thiếu chuyên nghiệp", desc: "Câu trả lời hời hợt, không giải quyết được vấn đề của khách.", icon: <MessageSquare className="text-[#F5C542]" /> },
                { title: "Mất uy tín thương hiệu", desc: "Xếp hạng sụt giảm do không tương tác với khách hàng trên Map.", icon: <ShieldCheck className="text-orange-400" /> },
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

        {/* Section Giải pháp */}
        <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div {...fadeIn} className="mb-20">
              <h2 className="text-[#F5C542] text-[10px] uppercase tracking-[0.25em] font-black mb-4">GIẢI PHÁP</h2>
              <h3 className="font-display text-3xl md:text-5xl font-bold mb-6">Google Map Reply Automation bằng AI</h3>
              <p className="text-[#A0A0A0] max-w-2xl mx-auto">Hệ thống tự động hóa toàn bộ quá trình xử lý review trên Google Maps, tích hợp trí tuệ nhân tạo để thấu hiểu khách hàng.</p>
            </motion.div>

            {/* Workflow Section */}
            <div className="text-left mb-32">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-16">Hệ thống hoạt động như thế nào?</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Lấy review từ Google Maps", desc: "Tự động quét comment mới và đồng bộ ngay lập tức." },
                    { step: "02", title: "AI phân tích nội dung", desc: "Xác định thái độ tích cực / tiêu cực và vấn đề khách gặp phải." },
                    { step: "03", title: "AI tạo câu trả lời", desc: "Viết phản hồi chuyên nghiệp, tự nhiên như người thiệt." },
                    { step: "04", title: "Lưu câu trả lời", desc: "Lưu vào hệ thống để bạn có thể xem lại trước khi xuất bản." },
                    { step: "05", title: "Người dùng chỉnh sửa", desc: "Có thể sửa nhanh câu phản hồi bằng prompt hoặc lệnh ngắn." },
                    { step: "06", title: "Đăng reply lên Maps", desc: "Chỉ cần 1 click hoặc thiết lập tự động là đăng ngay." },
                  ].map((item, idx) => (
                    <motion.div key={idx} {...fadeIn} className="flex gap-6 group">
                      <div className="text-2xl font-black text-zinc-800 group-hover:text-[#F5C542] transition-colors">{item.step}</div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-zinc-900 aspect-square rounded-[3rem] border border-white/5 flex items-center justify-center p-12">
                   <div className="w-full h-full border-2 border-dashed border-[#F5C542]/20 rounded-[2rem] flex items-center justify-center text-center">
                      <div className="space-y-4">
                        <MapPin className="w-16 h-16 text-[#F5C542] mx-auto opacity-50" />
                        <p className="text-[10px] uppercase tracking-widest text-[#A0A0A0] font-bold">Workflow Image Placeholder</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-32">
              {[
                { title: "Tự động lấy review", desc: "Đồng bộ hóa dữ liệu trực tiếp từ Google Business Profile liên tục.", icon: <Zap /> },
                { title: "AI trả lời thông minh", desc: "Phản hồi tự nhiên, thấu cảm và đúng ngữ cảnh câu chuyện khách hàng.", icon: <MessageSquare /> },
                { title: "Chỉnh sửa bằng lệnh", desc: "Dùng Command để sửa tone giọng hoặc nội dung câu trả lời siêu nhanh.", icon: <Command /> },
                { title: "Kiểm duyệt linh hoạt", desc: "Dễ dàng bật/tắt chế độ tự động hoặc duyệt thủ công cho từng Map.", icon: <ShieldCheck /> },
                { title: "Đăng reply tự động", desc: "Tối ưu hóa thời gian phản hồi, tăng điểm uy tín cho thứ hạng Local SEO.", icon: <ThumbsUp /> },
                { title: "Quản lý đa địa điểm", desc: "Quản lý hàng chục địa điểm kinh doanh chỉ trên một màn hình duy nhất.", icon: <Monitor /> },
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeIn} className="bg-zinc-900/30 border border-white/5 p-8 rounded-[2rem] hover:border-[#F5C542]/30 transition-all">
                  <div className="w-12 h-12 bg-[#F5C542]/10 flex items-center justify-center rounded-2xl text-[#F5C542] mb-6">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Demo UI Section */}
            <div className="mb-32">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-12">Demo giao diện xử lý thực tế</h3>
              <motion.div {...fadeIn} className="bg-black border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                 <div className="bg-zinc-900/50 p-4 border-b border-white/5 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-orange-500/50" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                    </div>
                    <div className="mx-auto text-[10px] font-bold text-zinc-500 tracking-widest uppercase">Map Automation Dashboard</div>
                 </div>
                 <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {/* Item 1: Positive */}
                    <div className="space-y-4">
                       <div className="bg-zinc-900 p-6 rounded-2xl text-left border border-white/5">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-bold">K</div>
                            <div>
                               <div className="text-sm font-bold">Khánh Nguyễn</div>
                               <div className="text-[10px] text-gold">★★★★★</div>
                            </div>
                          </div>
                          <p className="text-sm text-[#A0A0A0]">Đồ ăn rất ngon, không gian ấm cúng. Chắc chắn sẽ quay lại!</p>
                       </div>
                       <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-[#F5C542]/5 border border-[#F5C542]/20 p-6 rounded-2xl text-left ml-8 relative after:absolute after:top-4 after:right-full after:border-[10px] after:border-transparent after:border-r-[#F5C542]/10">
                          <div className="flex items-center gap-2 mb-2 text-[#F5C542]">
                             <Zap className="w-4 h-4 fill-[#F5C542]" />
                             <span className="text-[10px] font-black uppercase tracking-widest">AI SUGGESTED</span>
                          </div>
                          <p className="text-sm text-white italic">"Chào anh Khánh! Cảm ơn anh đã dành lời khen cho không gian và món ăn của quán. Sự hài lòng của anh là động lực để đội ngũ cố gắng hơn nữa. Rất mong được đón tiếp anh lần tới ạ!"</p>
                       </motion.div>
                    </div>

                    {/* Item 2: Negative */}
                    <div className="space-y-4">
                       <div className="bg-zinc-900 p-6 rounded-2xl text-left border border-white/5">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center text-white font-bold">L</div>
                            <div>
                               <div className="text-sm font-bold">Linh Trần</div>
                               <div className="text-[10px] text-zinc-500">★★☆☆☆</div>
                            </div>
                          </div>
                          <p className="text-sm text-[#A0A0A0]">Nhân viên phục vụ hơi chậm, mình phải chờ 15p mới có bàn.</p>
                       </div>
                       <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-[#F5C542]/5 border border-[#F5C542]/20 p-6 rounded-2xl text-left ml-8 relative">
                          <div className="flex items-center gap-2 mb-2 text-[#F5C542]">
                             <Zap className="w-4 h-4 fill-[#F5C542]" />
                             <span className="text-[10px] font-black uppercase tracking-widest">AI SUGGESTED</span>
                          </div>
                          <p className="text-sm text-white italic">"Dạ chào chị Linh, chúng em vô cùng xin lỗi vì trải nghiệm không tốt của chị. Hiện tại quán đang cải thiện quy trình để đón khách nhanh hơn. Mong chị thông cảm và cho quán cơ hội khắc phục trong lần ghé tới ạ!"</p>
                       </motion.div>
                    </div>
                 </div>
              </motion.div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "0% Bỏ sót", desc: "Mọi review đều được chăm sóc chu đáo, không kể ngày đêm." },
                { title: "Tăng uy tín", desc: "Tương tác liên tục giúp khách hàng tin tưởng thương hiệu hơn." },
                { title: "Tiết kiệm thời gian", desc: "Giải phóng chủ shop khỏi việc trực review thủ công mỗi ngày." },
                { title: "Tăng hạng Maps", desc: "Tương tác tốt giúp Google đánh giá cao và dễ lên top Local SEO." },
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeIn} className="text-center">
                  <div className="w-12 h-12 bg-[#F5C542]/10 rounded-full flex items-center justify-center mx-auto text-[#F5C542] mb-6">
                     <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-[#A0A0A0] text-xs leading-relaxed">{item.desc}</p>
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

export default GoogleMapAutomation;
