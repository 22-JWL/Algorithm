class Solution {
    public int[] solution(int num, int total) {
        // num 크기의 정수 배열을 생성하여 answer 변수에 할당
        int[] answer = new int[num];
          // num이 홀수인지 짝수인지 판별, 홀수일시 true
        boolean isOdd = (num % 2 == 1)? true: false;
        
        if(isOdd){
             // total을 num으로 나눈 값에서 num/2를 뺀 값을 시작 값으로 설정.
            int start = total /num - num/2;
            
            // 0부터 num-1까지 반복.
            for (int i =0; i<num; i++){
                 // 시작 값을 answer 배열에 저장하고, 시작 값을 1 증가시킴.
                answer[i] = start++;
            }
        }else{
             //total을 num으로 나눈 값에서 num/2를 뺀 후 1을 더한 값을 시작 값으로 설정.
            int start =total /num - num/2 +1;
            for (int i = 0; i <num; i++){
                answer[i] = start++;
            }
        }
        
        
        return answer;
    }
}