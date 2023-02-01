"use strict";
console.log("Testing from Leela Web dev playlist(testing for watch mode) testing on June 29th " + Date());
console.log("things got changed today");
var input1 = document.querySelector("#Number1");
var input2 = document.querySelector("#Number2");
var button = document.querySelector("#Add_here");
button.addEventListener("click", function () {
    console.log("1st Input given = " + input1.value);
    console.log("2nd Input given = " + input2.value);
});
//ECMA6 code 
var add = function (num1, num2) {
    var Result = num1 + num2;
    return Result;
};
button.addEventListener("click", function () {
    console.log("Addition of 2 numbers = " + add(+input1.value, +input2.value));
});
function addition_2numbers(num1, num2) {
    return num1 + num2;
}
console.log("Addition of 3 and 4 = " + addition_2numbers(3, 4));
/*

//6th Video

//Specialized syntax  in typescript


//Object type declaration
let person : {

    Language : number | string,
    framework : string | boolean

} =
//object variable declaration
{
    Language : "Java",
    framework : "SpringBoot"
}

console.log(person.Language);//will throw an error if variable type is declared as an object
//Output :- Java


 */
/*



//7th Video
//Array types in typescript


let Student :
{
    FullName : string,
    Age : number,
    Hobbies : string[]
} =

{
    FullName : "Google",
    Age : 24,
    Hobbies : ["Development","Testing","Cloud"],
}

let Favorites : string[];

//Favorites = "World"//won't accept string since it infers the variable as an array
Favorites =  ["World","Earth",];


let Favorites1 : any[];

Favorites1 =  ["World","Earth",12,true];//will accept any type of data


//Looping over object
for(var loop1 in Student)
{
    console.log(loop1);
}

//looping over arrays in an object

for(var loop2 of Student.Hobbies)
{
    console.log(loop2.toUpperCase());
}


 */
/*


//8th Video
//Tuples

let Company :
{
    Name : string,
    Age : string | number,
  //  details : (string | number)[],
   details : [string ,number] //tuple declaration

} =
{
    Name : "company first name",
    Age : 23,
    details : ["first word",23]
}

//if we want details property to accept only 2 values as an array and first value should be string and 2nd value should be a number, then tuples are used

//Company.details = [23,"Bangalore","Delhi"];
Company.details = ["Bangalore",23];



Company.details.push(45);//It is an exception in typescript as typescript won't understand push and tuple simultaneously
//Company.details = ["Delhi",24,76];//will throw an error


 








//9th Video
//Enums
enum Roles
{
    Admin,
    Author=10,
    Guest,
    Security = "security_company"
}

let employee1 =
{
    name : "e1",
    age : "a1",
    gender : "g1",
    role1 : Roles.Admin,
    role2 : Roles.Author,

    role3 : Roles.Guest,
    role4 : Roles.Security,
}

console.log("Comparing roles with enums");

if(employee1.role1 == Roles.Admin)
{
    console.log("User[Role1]  is an admin ");//User[Role1]  is an admin
}

if(employee1.role2 == 10)
{
    console.log("User[Role2]  is an author ");//User[Role2]  is an author
}

if(employee1.role3 == Roles.Guest)
{
    console.log("User[Role3]  is a guest ");//User[Role3]  is a guest
}

if(employee1.role4 == "security_company")
{
    console.log("User[Role4]  is a Security ");//User[Role4]  is a Security
}



  */
/*


//10th Video
//any type

//Union types :- Can combine 2 functionalities under a single function (eg : concatenating 2 strings or adding 2 numbers)

function Combine(input1: number | string , input2: number | string)
{
   var result1;

   if(typeof input1 == "number" && typeof input2 == "number")
   {
    console.log("Addition of 2 numbers");
       result1 =  +input2 + +input1;
  
   }
   else
   {
    result1 = input1.toString() + input2.toString();
   }

   return result1;
}

console.log(Combine(2,3));//5
console.log(Combine("Hello",3));//Hello3
console.log(Combine(2,"Hello"));//2Hello
console.log(Combine("Hello1","Hello2"));//Hello1Hello2
 


 */
