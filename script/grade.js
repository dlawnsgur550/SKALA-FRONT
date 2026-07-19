/*
 * p231 - 성적 계산기
 */

function calculateGrade() {
    var subjects = ['HTML', 'CSS', 'JavaScript'];
    var scores = [];
    var total = 0;

    // 배열의 길이만큼 반복하면서 각 과목 점수를 입력받는다.
    for (var i = 0; i < subjects.length; i += 1) {
        while (true) {
            var input = prompt(subjects[i] + ' 점수를 입력하세요. (0~100)');

            if (input === null) {
                alert('성적 계산을 취소했습니다.');
                return;
            }

            var score = Number(input);

            if (!Number.isFinite(score) || score < 0 || score > 100) {
                alert('0부터 100 사이의 숫자를 입력해 주세요.');
                continue;
            }

            scores.push(score);
            total += score;
            break;
        }
    }

    var average = total / subjects.length;
    var passResult = average >= 60 ? '합격' : '불합격';
    var grade;

    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    alert(
        '===== 📊 성적 결과 =====\n' +
        'HTML: ' + scores[0] + '점\n' +
        'CSS: ' + scores[1] + '점\n' +
        'JavaScript: ' + scores[2] + '점\n' +
        '총점: ' + total + '점\n' +
        '평균: ' + average.toFixed(1) + '점\n' +
        '등급: ' + grade + '\n' +
        '결과: ' + passResult + '입니다!'
    );
}
