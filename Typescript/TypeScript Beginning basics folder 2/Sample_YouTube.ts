console.log("Hello world from TypeScript file . Aspiring to become JavaScript developer. Save the text in file");
console.log("checking changes for watch mode , now trying again");


function addIntegers()
{
    for (var i=1 ; i<=10 ; i++)
    {
        document.write("TypeScript Value = " + i + "<br>");
    }
}

function greetName(name) {
    let GreetVariable
    if (name == "Chandler") {
        GreetVariable = "Hello Chandler (function changed) ";

    } else {
        GreetVariable = "you typed an incorrect name (function changed) ";
    }
    document.write(GreetVariable);
}

greetName("facebook");


var a=1;
var b=2;

if (a == 1)
{
    var a=12;
    let b=34;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);



/* for (let i=0 ; i<=20 ; i++)
{
    setTimeout(function (){
        console.log("Current value = " +  i);
    },1000);
}
 */






document.write("<br>");
document.write("<br>");

function FullName() {
    let num1;
    const num2 = 23;

    const JSON_object = {
        fullName: "Google Alphabet"
    }

    JSON_object.fullName = "Name changed to Microsoft";

    // we can include in the simple way as follows

    document.getElementById("FullName_id")!.innerHTML = JSON_object.fullName;


    // This way we can explicitly mention about the kind of html specific element 
    (document.getElementById("FullName_id") as HTMLButtonElement).innerHTML = JSON_object.fullName;
}


//Var used in the form of functions(consisting of a single statement) using let or const
var RegularValue = function () {

    return "Bangalore";
}
console.log(RegularValue());

const getArrayValue = (m) => 20 * m;
console.log(getArrayValue(5));

const getNumericalValue = (n, bonus) => 15 * n - bonus; //Assigning without brackets is possible
console.log(getNumericalValue(5, 12));

console.log(typeof getNumericalValue); // Ans: function


/*var employee =
    {
        id : 2,

        greet : function ()
        {
           setTimeout( () => {console.log(this.id);},4000);
        }
    }

    employee.greet();*/

/*let getValue = function (value = 25)
{
    console.log("Entered value is " + value);
}

getValue();//Entered value is 25

let add2values = function(Input1=20,Input2=30)
{
    console.log(Input1 + Input2);
}

add2values();//50
add2values(25);//55
add2values(25,25);//50
add2values(undefined,25);//45


//Using Input1 twice as default value
let add2values1 = function(Input1=20,Input2=Input1*0.1)
{
    console.log(Input1 + Input2);
}

add2values1();//22
add2values1(25);//27.5
add2values1(25,25);//50

//Using a variable for default values to  parameters
let use_variable = 0.1;
let add2values2 = function(Input1=20,Input2=Input1*use_variable)
{
    console.log(Input1 + Input2);
}

add2values2();//22
add2values2(25);//27.5
add2values2(25,25);//50

//Use an Arrow key function for default values to  parameters

let use_variable_1 = () => 0.1;
let add2values3 = function(Input1=20,Input2=Input1*use_variable_1())
{
    console.log(Input1 + Input2);
    console.log("Arguments given : " + "1st parameter = " + Input1 +" 2nd parameter = " + Input2 +" \nLength of arguments = " + arguments.length);
}

add2values3();//22 \n 0
add2values3(25);//27.5 \n 1
add2values3(25,25);//50 \n 2*/


let displayColors = function (message_Variable,subjectsList_temp, ...ColorsObject) {

    console.log(arguments.length);


        // Displaying 1st argument
    console.log(message);
    

    // Working on 2nd Argument
    console.log(subjectsList_temp);
    console.log(...subjectsList_temp);

    for(let a of subjectsList_temp)
    {
        console.log("subjectsList_temp : " + a);
    }
    

    // Using for each function 

    var forEachFunction = function(local_temp)
    {
        console.log("getting value from forEach function " + local_temp);
    }

    subjectsList_temp.forEach(forEachFunction);


    // Working on 3rd Argument
    console.log(ColorsObject);
    console.log("After destructuring colors object");
    console.log(...ColorsObject);
    for (let i in ColorsObject) {
        console.log("typed value = " + ColorsObject[i]);
    }
}

var message = "List of colors";

let colors_List = ["Red", "Blue", "Green"];
let SubjectsList = ["English","Maths","Social","Physics"];
displayColors(message,SubjectsList, ...colors_List,);


/*
displayColours(message,"Red");
displayColours(message,"Red","Blue");
displayColours(message,'Red','Blue',"Green");
*/

