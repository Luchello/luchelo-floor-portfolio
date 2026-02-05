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
    desc: '직접 방문하여 바닥 상태와 면적을 확인하고, 적합한 공법과 견적을 안내드립니다.',
    icon: '📐',
  },
  {
    num: '03',
    title: '바닥 정리 및 하지 보수',
    desc: '기존 바닥을 깨끗하게 정리하고, 크랙 보수 및 프라이머 작업을 진행합니다.',
    icon: '🔧',
  },
  {
    num: '04',
    title: '본 시공',
    desc: '선정된 재료와 공법으로 정밀하게 시공합니다. 두께와 수평을 꼼꼼히 확인하며 작업합니다.',
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
    <section className="py-24 px-6 bg-dark-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider">PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
            시공 진행 순서
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-6 items-start">
              {/* Number */}
              <div className="flex-shrink-0 w-14 h-14 bg-dark-800 border border-dark-700 rounded-xl flex items-center justify-center">
                <span className="text-accent font-bold font-mono">{step.num}</span>
              </div>

              {/* Content */}
              <div className="flex-1 bg-dark-800/50 rounded-xl p-6 border border-dark-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-dark-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
