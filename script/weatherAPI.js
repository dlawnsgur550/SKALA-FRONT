// 이 파일은 서버에서 날씨 데이터를 가져오는 역할만 담당한다.

// export를 붙이면 다른 모듈에서 이 함수를 import하여 사용할 수 있다.
export async function getCurrentWeather(latitude, longitude) {
    // 템플릿 리터럴(``)을 사용하면 문자열 안에 좌표 변수를 넣을 수 있다.
    const apiUrl =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}` +
        `&longitude=${longitude}` +
        "&current=temperature_2m,relative_humidity_2m";

    // fetch()는 서버에 요청하고, await는 응답이 올 때까지 기다린다.
    const response = await fetch(apiUrl);

    // 서버가 404, 500 같은 실패 상태를 보내면 직접 오류를 발생시킨다.
    if (!response.ok) {
        throw new Error("날씨 서버의 응답을 받지 못했습니다.");
    }

    // 응답의 JSON 문자열을 JavaScript 객체로 변환한다.
    const weatherData = await response.json();

    // 화면 모듈에서 필요한 현재 날씨와 단위 정보만 돌려준다.
    return {
        current: weatherData.current,
        units: weatherData.current_units
    };
}
