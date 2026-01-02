# Marginalia

## **Marginalia는 독서를 즐기지만 체계적으로 관리하고 싶은 사람들을 위한 디지털 독서관리 웹 어플리케이션입니다.**

**🎯 핵심 가치**

통합 관리: 흩어진 독서 기록을 한 곳에서 관리
감상 기록 : 별점, 독후감, 인상 깊은 문장을 체계적으로 저장
디지털 서재: 나만의 디지털 독서 공간 구축

**🎨 디자인 컨셉**

컨셉: 아날로그 독4서의 감성 + 디지털의 편리함
색상: 베이지 + 다크브라운 (빈티지 무드)
폰트: 세리프체(본문) + 산세리프체(UI)

✨ 주요 기능

✅ 책 검색/추가 (외부 API 연동)
✅ 독서 기록 관리 (읽은/읽는중/읽고싶은)
✅ 독후감 작성 (텍스트 에디터 + 별점)
✅ 문장 저장 (하이라이트 기능)
✅ 기본 통계 (월별 독서량, 읽은 책 수)



🛠️ 기술 스택
Frontend

Framework: React 19.2.0
Build Tool: Vite 7.2.4
Language: TypeScript 5.9.3
Routing: React Router 7.9.6
Styling: Tailwind CSS 4.1.17
State Management: TanStack Query 5.90.11
Code Quality: ESLint + Prettier

DB 
Supabase

외부 API
카카오 도서 API

배포
도메인 (https://www.marginaria.com/)

📁 프로젝트 구조
## 📁 프로젝트 구조
```
src/
├── app/                           # 앱 설정 및 라우팅
│   ├── routes/
│   │   ├── route.ts              # 라우터 정의
│   │   └── index.tsx              # Root 컴포넌트
│   ├── layout/
│   │   └── Header.tsx             # 공통 헤더
│   └── main.tsx                   # 앱 진입점
│
├── features/                      # 기능별 모듈 (Feature-Sliced Design)
│   │
│   ├── onboard/                   # 온보딩
│   │   ├── components/            # 슬라이더, 인디케이터
│   │   ├── hooks/                 # useAutoPlay
│   │   └── constants/             # 온보딩 데이터
│   │
│   ├── login/                     # 로그인
│   │   └── api/                   # authService
│   │
│   ├── study/                     # 서재 (책 목록)
│   │   ├── components/
│   │   │   ├── StudyHeader.tsx
│   │   │   ├── CategoryTabs.tsx
│   │   │   ├── BookCard.tsx
│   │   │   └── BookGrid.tsx
│   │   └── constants/             # categoryTabs
│   │
│   ├── bookDetail/                # 책 상세
│   │   ├── components/
│   │   │   ├── BookDetailHeader.tsx
│   │   │   ├── BookInfoCard.tsx
│   │   │   ├── BookStatusSelect.tsx
│   │   │   ├── BookDetailTabs.tsx
│   │   │   ├── review/            # 독후감 관련
│   │   │   │   ├── BookReport.tsx
│   │   │   │   ├── WriteReview.tsx
│   │   │   │   ├── RatingSection.tsx
│   │   │   │   ├── ReviewTextarea.tsx
│   │   │   │   └── ReviewActions.tsx
│   │   │   └── quote/             # 인용구 관련
│   │   │       ├── BookQuotes.tsx
│   │   │       ├── Quotes.tsx
│   │   │       └── WriteQuotes.tsx
│   │   ├── api/
│   │   │   └── useBookDetail.ts   # React Query 훅
│   │   ├── types/
│   │   │   └── types.ts           # 타입 정의
│   │   └── constants/             # tabMenu
│   │
│   ├── addBook/                   # 책 추가
│   │   └── api/
│   │       └── useBookData.ts
│   │
│   └── settings/                  # 설정
│
└── shared/                        # 공유 리소스
    │
    ├── components/                # 재사용 컴포넌트
    │   ├── button/
    │   │   └── Button.tsx         # 공통 버튼
    │   ├── star/
    │   │   └── Star.tsx           # 별점 컴포넌트
    │   └── SEO.tsx                # SEO 메타태그
    │
    ├── api/                       # API 클라이언트
    │   ├── supabase.ts            # Supabase 설정
    │   └── authService.ts         # 인증 서비스
    │
    ├── utils/                     # 유틸리티 함수
    │   ├── alert.ts               # SweetAlert2 래퍼
    │   └── tw.ts                  # Tailwind 유틸리티
    │
    ├── constants/                 # 상수 관리
    │   ├── alertMessages.ts       # 알림 메시지
    │   └── seo.ts                 # SEO 설정
    │
    └── styles/                    # 스타일
        ├── global.css             # 전역 스타일
        ├── theme.css              # 테마 변수
        └── utilities.css          # 유틸리티 클래스
```

**핵심 디렉토리 설명**

- **`app/`**: 앱의 진입점과 전역 설정
- **`features/`**: 기능별로 독립된 모듈 (FSD 패턴)
- **`shared/`**: 여러 기능에서 공유하는 리소스

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

# 프리뷰 (빌드 결과 확인)
npm run preview

📱 주요 화면

온보딩 → 로그인
메인 홈 (나의 서재)
서재 탭 (책 리스트)
책 상세 (독후감/메모/관계도)
통계 탭
마이페이지


⏱️ 개발 일정 

기획/디자인: 1주
환경 세팅 및 퍼블리싱: 1주
핵심 기능 개발: 4주
테스트/배포: 1주


🎨 디자인 시스템

8pt 그리드 시스템 사용
모바일 우선 디자인

🤝 기여하기
이 프로젝트는 현재 개인 프로젝트로 진행 중입니다.

📄 라이선스
MIT License

👤 개발자
태민 (Taemin)

Note: 이 프로젝트는 현재 개발 진행 중입니다. 피드백과 제안은 언제나 환영합니다! 🙌