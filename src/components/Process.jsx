const steps = [
  {
    num: '01',
    title: '상담 & 현장 확인',
    desc: '고객의 요구사항을 듣고 현장을 직접 방문하여 바닥 상태, 환경, 용도를 꼼꼼히 확인합니다.',
    icon: '📋',
  },
  {
    num: '02',
    title: '공법 선정 & 견적',
    desc: '현장 조건에 가장 적합한 공법을 제안하고, 투명한 견적서를 제공합니다.',
    icon: '📐',
  },
  {
    num: '03',
    title: '바닥 준비',
    desc: '기존 바닥의 이물질 제거, 크랙 보수, 프라이머 도포 등 완벽한 하지 처리를 진행합니다.',
    icon: '🔨',
  },
  {
    num: '04',
    title: '본 시공',
    desc: '숙련된 기술로 정밀하게 시공합니다. 수평 체크와 두께 관리를 철저히 합니다.',
    icon: '⚒️',
  },
  {
    num: '05',
    title: '마감 & 검수',
    desc: '양생 후 최종 검수를 진행하며, 고객과 함께 결과를 확인합니다.',
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
            시공 과정
          </h2>
          <p className="text-concrete-400 mt-4 max-w-xl mx-auto">
            체계적인 프로세스로 처음부터 끝까지 완벽하게
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
