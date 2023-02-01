console.log("Welcome to compiled java version data exchange format");
var Number1_element = document.getElementById("Number1");
var Number2_element = document.getElementById("Number2");
var submit_element = document.getElementById("button_id");
function add(num1, num2) {
    return num2 + num1;
}
submit_element.addEventListener("click", function () {
    console.log("Addition of 2 numbers = " + add(parseInt(Number1_element.value), parseInt(Number2_element.value)));
});
//Working with data types 
function add_number(add_num1, add_num2, showValue, phrase_given) {
    /*  if(add_num1 !== "number" && add_num2 !== "number") //Using only types
    {
        throw new Error("Given inputs have different data types");
    }
 */
    if (showValue) //using boolean type 
     {
        console.log("Addition of 2 numbers using boolean data types = " + showValue + " " + (add_num1 + add_num2));
        //return new Error("error occurred due to custom code"); 
        //throw new Error("error occurred due to custom code");
    }
    else {
        // return add_num2 + add_num1;
        return new Error("Executing else loop for only boolean type");
    }
    if (showValue) //using boolean and string types 
     {
        console.log("Addition of numbers using boolean and string data types" + phrase_given + (add_num1 + add_num2));
    }
    else {
        return new Error("Executing else loop for only boolean and string types");
    }
}
var num_value1 = 4;
var num_value2 = 'string word';
var printValue = true;
var phrase = "Result after operation : ";
console.log("Addition of 2 numbers = " + add_number(num_value1, num_value2, printValue, phrase)); //Addition of 2 numbers = 10.5
console.log(typeof num_value1); //string
console.log(typeof num_value2); //number
//console.log("Addition of 2 numbers = " +  add_number(4,5));
//console.log("Addition of 2 numbers = " +  add_number(4,"5"));
add_number(10, 10, printValue, phrase); //Result after operation : 20
/*


//Working with objects

var Person : {
    name : string,
    age : number
}=
{
    name : "something else",
    age : 35
}

console.log(Person);//{name: 'something else', age: 35}
//console.log(Person.id); will throw an error as id property does not exist in object

var Person1 : {
    name : string,
    age : number,
    hobbies : Array<string>,
    role : [number,string], // tuple notation
    department : string

} =
{
    name : "Youtube learning channel",
    age : 35,
    hobbies : ["word1","word2","word3"],//(property) hobbies: string | number[]
    role : [2,"author1"],
    department : "Admin department"

}

Person1.hobbies.push("word4");
Person1.role[1] = "replacing author1 with author2";
Person1.role[0] = 10

//using tuple would be perfect if we want data type Person1.role[0] to be as number only and Person1.role[1] to be as string

for(let e in Person1)
{
    console.log(e);
    (document.getElementById("getObjectsH3") as HTMLHeadingElement).innerHTML = e;
}

for(let e of Person1.hobbies)
{
    console.log("Printing object = " + e.toLocaleUpperCase());
}





 



 



//Working with enums

enum Department_Names
{
    school_department_bangalore = "Bangalore Main Branch",
    school_department_hyderabad = 7,
    school_department_delhi,//this index will be incremented by 1 value
    school_department_Mumbai =90 //index starts with 90
}
console.log("Giving some branch name check if present:  " + "MG road branch");

var Admission =
{
    department : Department_Names.school_department_bangalore
}



if(Department_Names[0] == "MG road branch" )
{
    console.log("this is given name earlier");
}
else
{
    console.log("this is not a given name earlier");
    //Output :- this is not a given name earlier
}

console.log(Admission.department);//Bangalore Main Branch

 

 */
