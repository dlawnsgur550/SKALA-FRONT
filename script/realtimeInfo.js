// 이 파일은 도시 선택 이벤트와 실시간 정보 화면 표시를 담당한다.
import { getCurrentWeather } from "./weatherAPI.js";
import { getCurrentAirQuality } from "./airQualityAPI.js";

// HTML에서 도시 선택창과 결과 상자를 찾아 변수에 저장한다.
const citySelect = document.querySelector("#city-select");
const weatherBox = document.querySelector("#weather-box");

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

    try {
        // Promise.all은 서로 독립적인 두 API 요청을 동시에 실행한다.
        const [weather, airQuality] = await Promise.all([
            getCurrentWeather(latitude, longitude),
            getCurrentAirQuality(latitude, longitude)
        ]);

        const airStatus = getAirQualityStatus(airQuality.current.us_aqi);
        const uvStatus = getUvStatus(airQuality.current.uv_index);
        const temperatureUnit = weather.units.temperature_2m || "";
        const humidityUnit = weather.units.relative_humidity_2m || "";
        const particleUnit = airQuality.units.pm2_5 || "";

        // 네 개의 수치를 같은 모양의 카드로 만들어 정보 계층을 명확하게 한다.
        weatherBox.innerHTML = `
            <p class="weather-location"><strong>🌏 ${cityName}</strong></p>
            <p class="weather-coordinate">위도 ${latitude} · 경도 ${longitude}</p>

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
        weatherBox.innerHTML += `
            <p class="weather-message weather-error">
                실시간 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.
            </p>
        `;
        console.error(error);
    }
}

// change 이벤트는 사용자가 select의 다른 도시를 골랐을 때 발생한다.
citySelect.addEventListener("change", updateRealtimeInfo);

// 페이지를 처음 열었을 때 기본값인 서울 정보도 한 번 표시한다.
updateRealtimeInfo();
