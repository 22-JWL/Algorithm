function solution(n, lost, reserve) {
    // 각 학생의 체육복 상태를 저장할 객체
    const students = {};

    // 최종적으로 체육 수업을 들을 수 있는 학생 수를 저장할 변수
    let answer = 0;

    // 모든 학생의 초기 체육복 상태를 1로 설정 (모든 학생이 체육복 1벌을 가지고 있는 상태)
    for (let i = 1; i <= n; i++) {
        students[i] = 1;
    }

    // 도난당한 학생 목록을 반복하면서 해당 학생의 체육복 상태를 1 감소시킴
    lost.forEach(number => students[number] -= 1);

    // 여분의 체육복을 가지고 있는 학생 목록을 반복하면서 해당 학생의 체육복 상태를 1 증가시킴
    reserve.forEach(number => students[number] += 1);

    // 체육복을 빌려주는 과정
    for (let i = 1; i <= n; i++) {
        if (students[i] === 2 && students[i - 1] === 0) {
            // 해당 학생이 2벌의 체육복을 가지고 있고, 바로 이전 학생이 체육복이 없는 경우
            students[i - 1]++;
            students[i]--;
        } else if (students[i] === 2 && students[i + 1] === 0) {
            // 해당 학생이 2벌의 체육복을 가지고 있고, 바로 다음 학생이 체육복이 없는 경우
            students[i + 1]++;
            students[i]--;
        }
    }

    // 최종적으로 체육 수업을 들을 수 있는 학생 수를 계산
    for (let key in students) {
        if (students[key] >= 1) {
            answer++;
        }
    }

    return answer;
}