/*


//11th Video

//Literal types :-Combining union types in javascript

function Combine(input1: number | string , input2: number | string, resultType : 'sending string' | 'send number' | string | number )
{
   var result1;

   if(typeof input1 == "number" && typeof input2 == "number" )
   {
       result1 = input2 + input1;
  
   }
   else
   {
    result1 = input1.toString() + input2.toString();
   }


   if(typeof resultType == "number")
   {

    resultType = result1;
    return  resultType;

   }
   else
   {
    resultType = result1.toString();
    return resultType;
     }

   
}

console.log("Addition result = " + Combine(50,50,'send number'));

console.log("Concatenation Result = " + Combine("50","50","sending string"));



//Using Enums in union types

enum ResultType_stringOrNumber
{
    Combine2_string = "string",
    Combine2_number = "number",

}



function Combine2(input3: number | string , input4: number | string,
    resultType_combine2 : ResultType_stringOrNumber.Combine2_string | ResultType_stringOrNumber.Combine2_number | string | number)
{
   var result_combine2;

   if(typeof input3 == "number" && typeof input4 == "number" )
   {
    result_combine2 = input3 + input4;
  
   }


   else if(typeof input3 == "number" && typeof input4 == "string" )
   {
    result_combine2 = input3 + parseInt(input4);
  
   }

   else
   {
    result_combine2 = input3.toString() + input4.toString();
   }


   if(typeof resultType_combine2 == ResultType_stringOrNumber.Combine2_number)
   {

    resultType_combine2 = result_combine2;
    return  +resultType_combine2;

   }
   else
   {
    resultType_combine2 = result_combine2.toString();
    return resultType_combine2;
     }

   
}

console.log("Addition of Combine2 function result = " + Combine2(100,200,ResultType_stringOrNumber.Combine2_number));//Want result as number

console.log("Concatenation of Combine2 function Result = " + Combine2(10,"30",ResultType_stringOrNumber.Combine2_string));//Want result as number

console.log("Concatenation of Combine2 function Result = " + Combine2("50",30,ResultType_stringOrNumber.Combine2_string));//Want result as string

console.log("Concatenation of Combine2 function Result = " + Combine2("10","30",ResultType_stringOrNumber.Combine2_string));//Want result as string


 */
/*

//12th video

//function return value types

function addValues(add1 : number , add2: number)
{
    return add1 + add2;
}

//if we want to have return type of function as undefined but not void , we can use return statement .
//Undefined data type exist in typescript but not in javascript
function printValue(take_Value : number) : void
{
    console.log("Result after operation = " + take_Value);
    return;
}

console.log(printValue(addValues(2,3)));
//Result after operation = 5
//undefined




//13th Video
//Assigning function as type to a variable

let Combination: (c1: number , c2 : number) => number

 Combination = addValues;
 //Combination = printValue;//this will throw an error as print value will accept 1 value which is nt the case with combination variable

 //Combination = 10;//will throw an error

console.log("Combination value = " + Combination(3,4));
 

 */
/*



//14th Video
//Unknown type and never data type


let userInput : unknown;

userInput = 34;
userInput = "Alphabet";

let otherInput: string;

otherInput = "Change"

//otherInput = userInput//will throw an error if we give data type as unknown , give as "any" it will accept
//Compiler won't take risk of assigning unknown data type variable to a string data type variable

if(typeof userInput == "string")
{
    otherInput = userInput;
}


function generateError(message : string , ErrorOccurred : number) :never
{
        throw {message,ErrorOccurred};
        //this method is returning nothing
        //return // will throw an error since it returns nothing
}


function UndefinedOutput() : void
{
    console.log("Hello Programmer , check next line");
    return; //won't return any value but undefined word
    //Output :- Hello Programmer , check next line
    //Undefined
}
UndefinedOutput();


var generateMessage = generateError("Invalid Message",34);
//console.log(generateMessage);//Uncaught {message: 'Invalid Message', ErrorOccurred: 34}

 


function addSomething(n1:number ,n2:number)
{
        if((n1 + n2) > 0)
        {
            return (n1 + n2);
        }

        return;
}




 */
