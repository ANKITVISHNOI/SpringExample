package com.avssoftsol.app.test;

import java.util.Scanner;

public class Test {

	public static void main(String[] args) {

		/*int num=50;
int count=0;

for(int i=2;i<=num;i++){

count=0;

for(int j=2;j<=i/2;j++){

if(i%j==0){
count++;
break;
}

}

if(count==0){

System.out.println(i);

}

}
		 */


		/*int radius = 0;
	Scanner in= new Scanner(System.in);
	System.out.println("Please enter radius of a circle");

	    radius=in.nextInt();


		 * where r is a radius of a circle then Area of a circle is
		 *Area= pi * r * r
		 *


	    double area=Math.PI* radius * radius;

	    System.out.println("Area of the circle ="+area);*/

		/*int num=10;

	  for (int i = 1; i < num; i++) {

	   for (int j = 1; j<=num-i;j++) {

	    System.out.print(" ");
	   } 

	  for (int k = 1; k <= i; k++) {
	   System.out.print(k);
	  } 

	  for (int l =i-1; l >0; l--) {
	   System.out.print(l);
	  } 

	   System.out.println();
	  }*/

		/*System.out.println("Enter number upto which Fibonacci series to print: "); 
		@SuppressWarnings("resource")
		int number = new Scanner(System.in).nextInt(); 
		System.out.println("Fibonacci series upto " + number +" numbers : "); 
		//printing Fibonacci series upto number 
		for(int i=1; i<=number; i++){
			System.out.print(fibonacci2(i) +" "); 
		}
	}
	public static int fibonacci(int number){ 
		if(number == 1 || number == 2){ 
			return 1; 
		}

		return fibonacci(number-1) + fibonacci(number -2); 
	}

	public static int fibonacci2(int number){ 
		if(number == 1 || number == 2){ 
			return 1; 
		}
		int fibo1=1, fibo2=1, fibonacci=1; 
		for(int i= 3; i<= number; i++){ 
			//Fibonacci number is sum of previous two Fibonacci number 
			fibonacci = fibo1 + fibo2; 
			fibo1 = fibo2; 
			fibo2 = fibonacci; 
		}
		return fibonacci; */
	


}

}
