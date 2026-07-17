// 이 파일은 도시 선택 이벤트와 실시간 정보 화면 표시를 담당한다.
import { getCurrentWeather } from "./weatherAPI.js";
import { getCurrentAirQuality } from "./airQualityAPI.js";

// HTML에서 도시 선택창과 결과 상자를 찾아 변수에 저장한다.
const citySelect = document.querySelector("#city-select");
const weatherBox = document.querySelector("#weather-box");
const currentDate = document.querySelector("#current-date");
const refreshButton = document.querySelector("#realtime-refresh");

// 화면의 시계는 30초마다, 외부 API 정보는 10분마다 갱신한다.
const CLOCK_UPDATE_INTERVAL = 30 * 1000;
const API_UPDATE_INTERVAL = 10 * 60 * 1000;

// 도시를 빠르게 바꿨을 때 이전 요청 결과가 새 결과를 덮지 않도록 순서를 기록한다.
let requestVersion = 0;

// 브라우저가 실행되는 기기의 현재 날짜와 시각을 표시한다.
function updateCurrentDateTime() {
    const now = new Date();

    currentDate.dateTime = now.toISOString();
    currentDate.textContent = new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).format(now);
}

// API 시각은 선택 도시의 현지 시각이며 UTC 표기가 없으므로 문자열 그대로 다듬는다.
function formatApiTime(apiTime) {
    if (!apiTime) {
        return "시각 정보 없음";
    }

    const [datePart, timePart = ""] = apiTime.split("T");
    const [year, month, day] = datePart.split("-");

    if (!year || !month || !day) {
        return apiTime;
    }

    return `${year}.${month}.${day} ${timePart}`.trim();
}

// 숫자가 없을 때는 대시(—)를, 있으면 지정한 소수점 자리까지 표시한다.
function formatNumber(value, decimalPlaces = 0) {
    return Number.isFinite(value) ? value.toFixed(decimalPlaces) : "—";
}

// 미국식 AQI 기준을 사람이 읽기 쉬운 상태와 CSS class로 바꾼다.
function getAirQualityStatus(aqi) {
    if (!Number.isFinite(aqi)) {
        return { label: "정보 없음", className: "environment-status--unknown" };
    }

    if (aqi <= 50) {
        return { label: "좋음", className: "environment-status--good" };
    }

    if (aqi <= 100) {
        return { label: "보통", className: "environment-status--moderate" };
    }

    if (aqi <= 150) {
        return { label: "민감군 주의", className: "environment-status--bad" };
    }

    return { label: "나쁨", className: "environment-status--bad" };
}

// 자외선 지수를 낮음·보통·높음 상태로 구분한다.
function getUvStatus(uvIndex) {
    if (!Number.isFinite(uvIndex)) {
        return { label: "정보 없음", className: "environment-status--unknown" };
    }

    if (uvIndex < 3) {
        return { label: "낮음", className: "environment-status--good" };
    }

    if (uvIndex < 6) {
        return { label: "보통", className: "environment-status--moderate" };
    }

    if (uvIndex < 8) {
        return { label: "높음", className: "environment-status--bad" };
    }

    if (uvIndex < 11) {
        return { label: "매우 높음", className: "environment-status--bad" };
    }

    return { label: "위험", className: "environment-status--bad" };
}

