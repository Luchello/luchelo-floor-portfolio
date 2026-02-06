import { AnimateIn } from '../hooks/useScrollAnimation'

const services = [
  {
    title: '방통 시공',
    desc: '몰탈을 사용한 바닥 수평 작업. 아파트, 주택, 상가 등 신축 건물의 난방배관 매설 후 바닥 수평을 잡아줍니다.',
    tags: ['아파트', '주택', '상가'],
    icon: '🏠',
  },
  {
    title: '재물 마감',
    desc: '콘크리트 타설 후 표면을 매끄럽게 다듬는 마감 작업. 파워트라웰로 슬래브 표면을 정밀하게 마감합니다.',
    tags: ['콘크리트', '슬래브', '마감'],
    icon: '✨',
  },
  {
    title: '몰탈 펌프 시공',
    desc: '자체 보유 몰탈 펌프차로 고층이나 대면적 현장도 빠르게 시공합니다.',
    tags: ['고층', '대면적', '펌프'],
    icon: '🚛',
  },
  {
    title: '보수 시공',
    desc: '기존 바닥의 크랙 보수, 레벨 보정 등 바닥 상태 개선 작업을 합니다.',
    tags: ['크랙보수', '레벨보정', '리모델링'],
    icon: '🔧',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-accent font-medium text-xs sm:text-sm tracking-widest uppercase">Services</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-dark-900">
              시공 분야
            </h2>
            <p className="text-dark-500 mt-3 max-w-lg mx-auto text-sm sm:text-base">
              현장에 맞는 최적의 공법을 제안드립니다
            </p>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100}>
              <article className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cream-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-accent/20 transition-all h-full">
                <span className="text-3xl sm:text-4xl block mb-4 sm:mb-5" aria-hidden="true">{svc.icon}</span>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-dark-900 group-hover:text-accent transition-colors">
                  {svc.title}
                </h3>
                <p className="text-dark-500 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map(tag => (
                    <span key={tag} className="bg-cream-100 text-dark-600 text-xs font-medium px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
