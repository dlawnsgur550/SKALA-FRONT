// 이 파일은 도시 선택 이벤트와 날씨 화면 표시를 담당한다.
import { getCurrentWeather } from "./weatherAPI.js";

// HTML에서 도시 선택창과 날씨 결과 상자를 찾아 변수에 저장한다.
const citySelect = document.querySelector("#city-select");
const weatherBox = document.querySelector("#weather-box");

// 선택된 도시의 좌표로 날씨를 요청하고 결과를 화면에 표시한다.
async function updateWeather() {
    const selectedOption = citySelect.options[citySelect.selectedIndex];
    const cityName = selectedOption.textContent.trim();
    const latitude = selectedOption.dataset.lat;
    const longitude = selectedOption.dataset.lon;

    // innerHTML로 선택한 도시 이름과 위도/경도를 즉시 화면에 그린다.
    weatherBox.innerHTML = `
        <p><strong>📍 ${cityName}</strong></p>
        <p>위도(Latitude): ${latitude}</p>
        <p>경도(Longitude): ${longitude}</p>
        <p class="weather-message">실시간 날씨 로딩 중... ⏳</p>
    `;

    try {
        // 데이터 책임을 가진 weatherAPI.js의 비동기 함수를 호출한다.
        const weather = await getCurrentWeather(latitude, longitude);
        const temperatureUnit = weather.units.temperature_2m;
        const humidityUnit = weather.units.relative_humidity_2m;

        // 다운로드가 끝나면 실제 온도와 습도를 포함한 내용으로 바꾼다.
        weatherBox.innerHTML = `
            <p><strong>🌏 ${cityName} 실시간 날씨</strong></p>
            <p>📍 위도 ${latitude}, 경도 ${longitude}</p>
            <p>🌡️ 현재 기온: ${weather.current.temperature_2m}${temperatureUnit}</p>
            <p>💧 현재 습도: ${weather.current.relative_humidity_2m}${humidityUnit}</p>
        `;
    } catch (error) {
        // 네트워크 오류가 생겨도 좌표는 남기고 오류 안내를 표시한다.
        weatherBox.innerHTML += `
            <p class="weather-message weather-error">
                날씨 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.
            </p>
        `;
        console.error(error);
    }
}

// change 이벤트는 사용자가 select의 다른 도시를 골랐을 때 발생한다.
citySelect.addEventListener("change", updateWeather);

// 페이지를 처음 열었을 때 기본값인 서울 날씨도 한 번 표시한다.
updateWeather();
