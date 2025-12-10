Marginalia

독서 기록부터 인물 관계도까지, 나만의 디지털 독서 공간

📚 프로젝트 소개
PageMark는 독서를 즐기는 사람들을 위한 체계적인 독서 관리 서비스입니다. 아날로그 독서의 감성과 디지털의 편리함을 결합하여, 흩어진 독서 기록을 한 곳에서 관리하고 복잡한 고전문학도 쉽게 읽을 수 있도록 도와줍니다.

🎯 핵심 가치

통합 관리: 흩어진 독서 기록을 한 곳에서 관리
쉬운 독서: 복잡한 고전문학도 인물 관계도로 쉽게 이해
디지털 서재: 나만의 디지털 독서 공간 구축

🎨 디자인 컨셉

컨셉: 아날로그 독서의 감성 + 디지털의 편리함
색상: 베이지 + 다크브라운 (빈티지 무드)
폰트: 세리프체(본문) + 산세리프체(UI)

✨ 주요 기능
Phase 1 (MVP)

✅ 책 검색/추가 (외부 API 연동)
✅ 독서 기록 관리 (읽은/읽는중/읽고싶은)
✅ 독후감 작성 (텍스트 에디터 + 별점)
✅ 문장 저장 (하이라이트 기능)
✅ 기본 통계 (월별 독서량, 읽은 책 수)

Phase 2 (계획)

🔜 인물 관계도 에디터
🔜 AI 이미지 생성 (복잡한 묘사 시각화)
🔜 맞춤형 책 추천 알고리즘

🛠️ 기술 스택
Frontend

Framework: React 19.2.0
Build Tool: Vite 7.2.4
Language: TypeScript 5.9.3
Routing: React Router 7.9.6
Styling: Tailwind CSS 4.1.17
State Management: TanStack Query 5.90.11
Code Quality: ESLint + Prettier

Backend/DB (계획)

Supabase

외부 API

알라딘 도서 API

배포 (계획)

Vercel

📁 프로젝트 구조
marginalia/
├── src/
│   ├── app/                    # 애플리케이션 설정
│   │   ├── layout/            # 레이아웃 컴포넌트
│   │   ├── routes/            # 라우팅 설정
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── features/              # 기능별 모듈
│   │   └── onboard/          # 온보딩
│   └── shared/               # 공유 리소스
│       ├── components/       # 공통 컴포넌트
│       ├── styles/           # 전역 스타일
│       ├── asset/            # 이미지, 폰트 등
│       └── utill/            # 유틸리티 함수
├── public/
├── package.json
├── vite.config.ts
└── tsconfig.json

🚀 시작하기
요구사항

Node.js >= 20.19.0
npm >= 8.0.0

설치
bash# 저장소 클론
git clone [repository-url]
cd marginalia

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
스크립트
bash# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 린트 검사
npm run lint

# 프리뷰 (빌드 결과 확인)
npm run preview

📱 주요 화면

온보딩 → 로그인
메인 홈 (나의 서재)
서재 탭 (책 리스트)
책 상세 (독후감/메모/관계도)
통계 탭
마이페이지

🎯 타겟 사용자
독서를 즐기지만 체계적으로 관리하고 싶은 20~30대

⏱️ 개발 일정 (예상)

MVP 개발: 2~3개월 (주 15-20시간 작업 기준)

기획/디자인: 2주
환경 세팅: 1주
핵심 기능 개발: 6-8주
테스트/배포: 1주



🎨 디자인 시스템

색상 팔레트
css--color-text: #5D4E37;        /* 본문 텍스트 */
--color-titleText: #3E3526;   /* 제목 텍스트 */
--color-border: #bda694;      /* 테두리 */
--color-background: #faf8f3;  /* 배경 */
그리드 시스템

8pt 그리드 시스템 사용
모바일 우선 디자인

🤝 기여하기
이 프로젝트는 현재 개인 프로젝트로 진행 중입니다.

📄 라이선스
MIT License

👤 개발자
태민 (Taemin)

Note: 이 프로젝트는 현재 개발 진행 중입니다. 피드백과 제안은 언제나 환영합니다! 🙌