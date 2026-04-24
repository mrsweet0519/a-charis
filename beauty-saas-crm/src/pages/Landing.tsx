import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import {
  BadgeCheck,
  Brain,
  Check,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Crown,
  HeartHandshake,
  Quote,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';

import { CTAButton } from '../components/landing/CTAButton';
import {
  CapturePlaceholder,
  PhotoWallPlaceholder,
  SplitVisualPlaceholder,
  VideoSlotPlaceholder,
} from '../components/landing/MediaPlaceholders';
import { Reveal } from '../components/landing/Reveal';

const WEBINAR_CTA = '#webinar';
const FINAL_CTA = '#final-apply';
const DEADLINE = new Date('2026-05-10T23:59:59+09:00').getTime();

const empathyChecklist = [
  '시술도 내가',
  '상담도 내가',
  'CS도 내가',
  '세금도 내가',
  '광고도 내가',
  '고객 설득도 내가',
  '아이 케어까지 내가',
];

const storyTimeline = [
  {
    title: '처음엔 기술이면 되는 줄 알았습니다',
    text: '좋은 결과만 만들면 예약도 자연스럽게 늘어날 거라고 믿었습니다.',
  },
  {
    title: '광고비를 써도 신청은 생각보다 쉽게 늘지 않았습니다',
    text: '보는 사람은 많았지만, 실제 문의와 결제는 늘 답답했습니다.',
  },
  {
    title: '상담, CS, 세금, 운영까지 혼자 감당하며 지쳤습니다',
    text: '대표의 하루가 시술보다 잡무와 걱정으로 가득 차기 시작했습니다.',
  },
  {
    title: '결국 문제는 기술이 아니라 경영 구조였습니다',
    text: '고객이 이해하는 방식, 움직이는 구조, 오래 버티는 시스템이 필요했습니다.',
  },
  {
    title: '그래서 카리스뷰티는 기술과 경영, 워킹맘 마인드셋을 함께 다룹니다',
    text: '혼자 버티는 원장이 아니라 시스템으로 운영하는 대표가 되도록 설계했습니다.',
  },
];

const differentiationCards = [
  {
    icon: Sparkles,
    title: '결',
    text: '결과가 보이는 시술 퀄리티와 고단가를 만드는 표현력',
  },
  {
    icon: CircleDollarSign,
    title: '세금',
    text: '1인샵 대표가 반드시 알아야 할 기본 돈 관리 감각',
  },
  {
    icon: HeartHandshake,
    title: 'CS',
    text: '고객 응대부터 재방문 구조까지 이어지는 운영 디테일',
  },
  {
    icon: Brain,
    title: '워킹맘 마인드셋',
    text: '지치지 않고 오래 운영하기 위한 기준과 루틴',
  },
];

const resultCases = [
  {
    label: '숱채움',
    title: '비어 보이던 인상이 자연스럽게 채워지는 설계',
    text: '고객이 이해하기 쉬운 결과컷과 설명 구조가 함께 필요합니다.',
  },
  {
    label: '무삭발 전체커버',
    title: '고민이 큰 고객일수록 전후 설득 구조가 먼저입니다',
    text: '결과를 먼저 보여줘야 상담도 빠르게 움직입니다.',
  },
  {
    label: '흉터커버',
    title: '민감한 케이스일수록 신뢰를 주는 자료가 필요합니다',
    text: '시술컷과 설명 문장이 함께 있어야 문의가 이어집니다.',
  },
  {
    label: '헤어라인',
    title: '작은 변화도 삶의 인상을 바꾸는 카테고리',
    text: '섬세한 결과 표현과 고객 언어로 풀어내는 상담 구조가 중요합니다.',
  },
  {
    label: '가마',
    title: '고객이 즉시 이해하는 카테고리는 전환도 빠릅니다',
    text: '비교 사진과 짧은 영상이 강한 설득 포인트가 됩니다.',
  },
];

const solutionSteps = [
  {
    step: 'STEP 1',
    title: '결이 보이는 기술',
    text: '고객이 한눈에 이해하는 결과 표현을 만듭니다.',
  },
  {
    step: 'STEP 2',
    title: '상담과 CS 구조',
    text: '문의가 신청으로 이어지는 응대 흐름을 만듭니다.',
  },
  {
    step: 'STEP 3',
    title: '브랜딩과 운영 시스템',
    text: '대표 혼자 버티지 않아도 되는 운영 습관을 만듭니다.',
  },
];

const technicalCurriculum = [
  {
    title: '이론',
    items: ['D, L 차이', '색소 이해', '니들 선택 기준'],
  },
  {
    title: '기술전수',
    items: ['파지', '고무판', '마네킹', '임상 프로세스'],
  },
  {
    title: '콘텐츠',
    items: ['AB 사진 콘텐츠 제공', 'L 차별점 설명', '결과 전달 문장'],
  },
];

const businessCurriculum = [
  '경영철학',
  '자본주의 기본 감각',
  '마케팅 구조',
  '상담 + CRM',
  '마케팅 SaaS 프로그램 세팅',
  '카톡채널 유입',
  '플레이스 운영',
];

const mindsetPoints = [
  '시간 관리',
  '감정 소진 줄이기',
  '아이와 일 사이에서 무너지지 않는 기준',
  '1인샵 대표로 오래 가는 루틴',
];

const reviewNotes = [
  {
    title: '아이 키우며 시간 없던 원장',
    quote: '기술 이야기만 듣는 줄 알았는데 상담과 운영 기준이 같이 잡히니까 훨씬 덜 불안해졌어요.',
  },
  {
    title: '광고비는 쓰는데 신청이 안 들어오던 원장',
    quote: '고객이 이해하는 순서로 정리하니 문의 톤이 달라졌고, 상담이 훨씬 수월해졌습니다.',
  },
  {
    title: '매출은 있는데 늘 지쳐 있던 워킹맘 원장',
    quote: '일 잘하는 법보다 버티는 구조를 배운 느낌이라 오래 갈 수 있겠다는 확신이 생겼어요.',
  },
];

const webinarSteps = [
  '내 위치 진단',
  '왜 기술만으로는 안 되는가',
  '결로 고단가를 만드는 구조',
  '경영 커리큘럼 소개',
];

const paidSalesPoints = [
  '뷰티 CEO 과정 구조 안내',
  '당일 신청 혜택 소개',
  '세일즈 + Q&A 연결',
];

function getCountdown(targetTime: number) {
  const remaining = Math.max(targetTime - Date.now(), 0);
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  return [
    { label: 'days', value: String(days).padStart(2, '0') },
    { label: 'hours', value: String(hours).padStart(2, '0') },
    { label: 'mins', value: String(minutes).padStart(2, '0') },
    { label: 'secs', value: String(seconds).padStart(2, '0') },
  ];
}

function SectionEyebrow({
  children,
  tone = 'dark',
}: {
  children: ReactNode;
  tone?: 'dark' | 'light';
}) {
  const isLight = tone === 'light';

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] ${
        isLight
          ? 'border-black/10 bg-white/70 text-[#8A6910]'
          : 'border-[#D4AF37]/20 bg-[#111111] text-[#F5E6B3]'
      }`}
    >
      <BadgeCheck className={`h-3.5 w-3.5 ${isLight ? 'text-[#C79A1B]' : 'text-[#D4AF37]'}`} />
      <span>{children}</span>
    </div>
  );
}

function Container({
  children,
  className = '',
  width = 'narrow',
}: {
  children: ReactNode;
  className?: string;
  width?: 'narrow' | 'medium' | 'wide';
}) {
  const widths = {
    narrow: 'max-w-[820px]',
    medium: 'max-w-[940px]',
    wide: 'max-w-[1080px]',
  };

  return <div className={`mx-auto ${widths[width]} ${className}`.trim()}>{children}</div>;
}

function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_22px_80px_rgba(0,0,0,0.26)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}

function LightCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[2rem] border border-black/8 bg-white/82 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.08)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}

function StopCopy({
  eyebrow,
  title,
  subtitle,
  tone = 'dark',
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  tone?: 'dark' | 'light';
}) {
  const isLight = tone === 'light';

  return (
    <section
      className={`px-5 py-20 sm:px-6 sm:py-24 lg:py-32 ${
        isLight ? 'bg-[#F7F0DE] text-[#111111]' : 'bg-black text-white'
      }`}
    >
      <Container width="narrow">
        <Reveal>
          <div className="flex min-h-[62vh] flex-col justify-center">
            <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>
            <h2
              className={`mt-8 text-[3rem] font-semibold leading-[1.04] tracking-[-0.04em] sm:text-[4rem] lg:text-[5rem] ${
                isLight ? 'text-[#111111]' : 'text-white'
              }`}
            >
              {title}
            </h2>
            {subtitle ? (
              <p
                className={`mt-6 max-w-[620px] text-lg leading-8 ${
                  isLight ? 'text-[#3A352A]' : 'text-white/68'
                }`}
              >
                {subtitle}
              </p>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ResultCaseCard({
  label,
  title,
  text,
  index,
}: {
  label: string;
  title: string;
  text: string;
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <Reveal delay={index * 0.04}>
      <div
        className={`grid gap-5 rounded-[2rem] border border-white/10 bg-[#0E0E0E] p-5 sm:p-6 ${
          reverse ? 'lg:grid-cols-[1.04fr_0.96fr]' : 'lg:grid-cols-[0.96fr_1.04fr]'
        }`}
      >
        <div className={reverse ? 'lg:order-2' : ''}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">{label}</p>
          <h3 className="mt-4 text-[2rem] font-semibold leading-tight text-white sm:text-[2.4rem]">
            {title}
          </h3>
          <p className="mt-4 max-w-[520px] text-base leading-7 text-white/68">{text}</p>
        </div>

        <div className={reverse ? 'lg:order-1' : ''}>
          {index === 0 ? (
            <div className="grid gap-3 rounded-[1.6rem] border border-[#D4AF37]/20 bg-[#111111] p-3 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/8 bg-black">
                <div className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                  Before
                </div>
                <img
                  src="/smp-b-a-1.png"
                  alt="Before example"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[1.2rem] border border-[#D4AF37]/20 bg-black">
                <div className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#F5E6B3]">
                  After
                </div>
                <img
                  src="/smp-b-a-2.png"
                  alt="After example"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="rounded-[1.6rem] border border-[#D4AF37]/16 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_38%),#121212] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5E6B3]">
                  Replaceable Slot
                </p>
                <div className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                  image / video
                </div>
              </div>
              <div className="mt-4 flex aspect-[4/3] items-center justify-center rounded-[1.2rem] border border-dashed border-white/12 bg-[#181818] text-center text-sm leading-7 text-white/50">
                {label} 자료 교체 영역
                <br />
                Before / After 또는 짧은 영상 삽입
              </div>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

function ReviewCard({ title, quote }: { title: string; quote: string }) {
  return (
    <GlassCard className="h-full">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#D4AF37]">
            Student Voice
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FEE500] text-black">
          <Quote className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-5 text-base leading-8 text-white/72">“{quote}”</p>
    </GlassCard>
  );
}

export function Landing() {
  const [countdown, setCountdown] = useState(() => getCountdown(DEADLINE));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown(getCountdown(DEADLINE));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const scrollToWebinar = () => {
    document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.16),_transparent_20%),radial-gradient(circle_at_82%_10%,_rgba(245,230,179,0.1),_transparent_16%),linear-gradient(180deg,_#000_0%,_#040404_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-black/75 backdrop-blur-xl">
        <Container width="wide" className="flex items-center justify-between px-5 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#111111] text-[#D4AF37]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#D4AF37]">
                Charis Beauty
              </p>
              <p className="hidden text-sm text-white/55 sm:block">Lecture Sales Detail Page</p>
            </div>
          </div>
          <CTAButton href={WEBINAR_CTA} label="무료 웨비나 신청하기" className="hidden sm:inline-flex" />
        </Container>
      </header>

      <main className="pb-28 sm:pb-0">
        <section className="px-5 py-14 sm:px-6 sm:py-18 lg:py-24">
          <Container width="wide">
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <Reveal>
                <div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr]">
                  <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#1A1A1A_0%,#0D0D0D_100%)] p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F5E6B3]">Before</p>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                        stress mode
                      </span>
                    </div>
                    <div className="mt-5 flex aspect-[4/5] flex-col justify-between rounded-[1.5rem] border border-white/8 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.1),_transparent_36%),#121212] p-5">
                      <div className="space-y-3">
                        {['상담 미답장', '광고비 부담', '세금 걱정', '육아와 일정 충돌'].map((item) => (
                          <div
                            key={item}
                            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/74"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
                          스트레스받는 1인샵 대표
                        </p>
                        <p className="mt-3 text-2xl font-semibold leading-tight text-white">
                          기술은 있는데
                          <span className="block">운영은 점점 무거워지는 상태</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#0D0D0D] p-3">
                    <div className="relative overflow-hidden rounded-[1.65rem]">
                      <div className="absolute left-4 top-4 z-10 rounded-full border border-[#D4AF37]/20 bg-black/45 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5E6B3] backdrop-blur">
                        After
                      </div>
                      <div className="absolute bottom-4 left-4 z-10 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                        여유 있는 워킹맘 대표
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      <img
                        src="/edu-hero-instructor.png"
                        alt="Relaxed working mom owner"
                        className="h-[30rem] w-full object-cover object-top sm:h-[34rem]"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <SectionEyebrow>01. Hero</SectionEyebrow>
                <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.34em] text-[#D4AF37]">
                  Lecture Sales Detail
                </p>
                <h1 className="mt-5 max-w-[620px] text-[2.85rem] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-[3.8rem] lg:text-[4.6rem]">
                  <span className="block">기술만 배우면 될 줄 알았던</span>
                  <span className="block">1인샵 대표님께</span>
                  <span className="mt-2 block text-[#F5E6B3]">이제는 두피문신도 경영으로 배워야 합니다</span>
                </h1>
                <p className="mt-6 max-w-[620px] text-lg leading-8 text-white/72">
                  결, 세금, CS, 상담, 브랜딩, 워킹맘 마인드셋까지.
                  혼자 버티는 원장이 아니라 시스템으로 운영하는 대표가 되는 법.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <CTAButton href={WEBINAR_CTA} label="무료 웨비나 신청하기" />
                  <CTAButton href="#result-first" label="결과 먼저 보기" variant="secondary" />
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    ['기술', '보이는 결과'],
                    ['경영', '움직이는 구조'],
                    ['마인드셋', '오래 가는 대표'],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-[1.35rem] border border-white/10 bg-[#101010] px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/70">{body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <Container width="narrow">
            <Reveal>
              <SectionEyebrow>02. 공감</SectionEyebrow>
              <h2 className="mt-7 text-[2.8rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[3.8rem]">
                혹시 지금,
                <span className="block text-[#F5E6B3]">혼자 다 하고 있지 않나요?</span>
              </h2>
            </Reveal>

            <div className="mt-8 space-y-3">
              {empathyChecklist.map((item, index) => (
                <Reveal key={item} delay={index * 0.04}>
                  <div className="flex items-center justify-between gap-4 rounded-[1.45rem] border border-white/10 bg-[#111111] px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-lg text-white">{item}</p>
                    </div>
                    <span className="text-sm uppercase tracking-[0.18em] text-white/28">ME</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <StopCopy
          eyebrow="03. 문제 압박"
          title={
            <>
              이건 실력 문제가 아닙니다.
              <span className="mt-2 block text-[#F5E6B3]">혼자 버티는 구조의 문제입니다.</span>
            </>
          }
          subtitle="기술이 부족해서가 아니라, 대표 혼자 모든 역할을 떠안는 구조라서 점점 지치고 멈추는 것입니다."
        />

        <section className="bg-[#F7F0DE] px-5 py-16 text-[#111111] sm:px-6 sm:py-20 lg:py-24">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow tone="light">04. 내 스토리</SectionEyebrow>
              <h2 className="mt-7 text-[2.7rem] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[3.6rem]">
                처음엔 기술이면 되는 줄 알았습니다.
              </h2>
              <p className="mt-5 max-w-[620px] text-lg leading-8 text-[#3E382B]">
                하지만 오래 가는 대표는 실력만이 아니라 구조를 갖춘 사람이라는 걸 알게 됐습니다.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {storyTimeline.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <LightCard className="relative overflow-hidden">
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-black/8" />
                    <div className="relative pl-10">
                      <div className="absolute left-[14px] top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                        <span className="text-[10px] font-bold">{index + 1}</span>
                      </div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#A37B15]">
                        Story Beat
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold leading-tight">{item.title}</h3>
                      <p className="mt-3 text-base leading-7 text-[#453F34]">{item.text}</p>
                    </div>
                  </LightCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>05. 차별점</SectionEyebrow>
              <h2 className="mt-7 text-[2.8rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[3.8rem]">
                카리스뷰티 웨비나는
                <span className="block text-[#F5E6B3]">기술만 말하지 않습니다.</span>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {differentiationCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <Reveal key={card.title} delay={index * 0.05}>
                    <GlassCard className={index === 0 ? 'border-[#D4AF37]/22 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_40%),#111111]' : 'bg-[#111111]'}>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#F5E6B3]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-3xl font-semibold text-white">{card.title}</h3>
                      <p className="mt-3 text-base leading-7 text-white/68">{card.text}</p>
                    </GlassCard>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:py-24" id="result-first">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>06. 점 VS 결</SectionEyebrow>
              <h2 className="mt-7 text-[2.8rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[3.8rem]">
                점으로 찍는 시술과
                <span className="block text-[#F5E6B3]">결로 보이는 시술은 다릅니다.</span>
              </h2>
              <p className="mt-5 max-w-[640px] text-lg leading-8 text-white/68">
                고객은 전문가의 언어보다, 눈으로 이해되는 결과 차이를 먼저 봅니다.
              </p>
            </Reveal>

            <Reveal delay={0.05} className="mt-10">
              <SplitVisualPlaceholder
                title="점 VS 결 비교 비주얼"
                description="나중에 실제 비교 이미지와 타이트샷으로 바로 교체할 수 있게 분리한 영역입니다."
              />
            </Reveal>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal>
                <GlassCard>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                    Tight Shot
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">타이트샷은 결과의 설득력을 올립니다</h3>
                  <div className="mt-5 flex aspect-[4/3] items-center justify-center rounded-[1.4rem] border border-dashed border-white/12 bg-[#151515] text-center text-sm leading-7 text-white/48">
                    타이트샷 확대 이미지 교체 영역
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.05}>
                <GlassCard>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                    Compare Table
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      ['보이는 인상', '균일한 점감', '자연스러운 결감'],
                      ['고객 이해도', '설명이 필요함', '한눈에 이해됨'],
                      ['상담 전환', '가격 질문 중심', '결과 질문 중심'],
                      ['브랜딩 인상', '시술자 느낌', '대표 브랜드 느낌'],
                    ].map(([label, left, right]) => (
                      <div key={label} className="grid grid-cols-[0.8fr_1fr_1fr] gap-3 rounded-[1rem] bg-[#111111] px-4 py-3 text-sm">
                        <span className="text-white/42">{label}</span>
                        <span className="text-white/70">{left}</span>
                        <span className="font-medium text-[#F5E6B3]">{right}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="bg-[#080808] px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>07. 결과 먼저</SectionEyebrow>
              <h2 className="mt-7 text-[2.8rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[3.8rem]">
                설명보다 먼저,
                <span className="block text-[#F5E6B3]">결과를 보여줘야 움직입니다.</span>
              </h2>
            </Reveal>

            <div className="mt-10 space-y-5">
              {resultCases.map((item, index) => (
                <ResultCaseCard key={item.label} {...item} index={index} />
              ))}
            </div>
          </Container>
        </section>

        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>08. 짧은 영상</SectionEyebrow>
              <h2 className="mt-7 text-[2.7rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[3.6rem]">
                짧은 영상은
                <span className="block text-[#F5E6B3]">고객의 이해 속도를 높입니다.</span>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {[
                ['가마', '짧은 시연 영상 교체 영역'],
                ['흉터', '짧은 시연 영상 교체 영역'],
                ['헤어라인', '짧은 시연 영상 교체 영역'],
              ].map(([title, description], index) => (
                <Reveal key={title} delay={index * 0.05}>
                  <VideoSlotPlaceholder title={title} description={description} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <StopCopy
          eyebrow="09. 다시 문제 압박"
          title={
            <>
              기술을 배워도 매출이 안 나는 이유.
              <span className="mt-2 block text-[#F5E6B3]">고객이 이해하지 못하면 신청하지 않기 때문입니다.</span>
            </>
          }
          subtitle="신청은 실력보다 먼저, 보여지는 구조에서 시작됩니다."
          tone="light"
        />

        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <Container width="narrow">
            <Reveal>
              <SectionEyebrow>10. 해결 구조</SectionEyebrow>
              <h2 className="mt-7 text-[2.8rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[3.8rem]">
                이제는 기술자가 아니라
                <span className="block text-[#F5E6B3]">대표로 배워야 합니다.</span>
              </h2>
            </Reveal>

            <div className="mt-10 space-y-4">
              {solutionSteps.map((item, index) => (
                <Reveal key={item.step} delay={index * 0.05}>
                  <GlassCard className={index === 1 ? 'border-[#D4AF37]/22 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_44%),#111111]' : 'bg-[#111111]'}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">{item.step}</p>
                    <h3 className="mt-4 text-[2rem] font-semibold leading-tight text-white sm:text-[2.4rem]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-[520px] text-base leading-7 text-white/68">{item.text}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#F7F0DE] px-5 py-16 text-[#111111] sm:px-6 sm:py-20 lg:py-24">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow tone="light">11. 기술 커리큘럼</SectionEyebrow>
              <h2 className="mt-7 text-[2.75rem] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[3.7rem]">
                기술도
                <span className="block text-[#8A6910]">결과 중심으로 다시 배웁니다.</span>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {technicalCurriculum.map((block, index) => (
                <Reveal key={block.title} delay={index * 0.05}>
                  <LightCard>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#A37B15]">
                      Technical Block
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">{block.title}</h3>
                    <div className="mt-5 space-y-3">
                      {block.items.map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-[1rem] bg-black/[0.04] px-4 py-3">
                          <CheckCircle2 className="mt-1 h-4 w-4 text-[#C79A1B]" />
                          <p className="text-sm leading-6 text-[#403A30]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </LightCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>12. 경영 커리큘럼</SectionEyebrow>
              <h2 className="mt-7 text-[2.75rem] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[3.7rem]">
                두피문신도
                <span className="block text-[#F5E6B3]">경영으로 배워야 오래 갑니다.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.05} className="mt-10">
              <GlassCard className="bg-[#101010]">
                <div className="grid gap-3 sm:grid-cols-2">
                  {businessCurriculum.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-[1.1rem] border border-white/8 bg-[#151515] px-4 py-4"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-xs font-semibold text-[#F5E6B3]">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-6 text-white/74">{item}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </Container>
        </section>

        <section className="bg-[#F7F0DE] px-5 py-16 text-[#111111] sm:px-6 sm:py-20 lg:py-24">
          <Container width="narrow">
            <Reveal>
              <SectionEyebrow tone="light">13. 워킹맘 마인드셋</SectionEyebrow>
              <h2 className="mt-7 text-[2.85rem] font-semibold leading-[1.06] tracking-[-0.04em] sm:text-[3.8rem]">
                잘하고 싶은 마음만으로는
                <span className="block text-[#8A6910]">오래 버티기 어렵습니다.</span>
              </h2>
              <p className="mt-5 max-w-[620px] text-lg leading-8 text-[#3E382B]">
                워킹맘 대표는 더 잘하는 법보다, 무너지지 않는 기준과 루틴이 필요합니다.
              </p>
            </Reveal>

            <div className="mt-10 space-y-3">
              {mindsetPoints.map((item, index) => (
                <Reveal key={item} delay={index * 0.05}>
                  <LightCard className="flex items-center gap-4 py-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
                      <Clock3 className="h-5 w-5" />
                    </div>
                    <p className="text-lg leading-7">{item}</p>
                  </LightCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>14. 후기 / 증거</SectionEyebrow>
              <h2 className="mt-7 text-[2.8rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[3.8rem]">
                고객은 이해한 만큼 움직이고,
                <span className="block text-[#F5E6B3]">증거를 본 만큼 신뢰합니다.</span>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {reviewNotes.map((note, index) => (
                <Reveal key={note.title} delay={index * 0.05}>
                  <ReviewCard {...note} />
                </Reveal>
              ))}
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <Reveal>
                <CapturePlaceholder
                  title="카톡 문의 캡처"
                  description="실제 문의 톤과 상담 흐름을 보여줄 수 있는 자리입니다."
                />
              </Reveal>
              <Reveal delay={0.05}>
                <CapturePlaceholder
                  title="캐나다 / 지방 문의 캡처"
                  description="거리와 지역을 넘어 문의가 들어온다는 신뢰 자료 영역입니다."
                />
              </Reveal>
              <Reveal delay={0.1}>
                <CapturePlaceholder
                  title="매출 인증 캡처"
                  description="결과가 실제 숫자로 이어진다는 증거를 교체할 수 있습니다."
                />
              </Reveal>
            </div>

            <Reveal delay={0.05} className="mt-6">
              <PhotoWallPlaceholder
                title="강의 현장 사진 8장"
                description="현장감, 신뢰감, 실제 운영 분위기를 보여주는 사진 벽입니다."
              />
            </Reveal>
          </Container>
        </section>

        <section id="webinar" className="bg-[#080808] px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>15. 무료 웨비나</SectionEyebrow>
              <h2 className="mt-7 text-[2.8rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[3.8rem]">
                무료 웨비나 한 번으로
                <span className="block text-[#F5E6B3]">내 위치와 다음 단계가 선명해집니다.</span>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
              <Reveal>
                <GlassCard className="bg-[#111111]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                    Webinar Flow
                  </p>
                  <div className="mt-5 space-y-3">
                    {webinarSteps.map((item, index) => (
                      <div key={item} className="flex items-start gap-4 rounded-[1.15rem] border border-white/8 bg-[#151515] px-4 py-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-sm font-semibold text-[#F5E6B3]">
                          {index + 1}
                        </div>
                        <p className="pt-1 text-base leading-7 text-white/76">{item}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.05}>
                <GlassCard className="border-[#D4AF37]/22 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_34%),linear-gradient(135deg,_#171717_0%,_#0A0A0A_60%,_#050505_100%)]">
                  <div className="flex flex-wrap gap-3">
                    <div className="inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5E6B3]">
                      선착순 50명
                    </div>
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-[#121212] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/76">
                      이번 기수 마감 임박
                    </div>
                  </div>

                  <h3 className="mt-5 text-[2rem] font-semibold leading-tight text-white">
                    지금 신청해야
                    <span className="block text-[#F5E6B3]">구조를 놓치지 않습니다.</span>
                  </h3>
                  <p className="mt-4 text-base leading-7 text-white/68">
                    기술만으로 버티는 방식에서 벗어나고 싶다면, 지금 구조를 이해하는 시간이 먼저입니다.
                  </p>

                  <div className="mt-6 grid grid-cols-4 gap-3">
                    {countdown.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.1rem] border border-white/10 bg-[#111111] px-3 py-4 text-center"
                      >
                        <div className="text-2xl font-semibold text-white">{item.value}</div>
                        <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-4">
                    <CTAButton href={WEBINAR_CTA} label="무료 웨비나 신청하기" />
                    <p className="text-sm leading-6 text-white/55">혼자 버티는 원장에서 시스템으로 운영하는 대표로 넘어가는 첫 단계</p>
                  </div>
                </GlassCard>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
          <Container width="narrow">
            <Reveal>
              <SectionEyebrow>16. 유료 세일즈 연결</SectionEyebrow>
              <h2 className="mt-7 text-[2.8rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:text-[3.8rem]">
                웨비나 이후에는
                <span className="block text-[#F5E6B3]">뷰티 CEO 과정으로 연결됩니다.</span>
              </h2>
              <p className="mt-5 max-w-[620px] text-lg leading-8 text-white/68">
                기술, 운영, 상담, 마케팅을 한 번에 정리하고 싶은 대표를 위한 다음 단계입니다.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {paidSalesPoints.map((item, index) => (
                <Reveal key={item} delay={index * 0.05}>
                  <GlassCard className="flex items-center gap-4 bg-[#101010] py-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 text-[#F5E6B3]">
                      {index === 0 ? <Crown className="h-5 w-5" /> : index === 1 ? <Star className="h-5 w-5" /> : <Users className="h-5 w-5" />}
                    </div>
                    <p className="text-lg leading-7 text-white">{item}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section id="final-apply" className="px-5 py-16 sm:px-6 sm:py-20 lg:py-28">
          <Container width="narrow">
            <Reveal>
              <GlassCard className="border-[#D4AF37]/24 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.2),_transparent_34%),linear-gradient(135deg,_#161616_0%,_#080808_58%,_#050505_100%)] p-7 sm:p-10">
                <SectionEyebrow>17. 최종 CTA</SectionEyebrow>
                <h2 className="mt-7 text-[3rem] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-[4rem]">
                  혼자 버티는 원장에서,
                  <span className="block text-[#F5E6B3]">시스템으로 운영하는 대표로 넘어가세요.</span>
                </h2>
                <p className="mt-6 max-w-[620px] text-lg leading-8 text-white/68">
                  기술만으로는 부족합니다. 이제는 두피문신도 경영으로 배워야 오래 살아남습니다.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <CTAButton href={WEBINAR_CTA} label="무료 웨비나 신청하기" />
                  <CTAButton href={FINAL_CTA} label="다시 한 번 확인하기" variant="secondary" />
                </div>
              </GlassCard>
            </Reveal>
          </Container>
        </section>
      </main>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] px-5 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 sm:hidden">
        <div className="mx-auto max-w-md rounded-[1.5rem] border border-[#D4AF37]/15 bg-black/78 p-2 shadow-[0_-10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <button
            type="button"
            onClick={scrollToWebinar}
            className="pointer-events-auto flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E6B3] to-[#C9A227] px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-transform duration-300 active:scale-[0.98]"
          >
            <span>무료 웨비나 신청하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
