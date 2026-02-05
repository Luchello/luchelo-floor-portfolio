const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: '에폭시 코팅',
    desc: '내구성과 미관을 동시에. 공장, 창고, 주차장 등 산업 공간에 최적화된 에폭시 바닥재를 시공합니다.',
    tags: ['산업용', '내구성', '방수'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25L12 17.25 2.25 12l4.179-2.25m11.142 0l4.179 2.25L12 22.5l-9.75-5.25 4.179-2.25" />
      </svg>
    ),
    title: '셀프레벨링',
    desc: '자동으로 수평을 잡는 셀프레벨링 공법. 정밀한 수평이 필요한 바닥에 완벽한 솔루션입니다.',
    tags: ['수평', '정밀', '주거용'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: '폴리싱 / 그라인딩',
    desc: '콘크리트 표면을 연마하여 고급스러운 광택을 냅니다. 카페, 갤러리 등 감각적인 공간에 추천.',
    tags: ['광택', '콘크리트', '디자인'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: '우레탄 방수',
    desc: '옥상, 베란다, 화장실 등 방수가 필수인 공간. 우레탄 도막 방수로 누수 걱정을 끝냅니다.',
    tags: ['방수', '옥상', '화장실'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            전문 시공 서비스
          </h2>
          <p className="text-concrete-500 mt-4 max-w-xl mx-auto">
            현장 환경과 용도에 맞는 최적의 공법을 제안하고 시공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="group bg-warm-50 hover:bg-warm-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-accent/10"
            >
              <div className="text-accent mb-4">{svc.icon}</div>
              <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
              <p className="text-concrete-600 leading-relaxed mb-4">{svc.desc}</p>
              <div className="flex gap-2">
                {svc.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs bg-accent/10 text-accent-dark px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
