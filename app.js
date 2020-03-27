// Accessing Array Values

var myObj,i,x;
myObj={
    "name":"Vinod",
    "age":"23",
    "frinds":["Sandeep","Ugam","Nikit"]
};
x=myObj.frinds[0];
console.log(myObj);
console.log(myObj.frinds[1]);

//Looping Through an Array

var myObj, i, x = "";
myObj={
    "name":"Vinod",
    "age":"23",
    "frinds":["Sandeep","Ugam","Nikit"]
};

for (i in myObj.frinds) {
  x += myObj.frinds[i] + "<br>";
}
document.getElementById("demo").innerHTML = x;

for( var i=0; i<myObj.frinds.length; i++){
    x +=myObj.frinds[i] + "<br>";
}
document.getElementById("demo1").innerHTML = x;

// Nested Arrays in JSON Objects

var myObj,j,k,x="";
myObj = {
    "name":"John",
    "age":30,
    "cars": [
      {"name":"Ford", "models":["Fiesta", "Focus", "Mustang"]},
      {"name":"BMW", "models":["320", "X3", "X5"]},
      {"name":"Fiat", "models":["500", "Panda"] }
    ]
  }
  for( j in myObj.cars){
      x +="<h2>"+myObj.cars[j].name+"</h2>";
      for(k in myObj.cars[j].models){
          x +=myObj.cars[j].models[k]+"<br>";
      }
  }
  document.getElementById("demo2").innerHTML = x;

  //Modify Array Values

  var myObj, l, x="";
  myObj={
      "name":"Balu",
      "age":28,
      "cars":["Ford","BMW","Fiat"]

  };
  myObj.cars[1]="Mercedes";
  for (l in myObj.cars){
      x +=myObj.cars[l]+"<br>"
  }
  document.getElementById("demo3").innerHTML=x;

// Delete Array Items

  var myObj, m, x="";
  myObj={
      "name":"Balu",
      "age":28,
      "cars":["Ford","BMW","Fiat"]

  };
  delete myObj.cars[0]
  for (m in myObj.cars){
      x +=myObj.cars[m]+"<br>"
  }
  document.getElementById("demo4").innerHTML=x;