class Solution {// Solution 클래스를 정의
    public String[] solution(String[] quiz) {
         // solution 메서드를 정의. 입력으로 문자열 배열 quiz를 받는다.
        String[] answer = new String[quiz.length];
         // quiz의 길이만큼의 문자열 배열을 생성하여 answer 변수에 할당.
        for (int i = 0; i<quiz.length; i++){
            String[] s = quiz[i].split(" ");
             // 현재 quiz 요소를 공백으로 나누어 문자열 배열 s에 저장.
            
            if(s[1].equals("+")) {
                if(Integer.parseInt(s[0]) + Integer.parseInt(s[2]) == Integer.parseInt(s[4])){
                    answer[i] = "O";
                }else {
                    answer[i] = "X";
                }
            }else if(s[1].equals("-")) {
                if(Integer.parseInt(s[0]) - Integer.parseInt(s[2]) == Integer.parseInt(s[4])){
                    answer[i] = "O";
                }else {
                    answer[i] = "X";
                }
            }
        }
        
        return answer;
    }
}