/*



//Working with Union types and literal types

 

var result_fromCalling_function :
{
    resultConversion : string,
    

} =
{
    resultConversion : "trying_number",
    
}


//type aliases literal types


type Combinable = string | number;
let ConversionDescriptor = "trying_number";


function Combine(input1 : Combinable, input2 : Combinable,getType : any)
{
    if( typeof input1 == "number" && typeof input2 == "number")
    {
        
        let result = input1 + input2;
        console.log(result);
    }

    
    else if(typeof input1 == "string" && typeof input2 == "string")
    {
        console.log(input1.toLocaleUpperCase() + input2.toLocaleUpperCase());
    }
    else
    {
        console.log("give both inputs neither a string or a number ");
    }

     if(getType == result_fromCalling_function.resultConversion)
    {
        const i1 = +input1
        const i2 = +input2;
        console.log(i1 + i2);
    }
    else
    {
        console.log(input1.toLocaleString() + input2.toLocaleString());
    }

    //defining using custom aliases
    console.log("Obtaining values using custom aliases = ");
     if(getType == ConversionDescriptor)
    {
        const i1 = +input1
        const i2 = +input2
        console.log(i1 + i2);
    }
    else
    {
        console.log(input1.toLocaleString() + input2.toLocaleString());
    }

    
}

// Combine(3,4);//7
// Combine(3,"hello");//give both inputs either string or a number
// Combine("hello",90);//give both inputs either string or a number
// Combine("hello1","hello2");//HELLO1HELLO2




Combine("10","10","try");

Combine(10,10,"trying_number");

console.log("Expecting same input");





Combine("10","10","word changed");


Combine("10","10",ConversionDescriptor);


 
 
 */
//function return types and void 
function operation(var1, var2) {
    return var1 + var2;
}
function printResult(result) {
    console.log("Result = " + result); //return type is void
}
function printResult1(result) {
    console.log("Result = " + result); //return type is void
    return; //use empty return statement if undefined is used 
}
printResult(operation(2, 3)); //Result = 5
/*

//assigning functions as types

let v1 : Function = operation;//executing function using variables
//v1 =5; // will throw an error

console.log(v1(3,4));//7

let function_variable : () => number;//this indicates that this function will accept no parameters and returns number as a function


let function_variable1 : (a: number , b: string) => number | string;//this indicates that this function will accept 2 parameters and returns number as a function




    //callBack: (result : number) => void
    // can also be written in above way

function printHandle(a: number , b: number, callBack = function(result : number) : void {})
{
    let addition = a + b;
    callBack(addition);
}



printHandle(10,20,(send_value) => {
    console.log("Printing result after callback function execution = " + send_value);
    return 15;//typescript won't throw an error but will ignore this statement since callBAck has a void return type
    //anything u return will not be used

});//Printing result after callback function execution = 30
//typescript will throw an error if we add one more parameter after send_value because call back accepts only 1 parameter and typescript automatically refers send_value as number without even declaring return type
//() => {} anonymous function with no value we are passing it to line no 312

//typeScript doesn't bother much about return type but is very strict on parameter types and no of parameters



 */
// creating empty functions and assigning as a variable to other other created function
var a = function (a1, a2) {
    return [""];
};
var helloFunction = a;
var UserInput;
var userName;
UserInput = "15";
userName = "word1";
//userName = UserInput;
//will throw an error since unknown doesn't guarantee return type as string ,type 'unknown' is not assignable to type 'string
//unknown data type  allows  type checking but not everything as any
if (typeof UserInput == "string") {
    userName = UserInput; //won't throw an error 
}
/*
 
//Utility functions with never
function generateError(message_received : string , code : number) : never
{
    throw {message_throw : message_received , error_throw : code };
    //while(true) {}; infinite function which will never return any value
}
var g = generateError("Error occurred , port not working = ",404); //Never returns any value
console.log(g);


 */
//never was introduced in later versions of typescript 
//code perspective with return type , intensions will be clever if we use never
var b_element = document.querySelector("button");
function clickHandler(message) {
    console.log("typed value = " + message);
}
// if(b_element)
// {
//     b_element.addEventListener("click",function(data1)
//     {
//         console.log(data1);
//     })
// }
if (b_element) {
    b_element.addEventListener("click", clickHandler.bind(null, "hello world"));
    //A function will execute only when bind is used in add event listener 
}
function addPositive_Numbers(a, b) {
    if (a + b > 0) {
        return a + b;
    }
    return; //this return statement is used as javascript will throw an error since a + b > 0 may sometimes return value and sometimes not 
}
