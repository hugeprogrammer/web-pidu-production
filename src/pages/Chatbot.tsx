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
  Bot, 
  MessageCircle, 
  UserPlus, 
  ArrowRight 
} from "lucide-react";
import { Header, Footer, fadeIn } from "../components/Common";

const Chatbot = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-[#F5C542]/30 selection:text-[#F5C542] font-sans antialiased overflow-x-hidden">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-12 lg:px-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(circle_at_center,_rgba(245,197,66,0.08))] blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="font-display text-4xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.1] mb-8 tracking-tighter">
                Bạn đang tốn quá{" "}
                <span className="block italic">nhiều thời gian cho việc</span>
                <span className="bg-gradient-to-r from-[#F5C542] to-[#FFD700] bg-clip-text text-transparent"> lặp đi lặp lại mỗi ngày?</span>
              </h1>
                <a 
                  href="https://drive.google.com/uc?export=download&id=1jqMKuINL9JlTz55oQbcYqNVOmvpfdgT6"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-[#F5C542] text-black px-16 py-6 rounded-full font-black uppercase text-sm tracking-[0.25em] shadow-[0_20px_50px_rgba(245,197,66,0.2)] hover:shadow-[0_25px_60px_rgba(245,197,66,0.4)] transition-all transform hover:-translate-y-2 cursor-pointer"
                >
                  Nhận demo miễn phí
                </a>
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Trả lời chậm", desc: "Mất 5 phút để phản hồi, bạn đã mất 50% cơ hội chốt đơn.", icon: <Clock className="text-[#F5C542]" /> },
                { title: "Cạn ý tưởng", desc: "Không biết nói gì để khách hàng cảm thấy tin tưởng.", icon: <Zap className="text-orange-400" /> },
                { title: "Mất thời gian", desc: "Phải copy-paste kịch bản cho hàng trăm khách mỗi ngày.", icon: <Share2 className="text-[#F5C542]" /> },
                { title: "Bỏ sót lead", desc: "Quên không lưu lại data, mất trắng chi phí quảng cáo.", icon: <AlertTriangle className="text-amber-500" /> },
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeIn} className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900 transition-all">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Giải pháp */}
        <section className="py-20 md:py-32 bg-[#08080B] px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div {...fadeIn} className="mb-20">
              <h2 className="text-[#F5C542] text-[10px] uppercase tracking-[0.25em] font-black mb-4">GIẢI PHÁP CỐT LÕI</h2>
              <h3 className="font-display text-3xl md:text-5xl font-bold mb-6">Làm chủ sức mạnh AI Automation</h3>
              <p className="text-[#A0A0A0] max-w-2xl mx-auto">Hệ thống tự động hóa thông minh giúp giải phóng con người khỏi những công việc lặp lại, tối ưu 100% tài nguyên doanh nghiệp.</p>
            </motion.div>

            {/* Video Demo Section */}
            <div className="max-w-4xl mx-auto mb-32">
              <motion.div {...fadeIn} className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center flex-col gap-4">
                   <Play className="w-16 h-16 text-[#F5C542] fill-[#F5C542]" />
                   <span className="text-xs font-bold uppercase tracking-widest text-[#A0A0A0]">Xem chatbot hoạt động thực tế</span>
                </div>
              </motion.div>
              <h4 className="mt-8 text-xl font-bold italic tracking-tighter">"Xem cách AI chốt đơn thông minh"</h4>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Tự động trả lời 24/7", desc: "Bất kể đêm khuya hay ngày lễ, trợ lý AI luôn sẵn sàng phục vụ.", icon: <Clock /> },
                { title: "Kịch bản thông minh", desc: "Dựa trên tâm lý khách hàng để đưa ra câu trả lời thuyết phục nhất.", icon: <Bot /> },
                { title: "Tích hợp Messenger", desc: "Kết nối trực tiếp với Fanpage của bạn trong 30 giây.", icon: <MessageCircle /> },
                { title: "Tích hợp Zalo", desc: "Hỗ trợ Zalo OA để chăm sóc khách hàng chuyên nghiệp.", icon: <Zap /> },
                { title: "Thu thập Lead", desc: "Tự động lấy Tên, SĐT, Nhu cầu và lưu vào hệ thống.", icon: <UserPlus /> },
                { title: "Chuyển lead cho Sales", desc: "Gửi thông báo ngay cho đội sale khi có khách nóng.", icon: <ArrowRight /> },
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeIn} className="bg-zinc-900/30 border border-white/5 p-8 rounded-[2rem] hover:border-[#F5C542]/30 transition-all text-left">
                  <div className="w-12 h-12 bg-[#F5C542]/10 flex items-center justify-center rounded-2xl text-[#F5C542] mb-6">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                  </div>
                  <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 md:py-40 px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-20">
              <h2 className="text-[#F5C542] text-[10px] uppercase tracking-[0.25em] font-black mb-4">QUY TRÌNH HOẠT ĐỘNG</h2>
              <h3 className="font-display text-3xl md:text-5xl font-bold">Chatbot hoạt động như thế nào?</h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeIn} className="space-y-8">
                {[
                  { step: "01", title: "Khách nhắn tin", desc: "Khách hàng bắt đầu trò chuyện qua các kênh Messenger/Zalo." },
                  { step: "02", title: "AI nhận diện", desc: "Chatbot phân tích nhu cầu, cảm xúc và thông tin sản phẩm cần tư vấn." },
                  { step: "03", title: "Phản hồi thông minh", desc: "Bot đưa ra câu trả lời đã được tối ưu cho tỷ lệ chuyển đổi cao nhất." },
                  { step: "04", title: "Lưu dữ liệu", desc: "Toàn bộ thông tin khách hàng được đẩy về Google Sheets/CRM." },
                  { step: "05", title: "Chuyển giao Lead", desc: "Báo động cho bộ phận Sales nếu cần sự can thiệp trực tiếp của con người." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="text-2xl font-black text-zinc-800 group-hover:text-[#F5C542] transition-colors">{item.step}</div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              <motion.div {...fadeIn} className="relative aspect-square bg-[#111] rounded-[3rem] border border-white/5 flex items-center justify-center p-12">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
                    <img 
                      src="https://res.cloudinary.com/dtxb2d9mq/image/upload/v1776754969/Screenshot_2026-04-21_140206_dxsgro.png" 
                      alt="Mô tả hình ảnh workflow" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-32 bg-zinc-950 px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "X2 Tỷ lệ chốt", desc: "Phản hồi ngay lập tức giữ chân khách hàng lâu hơn." },
                  { title: "0% Bỏ sót", desc: "Mọi tin nhắn đều được AI chăm sóc chu đáo 24/7." },
                  { title: "Giảm 70% nhân sự", desc: "Một chatbot có thể thay thế cho cả một đội ngũ trực page." },
                  { title: "Data chính xác", desc: "Thu thập thông tin tự động, không sai sót." },
                ].map((item, idx) => (
                  <motion.div key={idx} {...fadeIn} className="text-center">
                    <div className="text-[#F5C542] font-black text-4xl mb-4">✓</div>
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
            <h3 className="font-display text-4xl md:text-6xl font-bold mb-10 leading-tight">Bắt đầu tự động hóa doanh nghiệp ngay hôm nay</h3>
            <button className="bg-[#F5C542] text-black px-16 py-6 rounded-full font-black uppercase text-sm tracking-[0.25em] shadow-[0_20px_50px_rgba(245,197,66,0.2)] hover:shadow-[0_25px_60px_rgba(245,197,66,0.4)] transition-all transform hover:-translate-y-2">
              Nhận demo miễn phí
            </button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Chatbot;
