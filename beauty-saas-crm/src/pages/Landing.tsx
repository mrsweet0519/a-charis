import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  BadgeCheck,
  Brain,
  Check,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Crown,
  Gem,
  Hand,
  HeartHandshake,
  Megaphone,
  Quote,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Workflow,
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
    text: '좋은 결과만 만들면 예약도 자연스럽게 늘어날 거라 믿었습니다.',
  },
  {
    title: '광고비를 써도 신청은 생각보다 쉽게 늘지 않았습니다',
    text: '보는 사람은 있었지만, 문의와 결제는 늘 답답했습니다.',
  },
  {
    title: '상담, CS, 세금, 운영까지 혼자 감당하며 지쳤습니다',
    text: '대표의 하루가 시술보다 걱정과 잡무로 가득 차기 시작했습니다.',
  },
  {
    title: '결국 문제는 기술이 아니라 경영 구조였습니다',
    text: '고객이 이해하는 순서, 신청이 일어나는 구조, 오래 버티는 시스템이 필요했습니다.',
  },
  {
    title: '그래서 카리스뷰티는 기술, 경영, 워킹맘 마인드셋을 함께 다룹니다',
    text: '혼자 버티는 원장이 아니라 시스템으로 운영하는 대표를 만들기 위해서입니다.',
  },
];