// 선택된 도시의 날씨와 대기 환경을 요청하고 결과를 화면에 표시한다.
async function updateRealtimeInfo() {
    const currentRequest = ++requestVersion;
    const selectedOption = citySelect.options[citySelect.selectedIndex];
    const cityName = selectedOption.textContent.trim();
    const latitude = selectedOption.dataset.lat;
    const longitude = selectedOption.dataset.lon;

    // 도시를 바꾸자마자 좌표와 로딩 상태를 먼저 보여 준다.
    weatherBox.innerHTML = `
        <p class="weather-location"><strong>📍 ${cityName}</strong></p>
        <p class="weather-coordinate">위도 ${latitude} · 경도 ${longitude}</p>
        <p class="weather-message">날씨와 대기 정보를 불러오는 중... ⏳</p>
    `;
    refreshButton.disabled = true;
    refreshButton.textContent = "갱신 중...";

    try {
        // Promise.all은 서로 독립적인 두 API 요청을 동시에 실행한다.
        const [weather, airQuality] = await Promise.all([
            getCurrentWeather(latitude, longitude),
            getCurrentAirQuality(latitude, longitude)
        ]);

        // 더 나중에 시작한 요청이 있으면 이 응답은 화면에 반영하지 않는다.
        if (currentRequest !== requestVersion) {
            return;
        }

        const airStatus = getAirQualityStatus(airQuality.current.us_aqi);
        const uvStatus = getUvStatus(airQuality.current.uv_index);
        const temperatureUnit = weather.units.temperature_2m || "";
        const humidityUnit = weather.units.relative_humidity_2m || "";
        const particleUnit = airQuality.units.pm2_5 || "";
        const apiTime = weather.current.time || airQuality.current.time;
        const cityTimezone =
            weather.timezoneAbbreviation || weather.timezone || "선택 도시 현지 시각";

        // 네 개의 수치를 같은 모양의 카드로 만들어 정보 계층을 명확하게 한다.
        weatherBox.innerHTML = `
            <p class="weather-location"><strong>🌏 ${cityName}</strong></p>
            <p class="weather-coordinate">위도 ${latitude} · 경도 ${longitude}</p>
            <p class="weather-updated-time">
                API 기준 ${formatApiTime(apiTime)} (${cityTimezone})<br>
                10분마다 자동 갱신
            </p>

            <div class="weather-metric-grid">
                <article class="weather-metric-card weather-metric-card--primary">
                    <span class="weather-metric-label">🌡️ 현재 기온</span>
                    <strong class="weather-metric-value">
                        ${formatNumber(weather.current.temperature_2m, 1)}${temperatureUnit}
                    </strong>
                    <span class="weather-metric-detail">실시간 관측값</span>
                </article>

                <article class="weather-metric-card weather-metric-card--primary">
                    <span class="weather-metric-label">💧 현재 습도</span>
                    <strong class="weather-metric-value">
                        ${formatNumber(weather.current.relative_humidity_2m)}${humidityUnit}
                    </strong>
                    <span class="weather-metric-detail">상대 습도</span>
                </article>

                <article class="weather-metric-card">
                    <span class="weather-metric-label">🌫️ 공기질 · AQI</span>
                    <strong class="weather-metric-value">
                        ${formatNumber(airQuality.current.us_aqi)}
                    </strong>
                    <span class="weather-metric-detail">
                        PM2.5 ${formatNumber(airQuality.current.pm2_5, 1)}${particleUnit}<br>
                        PM10 ${formatNumber(airQuality.current.pm10, 1)}${particleUnit}
                    </span>
                    <span class="environment-status ${airStatus.className}">
                        ${airStatus.label}
                    </span>
                </article>

                <article class="weather-metric-card">
                    <span class="weather-metric-label">☀️ 자외선 지수</span>
                    <strong class="weather-metric-value">
                        ${formatNumber(airQuality.current.uv_index, 1)}
                    </strong>
                    <span class="weather-metric-detail">외출 전 확인하세요</span>
                    <span class="environment-status ${uvStatus.className}">
                        ${uvStatus.label}
                    </span>
                </article>
            </div>
        `;
    } catch (error) {
        if (currentRequest !== requestVersion) {
            return;
        }

        weatherBox.innerHTML += `
            <p class="weather-message weather-error">
                실시간 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.
            </p>
        `;
        console.error(error);
    } finally {
        // 가장 최근 요청이 끝났을 때만 버튼을 다시 활성화한다.
        if (currentRequest === requestVersion) {
            refreshButton.disabled = false;
            refreshButton.textContent = "↻ 새로고침";
        }
    }
}

// change 이벤트는 사용자가 select의 다른 도시를 골랐을 때 발생한다.
citySelect.addEventListener("change", updateRealtimeInfo);
refreshButton.addEventListener("click", updateRealtimeInfo);

// 페이지를 처음 열었을 때 날짜와 서울 정보를 바로 표시한다.
updateCurrentDateTime();
updateRealtimeInfo();

// setInterval은 지정한 시간이 지날 때마다 함수를 반복 실행한다.
setInterval(updateCurrentDateTime, CLOCK_UPDATE_INTERVAL);
setInterval(updateRealtimeInfo, API_UPDATE_INTERVAL);