/*


//Video 24
//Classes

class Department
{
    name : string ;

     constructor(take_name: string  )
    {
        this.name = take_name;
    }

    

     describe_thisKeyWord(this : Department)
     
//by doing this typescript will assume that whenever an object is created, that particular object should be created with this class name only

    {
        console.log("Department using this word is " + this.name);//this refers to class name
    }
    
}

let d1 = new Department("Account Section");
console.log("Calling class variable = " + d1.name);//Calling class variable = Account Section

console.log(d1.name);//Account Section

d1.describe_thisKeyWord();//Department using this word is Account Section
console.log(d1);//Department {name: 'Account Section'}

let d1_copy = {name : "Finance section" , describe_thisKeyWord : d1.describe_thisKeyWord};
console.log(d1_copy);//{name: 'Finance section', describe_thisKeyWord: ƒ}

d1_copy.describe_thisKeyWord.bind(d1)();





 










//Video 25


class KinderGarden
{
  private  kids : string[] = [];

   constructor(take_kid: string[] , )
        {
            this.kids = take_kid;
    
        }

    
        addKid(take_kid : any)
        {
            this.kids.push(take_kid);
        }

        printKids()
        {
            console.log("Length of kids = " + this.kids.length);
            console.log(this.kids);
        }
}

var k1 = new KinderGarden(["kid1"]);
k1.addKid("kid2");
k1.addKid("kid3");
k1.addKid("kid4");
k1.addKid("kid5");
//k1.kids[4] = "kid6"; can't push as it is private



k1.printKids();
//Length of kids = 5
//['kid1', 'kid2', 'kid3', 'kid4', 'kid5']






//Video 26 ad 27
//Using short hand notation for constructors
//Read only property

class Parents
{
    constructor( private readonly name : string , public age : number) // initializing and assigning values
    {
        //name ad age are the properties of the class
    }

    short()
    {
//this.name = "Changing name via short method ";will throw an error since property is readonly . Can't change after initialization
        console.log("Parents are = " + this.name + " Age = " + this.age);
    
        console.log(`using ES6 notation Age = ${this.age} and Names = ${this.name}`);
    }
    
}

var p1 = new Parents("P1",34);
p1.short();



 







//video 29
//Inheritance


class Department_School
{
    name_school : string ;
    ID_school :string | number;

     constructor(public id :   number,private take_name_school: string  )
    {
        this.name_school = take_name_school;
        this.ID_school = id;

    }
    printSchool()
    {
        console.log("School name is " + this.name_school + "\n ID of school = " + this.ID_school)
    }



     describe_thisKeyWord(this : Department_School)
//by doing this typescript will assume that whenever an object is created, that particular object should be created with this class name only

    {
        console.log("Department using this word is " + this.name_school);//this refers to class name
    }
    
}

//video 29 and 30
//Inheritance and Over riding

class ITschool extends Department_School
{

    constructor(id : number ,public admins_role : string[])
    {
        super(id, "child_ID");
    }

    displayAdmin()
    {
        console.log("Admin name = " + this.admins_role);
    }
}



class AccountSchool extends Department_School
{
    constructor(id : number , public reports : string[])
    {
        super(id,"Account department");
    }

    addReports(report_here : string)
    {
            this.reports.push(report_here);
    }

    
    printReports()
    {
        console.log("Reports give in system = " + this.reports);
    }
}


//this can be used in child class only after calling super method
const cs1 = new ITschool(2345,["ITIL_Role"]);
console.log(cs1);//childschool {take_name_school: 'child_school', id: 'child_ID', name_school: 'child_school', ID_school: 'child_ID'}

cs1.displayAdmin();//Admin name = ITIL_Role


const ad1 = new AccountSchool(6574,["Report1","Report2","Report3"]);
ad1.addReports("Report4");
ad1.reports[4] = "Report5";

ad1.printReports();
console.log(ad1);
 
 */
