// Q#1
// for (var i = 1; i <= 5; i++){
//     console.log("HELLO WORLD");
// }


// Q#2
// for (var i = 1; i<=10; i++){
//     console.log(i)
// }; 


// Q#3
// var tb =prompt("Enter a numbar to print it's multiplication table");
// var tn =prompt("Enter length of multiplication table");
// console.log("Multiplication table of " + tb)
// console.log("Length " + tn)
//     for (i=1; i<=tn; i++){

//         console.log(tb + " x " + i + " = " + tb*i);
//     };


// Q#4
// var arr = ["Nokia" , "Samsung"  , "Apple" , "Sony" , "Huawei"];
// for( var i = 0; i <= 4; i++){
//     console.log(arr[i]);
// };


// Q#5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//      console.log("Element at index " + i + " is " + fruits[i]);
//      };


// Q#6
// var itemsNo = +prompt("Enter the number of items");
// var arr = [];
// console.log("Number of Items: ", itemsNo);
// console.log("Items");
// for(var i=1; i <= itemsNo; i++) {
// var askForNewItem = prompt("Enter the value for index + 1");
// arr.push(askForNewItem);
// }
// console.log(arr);


// Q#7
// console.log("Counting:")
// for(var i=1; i<=15; i++){
//     console.log(i)
// };

// console.log("Reverse Counting:")
// for(var i=10; i>=1; i--){
//     console.log(i)
// };

// console.log("Even:")
// for(var i=1; i<=10; i++){
//     console.log(i*2)
// };

// console.log("Odd:")
// for(var i=1;  i<=20; i++){
//     if (i % 2 == 1){
//         console.log(i);
//     }
// };

// console.log("Series:")
// for(var i=1; i<=10; i++){
//     console.log(i*2+"k")
// };

// Q#8
// var item=["cake","apple pie","cookie","chips","patties"];
// var input= prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?");
// var isitemFound = false;
// var targetItem;

// for(var i=0;i<item.length;i++){
//     if (input==item[i]){
//         targetItem=item[i];
//     isitemFound=true;
//     break;}
// }

// if(isitemFound==true){
//     console.log(input + " is available at index "+item.indexOf(targetItem) + " of our bakery.");

// }
// else{
//     console.log("item not found");
// }

// Q#9
// var A=[24,53,91,12];
// var largest=A[0]
// for(var i=1;i<A.length;i++){
//     if(A[i] > largest){
//        largest = A[i];
//     }
// }
// console.log("The given numbers are "+A)
//     console.log("Largest Number is :"+largest)

// Q#10
// var A=[24,53,91,12];
// var smallest=A[0]
// for(var i=1;i<A.length;i++){
//     if(A[i] < smallest){
//        smallest = A[i];
//     }
// }
// console.log("The given numbers are "+A)
//     console.log("Smallest Number is :"+smallest)

// Q#11
// var A=[24,53,91,12];
// var largest=A[0]
// for(var i=1;i<A.length;i++){
//     if(A[i] > largest){
//        largest = A[i];
//     }
// }
// console.log("The given numbers are "+A)
//     console.log("Largest Number is :"+largest)
// var A=[24,53,91,12];
// var smallest=A[0]
// for(var i=1;i<A.length;i++){
//     if(A[i] < smallest){
//        smallest = A[i];
//     }
// }
//     console.log("Smallest Number is :"+smallest)

// Q#12
// for(var i=1; i<=100; i++){
//     if(i%5==0){
//         console.log(i)
//     }
// };

// Q#14
// var scores = [12, 45, 3, 22, 34, 50];
// var stopValue = parseInt(prompt("Enter a stop value:"));
// for (var i = 0; i < scores.length; i++) {
//     console.log(scores[i]);
//     if (scores[i] === stopValue) {
//         break;
//     }
// };


// Q#15
// var A = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (var i = 0; i < A.length; i++) {
//     var row = "";
//     for (var j = 0; j < A[i].length; j++) {
//         row += A[i][j];
//     }
//     console.log(row);
// }



// Q#16
// var input = prompt("Enter a number")
// for(var i = input; i >= 0; i-=0.5){
 // };


// Q#17
// for(var i = 0; i <= 20; i++){
//     // console.log(i)
//     if(i%2==0){
//     console.log(i + " is even ")
// }
// else{
//     console.log(i + " is odd ")
// }
// }


// Q18
// var productValue=1;
// for(var i=1;i<=7;i++){
//     if(i % 2 !=0){
//         console.log(i);
//         productValue=productValue*i;
//     }
// }
// console.log('The product of th odd integers from 1 to 7 is '+productValue);


// Q#19
// var str = "*";
// var input = prompt("Enter initial number of star");
// for(var i = input; i > 0; i--){
//     console.log(str.repeat(i))
// };


// Q#20
// part A
// var str = "*****";
// for (var i = 1; i <= str.length; i++){
//     console.log(str);
// }

// part B
// var str = "*";
// for(var i=1; i<=5; i++){
//     console.log(str);
//     str= str + "*";
// }

// part C
// var str = "*";
// for(var i = 5; i > 0; i--){
//     console.log(str.repeat(i))
// };