function solution(n, arr1, arr2) {
    // 결과를 저장할 배열을 선언합니다.
    let answer = [];
    // 한 줄을 나타내는 변수를 초기화합니다.
    let line = '';
    
    // arr1과 arr2의 각 요소를 이진수로 변환하고, 필요한 만큼 앞에 0을 추가합니다.
    for(let i = 0; i < arr1.length; i++) {
        arr1[i] = arr1[i].toString(2);
        if (arr1[i].length < n) {
            for (let j = arr1[i].length; j < n; j++) {
                arr1[i] = '0' + arr1[i];
            }
        }
        
        arr2[i] = arr2[i].toString(2);
        if (arr2[i].length < n) {
            for (let j = arr2[i].length; j < n; j++) {
                arr2[i] = '0' + arr2[i];
            }
        }

        // arr1[i]와 arr2[i]를 비교하여 벽('#') 또는 공백(' ')을 추가합니다.
        for (let k = 0; k < n; k++) {
            if (arr1[i][k] === arr2[i][k] && arr1[i][k] === '0') {
                line += " ";
            } else {
                line += "#";
            }
        }
        // 현재 줄을 결과 배열에 추가하고 줄을 초기화합니다.
        answer.push(line);
        line = '';
    }

    return answer;
}





