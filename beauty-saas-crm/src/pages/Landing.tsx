import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Target, 
  TrendingUp, 
  Award, 
  ArrowRight, 
  Star,
  Zap,
  MessageCircle
} from 'lucide-react';

export const Landing: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };
  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-brand selection:text-slate-900 overflow-x-hidden font-sans">
      {/* --- Sticky Navigation CTA --- */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-brand" />
            <span className="text-xl font-black uppercase tracking-tighter">Charis Academy</span>
          </div>
          <button className="hidden md:flex btn-primary !py-2.5 !px-6 text-sm font-bold shadow-lg shadow-brand/20">
            강의 신청하기
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/course-hero.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-900"></div>
          
          {/* Animated Background Blobs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>2024 New Masterclass Open</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter"
          >
            동네 미용실에서<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-brand">
              1등 뷰티 브랜드로
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            차별화된 기술력과 압도적인 마케팅 전략.<br />
            고객이 먼저 줄 서는 샵의 비밀을 100% 공개합니다.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <button className="w-full md:w-auto px-10 py-5 bg-brand text-slate-900 font-black text-xl rounded-2xl shadow-[0_0_40px_rgba(197,160,89,0.3)] hover:scale-105 active:scale-95 transition-all">
              지금 바로 보러가기
            </button>
            <button className="w-full md:w-auto px-10 py-5 bg-white/5 border border-white/10 font-bold text-xl rounded-2xl hover:bg-white/10 transition-all">
              커리큘럼 확인
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- Problem Section --- */}
      <section className="py-32 relative bg-white text-slate-900 rounded-[3rem] md:rounded-[6rem] z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
                열심히 하는 것 같은데,<br />
                <span className="text-brand">성장은 멈춰있나요?</span>
              </h2>
              <div className="space-y-6">
                {[
                  "인스타그램에 수천 번 올려도 문의가 안 온다",
                  "기술은 자신 있는데 매출은 제자리다",
                  "신규 고객은 오는데 단골로 안 이어진다",
                  "주변에 저가 샵이 생겨서 가격 경쟁이 심하다"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 italic font-medium text-slate-600">
                    <Target className="w-5 h-5 text-red-500 mt-1" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              className="relative aspect-square rounded-[3rem] bg-slate-100 overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-24 h-24 bg-brand/10 text-brand rounded-3xl flex items-center justify-center mb-8 rotate-12">
                  <TrendingUp className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold mb-4 italic underline decoration-brand/30">안 될 수 없는 시스템</h3>
                <p className="text-slate-500 text-lg">
                  원장님의 노력에 '올바른 방향' 한 스푼만 더하면<br />
                  결과는 이미 정해진 것과 다름없습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Features / Solution Section --- */}
      <section className="py-32 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-brand font-black uppercase tracking-[0.2em] text-sm mb-4 block animate-pulse">Core Benefits</span>
            <h2 className="text-4xl md:text-7xl font-black">오직 이 강의에서만<br />공개하는 3가지 노하우</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap className="w-10 h-10" />, 
                title: "압도적 기술 로직", 
                desc: "누구도 따라 할 수 없는 원장님만의 독보적인 테크닉 체계화" 
              },
              { 
                icon: <MessageCircle className="w-10 h-10" />, 
                title: "매출 폭발 마케팅", 
                desc: "광고비 0원으로 만드는 고객 자동 유입 마케팅 시스템" 
              },
              { 
                icon: <Award className="w-10 h-10" />, 
                title: "멘탈 & 고객 관리", 
                desc: "충성 단골들이 알아서 홍보해 주는 프리미엄 화술과 관리 비법" 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-brand/50 transition-all"
              >
                <div className="w-20 h-20 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Curriculum Placeholder Section --- */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-brand/20 via-slate-800 to-slate-900 border border-brand/30 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic">Curriculum Coming Soon</h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12">
              원장님만의 특별한 커리큘럼이 들어갈 자리입니다.<br />
              현재 마스터 클래스 내용을 정교하게 다듬고 있습니다.
            </p>
            <div className="w-full max-w-md mx-auto h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-brand animate-pulse"></div>
            </div>
            <p className="mt-4 text-sm text-brand font-bold uppercase tracking-widest">Designing Your Success...</p>
          </div>
        </div>
      </section>

      {/* --- Reviews Section --- */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter">이미 수많은 원장님이<br />증명하고 있습니다</h2>
            <div className="mt-6 md:mt-0 flex items-center gap-2 text-brand text-2xl font-black">
              <Star className="w-8 h-8 fill-current" />
              <span>4.9 / 5.0</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((review) => (
              <div key={review} className="p-8 rounded-3xl bg-white/5 border border-white/5">
                <div className="flex gap-1 text-brand mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-xl font-medium leading-relaxed mb-8">
                  "혼자 고민할 때는 안 보이던 것들이 강의를 보고 명확해졌어요. 한 달 만에 예약이 두 배 늘었습니다. 진짜 인생 강의예요!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700"></div>
                  <div>
                    <p className="font-bold text-lg text-white">OOO 뷰티 원장님</p>
                    <p className="text-slate-500 text-sm">오픈 2년차 전후</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="p-16 md:p-24 rounded-[4rem] bg-brand text-slate-900 overflow-hidden relative"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-[100px] -rotate-45"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-900/20 blur-[100px]"></div>

            <h2 className="text-4xl md:text-7xl font-black leading-tight mb-8 relative z-10">
              성공은 머뭇거리지<br />않는 자의 것입니다
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-12 opacity-80 relative z-10">
              지금 바로 강의 신청을 통해 매출 퀀텀 점프를 경험하세요.
            </p>
            <button className="relative z-10 w-full md:w-auto px-12 py-6 bg-slate-900 text-white font-black text-2xl rounded-2xl shadow-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 mx-auto">
              수강 신청 바로가기
              <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-20 border-t border-white/5 text-center text-slate-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-black uppercase tracking-tighter text-slate-400">Charis Academy</span>
          </div>
          <p className="text-sm">© 2024 Charis Beauty Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
