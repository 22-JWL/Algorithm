function solution(array) {
    // 각 데이터 값의 빈도수를 저장할 객체
    let frequencyMap = {};
    // 가장 높은 빈도수를 초기화
    let maxFrequency = 0;
    // 최빈값을 저장할 배열
    let modes = [];

    // 배열의 각 요소를 순회하며 빈도수를 계산
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        // 만약 현재 값이 frequencyMap 객체에 없다면,
        if (!frequencyMap[value]) {
            // 빈도수를 1로 초기화
            frequencyMap[value] = 1;
        }
        else {
            // 이미 값이 있다면 빈도수를 1 증가
            frequencyMap[value]++;
        }
    

        // 현재 값의 빈도수가 최빈값보다 높다면 업데이트
        if (frequencyMap[value] > maxFrequency) {
            maxFrequency = frequencyMap[value];
            // modes 배열을 현재 값 하나로 초기화
            modes = [value];
        }
        // 현재 값의 빈도수가 최빈값과 같다면
        else if (frequencyMap[value] === maxFrequency) {
            // modes 배열에 -1을 추가 (다중 최빈값을 나타내기 위해)
            modes = [-1];
        }
}
    // 최빈값 배열의 첫 번째 요소를 반환
    return modes[0];
}

