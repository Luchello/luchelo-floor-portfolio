import { useState } from 'react'
import { AnimateIn } from '../hooks/useScrollAnimation'
import LazyImage from './LazyImage'
import Lightbox from './Lightbox'

const projects = [
  {
    id: 1,
    title: '한옥 옥상 바닥미장',
    category: '재물',
    photo: './photos/hanok-trowel.jpg',
    story: '전통 한옥 위에서 파워트라웰로 옥상 바닥을 잡는 작업. 오래된 것과 새로운 기술이 만나는 순간입니다.',
    location: '충남 공주',
    area: '120㎡',
    featured: true,
  },
  {
    id: 2,
    title: '새벽 콘크리트 작업',
    category: '재물',
    photo: './photos/crew-pouring.jpg',
    story: '해 뜨기 전부터 시작되는 현장. 굳기 전에 팀 전원이 호흡을 맞춰 작업합니다.',
    location: '경기 화성',
    area: '800㎡',
    featured: true,
  },
  {
    id: 3,
    title: '산골 펜션 옥상 마감',
    category: '재물',
    photo: './photos/mountain-trowel.jpg',
    story: '산 속 펜션 옥상에서 해 질 녘까지 이어진 마감 작업. 이런 풍경 속에서 일할 수 있다는 게 이 일의 매력입니다.',
    location: '충북 제천',
    area: '200㎡',
    featured: true,
  },
  {
    id: 4,
    title: '대형 공장 바닥 준비',
    category: '재물',
    photo: './photos/factory-rebar.jpg',
    story: '수천 평 공장 부지의 철근 배근이 끝나고, 펌프카가 대기 중. 대규모 작업의 시작입니다.',
    location: '충남 천안',
    area: '3,000㎡',
  },
  {
    id: 5,
    title: '공장 부지 배근 현장',
    category: '재물',
    photo: './photos/factory-rebar2.jpg',
    location: '충남 아산',
    area: '2,500㎡',
  },
  {
    id: 6,
    title: '대면적 슬래브 마감',
    category: '재물',
    photo: './photos/slab-finish.jpg',
    story: '넓은 면적의 콘크리트가 한 면 한 면 깔끔하게 마감된 모습. 수평이 생명입니다.',
    location: '경기 평택',
    area: '1,500㎡',
  },
  {
    id: 7,
    title: '건물 구조체 작업',
    category: '재물',
    photo: './photos/building-pour.jpg',
    location: '대전 유성',
    area: '600㎡',
  },
  {
    id: 8,
    title: '기초 슬래브 작업',
    category: '재물',
    photo: './photos/foundation-slab.jpg',
    story: '거푸집 안에 시공된 기초 슬래브. 건물의 첫 번째 바닥이 완성되는 순간입니다.',
    location: '세종시',
    area: '450㎡',
  },
  {
    id: 9,
    title: '옥상 바닥 마감',
    category: '재물',
    photo: './photos/rooftop-finish.jpg',
    location: '충남 논산',
    area: '180㎡',
  },
  {
    id: 10,
    title: '펌프카 일몰',
    category: '재물',
    photo: './photos/pump-sunset.jpg',
    story: '하루 일과가 끝나갈 무렵의 펌프카 실루엣. 굳기 전까지 멈출 수 없는 현장의 하루.',
    location: '경기 안성',
    area: '2,000㎡',
  },
  {
    id: 11,
    title: '철근 배근 야간 작업',
    category: '재물',
    photo: './photos/rebar-pour.jpg',
    location: '충남 당진',
    area: '1,200㎡',
  },
]

const categories = ['전체', '방통', '재물']

export default function Portfolio() {
  const [active, setActive] = useState('전체')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filtered = active === '전체'
    ? projects
    : projects.filter(p => p.category === active)

  const openLightbox = (projectId) => {
    const index = filtered.findIndex(p => p.id === projectId)
    if (index !== -1) {
      setLightboxIndex(index)
      setLightboxOpen(true)
    }
  }

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-accent font-medium text-xs sm:text-sm tracking-widest uppercase">Portfolio</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-dark-900 section-header tracking-wide">
              시공 현장
            </h2>
            <p className="text-dark-500 mt-3 text-sm sm:text-base leading-loose">
              직접 작업한 현장 사진입니다
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-10" role="tablist" aria-label="카테고리 필터">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                role="tab"
                aria-selected={active === cat}
                aria-controls="portfolio-grid"
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  active === cat
                    ? 'bg-accent text-white shadow-lg shadow-accent/30 scale-105'
                    : 'bg-cream-100 text-dark-600 hover:bg-cream-200 hover:text-dark-900 hover:shadow-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>

        <div id="portfolio-grid" role="tabpanel">
          <div className="grid gap-5 sm:gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
            {filtered.map((project, i) => (
              <AnimateIn key={project.id} delay={i * 80}>
                <article
                  className="group relative rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(project.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      openLightbox(project.id)
                    }
                  }}
                  aria-label={`${project.title} 사진 크게 보기`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <LazyImage
                      src={project.photo}
                      alt={`${project.title} - ${project.category} 작업 현장`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Always-visible gradient + caption */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                          {project.category}
                        </span>
                        {project.location && (
                          <span className="text-white/80 text-xs">📍 {project.location}</span>
                        )}
                        {project.area && (
                          <span className="text-white/80 text-xs">📐 {project.area}</span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      {project.story && (
                        <p className="text-white/80 text-xs sm:text-sm leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.story}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={filtered}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  )
}
