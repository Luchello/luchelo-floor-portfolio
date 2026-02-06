import { AnimateIn } from '../hooks/useScrollAnimation'

export default function About() {
  const strengths = [
    { icon: '🏗️', title: '현장 경험', desc: '다양한 현장에서 쌓은 실전 노하우' },
    { icon: '📐', title: '정밀 시공', desc: '꼼꼼한 작업으로 깔끔한 마감' },
    { icon: '💬', title: '소통 중시', desc: '진행 상황 수시 공유, 투명한 견적' },
    { icon: '🛡️', title: '책임 시공', desc: '하자 발생 시 신속한 AS 대응' },
  ]

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 bg-cream-100/50">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-accent font-medium text-xs sm:text-sm tracking-widest uppercase">About Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-dark-900 section-header tracking-wide">
              대성몰탈을 소개합니다
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-cream-200/80 mb-10 sm:mb-12">
            <div className="space-y-4 text-dark-600 leading-loose text-base sm:text-lg text-center max-w-3xl mx-auto">
              <p>
                안녕하세요, <strong className="text-dark-800">대성몰탈</strong>입니다.
              </p>
              <p>
                충청권과 경기도권을 중심으로 방통, 재물 등 
                바닥미장 전반에 걸친 시공을 전문으로 하고 있습니다.
              </p>
              <p>
                현장마다 상황이 다르기에, 직접 방문하여 바닥 상태를 확인한 후
                가장 적합한 공법과 재료를 제안드립니다.
              </p>
              <p className="text-accent font-semibold pt-2">
                현장 방문 견적은 무료입니다. 부담 없이 연락 주세요.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Separator */}
        <div className="section-divider mb-10 sm:mb-12" aria-hidden="true" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {strengths.map((item, i) => (
            <AnimateIn key={item.title} delay={200 + i * 100}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-cream-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all h-full">
                <span className="text-2xl sm:text-3xl block mb-2 sm:mb-3" aria-hidden="true">{item.icon}</span>
                <h3 className="font-bold text-dark-800 mb-1 text-sm sm:text-base">{item.title}</h3>
                <p className="text-dark-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
