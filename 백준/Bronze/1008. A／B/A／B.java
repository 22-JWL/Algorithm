import java.io.IOException;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.BufferedWriter;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class Main {

   public static void main(String[] args) throws IOException{
      
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
      
      StringTokenizer st;
      
//      int T = Integer.parseInt(br.readLine());
      
         
         st = new StringTokenizer(br.readLine(), " ");//1 1가져옴(" "공백 기준으로 끊)
         double A = Integer.parseInt(st.nextToken());
         double B = Integer.parseInt(st.nextToken());
         
         bw.write( A / B + "\n");//글자라는것을알려주기 위해 가공  
      
      
      bw.flush();
      br.close();
      bw.close();

   }

}