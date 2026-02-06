import { AnimateIn } from '../hooks/useScrollAnimation'

const steps = [
  {
    num: '01',
    title: '전화 또는 문자 문의',
    desc: '현장 주소, 면적, 어떤 작업이 필요한지 알려주세요. 바닥 사진 보내주시면 대략적인 상담이 바로 가능합니다.',
    icon: '📋',
  },
  {
    num: '02',
    title: '현장 방문 및 견적',
    desc: '직접 가서 바닥 상태, 배관 위치, 레벨 차이를 확인합니다. 방통이 나을지 재물이 나을지 현장에서 판단해서 견적 드려요.',
    icon: '📐',
  },
  {
    num: '03',
    title: '바닥 정리',
    desc: '기존 몰탈 깨기, 자재 치우기, 배관 보호 작업부터 합니다. 깨끗해야 새 바닥이 잘 붙어요.',
    icon: '🔧',
  },
  {
    num: '04',
    title: '방통 또는 재물 시공',
    desc: '펌프차로 몰탈 압송해서 방통 치고, 파워트라웰로 면을 잡습니다. 수평기 대가며 꼼꼼히 마감해요.',
    icon: '⚒️',
  },
  {
    num: '05',
    title: '양생 및 확인',
    desc: '최소 3~5일 양생 후 바닥 상태 같이 확인합니다. 문제 있으면 바로 손봐드려요.',
    icon: '✅',
  },
]

export default function Process() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-dark-900 overflow-hidden" aria-labelledby="process-heading">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-accent font-medium text-xs sm:text-sm tracking-widest uppercase">Process</span>
            <h2 id="process-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-white section-header tracking-wide">
              시공 진행 순서
            </h2>
          </div>
        </AnimateIn>

        <ol className="relative space-y-4 sm:space-y-5" aria-label="시공 진행 단계">
          {/* Connecting vertical line */}
          <div 
            className="absolute left-6 sm:left-7 top-14 bottom-14 w-px bg-gradient-to-b from-accent/50 via-dark-700 to-accent/50 hidden sm:block"
            aria-hidden="true"
          />
          
          {steps.map((step, i) => (
            <AnimateIn key={step.num} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
              <li className="flex gap-3 sm:gap-5 items-start group relative">
                <div 
                  className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-dark-800 border border-dark-700 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:border-accent/50 transition-colors z-10"
                  aria-hidden="true"
                >
                  <span className="text-accent font-bold font-mono text-sm sm:text-base">{step.num}</span>
                </div>
                <div className="flex-1 bg-dark-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-dark-700/50 group-hover:border-accent/20 transition-colors">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <span className="text-xl sm:text-2xl" aria-hidden="true">{step.icon}</span>
                    <h3 className="text-base sm:text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-dark-400 leading-loose text-sm sm:text-base">{step.desc}</p>
                </div>
              </li>
            </AnimateIn>
          ))}
        </ol>
      </div>
    </section>
  )
}
