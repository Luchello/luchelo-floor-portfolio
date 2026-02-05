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
              장인의 손끝에서<br />
              완성되는 바닥
            </h2>
            <div className="space-y-4 text-concrete-600 leading-relaxed">
              <p>
                안녕하세요. 바닥 미장 전문가 루첼로입니다.
                10년이 넘는 시간 동안 수백 곳의 현장에서 바닥과 마주해왔습니다.
              </p>
              <p>
                바닥은 공간의 기초입니다. 
                눈에 잘 띄지 않지만, 그 위에서 모든 생활이 이루어지죠.
                그래서 저는 한 치의 타협 없이 
                <strong className="text-concrete-800">완벽한 수평, 매끈한 마감</strong>을 추구합니다.
              </p>
              <p>
                에폭시, 우레탄, 셀프레벨링, 폴리싱 — 
                다양한 공법을 현장 조건에 맞게 적용하여
                오래도록 만족하실 수 있는 바닥을 만들어 드립니다.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: '🏗️', title: '현장 경험', desc: '10년 이상의 실무' },
                { icon: '✨', title: '완벽주의', desc: '타협 없는 마감' },
                { icon: '🔧', title: '다양한 공법', desc: '맞춤 솔루션 제공' },
                { icon: '🤝', title: '신뢰', desc: '100% 고객 만족' },
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
