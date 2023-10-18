function solution(ingredient) {
  let answer = 0;
  const arr = [];

  // 식재료 만큼 반복한다.
  for (let i = 0; i < ingredient.length; i++) {

    // 만들어둔 arr에 식재료를 하나씩 넣고
    // 길이가 4이상이 되면 최근 4가지의 재료를 확인한다.
    // Array push는 길이를 반환.
    const len = arr.push(ingredient[i]);
    if (len >= 4) {

      if (
        arr[len - 4] === 1 &&
        arr[len - 3] === 2 &&
        arr[len - 2] === 3 &&
        arr[len - 1] === 1
      ) {
        // 최근 4가지의 재료가 햄버거가 완성될 재료면
        // pop()을 통해 완성된 햄버거를 제외시켜준다.
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();

        // answer를 하나 올려준다
        answer++;
      }
    }
  }

  return answer;
}

//좋은 것같은 풀이
function solution1(ingredient) {
    
// count 변수는 조건을 만족하는 부분 문자열의 수
    let count = 0;
// 배열에서 현재 위치부터 4개의 요소를 추출하여 문자열로 변환
for (let i = 0; i < ingredient.length; i++) {
     // 추출한 문자열이 '1231'과 같으면 count 증가.
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            count++;
            //i부터 4개배열을 제거
            ingredient.splice(i, 4);
            //인덱스를 3개 뒤로 이동하여 탐색
            i -= 3;
        }
    }
 
    return count;
}


function failsolution(ingredient) {
    
    // count 변수는 조건을 만족하는 부분 문자열의 수
        let count = 0;
    // 배열에서 현재 위치부터 4개의 요소를 추출하여 문자열로 변환
    for (let i = 0; i < ingredient.length; i++) {
        const arr = ingredient.slice(i, i + 4);
        //두 배열이 같은 참조를 가리키는지 확인하기 때문에 항상 false 가 반환
            if (arr === [1,2,3,1]) {
                console.log(ingredient.slice(i,i+4));
                count++;
                ingredient.splice(i, 4);
                //0부터 탐색하면 시간 초과
                i -= 0;
            }
        }
     
        return count;
    }