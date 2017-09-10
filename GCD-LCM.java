
import java.util.*;


public class LCM {
	  
	  private static long GCD(int a, int b) {
		    while ( a != 0 && b != 0 ){
	        if (a > b) {
	            a = a % b; 
	        } else {
	             b = b % a; 
	        }
	    }
	    return (a + b);
	}

	  public static void main(String[] args) {
	    Scanner scanner = new Scanner(System.in);
	    int a = scanner.nextInt();
	    int b = scanner.nextInt();
	    long mult = (long)a * (long)b;
	   
	    long GCD = GCD(a, b);
	   
	    System.out.println(mult/GCD);
	  } 
	}
