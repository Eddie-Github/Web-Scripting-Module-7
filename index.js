//concept 1, JSON Objects
//create a JSON literal inside a string
JSONEddie = '{"first":"Eddie", "last":"Hoffman", "age":21, "job":"Student"}';
//parse the JSON into a javascript object
JavaScriptEddie = JSON.parse(JSONEddie);
//create the output string and show the output
var output1 = "My name is " + JavaScriptEddie.first + " " + JavaScriptEddie.last +
    ". I am a " + JavaScriptEddie.age + " year old " + JavaScriptEddie.job + ".";
document.getElementById("output1").innerHTML = output1;

//concept 2, JSON Arrays
//create a JSON literal array
JSONArray = '["Item 1", "Item 2", "Item 3", "Item 4"]';
//parse the JSON into a javascript array
JavaScriptArray = JSON.parse(JSONArray);
//create the output string and show it
var output2 = "The elements are: ";
JavaScriptArray.forEach(element => {
    output2 += element
    output2 += ", "
});
document.getElementById("output2").innerHTML = output2;

//concept 3, JSON Null values
//create a JSON literal with a Null value
JSONNUll = '{"null":null}'
//parse the JSON into JavaScript
JavaScriptNull = JSON.parse(JSONNUll);
//create and show the output string
var output3 = "The value is: " + JavaScriptNull.null;
document.getElementById("output3").innerHTML = output3;