let firstName = "Google";
let lastName = "Developer";

var person =
    {
        firstName,
        lastName
    };

console.log("Person's first Name = " + person.firstName + "\n Person's last name = " + person.lastName);

function getFullName(firstName, lastName, SeniorAge, StudentAge) {
    let FullName = firstName + " " + lastName;

    //ShortHand Notation for return, need not use colon for every property
    return {
        FullName,
        firstName,
        lastName,
        isSenior: function () {
            return SeniorAge > 60;
        },
        isStudent() {
            return StudentAge < 60;
        }
    };
}

var p = getFullName("Full Stack", "Web developer", 89, 95);
console.log(p.FullName);
console.log(p.firstName);
console.log(p.lastName);
console.log("Senior = " + p.isSenior());
console.log("\nStudent = " + p.isStudent());


let LN = "last Name";
let FullDetails =
    {
        "First Name" : "Indian Citizen",
        [LN] : "Asia Continent",
        citizen : "Indian"
    }

    console.log("Given full name = " + FullDetails["First Name"]);
    console.log("Given full name = " + FullDetails[LN]);
    console.log("Person citizenship belongs to = " + FullDetails.citizen);
    console.log(FullDetails);


let StudentDetails = ["Microsoft","Developer","Bangalore"];

let [fName,lName,station] = StudentDetails;

console.log("First Name = " + fName);
console.log("\nLast Name = " + lName);
console.log("\nLocation posted = " + station);

//Using destructuring but not defining every part

let EmployeeDetails = ["Google","Associate","Canada"];

let [ , , Company_Station] = EmployeeDetails;


console.log("\n EmployeeDetails Location posted = " + Company_Station);

//Using destructuring by rest operator

let Employee1Details = [,"AssociateDifferent","CanadaDifferent","England","London"];

let [Given_firstName = "default value = Google1",...Company_Station_1] = Employee1Details;
//Assigning default value to first Name

console.log("Organization first name : " + Given_firstName);
console.log("Organization's rest operator = " + Company_Station_1);


let temporary = "Hello World";
let permanent =  "As per language\n" + temporary + "\tEnding sentence";

console.log(permanent);


let temporary1 = "Hello World";
let permanent1 =  `As per language 'single' ${temporary1} " double" \tEnding sentence
            \nThis is the second line 
            \nThis\t   third line
            
            `;
console.log(permanent1);

class Person
{

}

let p1 = new Person();
console.log("Type of class person = " + typeof Person);//function

function function1()
{

}

console.log(typeof function1);//function 

class PersonNext
{
    Method1()
    {

    }
}

let pNext = new PersonNext();

console.log(pNext.Method1() == PersonNext.prototype.Method1());//true


class Employee
{
    name_fromConstructor : string = "";
    
    Employee1(name)
    {
        this.name_fromConstructor = name;
        console.log("Invoking Employee1 prototype method : " + this.name_fromConstructor);
    }

    Employee2(name)
    {
        this.name_fromConstructor = name;
        console.log("Invoking Employee2 prototype method : " + this.name_fromConstructor);
    }

    Employee3(name)
    {
        this.name_fromConstructor = name;
        console.log("Invoking Employee3 prototype method : " + this.name_fromConstructor);
    }


}


let e = new Employee();
e.Employee1("Chandler1");//Invoking Employee1 prototype method : Chandler1

let f = new Employee();
f.Employee3("Chandler3");///Invoking Employee1 prototype method : Chandler3



class EmployeeNext
{
    constructor(name) {
        console.log(name + " Invoking Parent constructor Method");
    }

    getId()
    {
        return 15;
    }
}

class PersonNext1 extends EmployeeNext
{
    constructor(name) {
        super(name);
        console.log(name + " Invoking child constructor Method");
    }
    getId()
    {
       // return 20;
        return super.getId(); // gives the return value of getId() method in parent class
    }

}

let p1Next = new PersonNext1("Chandler");//Chandler Invoking Parent constructor Method
//Chandler Invoking child constructor Method

//console.log(p.getId());//20
console.log(p1Next.getId());//15 (when super used in the getId() method from child class ,we get the value from parent class)*/

enum EyeColor  {Brown,Black=5,Blue,Yellow}

var myEyeColor = EyeColor.Brown

console.log(myEyeColor);//0
console.log(EyeColor.Brown);//0
console.log(EyeColor.Black);//5
console.log(EyeColor.Blue);//6
console.log(EyeColor.Yellow);//7

console.log(EyeColor[myEyeColor]); //Brown