/*
//Output :-
AccountSchool {id: 6574, take_name_school: 'Account department', name_school: 'Account department', ID_school: 6574, reports: Array(5)}
ID_school: 6574
id: 6574
name_school: "Account department"
reports: (5) ['Report1', 'Report2', 'Report3', 'Report4', 'Report5']
take_name_school: "Account department
*/
/*


//Video 31
//Getters and Setters method

class Branches
{
    branch_class : string[] = [];

    constructor(branch_name : string[])
    {
        this.branch_class = branch_name;
    }

    getBranchName()
    {
        console.log(this.branch_class);//['Electronics', 'Mechanical', 'Electrical', 'Civil', 'Computer Science ']
        console.log(this.branch_class[this.branch_class.length-1]);//Computer Science
    }

     GetMostRecentBranch()
    {
        if(!this.branch_class)
        {
            throw new Error("No branches inserted . Please insert a branch");
        }

        else
        {
            return this.branch_class;
        }
    }

     SetBranch(value: string[])
    {
        if(!value)
        {
            throw new Error("No value inserted , Please insert a value");
        }
        else
        {
            this.branch_class = value;
        }
    }



    //Using getters and setters methods

//       file1.ts:737:9 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

// 737     get GetMostRecentBranch_usingGetMethod()
//             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// file1.ts:750:9 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.

// 750     set SetBranch_usingSetMethod(value: string[])
  

 
get GetMostRecentBranch_usingGetMethod()
    {
        if(!this.branch_class)
        {
            throw new Error("No branches inserted . Please insert a branch");
        }

        else
        {
            return this.branch_class;
        }
    }

    set SetBranch_usingSetMethod(value: string[])
    {
        if(!value)
        {
            throw new Error("No value inserted , Please insert a value");
        }
        else
        {
            this.branch_class = value;
        }
    }

}


 
var b1New = new Branches(["Electronics"]);
b1New.branch_class[1] = "Mechanical";
b1New.branch_class[2] = "Electrical";
b1New.branch_class[3] = "Civil";
b1New.branch_class[4] = "Computer Science ";

b1New.getBranchName();//['Electronics', 'Mechanical', 'Electrical', 'Civil', 'Computer Science ']



//Using normal methods
console.log("Using normal methods");
b1New.SetBranch(["Setting 1st Branch","Setting 2nd Branch","Setting 3rd Branch"]);
console.log(b1New.GetMostRecentBranch());//['Setting 1st Branch', 'Setting 2nd Branch', 'Setting 3rd Branch']

//Using getters and setters methods
console.log("Obtaining values using getters and setters methods");
b1New.SetBranch_usingSetMethod = ["Set Method 1st Branch","Set Method 2nd Branch","Set Method 3rd Branch","Set Method 4th Branch"];
console.log(b1New.GetMostRecentBranch_usingGetMethod);


 

 */
