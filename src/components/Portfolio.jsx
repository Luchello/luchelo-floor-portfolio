import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: '대규모 바닥 타설',
    category: '바닥미장',
    area: '대형 현장',
    desc: '넓은 면적의 산업용 바닥 타설 및 마감 시공',
    photo: './photos/slab-finish.jpg',
  },
  {
    id: 2,
    title: '철근 배근 및 콘크리트 타설',
    category: '바닥미장',
    area: '대형 현장',
    desc: '철근 배근 후 펌프카를 활용한 콘크리트 타설 작업',
    photo: './photos/rebar-pour.jpg',
  },
  {
    id: 3,
    title: '바닥 마감 작업',
    category: '바닥미장',
    area: '실내',
    desc: '파워 트라웰을 활용한 정밀 바닥 마감',
    photo: './photos/power-trowel.jpg',
  },
  {
    id: 4,
    title: '펌프카 타설 현장',
    category: '바닥미장',
    area: '대형 현장',
    desc: '대규모 현장 콘크리트 펌프카 타설',
    photo: './photos/pump-sunset.jpg',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm tracking-wider">PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-dark-900">
            시공 사례
          </h2>
          <p className="text-dark-500 mt-3">
            실제 현장 사진입니다
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <div
              key={project.id}
              className="group bg-cream-50 border border-cream-200/80 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Real photo */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.photo} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-dark-600">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-dark-900 mb-1 text-lg group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-500 text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-dark-400 text-sm">더 많은 시공 사례는 문의 시 안내드립니다</p>
        </div>
      </div>
    </section>
  )
}
