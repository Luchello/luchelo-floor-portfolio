import { AnimateIn } from '../hooks/useScrollAnimation'

const services = [
  {
    title: '에폭시 코팅',
    desc: '공장, 창고, 주차장 등 내구성이 필요한 바닥에 시공합니다. 두께와 색상은 현장 상황에 맞춰 선정합니다.',
    tags: ['공장', '창고', '주차장'],
    icon: '🏭',
  },
  {
    title: '셀프레벨링',
    desc: '울퉁불퉁하거나 기울어진 바닥을 평평하게 잡아줍니다. 아파트, 상가 바닥 보수에 많이 사용됩니다.',
    tags: ['수평 보정', '아파트', '상가'],
    icon: '📏',
  },
  {
    title: '폴리싱 / 그라인딩',
    desc: '콘크리트 표면을 연마하여 매끈하게 마감합니다. 카페, 사무실, 전시장 등에서 인기가 높습니다.',
    tags: ['카페', '사무실', '전시장'],
    icon: '✨',
  },
  {
    title: '우레탄 방수',
    desc: '옥상, 베란다, 화장실 등 방수가 필요한 곳에 시공합니다. 누수 걱정 없는 안심 방수.',
    tags: ['옥상', '베란다', '화장실'],
    icon: '🛡️',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-14">
            <span className="text-accent font-medium text-sm tracking-widest uppercase">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-dark-900">
              시공 분야
            </h2>
            <p className="text-dark-500 mt-3 max-w-lg mx-auto">
              현장에 맞는 최적의 공법을 제안드립니다
            </p>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 100}>
              <div className="group bg-white rounded-2xl p-8 border border-cream-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-accent/20 transition-all h-full">
                <span className="text-4xl block mb-5">{svc.icon}</span>
                <h3 className="text-xl font-bold mb-3 text-dark-900 group-hover:text-accent transition-colors">
                  {svc.title}
                </h3>
                <p className="text-dark-500 leading-relaxed mb-5">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map(tag => (
                    <span key={tag} className="bg-cream-100 text-dark-600 text-xs font-medium px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
