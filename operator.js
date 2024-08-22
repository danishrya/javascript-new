/*
OPERATOR
1.arithmetic
2.logical
3.assignment
4.comparison
5.conditional/ternary*/
/*ARITHMETIC
1.angka
2.operasi aritmatika
operator
1.+addition
2.-substaction
3./division
4.*multiplication
5.++increnment
6.--decrement 
7.**expontial
8.%modulus

binary
+,-,/,*,**,%

unary
*/



let angka = 5;
angka++; //6
angka+1; //6

angka--; //4
angka-1; //4

angka ** 2; 
3**4

//operand
let angka1=10;
angka1=angka1+20; //10+20

/*
logical = logika

operator:
1.! -->tidak sama dengan 
2.&& --> and
3.|| --> or 
operasi logika aritmatika

LOGIKA MATEMATIKA
AND
X     |      

*/
let number1 = 5
let number2 = 7
let result1 = number1<number2 //true
let result2 = number1>number2 //false
//console.log("before negation",result1)

let negationresult =!result1;
//console.log("negation result,negationresult",negationresult)

let orOPERATION = result1 || result2
//console.log("orOPERATION",orOPERATION)


/*
1.ASSIGMENT-->ASSIGN VALUE 
  1.=
  2.+=
  3.-=
  4.*=
  5./=
  6.**=
*/
let assignment1 = 10
 //assignment1 =assignment1 + 2
 assignment1 **= 2
 //console.log(assignment1)


 /*
 COMPARISON-->PERBANDINGAN
 1. == --> MEMBANDINGKAN VALUE
 2. === --> MEMBANDINGKAN VALUE& DATA TYPE
 3. != --> tidak sama dengan
 4. >=
 5.<=
 */

let data1=50;
let data2=50;

let resultofcomparison = data1 === data2
//console.log(resultofcomparison)

/*
tertary-->pengkondisian
abc ? "123":"321"
*/

const ternaryexample = 12
ternaryexample > 50 ? console.log("di atas 50"): console.log("di bawah 50");
//if(condition) ? true:false 