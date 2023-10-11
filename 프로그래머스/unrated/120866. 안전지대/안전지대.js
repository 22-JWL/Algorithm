// 이 함수는 2D 배열 'board'를 입력으로 받아, 1로 표시된 셀 주변의 0을 2로 변경,
// 변경된 셀의 개수를 반환합니다.
function solution(board) {
  let count = board.reduce((a, b) => a + b.length, 0); // 초기 'count' 값을 모든 셀의 개수로 설정.

  // 'board'의 각 행과 열을 순회합니다.
  board.forEach((a, y) => {
    a.forEach((b, x) => {
      if (b == 1) { // 1로 표시된 셀을 찾으면
        count--; // 'count'를 감소시킵니다 (이 셀은 이미 카운트됐으므로 하나를 뺀다).

        // 주변 8방향을 검사하기 위한 루프를 시작.
        for (let n = -1; n <= 1; n++) {
          for (let m = -1; m <= 1; m++) {
            // 주변 셀이 배열 범위 내에 있는지 확인하고, 0인 경우를 찾는다.
            if (0 <= y + n && 0 <= x + m && y + n < a.length && x + m < a.length) {
              if (board[y + n][x + m] == 0) {
                board[y + n][x + m] = 2; // 0을 2로 변경하고
                count--; // 'count'를 다시 감소시킵니다 (이 셀을 카운트).
              }
            }
          }
        }
      }
    });
  });

  return count; // 모든 연산을 마친 후 'count'를 반환합니다.
}
