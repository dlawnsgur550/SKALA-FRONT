// 이 파일은 Open-Meteo에서 공기질과 자외선 데이터를 가져오는 역할만 담당한다.

export async function getCurrentAirQuality(latitude, longitude) {
    // 현재 도시의 PM2.5, PM10, 미국식 AQI, 자외선 지수를 요청한다.
    const apiUrl =
        `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}` +
        `&longitude=${longitude}` +
        "&current=pm2_5,pm10,us_aqi,uv_index" +
        // 선택한 도시의 현지 시각을 기준으로 대기 데이터를 받는다.
        "&timezone=auto";

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("대기 환경 서버의 응답을 받지 못했습니다.");
    }

    const airQualityData = await response.json();

    return {
        current: airQualityData.current,
        units: airQualityData.current_units
    };
}
