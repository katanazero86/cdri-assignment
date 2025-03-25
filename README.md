# 프론트 사전과제(CDRI)

---

## 프로젝트 개요

--- 

1. 주어진 피그마를 참고하여 UI 및 기능 구현
2. 도서 검색 및 검색 된 도서 찜하기(도서 검색, 찜하기 기능)
3. 필수 기술 스택 = React.js, TypeScript, React Query

## 실행방법 및 환경설정

--- 

1. Node.js 설치 (최소 버전 16+)
2. git clone 후, `npm install` 실행
3. .env 를 프로젝트 최상위 경로에 포함
4. 개발 모드 실행 `npm run dev`
5. 실행 후, 경로는 `/` 와 `wish-list` 로 확인(ex: http://localhost:5173/)
6. (or) 빌드 후(`npm run build`), 로컬 서버에서 미리보기 실행(`npm run preview)`하기.

```
# 환경변수 (.env)
# 다음과 같은 환경변수를 설정해주세요:
VITE_KAKAO_BOOK_API_KEY: 도서 검색 API 키
VITE_KAKAO_BOOK_API_URL: 도서 검색 API 엔드포인트
```

## 폴더 구조 및 주요 코드 설명

---

```
src/
├── apis/                  # API 요청 관련 함수들
│   └─ book/               # 도서 관련 API 모듈
├── assets/                # 이미지, 아이콘 등 정적 리소스
├── components/            # 재사용 가능한 UI 컴포넌트 모음
├── constants/             # 상수 값 관리
├── hooks/                 # 커스텀 훅 모음
│   └── api/               # 커스텀 훅 모음(API 관련)
├── pages/                 # 라우트 단위 페이지 컴포넌트
│   ├── errors/            # 에러 페이지
│   ├── index/             # 메인 페이지(도서 검색)
│   └── wishList/          # 내가 찜한 책 페이지
├── router/                # 라우트 설정
├── types/                 # 타입 선언
│   └── declare/           # 전역 타입 선언
├── utils/                 # 유틸 함수 모음
├── App.tsx                # 루트 컴포넌트
├── index.css              # 전역 스타일 및 tailwindCSS 내장 import 및 설정
├── main.tsx               # 애플리케이션 진입점
└── vite-env.d.ts          # vite 타입 설정

```

- `src/hooks/useLike.ts`   
검색 된 도서에서 찜 기능을 제공하는 커스텀 훅입니다. localStorage 와 연동하여 찜 목록을 관리합니다.
- `src/hooks/useIntersectionObserver.ts`   
무한 스크롤을 위해 페이지 하단에 요소가 감지되었는지를 처리하는 커스텀 훅입니다. IntersectionObserver API를 사용했으며, 인자로 교차했을 때 실행 할 함수를 받습니다.   
재렌더링이 되면, 함수를 새로 받기 때문에 useEffect() 훅을 사용해서 옵저버를 클린업해주는 로직이 있습니다.
- `src/hooks/useModal.ts`   
모달 컴포넌트를 제어하는 로직과 상태를 캡슐화시킨 커스텀 훅입니다. 모달을 열고/닫는 상태와 모달에 필요한 기본 상태를 관리할 수 있습니다.
- `src/router/index.tsx`   
전체 라우트를 정의한 파일이며, `/` 와 `wish-list` 경로가 정의되어 있습니다.
- `src/utils/localStorage.utils.ts`   
로컬스토리지 관련 함수들을 관리하며, key 와 value 를 받아 로컬 스토리지를 조작합니다.
- `src/apis/book/index.ts`   
도서 관련 API 로직을 모아둔 함수들이 정의되어 있습니다. `useBooks.ts` 훅에서 함께 사용되며 Web API에서 데이터를 조회합니다.
- `src/hooks/api/useBooks.ts`
도서 API를 다루는 커스텀 훅입니다. @tanstack/react-query 라이브러리를 의존하고 있습니다. 각 API에 대해서 커스텀 훅 형태로 분리하면 유지관리가 쉬워지고 재사용성을 높일 수 있습니다.

```
# 네이밍 컨벤션
on 접두사: 이벤트 핸들러 prop 명명
예: onSubmit, onClose
handle 접두사: 이벤트를 처리하는 함수 명명
예: handleSubmit(), handleClose()
```

## 라이브러리 선택 이유

---

1. `axios`  
   HTTP 클라이언트 라이브러리.   
   브라우저와 Node.js에서 모두 사용 가능하며, 요청과 응답 인터셉터 및 자동 JSON 변환과 타입스크립트 지원 등의 기능을 제공하여 API 요청을 효율적으로 처리가 가능하기에 선택하였습니다.

2. `react-router`  
   리액트 애플리케이션의 라우팅을 관리하는 라이브러리.
   선언적 라우팅 방식을 제공하여 SPA(Single Page Application)에서 경로와 일치하는 컴포넌트 렌더링을 쉽게 구현이 가능하여 선택 했습니다.(HOC 패턴을 사용하여 공통 레이아웃 적용 및 인증이 필요한 라우트 처리도 손 쉽게 가능)

3. `prettier`  
   코드 포맷터 라이브러리.   
   일관된 코드 스타일을 유지하는 데 도움을 줍니다. 팀 프로젝트에서 코드 스타일 관련 소통 비용을 줄이고, 개발자가 코드 포맷팅보다 로직에 집중할 수 있게 해줍니다.(일관된 코드 스타일은 코드 리뷰 시간을 단축)

4. `tailwindCSS`  
   유틸리티 퍼스트 CSS 프레임워크.   
   미리 정의된 CSS클래스를 조합하여 빠른 UI개발이 가능하기에 선택했습니다. 그리고, 커스터마이징이 용이하고 유틸리티 퍼스트를 지양하고있기 때문에 일관성을 유지할 수 있고 중복된 스타일 사용을 줄일 수 있습니다.

5. `lucide-react`  
   디자인 아이콘 라이브러리.   
   다양한 아이콘을 React 컴포넌트로 쉽게 이용이 가능하고 UI 개발에 효율적이라 선택했습니다.

6. `React`, `TypeScript`, `@tanstack/react-query`
   사전 과제 필수 라이브러리.   
   `React`는 컴포넌트 기반의 UI 라이브러리이며, UI를 컴포넌트 단위로 분리하여 작성하기 때문에 재사용성과 유지보수 측면에서 유리합니다. 그리고 리액트는 기본적으로 선언적 프로그래밍 방식을 사용하여 이벤트 핸들러 및 상태 관리에 대해서 선언을 하고 이를 바인딩을 해주면 자동으로 UI를 업데이트 해주므로 프론트엔드 개발을 효율적으로 진행할 수 있습니다.(+ JSX 문법을 통해 HTML과 JavaScript를 결합한 직관적인 코드 작성도 생산성과 개발 경험을 좋게 만듭니다)

   `TypeScript`는 자바스크립트 언어에 타입이 추가된 언어이며, 코드를 작성하면서 타입 검사를 통해 런타임 에러를 사전에 줄일 수 있습니다. 그리고 타입이 정의가 되어있으므로 가독성을 높일 수 있습니다.

   `@tanstack/react-query`는 서버 상태를 관리하기 위한 라이브러리이며, 데이터 조회와 변경, 캐싱, 로딩 등 다양한 기능을 제공해줘서 서버 상태 관리 코드 작성시 생산성을 높이고 개발 편의성을 얻을 수 있습니다.

## 실행 화면

---

![test.gif](./test.gif)