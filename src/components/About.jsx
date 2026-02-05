export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-concrete-200 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-concrete-300/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-concrete-500">
                  <svg className="w-16 h-16 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <p className="text-sm">프로필 사진</p>
                </div>
              </div>
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/20 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div>
            <span className="text-accent font-medium text-sm tracking-wider uppercase">About</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              대성몰탈입니다
            </h2>
            <div className="space-y-4 text-concrete-600 leading-relaxed">
              <p>
                수도권에서 바닥 미장 일을 하고 있습니다.
                에폭시, 우레탄, 셀프레벨링 같은 작업들을 주로 합니다.
              </p>
              <p>
                공장이나 주차장, 옥상 방수부터 아파트 셀프레벨링까지
                현장마다 조건이 다 다르더라고요.
                그래서 먼저 현장 보고 어떤 방법이 맞을지 상의드립니다.
              </p>
              <p>
                시공 후에 문제 생기면 저도 난감하고 손님도 곤란하잖아요.
                그래서 하지 작업이랑 수평 잡는 거 신경 많이 씁니다.
                제대로 하면 오래 갑니다.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: '🏗️', title: '수도권 전역', desc: '서울 경기 인천' },
                { icon: '🔧', title: '다양한 시공', desc: '에폭시/셀프레벨링/방수' },
                { icon: '📋', title: '현장 상담', desc: '직접 보고 견적' },
                { icon: '🤝', title: 'A/S', desc: '시공 후 관리' },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-xl p-4 shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-semibold mt-2 text-sm">{item.title}</h3>
                  <p className="text-concrete-500 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
