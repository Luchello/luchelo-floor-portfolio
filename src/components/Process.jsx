import { AnimateIn } from '../hooks/useScrollAnimation'

const steps = [
  {
    num: '01',
    title: '전화 또는 카카오톡 문의',
    desc: '현장 주소와 필요한 작업 내용을 알려주세요. 바닥 사진이 있으면 더 정확한 상담이 가능합니다.',
    icon: '📋',
  },
  {
    num: '02',
    title: '현장 방문 및 견적',
    desc: '직접 방문하여 바닥 상태와 면적을 확인하고, 방통 또는 재물 시공 견적을 안내드립니다.',
    icon: '📐',
  },
  {
    num: '03',
    title: '바닥 정리 및 준비 작업',
    desc: '기존 바닥을 깨끗하게 정리하고, 배관 상태 확인 및 레벨 체크를 진행합니다.',
    icon: '🔧',
  },
  {
    num: '04',
    title: '방통 또는 재물 시공',
    desc: '몰탈 펌프로 방통을 시공하거나, 파워트라웰로 재물 마감을 진행합니다. 수평을 꼼꼼히 확인하며 작업합니다.',
    icon: '⚒️',
  },
  {
    num: '05',
    title: '양생 및 검수',
    desc: '충분한 양생 시간을 거친 후 함께 최종 확인합니다. 하자 발생 시 즉시 대응합니다.',
    icon: '✅',
  },
]

export default function Process() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-dark-900 overflow-hidden" aria-labelledby="process-heading">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-accent font-medium text-xs sm:text-sm tracking-widest uppercase">Process</span>
            <h2 id="process-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-white">
              시공 진행 순서
            </h2>
          </div>
        </AnimateIn>

        <ol className="space-y-4 sm:space-y-5" aria-label="시공 진행 단계">
          {steps.map((step, i) => (
            <AnimateIn key={step.num} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
              <li className="flex gap-3 sm:gap-5 items-start group">
                <div 
                  className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-dark-800 border border-dark-700 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:border-accent/50 transition-colors"
                  aria-hidden="true"
                >
                  <span className="text-accent font-bold font-mono text-sm sm:text-base">{step.num}</span>
                </div>
                <div className="flex-1 bg-dark-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-dark-700/50 group-hover:border-accent/20 transition-colors">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <span className="text-xl sm:text-2xl" aria-hidden="true">{step.icon}</span>
                    <h3 className="text-base sm:text-lg font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-dark-400 leading-relaxed text-sm sm:text-base">{step.desc}</p>
                </div>
              </li>
            </AnimateIn>
          ))}
        </ol>
      </div>
    </section>
  )
}
