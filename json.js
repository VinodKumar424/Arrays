// var myObj = { name: "John", age: 31, city: "New York" };
// var myJSON = JSON.stringify(myObj);
// window.location = "demo_json.php?x=" + myJSON;


var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;

var myObj,myJSON,text,obj;
//stroing the data
myObj={ name:"John",age:31,city:"New York"};
myJSON=JSON.stringify(myObj);
localStorage.setItem("testJSON",myJSON);

//retreving the data
text=localStorage.getItem("testJSON");
obj=JSON.parse(text);
document.getElementById("demo1").innerHTML=obj.age;

//array data type
var myObj, x;
myObj = { name: "John", age: 30, city: "New York" };
myObj["name"] = "Gilbert";
document.getElementById("demo2").innerHTML = myObj.name;


//parse
var txt='{ "name":"vinod","age":23,"city":"surat"}'
var obj=JSON.parse(txt);
document.getElementById("demo3").innerHTML=obj.name+","+obj.age

//Stringify a JavaScript Array

var arr=["vinod","sandeep","ugam","nikit"];
var myJSON=JSON.stringify(arr);
document.getElementById("demo4").innerHTML=myJSON;

//Stringify Dates

var obj={ name:"vinod",today:new Date(),city:"surat"};
var myJSON=JSON.stringify(obj);
document.getElementById("demo5").innerHTML=myJSON;

//Stringify Functions

var obj={ name:"vinod",age:function(){return 23},city:"surat"};
var myJSON=JSON.stringify(obj);
document.getElementById("demo6").innerHTML=myJSON;

var obj={ name:"vinod",age:function(){return 23},city:"surat"};
obj.age=obj.age.toString();
var myJSON=JSON.stringify(obj);
document.getElementById("demo7").innerHTML=myJSON;
