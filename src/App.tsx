/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { 
  MessageSquareCode, 
  PenTool, 
  Users, 
  MapPin, 
  Instagram, 
  Globe, 
  AlertTriangle, 
  Clock, 
  Share2, 
  CheckCircle2, 
  ArrowRight,
  Database,
  ArrowUpRight
} from "lucide-react";
import { Header, Footer, fadeIn, staggerContainer } from "./components/Common";
import Chatbot from "./pages/Chatbot";
import ContentAutomation from "./pages/ContentAutomation";
import GoogleMapAutomation from "./pages/GoogleMapAutomation";
import GroupAutomation from "./pages/GroupAutomation";
import InstagramAutomation from "./pages/InstagramAutomation";
import SeoAutomation from "./pages/SeoAutomation";

// --- Home Component ---

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-gold/30 selection:text-gold font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-12 lg:px-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-40 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-900/80 border border-white/5 text-[11px] md:text-sm text-gray-400 mb-10 shadow-xl">
                Giảm <span className="text-gold font-bold mx-1">50%</span> công việc tay chân cho chủ doanh nghiệp
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.1] mb-8 tracking-tighter">
                Bạn đang tốn quá{" "}
                <span className="block italic">nhiều thời gian cho việc</span>
                <span className="text-gold"> lặp đi lặp lại mỗi ngày?</span>
              </h1>
              <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                Đừng để bản thân bị kẹt trong đống tin nhắn và lịch hẹn. Hệ thống của chúng tôi làm việc <span className="text-white font-bold">24/7</span> giúp bạn gỡ bỏ gánh nặng vận hành.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <button className="w-full md:w-auto bg-gold text-black px-12 py-4 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform active:scale-95 group">
                  Bắt đầu tối ưu ngay
                  <ArrowUpRight className="inline-block ml-2 w-4 h-4 group-hover:rotate-45 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 md:py-24 bg-zinc-950 px-4 md:px-12 lg:px-24 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="mb-12 text-center md:text-left">
               <h3 className="font-display text-3xl md:text-4xl font-bold">Mỗi ngày của bạn là một vòng lặp?</h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: <Clock className="w-6 h-6 text-red-500" />, text: "Trả lời tin nhắn chậm, mất khách hàng tiềm năng" },
                { icon: <PenTool className="w-6 h-6 text-orange-500" />, text: "Cạn kiệt ý tưởng content, đăng bài không đều đặn" },
                { icon: <Share2 className="w-6 h-6 text-gold" />, text: "Mất cả ngày đăng bài thủ công lên Group/Map" },
                { icon: <AlertTriangle className="w-6 h-6 text-amber-500" />, text: "Bỏ sót đánh giá, làm hỏng uy tín thương hiệu số" },
              ].map((item, idx) => (
                <motion.div key={idx} {...fadeIn} className="bg-black/40 border border-white/5 p-6 rounded-2xl flex items-center gap-4 hover:border-gold/20 transition-all group">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <p className="text-xs md:text-sm font-bold text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Functions Section */}
        <section id="features" className="py-16 md:py-32 px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-16 md:mb-24">
              <h2 className="micro-label mb-4 text-[#F5C542] text-[10px] uppercase tracking-[0.25em] font-black">Giải pháp cốt lõi</h2>
              <h3 className="font-display text-3xl md:text-5xl font-bold">Làm chủ sức mạnh <span className="text-gold">AI Automation</span></h3>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              <FeatureCard 
                icon={<MessageSquareCode className="w-8 h-8" />}
                title="AI Chatbot Messenger/Zalo"
                desc="Tư vấn khách hàng 24/7 và chốt đơn tự động theo kịch bản thông minh."
                features={["Hiểu ngôn ngữ tự nhiên", "Cá nhân hóa theo tệp khách", "Xử lý đa kênh đồng bộ"]}
                onClick={() => navigate("/chatbot")}
              />
              <FeatureCard 
                icon={<PenTool className="w-8 h-8" />}
                title="Tạo & Đăng Bài Fanpage"
                desc="AI tự động nghiên cứu, viết bài và thiết kế ảnh đăng theo lịch trình định sẵn."
                features={["Xây dựng kịch bản Content AI", "Tự động thiết kế Visual", "Lên lịch đăng đa Fanpage"]}
                onClick={() => navigate("/content-automation")}
              />
              <FeatureCard 
                icon={<Users className="w-8 h-8" />}
                title="Quản Lý Group Facebook"
                desc="Tự động tương tác, lọc thành viên và xây dựng cộng đồng bền vững 24/7."
                features={["Tự động trả lời bình luận", "Lọc & Duyệt bài thông minh", "Tăng tương tác thành viên"]}
                onClick={() => navigate("/group-automation")}
              />
              <FeatureCard 
                icon={<MapPin className="w-8 h-8" />}
                title="Google Map Automation"
                desc="Nâng cao uy tín Local SEO bằng cách phản hồi đánh giá khách hàng ngay lập tức."
                features={["Phản hồi đánh giá tự động", "Quản lý đa địa điểm", "Tối ưu hóa xếp hạng Local"]}
                onClick={() => navigate("/google-map-automation")}
              />
              <FeatureCard 
                icon={<Instagram className="w-8 h-8" />}
                title="Instagram AI Growth"
                desc="Tự động đăng ảnh, reels và tương tác giúp tăng follow thật nhanh chóng."
                features={["AI tạo Visual Instagram", "Tương tác chéo tự động", "Tối ưu hashtag xu hướng"]}
                onClick={() => navigate("/instagram-automation")}
              />
              <FeatureCard 
                icon={<Globe className="w-8 h-8" />}
                title="SEO & WordPress AI"
                desc="Tự động viết bài chuẩn SEO và đăng định kỳ lên Website giúp lên top Google."
                features={["Nghiên cứu từ khóa AI", "Viết bài chuẩn SEO 100%", "Tự động đăng bài WordPress"]}
                onClick={() => navigate("/seo-automation")}
              />
            </motion.div>
          </div>
        </section>

        {/* Integration */}
        <section className="py-16 md:py-32 bg-zinc-950 px-4 md:px-12 lg:px-24 border-y border-white/5 text-center">
          <motion.div {...fadeIn}>
            <Database className="w-16 h-16 text-gold mx-auto mb-8" />
            <h3 className="font-display text-2xl md:text-4xl font-bold italic mb-6">Kết nối mọi hệ thống dữ liệu</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Mọi thông tin từ Google Sheets, HubSpot hay Pipedrive đều được AI xử lý mượt mà.</p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  onClick?: () => void;
}

function FeatureCard({ icon, title, desc, features, onClick }: FeatureCardProps) {
  return (
    <motion.div 
      variants={fadeIn}
      className="bg-zinc-900 border border-white/5 p-8 rounded-[2rem] hover:border-gold/30 transition-all flex flex-col group h-full"
    >
      <div className="w-12 h-12 bg-gold/5 flex items-center justify-center rounded-2xl text-gold mb-6 ring-1 ring-gold/20 group-hover:bg-gold group-hover:text-black transition-all">
        {icon}
      </div>
      <h4 className="font-display text-xl font-bold mb-3 group-hover:text-gold transition-colors">{title}</h4>
      <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">{desc}</p>
      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-xs text-gray-500">
            <CheckCircle2 className="w-4 h-4 text-gold/60 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-3 rounded-xl border border-white/10 group-hover:border-gold/50 text-[10px] uppercase font-black tracking-widest hover:bg-gold hover:text-black transition-all"
      >
        Xem chi tiết
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

// --- App Wrapper ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/content-automation" element={<ContentAutomation />} />
        <Route path="/google-map-automation" element={<GoogleMapAutomation />} />
        <Route path="/group-automation" element={<GroupAutomation />} />
        <Route path="/instagram-automation" element={<InstagramAutomation />} />
        <Route path="/seo-automation" element={<SeoAutomation />} />
      </Routes>
    </Router>
  );
}
