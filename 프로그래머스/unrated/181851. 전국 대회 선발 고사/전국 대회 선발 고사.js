function solution(rank, attendance) {
    // 빈 배열을 초기화하여 결과를 저장할 변수 선언
    let answer = [];

    // 순위 배열의 각 원소를 반복하면서 출석 배열과 비교
    for (let i = 0; i < rank.length; i++) {
        // 만약 해당 인덱스의 출석 값이 true라면
        if (attendance[i]) {
            // 해당 순위를 결과 배열에 추가
            answer.push(rank[i]);
        }
    }

    // 결과 배열을 오름차순으로 정렬
    answer.sort((a, b) => a - b);

    // 특정 인덱스의 결과 배열의 값을 순위 배열에서 찾는 함수 정의
    function Participant(idx) {
        return rank.indexOf(answer[idx]);
    }

    // 결과 값 계산 및 반환
    // Participant 함수를 사용하여 상위 3명의 인덱스를 찾고,
    // 해당 인덱스를 이용하여 계산된 값을 반환
    return 10000 * Participant(0) + 100 * Participant(1) + Participant(2);
}