const differentiationCards = [
  {
    icon: Gem,
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
    title: '비어 보이는 인상을 채우는 카테고리',
    text: '결과컷이 먼저 설득하고, 그 다음 상담이 따라옵니다.',
  },
  {
    label: '무삭발 전체커버',
    title: '고민이 큰 고객일수록 결과를 먼저 봅니다',
    text: '긴 설명보다 강한 전후 비교가 더 빨리 움직이게 만듭니다.',
  },
  {
    label: '흉터커버',
    title: '민감한 케이스일수록 신뢰 자료가 필요합니다',
    text: '타이트샷, 후기, 상담 문장이 함께 있어야 문의가 이어집니다.',
  },
  {
    label: '헤어라인',
    title: '작은 변화가 인상을 바꾸는 대표 카테고리',
    text: '섬세한 결과 표현과 고객 언어가 같이 가야 합니다.',
  },
  {
    label: '가마',
    title: '고객이 즉시 이해하는 카테고리는 전환도 빠릅니다',
    text: '짧은 영상과 비교 컷이 가장 강한 설득 포인트가 됩니다.',
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
    text: '대표 혼자 버티지 않아도 되는 운영 기준을 만듭니다.',
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
    quote: '기술만 배우는 줄 알았는데 상담과 운영 기준까지 잡히니까 덜 불안해졌어요.',
  },
  {
    title: '광고비는 쓰는데 신청이 안 들어오던 원장',
    quote: '고객이 이해하는 순서로 정리하니 문의 톤이 달라졌고 상담이 훨씬 수월해졌습니다.',
  },
  {
    title: '매출은 있는데 늘 지쳐 있던 워킹맘 원장',
    quote: '잘하는 법보다 버티는 구조를 배운 느낌이라 오래 갈 수 있겠다는 확신이 생겼어요.',
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
          ? 'border-black/10 bg-white/75 text-[#8A6910]'
          : 'border-[#D4AF37]/20 bg-[#111111] text-[#F5E6B3]'
      }`}
    >
      <BadgeCheck className={`h-3.5 w-3.5 ${isLight ? 'text-[#C79A1B]' : 'text-[#D4AF37]'}`} />
      <span>{children}</span>
    </div>
  );
}

function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}

function LightCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[1.6rem] border border-black/8 bg-white/84 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.08)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}

function Bubble({
  children,
  tone = 'dark',
  className = '',
}: {
  children: ReactNode;
  tone?: 'dark' | 'light' | 'gold';
  className?: string;
}) {
  const styles =
    tone === 'gold'
      ? 'border-[#D4AF37]/20 bg-[#D4AF37] text-black'
      : tone === 'light'
        ? 'border-black/10 bg-white text-[#171717]'
        : 'border-white/10 bg-[#111111] text-white';

  return (
    <div className={`rounded-[1.25rem] border px-4 py-3 text-sm leading-6 ${styles} ${className}`.trim()}>
      {children}
    </div>
  );
}

function CTAInline({
  label = '지금 무료 신청하기',
  href = WEBINAR_CTA,
  variant = 'primary',
}: {
  label?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
}) {
  return <CTAButton href={href} label={label} variant={variant} className="min-h-14 px-7 text-[15px]" />;
}

function StopSection({
  eyebrow,
  lines,
  tone = 'dark',
  subtitle,
}: {
  eyebrow: string;
  lines: string[];
  tone?: 'dark' | 'light';
  subtitle?: string;
}) {
  const isLight = tone === 'light';

  return (
    <section className={`px-5 py-14 sm:px-6 sm:py-16 lg:py-20 ${isLight ? 'bg-[#F7F0DE]' : 'bg-black'}`}>
      <Container width="narrow">
        <Reveal>
          <div className={`rounded-[2rem] border p-6 sm:p-8 lg:p-10 ${isLight ? 'border-black/10 bg-white/65 text-[#111111]' : 'border-[#D4AF37]/16 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_44%),#0D0D0D] text-white'}`}>
            <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>
            <div className="mt-6 space-y-1">
              {lines.map((line, index) => (
                <p
                  key={line}
                  className={`text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[3.4rem] lg:text-[4.2rem] ${
                    index === lines.length - 1 ? (isLight ? 'text-[#8A6910]' : 'text-[#F5E6B3]') : ''
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
            {subtitle ? (
              <p className={`mt-5 max-w-[580px] text-base leading-7 ${isLight ? 'text-[#3D372D]' : 'text-white/65'}`}>
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
  return (
    <Reveal delay={index * 0.04}>
      <div className="rounded-[1.7rem] border border-white/10 bg-[#0F0F0F] p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Bubble tone="gold" className="font-semibold uppercase tracking-[0.2em]">
            {label}
          </Bubble>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
            <Hand className="h-3.5 w-3.5" />
            고객이 바로 이해하는 장면
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div>
            <h3 className="text-[1.8rem] font-semibold leading-[1.1] text-white sm:text-[2.1rem]">{title}</h3>
            <p className="mt-3 text-base leading-7 text-white/68">{text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Bubble className="text-xs">전후 비교</Bubble>
              <Bubble className="text-xs">짧은 설명</Bubble>
              <Bubble className="text-xs">신뢰 강화</Bubble>
            </div>
          </div>

          <div className="rounded-[1.35rem] border border-[#D4AF37]/14 bg-[#141414] p-3">
            {index === 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[1rem] border border-white/8 bg-black">
                  <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Before
                  </div>
                  <img src="/smp-b-a-1.png" alt="Before example" className="aspect-[4/5] w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-[1rem] border border-[#D4AF37]/20 bg-black">
                  <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5E6B3]">
                    After
                  </div>
                  <img src="/smp-b-a-2.png" alt="After example" className="aspect-[4/5] w-full object-cover" />
                </div>
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1rem] border border-dashed border-white/12 bg-[#1A1A1A] text-center text-sm leading-7 text-white/50">
                {label} 자료 교체 영역
                <br />
                이미지 또는 짧은 영상 삽입
              </div>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ReviewCard({ title, quote }: { title: string; quote: string }) {
  return (
    <GlassCard className="h-full bg-[#111111]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FEE500] text-black">
          <Quote className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Student Story</p>
          <p className="text-base font-semibold text-white">{title}</p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="mr-6 rounded-[1.1rem] bg-[#FEE500] px-4 py-3 text-sm leading-6 text-black">
          {quote}
        </div>
        <div className="ml-10 rounded-[1.1rem] bg-[#1E1E1E] px-4 py-3 text-sm leading-6 text-white/76">
          “기술만으로는 안 된다는 말이 이제야 이해됐어요.”
        </div>
      </div>
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
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.18),_transparent_20%),radial-gradient(circle_at_82%_10%,_rgba(245,230,179,0.08),_transparent_14%),linear-gradient(180deg,_#000_0%,_#050505_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-black/78 backdrop-blur-xl">
        <Container width="wide" className="flex items-center justify-between px-5 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#111111] text-[#D4AF37]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#D4AF37]">Charis Beauty</p>
              <p className="hidden text-sm text-white/55 sm:block">Instagram Sales Landing</p>
            </div>
          </div>
          <CTAInline label="무료 웨비나 신청하기" />
        </Container>
      </header>

      <main className="pb-28 sm:pb-0">
        <section className="px-5 py-10 sm:px-6 sm:py-12 lg:py-16">
          <Container width="wide">
            <div className="grid gap-5 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
              <Reveal>
                <div className="grid gap-3 sm:grid-cols-[0.92fr_1.08fr]">
                  <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,#191919_0%,#0D0D0D_100%)] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#F5E6B3]">Before</p>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                        stress mode
                      </span>
                    </div>
                    <div className="mt-4 rounded-[1.35rem] border border-white/8 bg-[#121212] p-4">
                      <div className="flex flex-wrap gap-2">
                        {['상담 미답장', '광고비 부담', '세금 걱정', '육아와 일정 충돌'].map((item) => (
                          <Bubble key={item} className="py-2 text-xs">
                            {item}
                          </Bubble>
                        ))}
                      </div>
                      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
                        스트레스받는 1인샵 대표
                      </p>
                      <p className="mt-2 text-[2rem] font-semibold leading-[1.08] text-white">
                        기술은 있는데
                        <span className="block">운영은 점점 무거워지는 상태</span>
                      </p>
                      <Bubble className="mt-4 bg-[#171717] text-white/76">
                        혹시 지금도 혼자 다 하고 있지 않나요?
                      </Bubble>
                    </div>
                  </div>

                  <div className="rounded-[1.8rem] border border-[#D4AF37]/18 bg-[#0D0D0D] p-3">
                    <div className="relative overflow-hidden rounded-[1.55rem]">
                      <div className="absolute left-4 top-4 z-10 rounded-full border border-[#D4AF37]/20 bg-black/45 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5E6B3] backdrop-blur">
                        After
                      </div>
                      <div className="absolute right-4 top-4 z-10 rounded-full bg-[#D4AF37] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black">
                        system mode
                      </div>
                      <div className="absolute bottom-4 left-4 z-10 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur">
                        여유 있는 워킹맘 대표
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                      <img
                        src="/edu-hero-instructor.png"
                        alt="여유 있는 워킹맘 대표"
                        className="h-[28rem] w-full object-cover object-top sm:h-[32rem]"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <SectionEyebrow>01. Hero</SectionEyebrow>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-black">
                  <Megaphone className="h-3.5 w-3.5" />
                  광고 랜딩형 상세페이지
                </div>
                <h1 className="mt-5 max-w-[650px] text-[2.85rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-[4rem] lg:text-[4.8rem]">
                  <span className="block">기술만 배우면</span>
                  <span className="block">될 줄 알았던</span>
                  <span className="block">1인샵 대표님께</span>
                  <span className="mt-1 block text-[#F5E6B3]">이제는 두피문신도 경영으로 배워야 합니다</span>
                </h1>

                <div className="mt-5 space-y-3">
                  <Bubble tone="gold" className="text-sm font-semibold">
                    결, 세금, CS, 상담, 브랜딩, 워킹맘 마인드셋까지.
                  </Bubble>
                  <Bubble className="text-sm text-white/74">
                    혼자 버티는 원장이 아니라 시스템으로 운영하는 대표가 되는 법.
                  </Bubble>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <CTAInline label="무료 웨비나 신청하기" />
                  <CTAInline href="#result-first" label="결과 먼저 보기" variant="secondary" />
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ['기술', '보이는 결과'],
                    ['경영', '움직이는 구조'],
                    ['마인드셋', '오래 가는 대표'],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-[1.2rem] border border-white/10 bg-[#101010] px-4 py-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-white/72">{body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
          <Container width="narrow">
            <Reveal>
              <SectionEyebrow>02. 공감</SectionEyebrow>
              <h2 className="mt-5 text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[3.5rem]">
                혹시 지금도
                <span className="block text-[#F5E6B3]">혼자 다 하고 있지 않나요?</span>
              </h2>
              <Bubble className="mt-4 max-w-[580px] text-base">
                “시술도 내가, 상담도 내가, 광고도 내가, 세금도 내가.”
              </Bubble>
            </Reveal>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {empathyChecklist.map((item, index) => (
                <Reveal key={item} delay={index * 0.03}>
                  <div className="flex items-center justify-between rounded-[1.2rem] border border-white/10 bg-[#111111] px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                        <Check className="h-4 w-4" />
                      </div>
                      <p className="text-base text-white">{item}</p>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/28">me</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.08}>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-[1.4rem] border border-[#D4AF37]/16 bg-[radial-gradient(circle_at_left,_rgba(212,175,55,0.12),_transparent_34%),#111111] p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                    <ArrowDownRight className="h-4 w-4" />
                  </div>
                  <p className="max-w-[520px] text-sm leading-6 text-white/74">
                    이 상태 계속 가면, 기술은 쌓여도 대표의 에너지는 먼저 바닥납니다.
                  </p>
                </div>
                <CTAInline label="지금 무료 신청하기" />
              </div>
            </Reveal>
          </Container>
        </section>

        <StopSection
          eyebrow="03. 문제 압박"
          lines={['이건 기술 문제가 아닙니다.', '혼자 버티는 구조의 문제입니다.']}
          subtitle="실력 부족이 아니라, 대표 혼자 모든 역할을 떠안는 구조라서 지치고 멈추는 것입니다."
        />

        <StopSection
          eyebrow="04. 강제 멈춤"
          lines={['기술만으로는', '절대 해결되지 않습니다.']}
          tone="light"
          subtitle="상담, CS, 세금, 운영, 브랜딩까지 함께 바뀌어야 신청과 지속성이 만들어집니다."
        />

        <section className="bg-[#F7F0DE] px-5 py-12 text-[#111111] sm:px-6 sm:py-14 lg:py-16">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow tone="light">05. 내 스토리</SectionEyebrow>
              <h2 className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[3.4rem]">
                저도 처음엔
                <span className="block text-[#8A6910]">기술이면 충분한 줄 알았습니다.</span>
              </h2>
            </Reveal>

            <div className="mt-6 grid gap-3">
              {storyTimeline.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <LightCard className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-[#D4AF37]" />
                    <div className="flex items-start gap-4 pl-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white">
                        <span className="text-[11px] font-semibold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <Bubble tone="light" className="inline-flex border-black/8 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
                          story cut
                        </Bubble>
                        <h3 className="mt-3 text-[1.65rem] font-semibold leading-tight">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-[#463F33]">{item.text}</p>
                      </div>
                    </div>
                  </LightCard>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.06}>
              <div className="mt-5 rounded-[1.4rem] bg-black px-5 py-4 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">결론</p>
                <p className="mt-2 text-[1.6rem] font-semibold leading-tight">
                  이제는 기술자가 아니라,
                  <span className="block text-[#F5E6B3]">대표로 배워야 합니다.</span>
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>06. 차별점</SectionEyebrow>
              <h2 className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[3.4rem]">
                카리스뷰티 웨비나는
                <span className="block text-[#F5E6B3]">기술만 말하지 않습니다.</span>
              </h2>
            </Reveal>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {differentiationCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <Reveal key={card.title} delay={index * 0.04}>
                    <GlassCard className={index === 0 ? 'border-[#D4AF37]/20 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_40%),#111111]' : 'bg-[#111111]'}>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#F5E6B3]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                          핵심 차별점
                        </p>
                      </div>
                      <h3 className="mt-4 text-[1.9rem] font-semibold text-white">{card.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/68">{card.text}</p>
                    </GlassCard>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.08}>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-[1.4rem] border border-[#D4AF37]/18 bg-[#111111] p-4">
                <p className="max-w-[520px] text-sm leading-6 text-white/74">
                  고객은 “잘한다”보다 “이해된다”에서 먼저 움직입니다.
                </p>
                <CTAInline label="구조 먼저 확인하기" />
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="result-first" className="px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>07. 점 VS 결</SectionEyebrow>
              <h2 className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[3.4rem]">
                점으로 찍는 시술과
                <span className="block text-[#F5E6B3]">결로 보이는 시술은 다릅니다.</span>
              </h2>
              <Bubble className="mt-4 max-w-[580px] text-base">
                고객은 설명보다 먼저 눈으로 차이를 느낍니다.
              </Bubble>
            </Reveal>

            <Reveal delay={0.04} className="mt-6">
              <SplitVisualPlaceholder
                title="점 VS 결 비교 비주얼"
                description="비교 이미지, 타이트샷, 결과 중심 자료를 바로 바꿔 넣을 수 있게 만든 구간입니다."
              />
            </Reveal>

            <div className="mt-5 grid gap-3 lg:grid-cols-[1.02fr_0.98fr]">
              <Reveal>
                <GlassCard>
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                    <ScanLine className="h-3.5 w-3.5" />
                    Tight Shot
                  </div>
                  <p className="mt-3 text-[1.7rem] font-semibold leading-tight text-white">
                    타이트샷이 있어야
                    <span className="block text-[#F5E6B3]">결과가 더 또렷하게 보입니다.</span>
                  </p>
                  <div className="mt-4 flex aspect-[4/3] items-center justify-center rounded-[1rem] border border-dashed border-white/12 bg-[#171717] text-center text-sm leading-7 text-white/50">
                    확대 이미지 교체 영역
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.04}>
                <GlassCard>
                  <div className="space-y-2">
                    {[
                      ['보이는 인상', '점감', '결감'],
                      ['고객 이해도', '설명 필요', '바로 이해'],
                      ['상담 전환', '가격 질문', '결과 질문'],
                      ['브랜드 인상', '시술자 느낌', '대표 브랜드 느낌'],
                    ].map(([label, left, right]) => (
                      <div key={label} className="grid grid-cols-[0.82fr_1fr_1fr] gap-2 rounded-[0.95rem] bg-[#131313] px-3 py-3 text-sm">
                        <span className="text-white/38">{label}</span>
                        <span className="text-white/70">{left}</span>
                        <span className="font-semibold text-[#F5E6B3]">{right}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="bg-[#080808] px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>08. 결과 먼저</SectionEyebrow>
              <h2 className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[3.4rem]">
                설명보다 먼저,
                <span className="block text-[#F5E6B3]">결과를 보여줘야 신청합니다.</span>
              </h2>
            </Reveal>

            <div className="mt-6 space-y-3">
              {resultCases.map((item, index) => (
                <ResultCaseCard key={item.label} {...item} index={index} />
              ))}
            </div>

            <Reveal delay={0.06}>
              <div className="mt-5 flex flex-col gap-3 rounded-[1.4rem] border border-[#D4AF37]/18 bg-[#111111] p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[500px] text-sm leading-6 text-white/74">
                  “보이게 정리된 결과”가 있어야 광고도, 상담도, 전환도 빨라집니다.
                </p>
                <CTAInline label="무료로 먼저 확인하기" />
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>09. 짧은 영상</SectionEyebrow>
              <h2 className="mt-5 text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[3.3rem]">
                고객은 긴 설명보다
                <span className="block text-[#F5E6B3]">짧은 시연을 더 빨리 이해합니다.</span>
              </h2>
            </Reveal>

            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {[
                ['가마', '짧은 시연 영상 교체 영역'],
                ['흉터', '짧은 시연 영상 교체 영역'],
                ['헤어라인', '짧은 시연 영상 교체 영역'],
              ].map(([title, description], index) => (
                <Reveal key={title} delay={index * 0.04}>
                  <VideoSlotPlaceholder title={title} description={description} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <StopSection
          eyebrow="10. 다시 압박"
          lines={['이 상태 계속 가면', '대표만 먼저 지칩니다.']}
          subtitle="기술을 더 배우는 것만으로는 해결되지 않습니다. 구조가 먼저 바뀌어야 합니다."
          tone="light"
        />

        <StopSection
          eyebrow="11. 핵심 진단"
          lines={['기술을 배워도 매출이 안 나는 이유.', '고객이 이해하지 못하면 신청하지 않기 때문입니다.']}
          subtitle="신청은 실력보다 먼저, 보여지는 구조에서 시작됩니다."
        />

        <section className="px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
          <Container width="narrow">
            <Reveal>
              <SectionEyebrow>12. 해결 구조</SectionEyebrow>
              <h2 className="mt-5 text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[3.4rem]">
                이제는 기술자가 아니라
                <span className="block text-[#F5E6B3]">대표로 배워야 합니다.</span>
              </h2>
            </Reveal>

            <div className="mt-6 grid gap-3">
              {solutionSteps.map((item, index) => (
                <Reveal key={item.step} delay={index * 0.04}>
                  <GlassCard className={index === 1 ? 'border-[#D4AF37]/22 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_44%),#111111]' : 'bg-[#111111]'}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                        <span className="text-[11px] font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#D4AF37]">{item.step}</p>
                        <h3 className="mt-2 text-[1.9rem] font-semibold leading-tight text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/68">{item.text}</p>
                      </div>
                      {index < solutionSteps.length - 1 ? (
                        <ArrowDownRight className="mt-1 hidden h-5 w-5 text-[#D4AF37] sm:block" />
                      ) : null}
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.05}>
              <div className="mt-5 rounded-[1.4rem] bg-[#D4AF37] px-5 py-4 text-black">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em]">Point</p>
                <p className="mt-2 text-[1.45rem] font-semibold leading-tight">
                  신청은 실력보다 먼저,
                  <span className="block">보여지는 구조에서 시작됩니다.</span>
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="bg-[#F7F0DE] px-5 py-10 text-[#111111] sm:px-6 sm:py-12 lg:py-14">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow tone="light">13. 기술 커리큘럼</SectionEyebrow>
              <h2 className="mt-5 text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[3.3rem]">
                기술도
                <span className="block text-[#8A6910]">결과 중심으로 다시 배웁니다.</span>
              </h2>
            </Reveal>

            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {technicalCurriculum.map((block, index) => (
                <Reveal key={block.title} delay={index * 0.04}>
                  <LightCard>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A37B15]">technical block</p>
                    <h3 className="mt-2 text-[1.75rem] font-semibold">{block.title}</h3>
                    <div className="mt-4 space-y-2">
                      {block.items.map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-[0.95rem] bg-black/[0.04] px-4 py-3">
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

        <section className="px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>14. 경영 커리큘럼</SectionEyebrow>
              <h2 className="mt-5 text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[3.3rem]">
                두피문신도
                <span className="block text-[#F5E6B3]">경영으로 배워야 오래 갑니다.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.04} className="mt-6">
              <GlassCard className="bg-[#101010]">
                <div className="grid gap-3 sm:grid-cols-2">
                  {businessCurriculum.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-[1rem] border border-white/8 bg-[#151515] px-4 py-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37]/10 text-xs font-semibold text-[#F5E6B3]">
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

        <section className="bg-[#F7F0DE] px-5 py-10 text-[#111111] sm:px-6 sm:py-12 lg:py-14">
          <Container width="narrow">
            <Reveal>
              <SectionEyebrow tone="light">15. 워킹맘 마인드셋</SectionEyebrow>
              <h2 className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[3.35rem]">
                잘하고 싶은 마음만으로는
                <span className="block text-[#8A6910]">오래 버티기 어렵습니다.</span>
              </h2>
            </Reveal>

            <div className="mt-6 grid gap-3">
              {mindsetPoints.map((item, index) => (
                <Reveal key={item} delay={index * 0.04}>
                  <LightCard className="flex items-center gap-4 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                      <Clock3 className="h-4 w-4" />
                    </div>
                    <Bubble tone="light" className="flex-1 border-black/8 bg-[#F4E8C9] text-base font-medium">
                      {item}
                    </Bubble>
                  </LightCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>16. 후기 / 증거</SectionEyebrow>
              <h2 className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[3.35rem]">
                고객은 이해한 만큼 움직이고,
                <span className="block text-[#F5E6B3]">증거를 본 만큼 신뢰합니다.</span>
              </h2>
            </Reveal>

            <div className="mt-6 grid gap-3 lg:grid-cols-3">
              {reviewNotes.map((note, index) => (
                <Reveal key={note.title} delay={index * 0.04}>
                  <ReviewCard {...note} />
                </Reveal>
              ))}
            </div>

            <div className="mt-5 grid gap-3 lg:grid-cols-3">
              <Reveal>
                <CapturePlaceholder
                  title="카톡 문의 캡처"
                  description="실제 문의 톤과 상담 흐름을 보여줄 수 있는 자리입니다."
                />
              </Reveal>
              <Reveal delay={0.04}>
                <CapturePlaceholder
                  title="캐나다 / 지방 문의 캡처"
                  description="거리와 지역을 넘어 문의가 들어온다는 신뢰 자료 영역입니다."
                />
              </Reveal>
              <Reveal delay={0.08}>
                <CapturePlaceholder
                  title="매출 인증 캡처"
                  description="결과가 실제 숫자로 이어진다는 증거를 교체할 수 있습니다."
                />
              </Reveal>
            </div>

            <Reveal delay={0.06} className="mt-5">
              <PhotoWallPlaceholder
                title="강의 현장 사진 8장"
                description="현장감과 신뢰감, 실제 운영 분위기를 빠르게 보여주는 사진 벽입니다."
              />
            </Reveal>
          </Container>
        </section>

        <section id="webinar" className="bg-[#080808] px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
          <Container width="medium">
            <Reveal>
              <SectionEyebrow>17. 무료 웨비나</SectionEyebrow>
              <h2 className="mt-5 text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[3.4rem]">
                무료 웨비나 한 번으로
                <span className="block text-[#F5E6B3]">내 위치와 다음 단계가 선명해집니다.</span>
              </h2>
            </Reveal>

            <div className="mt-6 grid gap-4 lg:grid-cols-[0.98fr_1.02fr]">
              <Reveal>
                <GlassCard className="bg-[#111111]">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                    <Workflow className="h-3.5 w-3.5" />
                    webinar flow
                  </div>
                  <div className="mt-4 space-y-2">
                    {webinarSteps.map((item, index) => (
                      <div key={item} className="flex items-start gap-3 rounded-[1rem] border border-white/8 bg-[#151515] px-4 py-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-semibold text-black">
                          {index + 1}
                        </div>
                        <p className="pt-0.5 text-sm leading-7 text-white/76">{item}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.04}>
                <GlassCard className="border-[#D4AF37]/22 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_34%),linear-gradient(135deg,_#171717_0%,_#0A0A0A_60%,_#050505_100%)]">
                  <div className="flex flex-wrap gap-2">
                    <Bubble tone="gold" className="py-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
                      선착순 50명
                    </Bubble>
                    <Bubble className="py-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
                      이번 기수 마감 임박
                    </Bubble>
                  </div>
                  <h3 className="mt-4 text-[2rem] font-semibold leading-[1.05] text-white">
                    지금 신청해야
                    <span className="block text-[#F5E6B3]">구조를 놓치지 않습니다.</span>
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    기술만으로 버티는 방식에서 벗어나고 싶다면, 구조를 이해하는 시간이 먼저입니다.
                  </p>

                  <div className="mt-5 grid grid-cols-4 gap-2">
                    {countdown.map((item) => (
                      <div key={item.label} className="rounded-[1rem] border border-white/10 bg-[#111111] px-3 py-4 text-center">
                        <div className="text-2xl font-semibold text-white">{item.value}</div>
                        <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-col gap-3">
                    <CTAInline label="지금 무료 신청하기" />
                    <Bubble className="text-sm">
                      지금 신청해야 하는 이유: 대표의 시간과 에너지가 더 늦기 전에 구조를 바꿔야 하기 때문입니다.
                    </Bubble>
                  </div>
                </GlassCard>
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="px-5 py-10 sm:px-6 sm:py-12 lg:py-14">
          <Container width="narrow">
            <Reveal>
              <SectionEyebrow>18. 유료 세일즈 연결</SectionEyebrow>
              <h2 className="mt-5 text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[3.3rem]">
                웨비나 이후에는
                <span className="block text-[#F5E6B3]">뷰티 CEO 과정으로 연결됩니다.</span>
              </h2>
            </Reveal>

            <div className="mt-6 grid gap-3">
              {paidSalesPoints.map((item, index) => (
                <Reveal key={item} delay={index * 0.04}>
                  <GlassCard className="flex items-center gap-4 bg-[#101010] py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#F5E6B3]">
                      {index === 0 ? <Crown className="h-4 w-4" /> : index === 1 ? <Star className="h-4 w-4" /> : <Users className="h-4 w-4" />}
                    </div>
                    <p className="text-base leading-7 text-white">{item}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section id="final-apply" className="px-5 py-12 sm:px-6 sm:py-14 lg:py-18">
          <Container width="narrow">
            <Reveal>
              <GlassCard className="border-[#D4AF37]/24 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.24),_transparent_34%),linear-gradient(135deg,_#181818_0%,_#090909_58%,_#050505_100%)] p-6 sm:p-8">
                <SectionEyebrow>19. 최종 CTA</SectionEyebrow>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  마지막 결정 구간
                </div>
                <h2 className="mt-5 text-[2.85rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.9rem]">
                  혼자 버티는 원장에서,
                  <span className="block text-[#F5E6B3]">시스템으로 운영하는 대표로 넘어가세요.</span>
                </h2>
                <p className="mt-5 max-w-[620px] text-base leading-7 text-white/68">
                  기술만으로는 부족합니다. 이제는 두피문신도 경영으로 배워야 오래 살아남습니다.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <CTAInline label="무료 웨비나 신청하기" />
                  <CTAInline href={FINAL_CTA} label="지금 다시 확인하기" variant="secondary" />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <Bubble className="text-sm">기술</Bubble>
                  <Bubble className="text-sm">경영</Bubble>
                  <Bubble className="text-sm">워킹맘 루틴</Bubble>
                </div>
              </GlassCard>
            </Reveal>
          </Container>
        </section>
      </main>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] px-5 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 sm:hidden">
        <div className="mx-auto max-w-md rounded-[1.5rem] border border-[#D4AF37]/15 bg-black/80 p-2 shadow-[0_-10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
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
