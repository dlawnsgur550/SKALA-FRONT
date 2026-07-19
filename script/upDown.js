/*
 * p230 - Up-Down 숫자 맞추기 게임
 */

function playUpDown() {
    // Math.random()은 0 이상 1 미만의 난수를 만든다.
    // 여기에 50을 곱하고 버림한 뒤 1을 더하면 1~50 사이 정수가 된다.
    var computerNum = Math.floor(Math.random() * 50) + 1;
    var attempts = 0;

    // 정답을 맞추거나 사용자가 취소할 때까지 반복한다.
    while (true) {
        var input = prompt('1부터 50 사이의 숫자를 입력하세요.');

        // prompt에서 취소를 누르면 null이 반환된다.
        if (input === null) {
            alert('게임을 종료합니다.');
            return;
        }

        // prompt의 결과는 문자열이므로 Number()로 숫자로 변환한다.
        var userNum = Number(input);

        // 숫자가 아니거나 범위를 벗어나면 횟수를 올리지 않고 다시 입력받는다.
        if (!Number.isInteger(userNum) || userNum < 1 || userNum > 50) {
            alert('1부터 50 사이의 정수를 입력해 주세요.');
            continue;
        }

        attempts += 1;

        if (userNum > computerNum) {
            alert('Down!');
        } else if (userNum < computerNum) {
            alert('Up!');
        } else {
            alert('축하합니다! ' + attempts + '번 만에 맞추셨습니다.');
            break;
        }
    }
}