/*

//Video 32
//Static Methods and Properties

//Video 33 Abstract classes and methods

//Video 34 Private Constructors and Singleton Design Pattern

abstract class Branches
{
    branch_class : string[] = [];

  

    static readonly FinancialYear = 2021;

    constructor(branch_name : string[])
    {
        this.branch_class = branch_name;
    }

     getBranchName()
    {
        console.log(this.branch_class);//
        console.log(this.branch_class[this.branch_class.length-1]);//Computer Science
    }

    static getOutput()
    {
        console.log("This output is from static method");
    }

     GetMostRecentBranch()
    {
        if(!this.branch_class)
        {
            throw new Error("No branches inserted . Please insert a branch");
        }

        else
        {
            return this.branch_class;
        }
    }

     SetBranch(value: string[])
    {
        if(!value)
        {
            throw new Error("No value inserted , Please insert a value");
        }
        else
        {
            this.branch_class = value;
        }
    }

   abstract displayAbstract() :void ;
// abstract method in parent class cannot have any code inside the function . Only child class of this function can have code inside them

        


}




class childBranch1 extends Branches
{
    private static instance :  childBranch1;

    static getInstance()
        {
            if(childBranch1.instance)
            {
                console.log("No new instance created . Instance already exists ");
                return this.instance;
            }

            else
            {
                console.log("New instance created via getInstance method");
                this.instance =  new childBranch1(["creating child class instance via static method "]);
            }
            
        }

    displayAbstract()
    {
        console.log("This abstract method is implemented and  from childBranch1 class = " + this.branch_class);
    }
}


class childBranch2 extends Branches
{
    displayAbstract()
    {
        console.log("This abstract method is overridden from childBranch2 class = " + this.branch_class);
    }
}


console.log("Value of pi = " + Math.PI);

//var c = new Branches(['Electronics', 'Mechanical', 'Electrical', 'Civil', 'Computer Science ']);
Branches.getOutput();//This output is from static method
console.log(Branches.FinancialYear);//2021

//Branches.FinancialYear = 3456;  since we declared readonly , we can't change the value in the code after initialization
console.log("Changed financial value = " + Branches.FinancialYear);//Changed financial value = 3456


var c1 = new childBranch1(["Child Branch1"]);
var c2 = new childBranch2(["Child Branch2"]);

//c.displayAbstract();//This abstract method is from class = Electronics,Mechanical,Electrical,Civil,Computer Science

c1.displayAbstract();//This abstract method is from class = Child Branch1
c2.displayAbstract();//This abstract method is from class = Child Branch2



//creating instance via static methods

var c1_instance = childBranch1.getInstance();
var c2_instance = childBranch1.getInstance();

console.log("Printing 2 instances values ");
console.log(c1_instance);
console.log(c2_instance);
//Output :-childBranch1 {branch_class: Array(1)}
//branch_class: ['creating child class instance via static method ']

//since both instances are same we get output only in 1 console log

 



 */
/*

//Video 35 Interfaces
//Video 36 - 39

//Ideal way forcing user to create an object and adding properties

var LeelaPerson :
{
    name : string,
    age : number,
    hello(phrase : string) : void
}
=
{
    name : "LeelaPerson",
    age : 67,
    hello(phrase : string)
    {
        console.log("Phrase = " + phrase + " class = " + this.name);
    }
}

var JohnPerson :
{
    name : string,
    age : number,
    hello(phrase : string) : void
}
=
{
    name : "JohnPerson",
    age : 47,
    hello(phrase : string)
    {
        console.log("Phrase = " + phrase + " class = " + this.name);
    }
}


//can be represented using interfaces

interface Student
{
    //can't initialize the values in the interface object
    name : string;
    age : number;
    occupation : string;
    hello(phrase : string) : void
}

var JohnStudent : Student =
{
    name : "John",
    age : 24,
    occupation : "farmer",
    hello(phrase)
    {
        console.log("Phrase = " + phrase);
    },
}

var RosStudent : Student =
{
    name : "Ross",
    age : 54,
    occupation : "teacher",
    hello(phrase)
    {
        console.log("Phrase = " + phrase);
    },
}




//We can represent the same thing using types as well with no errors

type Student1 =
{
    //can't initialize the values in the interface object
    name : string;
    age : number;
    occupation : string;
    hello(phrase : string) : void
}

var JohnStudent : Student1 =
{
    name : "John",
    age : 24,
    occupation : "farmer",
    hello(phrase)
    {
        console.log("Phrase = " + phrase);
    },
}

var RosStudent : Student1 =
{
    name : "Ross",
    age : 54,
    occupation : "teacher",
    hello(phrase)
    {
        console.log("Phrase = " + phrase);
    },
}


 */
