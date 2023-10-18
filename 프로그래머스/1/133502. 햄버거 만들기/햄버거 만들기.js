function solution(ingredient) {
    
// count 변수는 조건을 만족하는 부분 문자열의 수
    let count = 0;
// 배열에서 현재 위치부터 4개의 요소를 추출하여 문자열로 변환
for (let i = 0; i < ingredient.length; i++) {
     // 추출한 문자열이 '1231'과 같으면 count 증가.
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            count++;
            //i부터 4개배열을 제거
            ingredient.splice(i, 4);
            //인덱스를 0으로 이동하여 처음부터 다시 탐색
            i -= 3;
        }
    }
 
    return count;
}