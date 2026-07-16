/*
 * p232 - 내 가방 보기
 * 객체를 담은 배열과 반복문을 이용해 가방 속 물품을 출력한다.
 */

// 배열의 각 요소는 물품명, 수량, 이모지를 가진 JavaScript 객체이다.
var myBag = [
    { name: '여권', quantity: 1, emoji: '🛂' },
    { name: '스마트폰', quantity: 1, emoji: '📱' },
    { name: '충전 케이블', quantity: 2, emoji: '🔌' },
    { name: '지갑', quantity: 1, emoji: '👛' }
];

function showMyBag() {
    var message = '🎒 [내 가방 속 물품 목록]\n';
    message += '--------------------\n';

    // 배열의 모든 객체를 순서대로 꺼내 문자열에 추가한다.
    for (var i = 0; i < myBag.length; i += 1) {
        var item = myBag[i];
        message += '- ' + item.name + ' ' + item.emoji + ': ' + item.quantity + '개\n';
    }

    message += '--------------------\n';
    message += '총 물품 종류: ' + myBag.length + '가지';

    alert(message);
}
