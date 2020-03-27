
//Reverse of the array
const array=['one','two','three','four']
console.log('array:', array);
const reversed=array.reverse();
console.log("reversed:",reversed);
console.log('array',array);

//Sorting of the Array
const months=['march','jan','feb','dec']
months.sort();
console.log(months);

//numbers
const array1=[1,30,4,21,21000]
array1.sort();
console.log(array1);

//function sorting

var numbers=[4,2,5,1,3]
numbers.sort( function (a,b){
return a-b;
});
console.log(numbers);

//arrow function

let numberss=[4,2,5,1,3]
numberss.sort((a,b)=>a-b);
console.log(numberss);

//merge of the Array
const array2=['a','b','c']
const array3=['d','e','f']
const array4=array2.concat(array3);
console.log(array4);

//numbers

const num1=[1,2,3]
const num2=[4,5,6]
const num3=[7,8,9]
const num4=num1.concat(num2,num3);
console.log(num4);

//delete  of the Array
var employee=["vinod","sandeep","ugam","nikit","ram"]
document.getElementById("demo").innerHTML="the first employee is:"+employee[4];
delete employee[4]
document.getElementById("demo1").innerHTML="the first employee is:"+employee[4];

//Array declaration
 var person=['Vinod','Sandeep','Ugam','Nikit']
 document.getElementById("demo2").innerHTML=person[1]

 //Filter of the Array
 const students=['vinod','sandy','ugam','nikit','ram','ravi']
 const result=students.filter(student=>student.length>4);
 console.log(result);

//Index of the Array
const words=['vinod','asher','balu','adi','raju']
console.log(words.indexOf('raju'));
console.log(words.indexOf('vinod'));
console.log(words.indexOf('balu',2));

//Map of the Array
const num=[1,4,9,16]
const map=num.map(x=>x*3);
console.log(map);