/*

//Interfaces using classes
//Video 37 Extending interfaces and Readonly Interface properties


interface ISchool
{
     schoolName : string;
}

interface ICollege extends ISchool
{
    collegeName : string;
}

interface IPerson
{
   readonly  name1 : string;
    age? : number;
    helloProgram(phrase1 : string) : void;
}

class Person_class implements IPerson,ISchool,ICollege
{
    age? : number

    constructor(public name1 : string , Age_c: number, public schoolName : string , public collegeName : string)
    {
        this.age = Age_c;
        
    }

    helloProgram(phrase_method : string)
    {
        console.log("This is " + phrase_method + " representing class = " + this.name1);
    }

    greet()
    {
        console.log("welcome to greet method");
    }

    OptionalParameter(phrase2 : string, age_op? : number)
    {
            if(age_op)
            {
                console.log("Age is given i.e age = " + age_op + "\nstring given = " + phrase2);
            }
            else
            {
                console.log("Age is not given , string given = " + phrase2);
            }
    }
}

let Biology : IPerson = new Person_class("Biology",34,"School1","College1");
let Maths  : IPerson = new Person_class("Maths",84,"School2","College2");
Biology.helloProgram("Biology");//This is Biology representing class = Biology
Maths.helloProgram("Maths");//This is Maths representing class = Maths
//Biology.name1 = "Hello World"; Can't change the value since it is a read only property



let Science  : Person_class = new Person_class("Science",84,"School3","College3");//Instance is of type class
Science.greet();//welcome to greet method
Science.name1 = "Hello Science" //Can change the value since it is a public property
Science.collegeName = "Science College";

//Biology.greet(); Will get an error because Biology is a instance of interface type .
// As interface doesn't consist this method , hence we can't call this method

let Social : ISchool = new Person_class("Social",67,"School4","College4");





//type declaration of a function

type addFunction = (a:number , b:number) => number;

var addFunction :addFunction;

addFunction = (x:number,y:number) =>
{
    return y;
}

interface addFunction1
{
    (a1:number,b1:number) :number
}


let English : Person_class = new Person_class("English",100,"School5","College5");

English.OptionalParameter("English (age and string given)",45);//sending age parameter
//Output :- Age is given i.e age = 45



English.OptionalParameter("English (only string given)");//Not sending age parameter
//Output :- Age is not given , string given = English (only string given)

 

 */
/*

//Video 40 Implement Intersection




 //Combining using types
type Admin =
{
    name : string;
    roles :  string[];
}

type IT_department =
{
    name : string;
    employee_ID : string;
}


type Manager = Admin & IT_department;

let m1 : Manager =
{

    name : "Manager1",
    roles : ["Manager_role"],
    employee_ID : "567M",

}



 


 
//Implementing same using interfaces

interface Admin1
{
    name_int : string;
    roles_int :  string[];
}

interface IT_department1
{
    name_int : string;
    employee_ID_int : string;
    startDate : any;
}


interface Manager1 extends Admin1,IT_department1{
    gender_int : string
}

let m2: Manager1 =

{
    name_int : "Manager1",
    roles_int : ["Manager_role"],
    employee_ID_int : "567M",
    gender_int : "Male",
    startDate : new Date()

};


function printType_property(pro1 : Manager1)
{

    
    if("name_int" in pro1)
    {
        console.log("Name = " + pro1.name_int);
    }
   

    if("roles_int" in pro1)
    {
        console.log("Roles = " + pro1.roles_int);
        }


    if("employee_ID_int" in pro1)
    {
        console.log("Employee = " + pro1.employee_ID_int);
    }


    if("gender_int" in pro1)
    {
        console.log("Gender = " + pro1.gender_int);
    }

    if("startDate" in pro1)
    {
        console.log("Start Date = " + pro1.startDate);
    }
 
}



printType_property(m2);
 */
//Output :- 
// /*
// Name = Manager1
// file1.js:431 Roles = Manager_role
// file1.js:434 Employee = 567M
// file1.js:437 Gender = Male
// file1.js:440 Start Date = Mon Nov 22 2021 12:16:25 GMT+0530 (India Standard Time)
// */
/* printType_property({name_int : "Hello World" ,  roles_int : ["Manager_role_print"],
employee_ID_int : "567M_print",
gender_int : "Male_print",
startDate : new Date()
}
);
 */
