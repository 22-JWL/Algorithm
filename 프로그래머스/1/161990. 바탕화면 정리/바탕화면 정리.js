function solution(wallpaper) {
  //이중배열

  //lux, luy=49부터 시작한다.
  let lux = 49;
  let luy = 49;
  //ldx, ldy = 0 부터 시작한다
  let ldx = 0;
  let ldy = 0;
  
//이중 배열 처음부터 순회
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      //if(wallpaper[i][j]에 #이 있을경우)
      if (wallpaper[i][j] === "#") {
        //가장 앞 열 구하기
        if (i < lux) {
          lux = i;
        }
        //가장 앞 행 구하기
        if (j < luy) {
          luy = j;
        }
        //가장 뒤의 열 구하기
        if (i > ldx) {
          ldx = i;
        }
        //가장 뒤의 행 구하기
        if (j > ldy) {
          ldy = j;
        }
      }
    }
  }
  return [lux, luy, ldx + 1, ldy + 1];
}