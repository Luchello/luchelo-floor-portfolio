import { AnimateIn } from '../hooks/useScrollAnimation'

export default function About() {
  const strengths = [
    { icon: '🏗️', title: '현장 경험', desc: '다양한 현장에서 쌓은 실전 노하우' },
    { icon: '📐', title: '정밀 시공', desc: '꼼꼼한 작업으로 깔끔한 마감' },
    { icon: '💬', title: '소통 중시', desc: '진행 상황 수시 공유, 투명한 견적' },
    { icon: '🛡️', title: '책임 시공', desc: '하자 발생 시 신속한 AS 대응' },
  ]

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 bg-cream-100/50">
      <div className="max-w-5xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-accent font-medium text-xs sm:text-sm tracking-widest uppercase">About Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-dark-900 section-header tracking-wide">
              대성몰탈을 소개합니다
            </h2>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-cream-200/80 mb-10 sm:mb-12">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img src="./photos/hanok-trowel.webp" alt="시공 현장 사진" className="w-full h-full object-cover min-h-[250px]" />
              </div>
              <div className="p-6 sm:p-8 md:p-12 md:w-3/5">
                <div className="space-y-5 text-dark-600 leading-[1.8] text-base sm:text-lg text-left max-w-2xl text-dark-700">
                  <p>
                    안녕하세요, <strong className="text-dark-800">대성몰탈</strong>입니다.
                  </p>
                  <p>
                    10년 넘게 현장을 뛰며 방통, 재물 작업을 해왔습니다.
                    충청권과 경기도권을 중심으로 움직이고 있고요,
                    큰 공장부터 작은 주택 보수까지 다양하게 경험했습니다.
                  </p>
                  <p>
                    바닥은 현장마다 상태가 다릅니다.
                    그래서 저희는 직접 가서 보고, 필요한 공법과 재료를 말씀드려요.
                    괜히 과하게 잡거나 빼먹는 일 없이, 딱 필요한 만큼만 안내드립니다.
                  </p>
                  <p className="text-accent font-semibold pt-2">
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Separator */}
        <div className="section-divider mb-10 sm:mb-12" aria-hidden="true" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {strengths.map((item, i) => (
            <AnimateIn key={item.title} delay={200 + i * 100}>
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-cream-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all h-full">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3 mx-auto"><span className="text-xl" aria-hidden="true">{item.icon}</span></div>
                <h3 className="font-bold text-dark-800 mb-1 text-sm sm:text-base">{item.title}</h3>
                <p className="text-dark-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
