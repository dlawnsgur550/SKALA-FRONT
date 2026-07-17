# 🚀 SKALA-FRONT

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=191f28)
![Open-Meteo](https://img.shields.io/badge/Open--Meteo-3182F6?style=flat-square&logo=icloud&logoColor=white)

> HTML, CSS, JavaScript를 학습하며 만든 개인 웹사이트입니다.<br>
> 프로필, 시간표, 여행 기록, 오늘의 할 일과 날씨·대기 정보를 제공합니다.

## 📌 프로젝트 소개

정적인 HTML 페이지에 반응형 CSS와 JavaScript 기능을 단계적으로 적용한 학습 프로젝트입니다.

- 시맨틱 HTML을 이용한 페이지 구성
- Grid, Flexbox, 미디어 쿼리를 이용한 반응형 레이아웃
- DOM 이벤트와 `localStorage`를 이용한 체크리스트
- `fetch()`와 ES Module을 이용한 Open-Meteo API 연동

## 🖥️ 주요 기능

### 1. 메인 화면

- 프로필, 시간표, 휴일 계획, 여행 앨범, 회원가입 페이지 바로가기
- 화면 너비에 따라 2열 또는 1열로 변경되는 레이아웃
- 회색과 파랑을 중심으로 구성한 공통 카드 스타일

![SKALA-FRONT 메인 화면](docs/images/01-main.png)

### 2. 오늘의 할 일

- 할 일 추가, 완료 체크, 개별 삭제
- 완료 개수와 진행률 표시
- 오늘 목록을 브라우저에 저장하고 날짜가 바뀌면 새 목록으로 전환
![오늘은 뭐 하지](docs/images/09-todo.png)
### 3. 날씨·대기 정보

- 서울, 광주, 도쿄, 파리의 기온과 습도 표시
- PM2.5, PM10, AQI와 자외선 지수 표시
- 선택 도시의 현지 시각 적용, 10분 자동 갱신과 수동 새로고침
- 로딩 상태와 오류 안내

![날씨 좋았으면 좋겠다](docs/images/02-weather-air.png)

### 4. 프로필

- 좋아하는 음식과 올해의 목표 목록
- 설명 목록을 이용한 관심사와 특징 정리

![나 이런 사람이에요](docs/images/03-profile.png)

### 5. 강의 시간표와 휴일 계획

- `table`, `rowspan`, `colspan`을 활용한 주간 시간표
- 시간대별 휴일 활동 구성
- 작은 화면에서 시간표 좌우 스크롤 지원

![강의 시간표](docs/images/04-class.png)
![휴일 계획](docs/images/05-holiday.png)

### 6. 여행 앨범과 미디어

- 여행 사진을 반응형 Grid 카드로 배치
- 오디오와 비디오 재생 기능

![여기어때와 저기어때](docs/images/06-trip.png)

### 7. 회원가입 Form

- 아이디, 비밀번호, 이메일, 생년월일 입력
- 이메일 도메인 직접 입력
- HTML Form 유효성 검사 속성 적용

![회원가입이 안되는 회원가입탭](docs/images/07-signup.png)

### 8. JavaScript 미니 기능

- 업다운 숫자 맞히기 게임
- 점수에 따른 성적 계산기
- 객체로 만든 가방 속 물품 확인

![JavaScript 미니 기능](docs/images/08-javascript.png)

## 🛠️ 사용 기술

| 구분 | 사용 기술 | 적용 내용 |
| --- | --- | --- |
| Markup | HTML5 | 시맨틱 태그, 목록, 표, Form, 오디오, 비디오 |
| Styling | CSS3 | Flexbox, Grid, CSS 변수, 미디어 쿼리, 애니메이션 |
| Programming | JavaScript | DOM, 이벤트, 배열, 객체, localStorage, ES Module |
| Async | Fetch API | `async/await`, `Promise.all()`, 오류 처리 |
| Open API | Open-Meteo | 날씨, 습도, 미세먼지, AQI, 자외선 |
| Tool | VS Code Live Server | 로컬 개발 서버 실행 |

## 📂 프로젝트 구조

```text
SKALA-FRONT/
├── README.md
├── css/
│   └── style.css
├── docs/
│   └── images/                 # README 스크린샷
├── html/
│   ├── index.html              # 메인 화면
│   ├── myProfile.html          # 프로필
│   ├── myClass.html            # 강의 시간표
│   ├── myHoliday.html          # 휴일 계획
│   ├── myTrip.html             # 여행 앨범
│   ├── signUp.html             # 회원가입
│   └── signUpResult.html       # 가입 완료
├── media/                      # 이미지, 오디오, 비디오
└── script/
    ├── weatherAPI.js           # 날씨 데이터 요청
    ├── airQualityAPI.js        # 대기 데이터 요청
    ├── realtimeInfo.js         # 실시간 정보 화면과 이벤트
    ├── todo.js                 # 오늘의 할 일과 저장
    ├── upDown.js               # 업다운 게임
    ├── grade.js                # 성적 계산기
    └── bag.js                  # 가방 속 물품
```

## 🚀 실행 방법

```bash
git clone https://github.com/dlawnsgur550/SKALA-FRONT.git
cd SKALA-FRONT
```

VS Code에서 `html/index.html`을 선택한 뒤 **Open with Live Server**로 실행합니다.

> ES Module과 외부 API를 사용하므로 HTML 파일을 직접 여는 대신 Live Server 실행을 권장합니다.

## 🌐 사용 API

- [Open-Meteo Weather Forecast API](https://open-meteo.com/en/docs)
- [Open-Meteo Air Quality API](https://open-meteo.com/en/docs/air-quality-api)

## 📚 주요 학습 내용

- HTML 문서 구조와 시맨틱 태그
- CSS 선택자, 박스 모델과 반응형 레이아웃
- JavaScript 함수, 배열, 객체와 DOM 이벤트
- `localStorage`를 이용한 브라우저 저장
- 비동기 API 호출과 ES Module 분리

## 👤 Maintainer

- GitHub: [@dlawnsgur550](https://github.com/dlawnsgur550)
