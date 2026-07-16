# 🚀 SKALA-FRONT

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=191f28)
![Open-Meteo](https://img.shields.io/badge/Open--Meteo-3182F6?style=flat-square&logo=icloud&logoColor=white)

> HTML, CSS, JavaScript의 핵심 문법을 학습하며 만든 개인 포트폴리오형 웹사이트입니다.<br>
> 프로필, 강의 시간표, 휴일 계획, 여행 앨범과 실시간 날씨·대기 환경 기능을 하나의 Hub로 구성했습니다.

## 📌 프로젝트 소개

SKALA-FRONT는 정적인 HTML 페이지에서 시작해 반응형 CSS, DOM 조작, 이벤트 처리, 비동기 API 호출과 ES Module 분리까지 단계적으로 적용한 프론트엔드 학습 프로젝트입니다.

- 시맨틱 HTML을 활용한 페이지 구조 설계
- CSS Grid와 Flexbox를 이용한 반응형 레이아웃
- Toss의 디자인 감도를 참고한 회색·파랑 중심 UI
- JavaScript 이벤트와 DOM 조작
- `fetch()`, `async/await`, `Promise.all()`을 이용한 Open API 연동
- 데이터 모듈과 화면 모듈의 역할 분리

## 🖥️ 주요 기능

### 1. 메인 Hub와 반응형 디자인

- 프로필, 시간표, 휴일 계획, 여행 앨범, 회원가입 페이지 바로가기
- 넓은 화면에서는 메인 콘텐츠와 실시간 정보가 2열로 배치
- 태블릿과 모바일에서는 콘텐츠가 한 열로 자동 변경
- CSS 변수로 색상과 여백을 일관되게 관리

> 📷 추가할 이미지: `docs/images/01-main.png`


![SKALA-FRONT 메인 화면](docs/images/01-main.png)


### 2. 실시간 날씨·대기 환경

- 서울, 광주, 도쿄, 파리 중 원하는 도시 선택
- 현재 기온과 상대 습도 표시
- PM2.5, PM10, 미국식 대기질 지수(AQI) 표시
- 자외선 지수와 위험 단계 표시
- API 응답을 기다리는 동안 로딩 메시지 제공
- 오류 발생 시 사용자 안내 메시지 표시
- 날씨와 대기 환경 API를 `Promise.all()`로 동시에 호출

> 📷 추가할 이미지: `docs/images/02-weather-air.png`


![실시간 날씨와 대기 환경](docs/images/02-weather-air.png)


### 3. 나의 프로필

- 좋아하는 음식과 올해의 목표 목록
- 호기심, 실행력, 공감 등 나를 설명하는 단어 정리
- `ul`, `ol`, `dl`, `dt`, `dd`를 활용한 목록 구조 학습
- 모바일에서도 단어와 설명의 관계가 명확하게 보이는 반응형 배치

> 📷 추가할 이미지: `docs/images/03-profile.png`


![나의 프로필 화면](docs/images/03-profile.png)


### 4. 강의 시간표와 휴일 계획

- `table`, `rowspan`, `colspan`을 활용한 주간 강의 시간표
- 시간대별 휴일 활동을 제목과 문단으로 구성
- 작은 화면에서 시간표를 좌우로 확인할 수 있는 반응형 처리

> 📷 추가할 이미지: `docs/images/04-class.png`, `docs/images/05-holiday.png`


![나의 강의 시간표](docs/images/04-class.png)
![나의 휴일 계획](docs/images/05-holiday.png)


### 5. 여행 앨범과 미디어

- 세 개의 여행 사진을 Grid 카드로 배치
- 오디오와 비디오 재생 기능 제공
- 마우스를 올렸을 때 카드가 자연스럽게 강조되는 효과
- 화면 크기에 따라 3열, 2열, 1열로 변경

> 📷 추가할 이미지: `docs/images/06-trip.png`

<!--
![여행 앨범 화면](docs/images/06-trip.png)
-->

### 6. 회원가입 Form

- 아이디, 비밀번호, 이메일, 생년월일 등 입력
- 라디오 버튼, 체크박스, 선택창과 자기소개 입력 영역
- 이메일 도메인의 직접 입력 기능
- HTML Form 유효성 검사 속성 적용
- 가입 완료 페이지로 입력 결과 전달

> 📷 추가할 이미지: `docs/images/07-signup.png`


![회원가입 화면](docs/images/07-signup.png)


### 7. JavaScript 미니 기능

- 업다운 숫자 맞히기 게임
- 점수에 따른 성적 계산기
- JavaScript Object로 만든 가방 속 물품 확인
- HTML의 버튼 이벤트와 외부 JavaScript 함수 연결

> 📷 추가할 이미지: `docs/images/08-javascript.png`


![JavaScript 미니 기능](docs/images/08-javascript.png)


## 🛠️ 사용 기술

| 구분 | 사용 기술 | 적용 내용 |
| --- | --- | --- |
| Markup | HTML5 | 시맨틱 태그, 목록, 표, Form, 오디오, 비디오 |
| Styling | CSS3 | Flexbox, Grid, CSS 변수, 미디어 쿼리, 애니메이션 |
| Programming | JavaScript | DOM, 이벤트, Object, 조건문, 함수, ES Module |
| Async | Fetch API | `async/await`, `Promise.all()`, 오류 처리 |
| Open API | Open-Meteo | 실시간 날씨, 습도, 미세먼지, AQI, 자외선 |
| Tool | VS Code Live Server | 로컬 개발 서버 실행 |

## 📂 프로젝트 구조

```text
SKALA-FRONT/
├── README.md
├── css/
│   └── style.css
├── docs/
│   └── images/                 # README 기능별 스크린샷
├── html/
│   ├── index.html              # 메인 Hub
│   ├── myProfile.html          # 프로필
│   ├── myClass.html            # 강의 시간표
│   ├── myHoliday.html          # 휴일 계획
│   ├── myTrip.html             # 여행 앨범
│   ├── signUp.html             # 회원가입
│   └── signUpResult.html       # 가입 완료
├── media/
│   ├── asakusa.jpg
│   ├── disneysea.jpeg
│   ├── tokyo-station.jpeg
│   ├── music.mp3
│   └── video.mp4
└── script/
    ├── weatherAPI.js           # 날씨 데이터 요청
    ├── airQualityAPI.js        # 대기 환경 데이터 요청
    ├── realtimeInfo.js         # 실시간 정보 화면과 이벤트
    ├── upDown.js               # 업다운 게임
    ├── grade.js                # 성적 계산기
    └── bag.js                  # 가방 속 물품
```

## 🚀 실행 방법

### 1. 저장소 복제

```bash
git clone https://github.com/dlawnsgur550/SKALA-FRONT.git
cd SKALA-FRONT
```

### 2. Live Server 실행

1. VS Code에서 프로젝트 폴더를 엽니다.
2. `html/index.html`을 선택합니다.
3. 마우스 오른쪽 버튼을 누르고 **Open with Live Server**를 선택합니다.

> `type="module"`과 외부 API를 사용하므로 HTML 파일을 직접 더블클릭하는 것보다 Live Server 실행을 권장합니다.

## 🌐 사용 API

- [Open-Meteo Weather Forecast API](https://open-meteo.com/en/docs)
- [Open-Meteo Air Quality API](https://open-meteo.com/en/docs/air-quality-api)

API Key 없이 학습용 실시간 데이터를 요청하며, 네트워크 상태에 따라 데이터 표시가 지연될 수 있습니다.

## 📷 스크린샷 추가 방법

1. 기능별 화면을 PNG 또는 JPG로 캡처합니다.
2. 캡처 파일을 `docs/images/` 폴더에 저장합니다.
3. 위 기능 설명에 적힌 파일명과 동일하게 이름을 지정합니다.
4. 해당 기능 아래의 `<!--`, `-->`를 제거해 이미지 Markdown을 활성화합니다.

Markdown 이미지 문법은 다음과 같습니다.

```md
![이미지를 설명하는 대체 문구](docs/images/01-main.png)
```

권장 이미지 너비는 약 1200~1600px이며, 같은 화면 비율로 맞추면 README가 더 정돈되어 보입니다.

## 📚 주요 학습 내용

- HTML 문서 구조와 시맨틱 태그
- CSS 선택자, 상속, 박스 모델과 반응형 웹
- Flexbox와 Grid를 이용한 레이아웃
- JavaScript 함수, 배열, Object와 조건문
- DOM 선택과 이벤트 리스너
- 비동기 통신과 JSON 데이터 처리
- `export`와 `import`를 이용한 모듈 분리

## 🔭 향후 개선 계획

- 도시 이름 직접 검색 기능
- 공휴일 API와 다음 휴일까지의 D-Day 계산
- GitHub 공개 저장소를 이용한 포트폴리오 자동 표시

## 👤 Maintainer

- GitHub: [@dlawnsgur550](https://github.com/dlawnsgur550)
