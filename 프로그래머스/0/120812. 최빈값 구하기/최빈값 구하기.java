class Solution {
    public int solution(int[] array) {
        int answer = 0; // 최빈값을 저장할 변수
        int[] index = new int[1001]; // 0~1000까지의 값을 카운트하기 위한 배열 (최대 1000으로 가정)
        int max = Integer.MIN_VALUE; // 최빈값의 빈도 수를 저장할 변수, 초기값은 최소 정수로 설정
        
        // 1. 배열의 각 요소의 빈도를 카운트
        for(int i = 0; i < array.length; i++) {
            index[array[i]]++; // 해당 숫자의 빈도를 증가시킴
        }
        
        // 2. 가장 높은 빈도를 가진 값을 찾음
        for(int i = 0; i < index.length; i++) {
            if (index[i] > max) { // 현재 빈도가 최대값보다 크면
                max = index[i]; // 최대값 업데이트
                answer = i; // 최빈값을 해당 숫자로 업데이트
            } else if (max == index[i]) { // 현재 빈도가 기존 최대값과 같으면
                answer = -1; // 최빈값이 여러 개일 경우 -1로 설정
            }
        }
        
        // 3. 최빈값 반환
        return answer; // 최빈값 또는 -1 반환
    }
}
