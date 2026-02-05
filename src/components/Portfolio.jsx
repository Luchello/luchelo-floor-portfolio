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
    desc: '10년 보증 옥상 우레탄 방수 시공',
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
    area: '1200㎡',
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
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            시공 사례
          </h2>
          <p className="text-concrete-500 mt-4">
            직접 시공한 현장의 결과물을 확인하세요
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-accent text-white shadow-md shadow-accent/20'
                  : 'bg-concrete-100 text-concrete-600 hover:bg-concrete-200'
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
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image placeholder with Before/After concept */}
              <div className="relative aspect-[4/3] bg-concrete-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-concrete-300/30" />
                
                {/* Before/After slider placeholder */}
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-concrete-300/50 flex items-center justify-center border-r-2 border-white/50">
                    <span className="text-concrete-500 text-xs font-medium bg-white/80 px-3 py-1 rounded-full">Before</span>
                  </div>
                  <div className="w-1/2 bg-accent/10 flex items-center justify-center">
                    <span className="text-accent-dark text-xs font-medium bg-white/80 px-3 py-1 rounded-full">After</span>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-concrete-700 text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-concrete-500 text-sm mb-4">{project.desc}</p>
                <div className="flex items-center gap-4 text-xs text-concrete-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                    {project.area}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {project.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
