//Accessing Object Values
 var myObj,x;
 myObj={ "name":"Vinod","age":23,"car":null};
 x=myObj.name;
 document.getElementById("demo").innerHTML=x;

 //Lopping an Object

 var myObj, x;
 myObj = {"name":"John", "age":30, "car":null};
for (x in myObj) {
  document.getElementById("demo1").innerHTML += x + "<br>";
}

// Nested JSON Objects

var myObj = {
    "name":"John",
    "age":30,
    "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
    }
  }
  document.getElementById("demo2").innerHTML += myObj.cars.car2 + "<br>";

  //Modify Values
  var myObj, i, x = "";
  myObj = {
    "name":"John",
    "age":30,
    "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
    }
  }
  myObj.cars.car2 = "Mercedes";
  
  for (i in myObj.cars) {
    x += myObj.cars[i] + "<br>";
  }
  
  document.getElementById("demo3").innerHTML = x;

  //Delete Object Properties
  var myObj, i, x = "";
  myObj = {
    "name":"John",
    "age":30,
    "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
    }
  }
  delete myObj.cars.car2;
  
  for (i in myObj.cars) {
    x += myObj.cars[i] + "<br>";
  }
  
  document.getElementById("demo4").innerHTML = x;