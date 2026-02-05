import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: '강남 카페 폴리싱',
    category: '폴리싱',
    area: '120㎡',
    duration: '3일',
    desc: '콘크리트 폴리싱으로 모던한 카페 분위기 연출',
  },
  {
    id: 2,
    title: '물류 창고 에폭시',
    category: '에폭시',
    area: '800㎡',
    duration: '5일',
    desc: '중차량 통행에도 견디는 고강도 에폭시 시공',
  },
  {
    id: 3,
    title: '신축 아파트 레벨링',
    category: '셀프레벨링',
    area: '85㎡',
    duration: '1일',
    desc: '입주 전 완벽한 수평 마감을 위한 셀프레벨링',
  },
  {
    id: 4,
    title: '옥상 우레탄 방수',
    category: '방수',
    area: '200㎡',
    duration: '2일',
    desc: '누수 걱정 없는 옥상 우레탄 방수 시공',
  },
  {
    id: 5,
    title: '레스토랑 그라인딩',
    category: '폴리싱',
    area: '150㎡',
    duration: '4일',
    desc: '고급 레스토랑을 위한 노출 콘크리트 마감',
  },
  {
    id: 6,
    title: '지하주차장 에폭시',
    category: '에폭시',
    area: '1,200㎡',
    duration: '7일',
    desc: '컬러 구획이 포함된 주차장 에폭시 코팅',
  },
]

const categories = ['전체', '에폭시', '폴리싱', '셀프레벨링', '방수']

export default function Portfolio() {
  const [active, setActive] = useState('전체')

  const filtered = active === '전체'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm tracking-wider">PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-dark-900">
            시공 사례
          </h2>
          <p className="text-dark-500 mt-3">
            지금까지 진행한 작업들입니다
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-accent text-white shadow-sm'
                  : 'bg-cream-100 text-dark-500 hover:bg-cream-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <div
              key={project.id}
              className="group bg-cream-50 border border-cream-200/80 rounded-2xl overflow-hidden hover:shadow-md transition-all"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-cream-200 to-cream-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-dark-600 shadow-sm">
                      {project.category}
                    </span>
                    <p className="text-dark-400 text-xs mt-3">사진 준비 중</p>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-dark-900 mb-1 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-500 text-sm mb-3">{project.desc}</p>
                <div className="flex items-center gap-3 text-xs text-dark-400">
                  <span className="bg-cream-100 px-2 py-1 rounded">{project.area}</span>
                  <span className="bg-cream-100 px-2 py-1 rounded">{project.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
