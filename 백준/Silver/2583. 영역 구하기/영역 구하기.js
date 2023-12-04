// 입력 받기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// M, N, K는 각각 격자의 세로, 가로 크기와 직사각형의 개수를 나타냄.
const [M, N, K] = input[0].split(' ').map(Number);

// 격자를 표현하는 2차원 배열 paper를 생성하고 모든 값을 false로 초기화.
const paper = [...Array(M)].map(() => Array(N).fill(false));

// 입력을 통해 주어진 직사각형의 좌표를 2차원 배열 paper에 true로 표시.
for (let i = 1; i <= K; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
  for (let y = M - y2; y < M - y1; y++) {
    for (let x = x1; x < x2; x++) {
      paper[y][x] = true;
    }
  }
}

// offset은 상하좌우 방향을 나타내는 배열.
const offset = [[0, 1], [1, 0], [-1, 0], [0, -1]];

const dfs = (start) => {
  // stack은 DFS를 위한 스택입니다. 시작 좌표로 초기화.
  const stack = [start];
  // count는 현재 영역의 크기를 나타내는 변수.
  let count = 0;

  // 스택이 비어질 때까지 반복.
  while (stack.length) {
    // 스택에서 좌표를 꺼냄.
    const [x, y] = stack.pop();
    // 현재 위치를 방문했으므로 count를 증가시킴.
    count++;

    // 상하좌우로 이동하는 오프셋(offset)을 사용하여 인접한 위치를 확인.
    for (let i = 0; i < 4; i++) {
      const nx = x + offset[i][0];
      const ny = y + offset[i][1];

      // 격자 범위 내에 있고 아직 방문하지 않은 곳이면 스택에 추가하고 방문 표시.
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && !paper[nx][ny]) {
        paper[nx][ny] = true; // 방문한 곳을 표시합니다.
        stack.push([nx, ny]); // 스택에 새로운 좌표를 추가.
      }
    }
  }

  // DFS가 끝나면 현재 영역의 크기를 반환.
  return count;
}

// areas 배열은 각 영역의 크기를 저장하는 배열.
const areas = [];

// 격자의 모든 위치에 대해 반복.
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    // 방문하지 않은 곳이면 해당 영역의 크기를 계산하여 areas 배열에 추가.
    if (!paper[i][j]) {
      // 현재 위치를 방문했음을 표시하고, DFS를 통해 영역의 크기를 계산.
      paper[i][j] = true;
      areas.push(dfs([i, j, 0]));
    }
  }
}

// 결과 출력
console.log(areas.length); // 전체 영역의 개수 출력
console.log(areas.sort((a, b) => a - b).join(' ')); // 각 영역의 크기를 오름차순으로 정렬하여 출력