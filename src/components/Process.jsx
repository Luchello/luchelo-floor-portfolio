import { AnimateIn } from '../hooks/useScrollAnimation'

const steps = [
  {
    num: '01',
    title: '전화 또는 문자 문의',
    desc: '현장 주소, 면적, 어떤 작업이 필요한지 알려주세요. 바닥 사진 보내주시면 대략적인 상담이 바로 가능합니다.',
    icon: (
      <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: '현장 방문 및 견적',
    desc: '직접 가서 바닥 상태, 배관 위치, 레벨 차이를 확인합니다. 방통이 나을지 재물이 나을지 현장에서 판단해서 견적 드려요.',
    icon: (
      <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: '바닥 정리',
    desc: '기존 몰탈 깨기, 자재 치우기, 배관 보호 작업부터 합니다. 깨끗해야 새 바닥이 잘 붙어요.',
    icon: (
      <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: '방통 또는 재물 시공',
    desc: '펌프차로 몰탈 압송해서 방통 치고, 파워트라웰로 면을 잡습니다. 수평기 대가며 꼼꼼히 마감해요.',
    icon: (
      <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '05',
    title: '양생 및 확인',
    desc: '최소 3~5일 양생 후 바닥 상태 같이 확인합니다. 문제 있으면 바로 손봐드려요.',
    icon: (
      <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 px-4 sm:px-6 bg-dark-900 overflow-hidden" aria-labelledby="process-heading">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-accent font-medium text-xs sm:text-sm tracking-widest uppercase">Process</span>
            <h2 id="process-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-white section-header tracking-wide">
              시공 진행 순서
            </h2>
          </div>
        </AnimateIn>

        <ol className="relative space-y-4 sm:space-y-5 mb-12 sm:mb-16" aria-label="시공 진행 단계">
          {/* Connecting vertical line */}
          <div
            className="absolute left-6 sm:left-7 top-14 bottom-14 w-px bg-gradient-to-b from-accent/50 via-dark-700 to-accent/50 hidden sm:block"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <AnimateIn key={step.num} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
              <li className="flex gap-3 sm:gap-5 items-start group relative">
                <div
                  className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-dark-800 border border-dark-700 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors z-10"
                  aria-hidden="true"
                >
                  <span className="text-accent font-bold font-mono text-sm sm:text-base group-hover:text-white">{step.num}</span>
                </div>
                <div className="flex-1 bg-dark-800/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-dark-700/50 group-hover:border-accent/20 transition-colors">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                    <span className="text-accent group-hover:text-white transition-colors" aria-hidden="true">{step.icon}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-dark-400 leading-loose text-sm sm:text-base">{step.desc}</p>
                </div>
              </li>
            </AnimateIn>
          ))}
        </ol>

        <AnimateIn delay={600}>
          <div className="text-center">
            <a
              href="tel:010-5535-7129"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              지금 문의하기
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
