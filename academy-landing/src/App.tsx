import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  Target, 
  AlertCircle,
  BarChart3,
  Award,
  ChevronRight,
  PlayCircle
} from 'lucide-react';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen w-full bg-edu-black text-white selection:bg-edu-orange selection:text-edu-black overflow-x-hidden font-sans">
      
      {/* 1. HERO 섹션 */}
      <section className="relative min-h-[90vh] w-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-edu-black via-edu-black/80 to-edu-black z-10"></div>
          {/* Hero Image */}
          <div className="w-full h-full bg-[url('/edu-hero-instructor.png')] bg-cover bg-center opacity-40 scale-105 transition-transform duration-[20s] hover:scale-110"></div>
          
          {/* Animated Background Blobs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-edu-orange/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-edu-orange/5 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-edu-orange text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Charis Beauty Academy - Global Masterclass</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter"
          >
            시술자 → 강사 → <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-edu-orange via-orange-400 to-edu-orange">
              브랜드로 성장하는
            </span><br />
            3단계 매출 구조
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            두피문신 하나로 월 300의 벽을 넘어 1,000만 원까지.<br />
            기술만으로는 불가능했던 <span className="text-white font-bold underline decoration-edu-orange/50 decoration-4 underline-offset-8">압도적 매출의 로직</span>을 공개합니다.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="w-full md:w-auto px-10 py-5 bg-edu-orange text-edu-black font-black text-xl rounded-2xl shadow-[0_0_40px_rgba(255,107,0,0.3)] hover:scale-105 active:scale-95 transition-all">
              지금 무료 클래스 신청하기
            </button>
            <button className="w-full md:w-auto px-10 py-5 bg-white/5 border border-white/10 font-bold text-xl rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              커리큘럼 확인 <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. 타겟 공감 섹션 */}
      <section className="py-32 bg-edu-black relative z-10 w-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              혹시 이런 고민을 하고 계신가요?
            </h2>
            <p className="text-slate-500 text-lg md:text-xl">
              두피문신 원장님들이 겪는 가장 현실적인 5가지 고통
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { id: '01', title: "매출 정체", desc: "열심히 시술하는데 월 300만원 벽에 갇혔다" },
              { id: '02', title: "낮은 단가", desc: "단가를 올리고 싶은데 고객 이탈이 두렵다" },
              { id: '03', title: "계약 실패", desc: "상담은 많이 오는데 최종 계약이 안 된다" },
              { id: '04', title: "고립된 운영", desc: "프랜차이즈 가입했지만 여전히 혼자다" },
              { id: '05', title: "수익 악순환", desc: "투자는 계속하는데 통장 잔고는 그대로다" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-edu-black border border-white/10 hover:border-edu-orange/50 hover:bg-edu-orange/5 transition-all duration-500"
              >
                <div className="text-edu-orange font-black text-4xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                  {item.id}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 문제 재정의 */}
      <section className="py-24 bg-edu-orange text-edu-black overflow-hidden relative w-screen">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/10 -skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            whileInView={{ scale: [0.95, 1.05, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black leading-tight italic"
          >
            "이 중 하나라도 해당된다면,<br />
            <span className="underline decoration-black decoration-8 underline-offset-8">문제는 기술이 아닙니다</span>"
          </motion.h2>
        </div>
      </section>

      {/* 4. 원인 설명 */}
      <section className="py-32 bg-edu-black border-y border-white/5 w-screen">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-block p-3 rounded-2xl bg-edu-orange/10 text-edu-orange mb-6">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                두피문신으로 돈을 못 버는<br />
                진짜 이유는 <span className="text-edu-orange">수익 구조의 부재</span>입니다.
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                기술은 기본입니다. 하지만 기술만으로는 월 1,000만원의 고단가 구조를 만들 수 없습니다. 
                대부분의 원장님이 **상담 로직, 마케팅 전략, 퍼스널 브랜딩**이라는 수익 구조를 배우지 못했기 때문입니다.
              </p>
              <ul className="space-y-4">
                {[
                  "고객의 지갑을 여는 압도적 상담 심리학",
                  "자연 유입을 만드는 타겟 마케팅 시스템",
                  "시술자에서 경영자로 넘어가는 시스템 세팅"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-bold">
                    <CheckCircle2 className="w-6 h-6 text-edu-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-square bg-edu-orange/5 border border-white/10 rounded-[4rem] p-12 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <BarChart3 className="w-full h-full scale-110" />
                </div>
                <div className="relative z-10 space-y-8">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <p className="text-edu-orange font-bold mb-2">BEFORE</p>
                    <p className="text-2xl font-black">기술만 있는 시술자</p>
                    <div className="mt-4 w-full h-2 bg-slate-800 rounded-full">
                      <div className="w-[30%] h-full bg-slate-600"></div>
                    </div>
                    <p className="mt-2 text-right text-slate-500 font-bold tracking-widest text-xs italic uppercase mt-4">Growth Ceiling: 300M</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-edu-orange text-edu-black border-2 border-edu-orange shadow-[0_0_30px_rgba(255,107,0,0.2)]">
                    <p className="font-bold mb-2 opacity-70">AFTER</p>
                    <p className="text-2xl font-black text-edu-black">수익 구조가 있는 CEO</p>
                    <div className="mt-4 w-full h-2 bg-edu-black/20 rounded-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-edu-black"
                      ></motion.div>
                    </div>
                    <p className="mt-2 text-right font-black italic uppercase tracking-widest text-xs mt-4">Unlimited Growth: 1000M+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 해결 구조 제시 */}
      <section className="py-32 bg-edu-black relative w-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-edu-orange font-black uppercase tracking-[0.2em] text-sm mb-4 block">3 STEP GROWTH SYSTEM</span>
            <h2 className="text-4xl md:text-7xl font-black">카리스가 제안하는<br />압도적 성장 로직</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: '01', role: '시술자 (PRACTITIONER)', revenue: '200~400', desc: '압도적 기술력을 바탕으로 기초 체력을 다지는 단계' },
              { step: '02', role: '강사 (INSTRUCTOR)', revenue: '500~800', desc: '자신의 기술을 체계화하고 수강생을 양성하는 확장 단계' },
              { step: '03', role: '브랜드/지점 (BRAND CEO)', revenue: '1000+', desc: '시스템이 돌아가는 브랜드를 구축하고 지점을 확장하는 단계' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative p-12 rounded-[3.5rem] bg-white/5 border border-white/10 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 text-edu-orange/10 font-black text-8xl group-hover:text-edu-orange/30 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-edu-orange font-black mb-2 uppercase">{item.role}</h3>
                <div className="text-4xl md:text-5xl font-black mb-10 text-white">
                  <span>월 {item.revenue} </span>
                  <span className="text-slate-600 text-2xl font-bold">만 원</span>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                <div className="mt-12 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-edu-orange group-hover:text-edu-black transition-all">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 데이터/증명 */}
      <section className="py-24 bg-white text-edu-black w-screen">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-black leading-none mb-8">
              시술자의 90%는<br />
              <span className="text-edu-orange italic uppercase">'시술'</span>에서 멈춥니다.
            </h2>
            <p className="text-2xl text-slate-600 font-bold leading-tight">
              당신은 나머지 10%, <br />
              수익 구조를 설계하는 CEO가 되어야 합니다.
            </p>
          </div>
          <div className="flex-none bg-edu-black text-white p-12 rounded-[3rem] text-center w-full md:w-80">
            <div className="text-edu-orange text-7xl font-black mb-2 animate-pulse">90%</div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm italic py-4 border-t border-white/10">Stopped here</p>
          </div>
        </div>
      </section>

      {/* 7. 결과/비포애프터 */}
      <section className="py-32 bg-edu-black w-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter">Results & Proof</h2>
            <p className="text-slate-500 text-xl">말로만 떠드는 것이 아닌, 압도적 결과물로 증명합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20 px-4 md:px-10">
            <div className="space-y-6">
              <div className="aspect-video bg-white/5 rounded-3xl overflow-hidden border border-white/10 relative group">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-edu-black/80 backdrop-blur rounded-lg text-xs font-bold uppercase text-white">Before / After</div>
                <img src="/smp-b-a-1.png" alt="SMP Before After" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <p className="text-center text-slate-400 font-medium italic underline decoration-edu-orange/30 decoration-2">부드러운 그라데이션과 압도적인 밀도 보정</p>
            </div>
            <div className="space-y-6">
              <div className="aspect-video bg-white/5 rounded-3xl overflow-hidden border border-white/10 relative group">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-edu-black/80 backdrop-blur rounded-lg text-xs font-bold uppercase text-white">Hairline Detail</div>
                <img src="/smp-b-a-2.png" alt="Hairline Practice" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <p className="text-center text-slate-400 font-medium italic underline decoration-edu-orange/30 decoration-2">자연스러운 헤어라인과 미세한 가마 정밀 작업</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 커리큘럼 */}
      <section className="py-32 bg-edu-black border-t border-white/5 w-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-black mb-6">TWO-TRACK CURRICULUM</h2>
            <p className="text-edu-orange font-bold text-xl uppercase tracking-widest">기술은 기본, 경영까지 다루는 올인원 마스터 클래스</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 rounded-[3.5rem] bg-white text-edu-black border-4 border-white shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 bg-edu-black text-white rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase text-edu-black">기술 커리큘럼</h3>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] italic">Technique Track</p>
                </div>
              </div>
              <ul className="space-y-6">
                {[
                  { t: "SMP 실패 원인", d: "색 번짐, 탈색, 부자연스러움의 근본 해결" },
                  { t: "머신 & 니들 사이언스", d: "가장 적합한 장비와 색소 조합 로직" },
                  { t: "실전 기술 트레이닝", d: "고무판부터 마네킹, 실제 임상까지의 전 과정" }
                ].map((item, i) => (
                  <li key={i} className="group">
                    <p className="text-xl font-black mb-1 group-hover:text-edu-orange transition-colors text-edu-black">· {item.t}</p>
                    <p className="text-slate-500 font-medium ml-4 text-sm">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-12 rounded-[3.5rem] bg-edu-orange text-edu-black border-4 border-edu-orange shadow-[0_20px_50px_rgba(255,107,0,0.2)]">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 bg-edu-black text-white rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black uppercase text-edu-black">경영 커리큘럼</h3>
                  <p className="text-edu-black/60 font-bold uppercase tracking-widest text-[10px] italic">Business Track</p>
                </div>
              </div>
              <ul className="space-y-6">
                {[
                  { t: "자동 유입 마케팅", d: "인스타, 블로그, 플레이스 상위 노출 전략" },
                  { t: "고단가 상담 클로징", d: "90% 계약을 만드는 CRM & 상담 화법" },
                  { t: "SaaS 기반 시스템", d: "카톡, 플레이스, CRM 연동 자동화 세팅" },
                  { t: "퍼스널 브랜딩", d: "시술자에서 뷰티 CEO로의 이미지 구축" }
                ].map((item, i) => (
                  <li key={i} className="group">
                    <p className="text-xl font-black mb-1 group-hover:text-white transition-colors text-edu-black">· {item.t}</p>
                    <p className="text-edu-black/60 font-medium ml-4 text-sm">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 무료 웨비나 섹션 */}
      <section className="py-40 bg-edu-black relative overflow-hidden w-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-edu-orange/5 rounded-full blur-[150px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-edu-orange to-orange-600 text-edu-black text-center shadow-[0_30px_100px_rgba(255,107,0,0.3)]"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edu-black text-edu-orange text-sm font-black mb-10">
              <PlayCircle className="w-5 h-5 fill-current" />
              <span>LIMITED FREE SESSION</span>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black leading-tight mb-12 uppercase italic tracking-tighter text-edu-black">
              월 1,000만원 구조,<br />
              무료 웨비나에서 공개합니다
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 text-left mb-16">
              {[
                "내 현재 위치 정밀 진단",
                "기술만으로 한계에 부딪히는 이유",
                "카리스만의 고단가 구조 전격 공개",
                "성공하는 경영 커리큘럼 핵심 가이드"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-edu-black/10 p-5 rounded-2xl border border-black/5">
                  <CheckCircle2 className="w-6 h-6 text-edu-black" />
                  <span className="font-bold text-sm md:text-base text-edu-black">{item}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-8 bg-edu-black text-edu-orange font-black text-3xl rounded-3xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4">
              무료 웨비나 지금 신청하기
              <ArrowRight className="w-8 h-8" />
            </button>
            <p className="mt-8 text-edu-black/60 font-medium">선착순 인원 마감 시 조기 종료될 수 있습니다.</p>
          </motion.div>
        </div>
      </section>

      {/* 10. 유료 전환 */}
      <section className="py-32 bg-edu-black border-t border-white/5 w-screen">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tight">전문가 과정 안내</h2>
          <div className="max-w-xl mx-auto p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-20 h-20 bg-edu-orange/10 text-edu-orange rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black mb-4">뷰티 CEO 전문가 과정</h3>
            <p className="text-slate-400 mb-10 leading-relaxed font-medium">단순 수강생이 아닌, 지역을 대표하는 <br />뷰티 브랜드의 수장을 양성합니다.</p>
            
            <div className="space-y-4 mb-10">
              {[
                ["Benefit 01", "당일 신청 특별 할인"],
                ["Benefit 02", "원장님 직접 1:1 컨설팅"],
                ["Benefit 03", "SaaS 자동화 시스템 세팅 포함"]
              ].map(([tag, content], i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 text-xs uppercase italic tracking-widest px-8">
                  <span className="text-slate-500 font-bold">{tag}</span>
                  <span className="font-black text-white">{content}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-6 bg-white text-edu-black font-black text-xl rounded-2xl hover:bg-slate-200 transition-all">
              교육 상세 상담 요청하기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center text-slate-600 bg-edu-black w-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6 text-white">
            <Target className="w-6 h-6 text-edu-orange" />
            <span className="font-black uppercase tracking-tighter text-slate-300 text-xl">Charis Beauty Academy</span>
          </div>
          <p className="text-xs font-medium">대표: 카리스뷰티 원장 | 사업자등록번호: 준비중</p>
          <p className="text-[10px] mt-2 opacity-50 italic uppercase tracking-[0.2em]">© 2024 Charis Beauty Academy. Empowering Future Beauty CEOs.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
