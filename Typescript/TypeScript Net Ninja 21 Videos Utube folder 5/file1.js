"use strict";
/* const character = "Mario changed to disney checking automatic compilation";
console.log(character);

const input1 = document.querySelectorAll("input");

console.log(input1);//NodeList(3) [input#tofrom, input#details, input#amount]

input1.forEach(function(currentElement : any)
{
    console.log(currentElement);
});





 


//3rd YouTube Video


let subject = "Maths";
let age = 45;
let isGreaterThan = true;

//subject = 34;//not letting changes to occur
subject = "English"//not showing red line

//age = "Marks obtained";
age = 56;

isGreaterThan = false;
//isGreaterThan = 78;


const circle_area =  (radius: number) =>
{
    return (Math.PI * radius * radius);
}

//console.log("Area of circle = " + circle_area("Hello"));//doesn't let me to pass parameters
console.log("Area of circle = " + circle_area(2));//
// Output :- Area of circle = 12.566370614359172
 






//4th YouTube video



//arrays

let array1 = ["English","Maths","Social"];

array1.push("Science");
array1.push("Biology");

//array1.push(34);//won't let it push

let array2 = [20,34,56,32];

array2.push(45);
//array2.push("Subjects");//won't let it push

array2[2] = 90;
//array2[3] = "Exams"; //won't let it push


let mixed_array : Array<string | number> = [2,3,"Maths","Hello",34,78];

mixed_array.push(45);
mixed_array.push(12);

mixed_array[2] = 100;
mixed_array[4] = "changing numeric value";



//objects

let object1 =
{
    name : "Branch",
    age : 45,
    Section : "2nd Year"
}

//property declared inside a variable once can't be changed later

object1.age = 90;
//object1.age = "Maths"; //won't let it do

object1.Section = "3rd Year";
//object1.Section = 45;//won't let it do

//object1.array2 = [34,"Maths",98,"Arts"];//won't let add a new property


//object can be overridden only if all property values are changed , but not few of them

object1 =
{
    name : "Branch_changed",
    age : 453, // will throw an error if this value is not changed
    Section : "value changed"
}
 
 */
//5th Youtube Video
//explicit types 
let character1;
let age1;
let isBoolean;
//age1 = "Hello World"
isBoolean = true;
//arrays
let array1; // 
//array1 = [20,30];
array1 = ["World", "Earth", "Mars"];
array1.push("Neptune");
console.log("Array1 values = " + array1); //Array1 values = World,Earth,Mars,Neptune
//union types
let mixed_array = [];
mixed_array = [9, "Bangalore", 45, "Chennai"];
mixed_array[4] = 43;
mixed_array[5] = "Hyderabad";
mixed_array.push("Goa");
mixed_array.push(56);
for (let i = 0; i < mixed_array.length; i++) {
    console.log("mixed_array[" + i + "] = " + mixed_array[i] + "\n");
}
let unique_identifier;
unique_identifier = 45;
unique_identifier = "programmer";
//objects 
let NinjaOne;
NinjaOne =
    {
        Language: "Java",
        Framework: "SpringBoot",
        Duration: 56,
    };
//can use parenthesis too
let NinjaTwo = {
    Language1: "",
    Period: 0,
    Gender: true
};
NinjaTwo.Language1 = "Excuse";
//NinjaTwo.Language1 = 34; //doesn't work
NinjaTwo.Period = 65;
//NinjaTwo.Period = "programmer"; //doesn't work
NinjaTwo.Gender = true;
//NinjaTwo.Gender = 67; //doesn't work */
//6th YouTube video
//Any types 
let age = 67;
age = "word";
console.log("Age = " + age); //Age = word
age = 67;
console.log("Age = " + age); //Age = 67
age = true;
console.log("Age = " + age); //Age = true
age =
    {
        Language: "JavaScript",
        Compiler: "Visual Studio",
        Version: 6.5
    };
console.log(age); //{Language: 'JavaScript', Compiler: 'Visual Studio', Version: 6.5}
//8th Video
//Function Basics 
let greet;
greet = () => {
    console.log("Welcome to greet function");
};
//greet = "Hello"//not possible as it is already a function 
const add = (a, b, c = "c value is default") => {
    console.log("Addition of a and b = " + (a + b));
    console.log(c); //undefined
}; //use ? after a variable to indicate it's optional
//when default value is used , then don't use question mark
add(10, 20);
const plus = (a, b) => //explicity declaring function return type 
 {
    return (a + b);
};
var result = plus(4, 5); //typescript will infer result as number since return type of function is a number 
//result = "value is" //can't change it to string as the variable type is already inferred as number 
//9th Video
var use_variable = "Using this value in function";
let greet10 = (user) => {
    console.log(`Checking function different values\n "Language" :` + user.Language + `\n"Framework" :` + user.Framework + `\n"Started around" :` + user.Period);
    console.log(user);
};
greet10({ Language: "Java", Framework: "Spring", Period: 27 });
var use_variable1 = "Using this value in function";
//Replacing string | number with StringOrNumber 
let greet1 = (user1) => {
    console.log(`Checking function different values in Greet1 variable \n "Language" :` + user1.Language + `\n"Framework" :` + user1.Framework + `\n"Started around" :` + user1.Period);
    console.log(`${use_variable1}`);
    console.log(user1);
};
greet1({ Language: "Java1", Framework: true, Period: 27 });
//Replacing entire object properties with alias name
var use_variable = "Using this value in function";
let greet2 = (user2) => {
    console.log(`Checking function different values in Greet2 variable \n "Language" :` + user2.Language + `\n"Framework" :` + user2.Framework + `\n"Started around" :` + user2.Period);
    console.log(`${use_variable}`);
};
greet2({ Language: "Java2", Framework: "Spring2", Period: 32 });
//10th Video
//function Signatures
//example1
let Calc;
Calc = (NumOne, NumTwo, action) => {
    if (action == "Add") {
        return (NumOne + NumTwo);
    }
    else {
        return "Add word is not used";
    }
};
console.log("Addition of 2 numbers = \n");
console.log(Calc(2, 3, "Add"));
let logDetails = (Object_usingTemp) => {
    console.log(`Channel ${Object_usingTemp.Name_channel} is running on ${Object_usingTemp.Age_wise} number in TV`);
};
logDetails({ Name_channel: "Walt Disney", Age_wise: 89 });
//Output :- Channel Walt Disney is running on 89 number in TV
