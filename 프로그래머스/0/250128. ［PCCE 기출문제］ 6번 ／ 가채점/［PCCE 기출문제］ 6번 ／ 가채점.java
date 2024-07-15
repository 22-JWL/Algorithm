class Solution {
    public String[] solution(int[] numbers, int[] our_score, int[] score_list) {
        int num_student = numbers.length;
        String[] answer = new String[num_student];

        for (int i = 0; i < num_student; i++) {
            if (our_score[i] == score_list[numbers[i] - 1]) {// score_list에는 실제 성적이 [1번 학생 성적, 2번 학생 성적, 3번 학생 성적 ...] 순서로 들어있다. 따라서 score_list[numbers[i] - 1]을 사용해야 한다
                answer[i] = "Same";
            }
            else {
                answer[i] = "Different";
            }
        }

        return answer;
    }
}
