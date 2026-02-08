import { AnimateIn } from '../hooks/useScrollAnimation'

const services = [
  {
    title: '방통 시공',
    desc: '난방배관 묻고 나면 몰탈로 바닥을 채워서 수평을 잡습니다. 아파트, 주택, 상가 다 해봤어요.',
    tags: ['아파트', '주택', '상가'],
    icon: '🏠',
  },
  {
    title: '재물 마감',
    desc: '콘크리트 친 다음에 파워트라웰로 표면을 밀어서 마감합니다. 매끈하게 해야 그 위에 장판이든 타일이든 잘 깔려요.',
    tags: ['콘크리트', '슬래브', '마감'],
    icon: '✨',
  },
  {
    title: '몰탈 펌프 시공',
    desc: '펌프차가 있어서 고층이나 넓은 현장도 빠르게 작업합니다. 호스 연결해서 압송하니까 인력으로 나르는 것보다 훨씬 빨라요.',
    tags: ['고층', '대면적', '펌프'],
    icon: '🚛',
  },
  {
    title: '보수 시공',
    desc: '기존 바닥 갈라지거나 울퉁불퉁한 것 고쳐드립니다. 전체 뜯지 않고 부분 보수도 가능해요.',
    tags: ['크랙보수', '레벨보정', '리모델링'],
    icon: '🔧',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-accent font-medium text-xs sm:text-sm tracking-widest uppercase">Services</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-dark-900 section-header tracking-wide">
              시공 분야
            </h2>
            <p className="text-dark-500 mt-3 max-w-lg mx-auto text-sm sm:text-base leading-loose">
              현장에 맞는 최적의 공법을 제안드립니다
            </p>
          </div>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100}>
              <article className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-cream-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 border-t-4 border-transparent hover:border-accent transition-all duration-300 h-full service-card-border">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 sm:mb-5">
                  <span className="text-2xl sm:text-3xl" aria-hidden="true">{svc.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-dark-900 group-hover:text-accent transition-colors">
                  {svc.title}
                </h3>
                <p className="text-dark-500 leading-loose mb-4 sm:mb-5 text-sm sm:text-base">{svc.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {svc.tags.map(tag => (
                    <span key={tag} className="bg-cream-100 text-dark-600 text-xs font-medium px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="tel:010-5535-7129" className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent-dark transition-colors group/cta">
                  견적 문의하기
                  <svg className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
