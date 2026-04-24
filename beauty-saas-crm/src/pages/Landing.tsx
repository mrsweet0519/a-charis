import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import {
  AlarmClock,
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Brain,
  Check,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Gem,
  Hand,
  HeartHandshake,
  Quote,
  ScanLine,
  ShieldCheck,
  Sparkles,
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

const storyLines = [
  '광고비는 나가고, 문의는 들쭉날쭉했습니다.',
  '상담은 내가 끝까지 다 설명해야 했습니다.',
  'CS와 세금까지 혼자 감당하느라 매일 지쳤습니다.',
  '결국 깨달았습니다.',
  '기술만 배워서는 오래 버틸 수 없다는 것을요.',
];

const differenceCards = [
  {
    icon: Gem,
    title: '결',
    text: '결과가 보이는 시술 퀄리티',
  },
  {
    icon: CircleDollarSign,
    title: '세금',
    text: '1인샵 대표가 알아야 할 돈 관리',
  },
  {
    icon: HeartHandshake,
    title: 'CS',
    text: '상담과 재방문 구조를 만드는 응대',
  },
  {
    icon: Brain,
    title: '워킹맘 마인드셋',
    text: '지치지 않고 오래 가는 운영 기준',
  },
];

const resultCases = [
  {
    title: '숱채움',
    text: '고객은 설명보다 인상이 바뀌는 결과를 먼저 봅니다.',
    kind: 'image',
  },
  {
    title: '무삭발 전체커버',
    text: '고민이 큰 고객일수록 강한 전후 비교가 먼저 필요합니다.',
    kind: 'placeholder',
  },
  {
    title: '흉터커버',
    text: '민감한 케이스일수록 신뢰 자료가 더 중요합니다.',
    kind: 'placeholder',
  },
  {
    title: '헤어라인',
    text: '작은 변화라도 고객은 바로 이해합니다.',
    kind: 'placeholder',
  },
  {
    title: '가마',
    text: '짧은 영상과 결과컷이 상담 시간을 줄입니다.',
    kind: 'placeholder',
  },
];

const solutionSteps = [
  {
    title: '1단계 결이 보이는 기술',
    text: '고객이 바로 이해하는 결과 표현을 만듭니다.',
  },
  {
    title: '2단계 상담과 CS 구조',
    text: '문의가 신청으로 이어지는 흐름을 만듭니다.',
  },
  {
    title: '3단계 브랜딩과 운영 시스템',
    text: '혼자 버티지 않아도 되는 대표의 구조를 만듭니다.',
  },
];

const technicalCurriculum = [
  'D, L 차이',
  '색소, 니들',
  '파지',
  '고무판',
  '마네킹',
  '임상',
  'AB 사진 콘텐츠 제공',
];

const businessCurriculum = [
  '경영철학',
  '자본주의',
  '마케팅',
  '상담 + CRM',
  '카톡채널 유입',
  '플레이스 운영',
  '마케팅 SaaS 프로그램 세팅',
];

const mindsetPoints = [
  '시간 관리',
  '감정 소진 줄이기',
  '아이와 일 사이에서 무너지지 않는 기준',
  '오래 가는 운영 루틴',
];

const reviewCards = [
  {
    name: '아이 키우며 시간 없던 원장',
    quote: '기술만 배우는 줄 알았는데 운영 기준까지 잡히니까 덜 불안해졌어요.',
  },
  {
    name: '광고비는 쓰는데 신청이 안 들어오던 원장',
    quote: '고객이 이해하는 순서로 정리하니 상담이 훨씬 빨라졌습니다.',
  },
  {
    name: '혼자 다 감당하느라 지쳐 있던 워킹맘 원장',
    quote: '잘하는 법보다 버티는 구조를 배운 느낌이라 오래 갈 수 있겠다는 확신이 생겼어요.',
  },
];

const webinarFlow = [
  '내 위치 진단',
  '왜 기술만으로는 안 되는가',
  '결로 고단가 만드는 구조',
  '경영 커리큘럼 소개',
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

function PageContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[720px] ${className}`.trim()}>{children}</div>;
}

function Section({
  children,
  className = '',
  tone = 'dark',
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: 'dark' | 'cream' | 'white';
  id?: string;
}) {
  const toneClass =
    tone === 'cream' ? 'bg-[#F6EED9] text-[#111111]' : tone === 'white' ? 'bg-white text-[#111111]' : 'bg-transparent text-white';

  return (
    <section id={id} className={`px-4 py-8 sm:px-5 sm:py-10 ${toneClass} ${className}`.trim()}>
      <PageContainer>{children}</PageContainer>
    </section>
  );
}

function Eyebrow({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  const isLight = tone === 'light';

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] ${
        isLight
          ? 'border-black/10 bg-white text-[#8B6A12]'
          : 'border-[#D4AF37]/20 bg-[#101010] text-[#F5E6B3]'
      }`}
    >
      <BadgeCheck className={`h-3.5 w-3.5 ${isLight ? 'text-[#C8961F]' : 'text-[#D4AF37]'}`} />
      <span>{children}</span>
    </div>
  );
}

function DarkPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.24)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}

function LightPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[1.6rem] border border-black/8 bg-white/85 p-5 shadow-[0_14px_30px_rgba(0,0,0,0.08)] ${className}`.trim()}
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
  tone?: 'dark' | 'gold' | 'light';
  className?: string;
}) {
  const toneClass =
    tone === 'gold'
      ? 'border-[#D4AF37]/20 bg-[#D4AF37] text-black'
      : tone === 'light'
        ? 'border-black/10 bg-white text-[#111111]'
        : 'border-white/10 bg-[#111111] text-white';

  return <div className={`rounded-[1.2rem] border px-4 py-3 text-sm leading-6 ${toneClass} ${className}`.trim()}>{children}</div>;
}

function StopCopy({
  lines,
  subtitle,
  tone = 'dark',
}: {
  lines: string[];
  subtitle?: string;
  tone?: 'dark' | 'cream';
}) {
  const isLight = tone === 'cream';

  return (
    <Section tone={tone === 'cream' ? 'cream' : 'dark'}>
      <Reveal>
        <div
          className={`rounded-[2rem] border p-6 sm:p-7 ${
            isLight
              ? 'border-black/10 bg-white/70 text-[#111111]'
              : 'border-[#D4AF37]/18 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_38%),#0E0E0E] text-white'
          }`}
        >
          <div className="space-y-1">
            {lines.map((line, index) => (
              <p
                key={line}
                className={`text-[2.5rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-[3.3rem] ${
                  index === lines.length - 1 ? (isLight ? 'text-[#8B6A12]' : 'text-[#F5E6B3]') : ''
                }`}
              >
                {line}
              </p>
            ))}
          </div>
          {subtitle ? (
            <p className={`mt-4 text-base leading-7 ${isLight ? 'text-[#443D31]' : 'text-white/65'}`}>{subtitle}</p>
          ) : null}
        </div>
      </Reveal>
    </Section>
  );
}

function MidCTA({ label = '무료 웨비나 신청하기' }: { label?: string }) {
  return <CTAButton href={WEBINAR_CTA} label={label} className="min-h-14 px-8 text-[15px]" />;
}

function HeroStateCard({
  icon,
  label,
  title,
  bubbles,
  highlight,
  gold = false,
}: {
  icon: ReactNode;
  label: string;
  title: string;
  bubbles: string[];
  highlight: string;
  gold?: boolean;
}) {
  return (
    <div
      className={`rounded-[1.5rem] border p-4 ${
        gold
          ? 'border-[#D4AF37]/25 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_32%),#15120A]'
          : 'border-white/10 bg-[#111111]'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#F5E6B3]">
          {icon}
        </div>
        <div className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${gold ? 'bg-[#D4AF37] text-black' : 'border border-white/10 text-white/55'}`}>
          {label}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {bubbles.map((item) => (
          <Bubble key={item} className="py-2 text-xs">
            {item}
          </Bubble>
        ))}
      </div>
      <p className="mt-4 text-[1.65rem] font-semibold leading-[1.08] text-white">{title}</p>
      <Bubble tone={gold ? 'gold' : 'dark'} className="mt-4 font-medium">
        {highlight}
      </Bubble>
    </div>
  );
}

function ResultCard({
  title,
  text,
  index,
  kind,
}: {
  title: string;
  text: string;
  index: number;
  kind: 'image' | 'placeholder';
}) {
  return (
    <Reveal delay={index * 0.04}>
      <DarkPanel className="bg-[#101010]">
        <div className="flex items-center justify-between gap-3">
          <Bubble tone="gold" className="py-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
            {title}
          </Bubble>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            <Hand className="h-3.5 w-3.5" />
            결과 먼저
          </div>
        </div>
        <p className="mt-3 text-[1.5rem] font-semibold leading-tight text-white">{text}</p>
        <div className="mt-4">
          {kind === 'image' ? (
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.1rem] border border-white/8 bg-black">
                <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  Before
                </div>
                <img src="/smp-b-a-1.png" alt="Before example" className="aspect-[4/5] w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-[1.1rem] border border-[#D4AF37]/20 bg-black">
                <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5E6B3]">
                  After
                </div>
                <img src="/smp-b-a-2.png" alt="After example" className="aspect-[4/5] w-full object-cover" />
              </div>
            </div>
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-[1.2rem] border border-dashed border-white/12 bg-[#181818] text-center text-sm leading-7 text-white/50">
              {title} 자료 교체 영역
              <br />
              이미지 또는 짧은 영상 삽입
            </div>
          )}
        </div>
      </DarkPanel>
    </Reveal>
  );
}

function ReviewBubbleCard({ name, quote }: { name: string; quote: string }) {
  return (
    <DarkPanel className="bg-[#111111]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FEE500] text-black">
          <Quote className="h-4 w-4" />
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">수강생 후기</p>
          <p className="text-base font-semibold text-white">{name}</p>
        </div>
      </div>
      <div className="mt-4 space-y-3">
        <div className="mr-6 rounded-[1.1rem] bg-[#FEE500] px-4 py-3 text-sm leading-6 text-black">{quote}</div>
        <div className="ml-8 rounded-[1.1rem] bg-[#1E1E1E] px-4 py-3 text-sm leading-6 text-white/76">
          “기술만으로는 안 된다는 말이 이제야 이해됐어요.”
        </div>
      </div>
    </DarkPanel>
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
    document.getElementById('webinar')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.18),_transparent_20%),radial-gradient(circle_at_85%_12%,_rgba(245,230,179,0.08),_transparent_15%),linear-gradient(180deg,_#000_0%,_#050505_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-black/80 backdrop-blur-xl">
        <PageContainer className="flex items-center justify-between px-4 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#111111] text-[#D4AF37]">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#D4AF37]">Charis Beauty</p>
          </div>
          <MidCTA label="무료 웨비나 신청하기" />
        </PageContainer>
      </header>

      <main className="pb-28 sm:pb-0">
        <Section>
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-[#0D0D0D] p-5">
              <Eyebrow>01. Hero</Eyebrow>
              <h1 className="mt-5 text-[2.55rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.3rem]">
                기술만 배우면 될 줄 알았던
                <span className="block text-[#F5E6B3]">1인샵 워킹맘 대표님께</span>
              </h1>
              <Bubble tone="gold" className="mt-4 font-semibold">
                스트레스받는 1인샵 대표 → 효율적인 운영 → 여유 있는 워킹맘 대표
              </Bubble>

              <div className="mt-5 space-y-3">
                <HeroStateCard
                  icon={<AlarmClock className="h-4 w-4" />}
                  label="stress mode"
                  title="스트레스받는 1인샵 대표"
                  bubbles={['상담 미답장', '광고비 부담', '세금 걱정']}
                  highlight="혹시 지금도 혼자 다 하고 있지 않나요?"
                />
                <div className="flex justify-center text-[#D4AF37]">
                  <ArrowDown className="h-5 w-5" />
                </div>
                <HeroStateCard
                  icon={<Workflow className="h-4 w-4" />}
                  label="system"
                  title="효율적인 운영"
                  bubbles={['예약 흐름', '상담 구조', 'CS 기준']}
                  highlight="기술만이 아니라 운영 시스템이 정리되기 시작합니다."
                  gold
                />
                <div className="flex justify-center text-[#D4AF37]">
                  <ArrowDown className="h-5 w-5" />
                </div>
                <HeroStateCard
                  icon={<HeartHandshake className="h-4 w-4" />}
                  label="working mom"
                  title="여유 있는 워킹맘 대표"
                  bubbles={['시간 분배', '감정 안정', '지속 가능성']}
                  highlight="혼자 버티는 원장이 아니라 시스템으로 운영하는 대표가 됩니다."
                />
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <MidCTA label="무료 웨비나 신청하기" />
                <Bubble className="text-sm">
                  결, 세금, CS, 상담, 브랜딩, 워킹맘 마인드셋까지 함께 다루는 웨비나입니다.
                </Bubble>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section>
          <Reveal>
            <Eyebrow>02. 공감</Eyebrow>
            <h2 className="mt-5 text-[2.45rem] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[3rem]">
              혹시 지금도
              <span className="block text-[#F5E6B3]">혼자 다 하고 있나요?</span>
            </h2>
          </Reveal>

          <div className="mt-5 grid gap-3">
            {empathyChecklist.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-[#111111] px-4 py-4">
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
            <div className="mt-5 rounded-[1.4rem] border border-[#D4AF37]/16 bg-[radial-gradient(circle_at_left,_rgba(212,175,55,0.14),_transparent_34%),#111111] p-4">
              <Bubble className="font-medium">
                이 상태 계속 가면, 기술은 쌓여도 대표의 에너지는 먼저 바닥납니다.
              </Bubble>
              <div className="mt-4">
                <MidCTA label="지금 무료 신청하기" />
              </div>
            </div>
          </Reveal>
        </Section>

        <StopCopy
          lines={['이건 실력 문제가 아닙니다.', '혼자 버티는 구조의 문제입니다.']}
          subtitle="실력 부족이 아니라, 혼자 모든 역할을 떠안는 구조라서 점점 지치고 멈추는 것입니다."
        />

        <Section tone="cream">
          <Reveal>
            <Eyebrow tone="light">04. 내 스토리</Eyebrow>
            <h2 className="mt-5 text-[2.4rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-[3rem]">
              저도 처음엔
              <span className="block text-[#8B6A12]">기술이면 되는 줄 알았습니다.</span>
            </h2>
          </Reveal>

          <div className="mt-5 space-y-3">
            {storyLines.map((line, index) => (
              <Reveal key={line} delay={index * 0.04}>
                <LightPanel>
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <span className="text-[11px] font-semibold">{index + 1}</span>
                    </div>
                    <Bubble tone="light" className="flex-1 border-black/10 bg-[#F7F1E4] text-base">
                      {line}
                    </Bubble>
                  </div>
                </LightPanel>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section>
          <Reveal>
            <Eyebrow>05. 차별점</Eyebrow>
            <h2 className="mt-5 text-[2.45rem] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[3rem]">
              카리스뷰티 웨비나는
              <span className="block text-[#F5E6B3]">기술만 말하지 않습니다.</span>
            </h2>
          </Reveal>

          <div className="mt-5 grid gap-3">
            {differenceCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <DarkPanel className={index === 0 ? 'border-[#D4AF37]/20 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_34%),#111111]' : 'bg-[#111111]'}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#F5E6B3]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-[1.45rem] font-semibold text-white">{item.title}</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/68">{item.text}</p>
                  </DarkPanel>
                </Reveal>
              );
            })}
          </div>
        </Section>

        <StopCopy
          lines={['기술만으로는 절대 해결되지 않습니다.']}
          tone="cream"
          subtitle="상담, CS, 세금, 운영, 마인드셋까지 함께 바뀌어야 오래 살아남습니다."
        />

        <Section>
          <Reveal>
            <Eyebrow>07. 점 VS 결</Eyebrow>
            <h2 className="mt-5 text-[2.45rem] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[3rem]">
              점으로 찍는 시술과
              <span className="block text-[#F5E6B3]">결로 보이는 시술은 다릅니다.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.04} className="mt-5">
            <SplitVisualPlaceholder
              title="점 VS 결 비교 이미지"
              description="비교 컷, 타이트샷, 실제 결과 이미지를 넣기 쉽게 분리한 구간입니다."
            />
          </Reveal>

          <div className="mt-5 space-y-3">
            <Reveal>
              <DarkPanel>
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  <ScanLine className="h-3.5 w-3.5" />
                  타이트샷
                </div>
                <div className="mt-3 flex aspect-[4/3] items-center justify-center rounded-[1.2rem] border border-dashed border-white/12 bg-[#181818] text-center text-sm leading-7 text-white/50">
                  타이트샷 확대 이미지 교체 영역
                </div>
              </DarkPanel>
            </Reveal>

            <Reveal delay={0.05}>
              <DarkPanel>
                <div className="space-y-2">
                  {[
                    ['보이는 인상', '점감', '결감'],
                    ['고객 이해도', '설명 필요', '바로 이해'],
                    ['상담 전환', '가격 질문', '결과 질문'],
                    ['브랜드 인상', '시술자 느낌', '대표 브랜드 느낌'],
                  ].map(([label, left, right]) => (
                    <div key={label} className="grid grid-cols-[0.8fr_1fr_1fr] gap-2 rounded-[1rem] bg-[#121212] px-3 py-3 text-sm">
                      <span className="text-white/40">{label}</span>
                      <span className="text-white/68">{left}</span>
                      <span className="font-semibold text-[#F5E6B3]">{right}</span>
                    </div>
                  ))}
                </div>
              </DarkPanel>
            </Reveal>
          </div>
        </Section>

        <Section className="bg-[#090909]">
          <Reveal>
            <Eyebrow>08. 결과</Eyebrow>
            <h2 className="mt-5 text-[2.45rem] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[3rem]">
              고객은 설명보다
              <span className="block text-[#F5E6B3]">결과를 먼저 봅니다.</span>
            </h2>
          </Reveal>

          <div className="mt-5 space-y-3">
            {resultCases.map((item, index) => (
              <ResultCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </Section>

        <Section>
          <Reveal>
            <Eyebrow>09. 영상</Eyebrow>
            <h2 className="mt-5 text-[2.45rem] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[3rem]">
              짧은 영상 하나가
              <span className="block text-[#F5E6B3]">상담 시간을 줄입니다.</span>
            </h2>
          </Reveal>

          <div className="mt-5 space-y-3">
            {[
              ['가마 라인 영상', '짧은 시연 영상 교체 영역'],
              ['흉터 라인 영상', '짧은 시연 영상 교체 영역'],
              ['헤어라인 영상', '짧은 시연 영상 교체 영역'],
            ].map(([title, description], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <VideoSlotPlaceholder title={title} description={description} />
              </Reveal>
            ))}
          </div>
        </Section>

        <StopCopy
          lines={['고객이 이해하지 못하면 신청하지 않습니다.']}
          subtitle="신청은 실력보다 먼저, 고객이 이해하는 구조에서 시작됩니다."
        />

        <Section>
          <Reveal>
            <Eyebrow>11. 해결 구조</Eyebrow>
            <h2 className="mt-5 text-[2.45rem] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[3rem]">
              이제는 기술자가 아니라
              <span className="block text-[#F5E6B3]">대표로 배워야 합니다.</span>
            </h2>
          </Reveal>

          <div className="mt-5 space-y-3">
            {solutionSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <DarkPanel className={index === 1 ? 'border-[#D4AF37]/20 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_34%),#111111]' : 'bg-[#111111]'}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-black">
                      <span className="text-[11px] font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-[1.45rem] font-semibold text-white">{step.title}</p>
                      <p className="mt-2 text-sm leading-7 text-white/68">{step.text}</p>
                    </div>
                    {index < solutionSteps.length - 1 ? <ArrowRight className="mt-1 hidden h-5 w-5 text-[#D4AF37] sm:block" /> : null}
                  </div>
                </DarkPanel>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section tone="cream">
          <Reveal>
            <Eyebrow tone="light">12. 기술 커리큘럼</Eyebrow>
            <h2 className="mt-5 text-[2.35rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-[2.9rem]">
              기술도
              <span className="block text-[#8B6A12]">결과 중심으로 다시 배웁니다.</span>
            </h2>
          </Reveal>

          <div className="mt-5 grid gap-3">
            {technicalCurriculum.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <LightPanel className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#C79A1B]" />
                  <p className="text-base text-[#2B261E]">{item}</p>
                </LightPanel>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section>
          <Reveal>
            <Eyebrow>13. 경영 커리큘럼</Eyebrow>
            <h2 className="mt-5 text-[2.35rem] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[2.9rem]">
              두피문신도
              <span className="block text-[#F5E6B3]">경영으로 배워야 오래 갑니다.</span>
            </h2>
          </Reveal>

          <div className="mt-5 grid gap-3">
            {businessCurriculum.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <DarkPanel className="bg-[#101010]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37]/10 text-xs font-semibold text-[#F5E6B3]">
                      {index + 1}
                    </div>
                    <p className="text-base text-white">{item}</p>
                  </div>
                </DarkPanel>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section tone="cream">
          <Reveal>
            <Eyebrow tone="light">14. 워킹맘 마인드셋</Eyebrow>
            <h2 className="mt-5 text-[2.35rem] font-semibold leading-[1] tracking-[-0.05em] sm:text-[2.9rem]">
              일도 아이도
              <span className="block text-[#8B6A12]">놓치고 싶지 않은 대표님께</span>
            </h2>
          </Reveal>

          <div className="mt-5 space-y-3">
            {mindsetPoints.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <LightPanel className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                    <Clock3 className="h-4 w-4" />
                  </div>
                  <Bubble tone="light" className="flex-1 border-black/10 bg-[#F7F1E4] text-base">
                    {item}
                  </Bubble>
                </LightPanel>
              </Reveal>
            ))}
          </div>
        </Section>

        <StopCopy
          lines={['혼자 잘하는 사람보다,', '구조를 가진 사람이 오래 갑니다.']}
          tone="cream"
        />

        <Section>
          <Reveal>
            <Eyebrow>15. 후기 / 증거</Eyebrow>
            <h2 className="mt-5 text-[2.35rem] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[2.9rem]">
              고객은 이해한 만큼 움직이고,
              <span className="block text-[#F5E6B3]">증거를 본 만큼 신뢰합니다.</span>
            </h2>
          </Reveal>

          <div className="mt-5 space-y-3">
            {reviewCards.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.04}>
                <ReviewBubbleCard {...item} />
              </Reveal>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            <Reveal>
              <CapturePlaceholder title="카톡 캡처 스타일" description="실제 문의와 상담 흐름을 보여줄 수 있는 구간입니다." />
            </Reveal>
            <Reveal delay={0.04}>
              <CapturePlaceholder title="지방 문의 / 캐나다 문의" description="거리와 지역을 넘어 문의가 들어온다는 신뢰 자료 영역입니다." />
            </Reveal>
            <Reveal delay={0.08}>
              <CapturePlaceholder title="매출 인증 placeholder" description="결과가 숫자로 이어진다는 증거를 넣을 수 있습니다." />
            </Reveal>
            <Reveal delay={0.12}>
              <PhotoWallPlaceholder title="강의 현장 사진 8장" description="현장감과 신뢰감을 한 번에 보여주는 사진 벽입니다." />
            </Reveal>
          </div>
        </Section>

        <Section id="webinar" className="bg-[#090909]">
          <Reveal>
            <Eyebrow>16. 무료 웨비나 구성</Eyebrow>
            <h2 className="mt-5 text-[2.35rem] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[2.9rem]">
              무료 웨비나 한 번으로
              <span className="block text-[#F5E6B3]">내 위치와 다음 단계가 선명해집니다.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.04} className="mt-5">
            <DarkPanel className="border-[#D4AF37]/20 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_34%),linear-gradient(135deg,_#171717_0%,_#0A0A0A_60%,_#050505_100%)]">
              <div className="flex flex-wrap gap-2">
                <Bubble tone="gold" className="py-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
                  선착순 50명
                </Bubble>
                <Bubble className="py-2 text-[11px] font-semibold uppercase tracking-[0.2em]">
                  이번 기수 마감 임박
                </Bubble>
              </div>
              <div className="mt-5 grid grid-cols-4 gap-2">
                {countdown.map((item) => (
                  <div key={item.label} className="rounded-[1rem] border border-white/10 bg-[#111111] px-3 py-4 text-center">
                    <div className="text-2xl font-semibold text-white">{item.value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-2">
                {webinarFlow.map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-[1rem] border border-white/8 bg-[#151515] px-4 py-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-semibold text-black">
                      {index + 1}
                    </div>
                    <p className="pt-0.5 text-sm leading-7 text-white/76">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <MidCTA label="무료 웨비나 신청하기" />
                <Bubble className="font-medium">
                  지금 신청해야 하는 이유: 대표의 시간과 에너지가 더 늦기 전에 구조를 바꿔야 하기 때문입니다.
                </Bubble>
              </div>
            </DarkPanel>
          </Reveal>
        </Section>

        <Section id="final-apply">
          <Reveal>
            <DarkPanel className="border-[#D4AF37]/24 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.22),_transparent_34%),linear-gradient(135deg,_#171717_0%,_#090909_62%,_#050505_100%)] p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black">
                <ShieldCheck className="h-3.5 w-3.5" />
                최종 CTA
              </div>
              <h2 className="mt-5 text-[2.55rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.1rem]">
                혼자 버티는 원장에서
                <span className="block text-[#F5E6B3]">시스템으로 운영하는 대표로 넘어가세요.</span>
              </h2>
              <Bubble className="mt-4 font-medium">
                이제는 기술자가 아니라 대표로 배워야 합니다.
              </Bubble>
              <div className="mt-5 flex flex-col gap-3">
                <MidCTA label="무료 웨비나 신청하기" />
                <Bubble className="text-sm">
                  기술만으로는 부족합니다. 구조를 가진 사람이 오래 갑니다.
                </Bubble>
              </div>
            </DarkPanel>
          </Reveal>
        </Section>
      </main>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 sm:hidden">
        <div className="mx-auto max-w-[720px] rounded-[1.4rem] border border-[#D4AF37]/15 bg-black/82 p-2 shadow-[0_-10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
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