//Output :- 
// /*
// Name = Manager1
// file1.js:431 Roles = Manager_role
// file1.js:434 Employee = 567M
// file1.js:437 Gender = Male
// file1.js:440 Start Date = Mon Nov 22 2021 12:16:25 GMT+0530 (India Standard Time)
// */
//Implementing intersection via classes typeGuarding in typescript
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving car ...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving truck");
    };
    Truck.prototype.loadLuggage = function (amount) {
        console.log("Loading luggage in truck = " + amount);
    };
    return Truck;
}());
function DriveVehicle(veh) {
    veh.drive();
    //veh.loadLuggage(40) will throw an error since instance created doesn't have this method 
    if ("loadLuggage" in veh) {
        veh.loadLuggage(30);
    }
    if (veh instanceof Car) {
        veh.drive();
    }
}
var v1 = new Car();
var v2 = new Truck();
DriveVehicle(v1);
DriveVehicle(v2);
function CheckAnimalSpeed(ani) {
    if ("flyingSpeed" in ani) {
        console.log("Animal type Speed =  " + ani.flyingSpeed);
    }
    if ("RunningSpeed" in ani) {
        console.log("Animal type Speed =  " + ani.RunningSpeed);
    }
    if ("CrawlingSpeed" in ani) {
        console.log("Animal type Speed =  " + ani.CrawlingSpeed);
    }
    //can represent the same set of statements in a different way
    var speed_switch = "";
    switch (ani.type_animal) {
        case "bird":
            speed_switch = ani.flyingSpeed;
            break;
        case "horse":
            speed_switch = ani.RunningSpeed;
            break;
        case "snake":
            speed_switch = ani.CrawlingSpeed;
            break;
    }
    console.log("Speed of the animal = " + speed_switch);
}
var s1 = {
    CrawlingSpeed: 30,
    type_animal: "snake"
};
CheckAnimalSpeed(s1);
//Animal type Speed =  30
//file1.js:521 Speed of the animal = 30
var b1 = {
    flyingSpeed: 60,
    type_animal: "bird"
};
CheckAnimalSpeed(b1);
//Animal type Speed =  60
//file1.js:521 Speed of the animal = 60
var h1 = {
    RunningSpeed: 50,
    type_animal: "horse"
};
CheckAnimalSpeed(h1);
var Maths_variable = 34;
function add_types(a1, b1) {
    if (typeof a1 == "string" || typeof b1 == "string") {
        return a1.toString() + b1.toString();
    }
    else {
        return +a1 + +b1;
    }
}
var Add_result = add_types(12, 20);
console.log(Add_result);
var Add_result1 = add_types(12, "Bangalore"); //typecasting the variables 
console.log(Add_result1);
//By doing this we are forcing the variable type which can be error mistake look at next line , typescript is unable to decide 
var Add_result2 = add_types(12, 20);
console.log(Add_result2);
//is possible with only 1 variable if it is declared as optional  
function Result_types(a1, b1, c1) {
    if (typeof a1 == "string" || typeof b1 == "string") {
        return a1.toString() + " " + b1.toString();
    }
    else if (typeof a1 == "number" && typeof b1 == "number") {
        return a1 + b1;
    }
    /*
    if(typeof a1 == "number" && typeof b1 == "string")
    {
        return a1.toString() + b1.toString();
    }
     */
}
//Typescript estimating result types 
var Result_types_variable1 = Result_types(12, 20);
console.log(Result_types_variable1);
var Result_types_variable2 = Result_types(12, "string");
console.log(Result_types_variable2);
var Result_types_variable3 = Result_types("string", 20);
console.log(Result_types_variable3);
var Result_types_variable4 = Result_types("string2", "string1");
console.log(Result_types_variable4);
