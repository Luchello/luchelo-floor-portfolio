import { useState } from 'react'
import { AnimateIn } from '../hooks/useScrollAnimation'
import LazyImage from './LazyImage'
import Lightbox from './Lightbox'

const equipment = [
  {
    photo: './photos/trowels-pair.jpg',
    name: '파워 트라웰 (Subaru EX17)',
    desc: '재물 마감 핵심 장비. 넓은 면적을 빠르게 평탄하게 만듭니다.',
    title: '파워 트라웰 (Subaru EX17)',
    story: '재물 마감 핵심 장비. 넓은 면적을 빠르게 평탄하게 만듭니다. Subaru 엔진으로 힘이 좋아요.',
  },
  {
    photo: './photos/pump-truck.jpg',
    name: '몰탈 펌프차',
    desc: '몰탈을 현장까지 압송합니다. 고층이나 먼 거리도 OK.',
    title: '몰탈 펌프차',
    story: '몰탈을 현장까지 압송합니다. 고층이나 먼 거리도 호스로 연결해서 작업 가능해요.',
  },
  {
    photo: './photos/bongo-site.jpg',
    name: '현장 장비차',
    desc: '트라웰, 호스, 공구 다 싣고 어디든 갑니다.',
    title: '현장 장비차',
    story: '트라웰, 호스, 공구 다 싣고 어디든 갑니다. 장비 대여 없이 바로 작업 시작해요.',
  },
  {
    photo: './photos/power-trowel.jpg',
    name: '핸드 트라웰',
    desc: '모서리나 좁은 곳 마감용. 큰 트라웰이 못 가는 데 씁니다.',
    title: '핸드 트라웰',
    story: '모서리나 좁은 곳 마감용. 큰 파워 트라웰이 못 들어가는 곳에서 활약합니다.',
  },
]

export default function Equipment() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="equipment" className="py-24 sm:py-32 px-4 sm:px-6 bg-cream-100/50 equipment-bg" aria-labelledby="equipment-heading">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-accent font-medium text-xs sm:text-sm tracking-widest uppercase">Equipment</span>
            <h2 id="equipment-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-dark-900 section-header tracking-wide inline-flex items-center gap-3 justify-center">
              보유 장비
              <span className="text-sm font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">
                자체 보유 4대
              </span>
            </h2>
            <p className="text-dark-500 mt-3 text-sm sm:text-base leading-loose">
              자체 장비로 빠르고 정확한 시공이 가능합니다
            </p>
          </div>
        </AnimateIn>

        {/* 2-col on mobile, 2-col on sm, 4-col on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {equipment.map((item, i) => (
            <AnimateIn key={item.name} delay={i * 100}>
              <article
                className="relative group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cream-200/80 shadow-sm hover:shadow-md hover:border-accent/30 hover:-translate-y-1 transition-all h-full cursor-pointer"
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openLightbox(i)
                  }
                }}
                aria-label={`${item.name} 사진 크게 보기`}
              >
                <div className="absolute top-3 left-3 z-10 w-7 h-7 bg-accent/90 rounded-full flex items-center justify-center"><span className="text-white text-xs font-bold">{i + 1}</span></div>
                <div className="img-zoom-container">
                  <LazyImage
                    src={item.photo}
                    alt={`${item.name} - 대성몰탈 보유 장비`}
                    className="aspect-[4/3] img-zoom"
                  />
                </div>
                <div className="p-3 sm:p-5">
                  <h3 className="font-bold text-dark-800 text-xs sm:text-sm mb-1">{item.name}</h3>
                  <p className="text-dark-500 text-xs leading-relaxed hidden sm:block">{item.desc}</p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={equipment}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  )
}
