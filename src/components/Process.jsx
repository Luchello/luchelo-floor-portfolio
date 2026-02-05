const steps = [
  {
    num: '01',
    title: '전화 or 카톡',
    desc: '우선 현장 주소랑 어떤 작업인지 대략 듣습니다. 사진 있으면 보내주시면 더 좋아요.',
    icon: '📋',
  },
  {
    num: '02',
    title: '현장 보러 갑니다',
    desc: '직접 가서 바닥 상태 보고 면적 재고 어떻게 할지 얘기 나눕니다. 그 자리에서 견적 알려드립니다.',
    icon: '📐',
  },
  {
    num: '03',
    title: '바닥 청소 & 보수',
    desc: '기존 바닥 깨끗하게 정리하고 금간 데 있으면 메우고 프라이머 칠합니다. 이 과정이 중요합니다.',
    icon: '🔨',
  },
  {
    num: '04',
    title: '시공',
    desc: '재료 섞어서 바닥에 펴 바릅니다. 두께 맞춰서 수평 보면서 작업합니다.',
    icon: '⚒️',
  },
  {
    num: '05',
    title: '굳히고 확인',
    desc: '날씨나 재료마다 마르는 시간이 다릅니다. 다 굳으면 같이 확인하고 정리합니다.',
    icon: '✅',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-concrete-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            진행 순서
          </h2>
          <p className="text-concrete-400 mt-4 max-w-xl mx-auto">
            보통 이렇게 진행됩니다
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-concrete-700" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className={`relative md:flex items-center ${i > 0 ? 'md:mt-16' : ''}`}>
                {/* Left or right based on index */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                  <div className={`bg-concrete-800 rounded-2xl p-8 border border-concrete-700 hover:border-accent/30 transition-all ${
                    i % 2 === 0 ? '' : ''
                  }`}>
                    <span className="text-4xl mb-4 block">{step.icon}</span>
                    <div className="flex items-center gap-3 mb-3 justify-start">
                      <span className="text-accent font-mono text-sm">{step.num}</span>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-concrete-400 leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-concrete-900" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
