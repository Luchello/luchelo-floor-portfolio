import { useState } from 'react'
import { AnimateIn } from '../hooks/useScrollAnimation'
import LazyImage from './LazyImage'
import Lightbox from './Lightbox'

const equipment = [
  {
    photo: './photos/trowels-pair.jpg',
    name: '파워 트라웰 (Subaru EX17)',
    desc: '바닥 마감의 핵심 장비. 콘크리트 표면을 매끄럽게 다듬습니다.',
    title: '파워 트라웰 (Subaru EX17)',
    story: '바닥 마감의 핵심 장비. 콘크리트 표면을 매끄럽게 다듬습니다.',
  },
  {
    photo: './photos/pump-truck.jpg',
    name: '몰탈 펌프차',
    desc: '몰탈과 레미탈을 현장까지 압송하는 전용 장비.',
    title: '몰탈 펌프차',
    story: '몰탈과 레미탈을 현장까지 압송하는 전용 장비.',
  },
  {
    photo: './photos/bongo-site.jpg',
    name: '현장 장비차',
    desc: '트라웰, 호스, 공구 일체를 싣고 어디든 출동합니다.',
    title: '현장 장비차',
    story: '트라웰, 호스, 공구 일체를 싣고 어디든 출동합니다.',
  },
  {
    photo: './photos/power-trowel.jpg',
    name: '핸드 트라웰',
    desc: '좁은 공간이나 세밀한 마감이 필요한 곳에서 사용합니다.',
    title: '핸드 트라웰',
    story: '좁은 공간이나 세밀한 마감이 필요한 곳에서 사용합니다.',
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
    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-cream-100/50" aria-labelledby="equipment-heading">
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
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-cream-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all h-full cursor-pointer"
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
