import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
//매인 클래스 정의
public class Main {
    //I/O를 위해서 클래스들 임포트
    public static void main(String[] args) throws IOException {
        //콘솔로 부터 입력 받아오기위해 메인 메소드 안에 버퍼리더 갯체생성
        BufferedReader bufferedReader =
                new BufferedReader(new InputStreamReader(System.in));
        //스트링토크나이저 객체 생성 첫 번째 줄에 작성한 값을 받아온다
        StringTokenizer stringTokenizer =
                new StringTokenizer(bufferedReader.readLine());
        //suNO와 quizNO는 공백을 기준으로 나뉜다 이값은 각각 퀴즈 수와 수행할 쿼리 수를 나타냅니다.
        //next.Token()을 하면 string을 받아오므로 Integer.parseInt를 사용한다.
        int suNO = Integer.parseInt(stringTokenizer.nextToken());
        int quizNO = Integer.parseInt(stringTokenizer.nextToken());
        //합배열 선언 0번쨰 인덱스를 무시하고자 + 1을 했다.
        long[]S = new long[suNO +1];
        //입력된 수를 배열로 받아온다.
        stringTokenizer =
                new StringTokenizer(bufferedReader.readLine());
        for (int i =1; i<=suNO; i++){
            S[i] = S[i-1] + Integer.parseInt(stringTokenizer.nextToken());
        }

        // Press Opt+Enter with your caret at the highlighted text to see how
        // IntelliJ IDEA suggests fixing it.

        // Press Ctrl+R or click the green arrow button in the gutter to run the code.
        for (int q = 0; q <quizNO; q++) {

            // Press Ctrl+D to start debugging your code. We have set one breakpoint
            // for you, but you can always add more by pressing Cmd+F8.
            stringTokenizer =
                    new StringTokenizer(bufferedReader.readLine());

            int i = Integer.parseInt(stringTokenizer.nextToken());
            int j = Integer.parseInt(stringTokenizer.nextToken());
            //계산 결과는 System.out.println()을 사용하여 콘솔에 인쇄됩니다.
            System.out.println(S[j] - S[i-1]);
        }
    }
}