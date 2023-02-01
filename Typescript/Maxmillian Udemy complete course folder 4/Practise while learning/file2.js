var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("Executing statements from file2 ");
var UserAge = 30;
//UserAge = "Input changed" //will throw an error as User age value once declared can't be changed 
//Arrow functions and assigning default values
var addNumbers = function (a, b) {
    if (b === void 0) { b = 20; }
    return a + b;
};
//console.log("Addition of 2 numbers = " + addNumbers(2));//Addition of 2 numbers =22
//Put parameters having no default values first and then parameters having default values or else it will throw an error
console.log("Addition of 2 numbers after addition = " + addNumbers(2)); //Addition of 2 numbers =22
console.log("printing new details");
/*

//Arrays

const hobbies = ["Sports","Cooking","Cleaning","Coding"];



const dailyHobbies = ["Gym","Sleeping","reading"];

dailyHobbies.push(hobbies[1],hobbies[2],hobbies[2],hobbies[1]);

//console.log(dailyHobbies);//(7) ['Gym', 'Sleeping', 'reading', 'Cooking', 'Cleaning', 'Cleaning', 'Cooking']


//Spread Operator :- It will collect all elements from an array and perform manipulations

dailyHobbies.push(...hobbies);

console.log(dailyHobbies);//['Gym', 'Sleeping', 'reading', 'Cooking', 'Cleaning', 'Cleaning', 'Cooking', 'Sports', 'Cooking', 'Cleaning', 'Coding']


const hobbies1 = ["Sports1","Cooking1",...hobbies];

console.log(hobbies1);//['Sports1', 'Cooking1', 'Sports', 'Cooking', 'Cleaning', 'Coding']


const Person =
{
    firstName : "Google Facebook",
    firstAge : 45
}

console.log("copiedMemory details = ");
const copiedMemory = Person;
 //by doing this memory of the pointer location pointing towards copied will be pointing to copiedMemory as well

console.log(copiedMemory);//{name: 'Google Facebook', age: 45} although output is the same as the pointer is pointing to 2 variables . But actually instance is not being created in the memory

//If we want instance to create in the memory , then follow this approach

const copiedInstance = {...Person};
console.log(copiedInstance);//{name: 'Google Facebook', age: 45}



//Destructuring arrays

const [var1 , var2 , var3, ...remainingVariables] = hobbies1;

console.log(hobbies1);
console.log(var1);
console.log(var2);
 console.log(remainingVariables);
//6) ['Sports1', 'Cooking1', 'Sports', 'Cooking', 'Cleaning', 'Coding'] 'Cooking1' 'Sports' (3) ['Cooking', 'Cleaning', 'Coding']


//over-riding property names

const { firstName: edited_firstName, firstAge} = Person;//using javascript , nothing with typescript
console.log(edited_firstName,firstAge);
//console.log(edited_firstName,firstAge,firstName);//when used firstName , it will throw an error as firstName is overridden
//Output :-  45 Google Facebook

 

 */
/*
 



//Abstract classes


 class Department
{
   //public branchName : string; //public is given as default
   public EmployeeDetails : string[] = [];
   public branchName : string;


    //When we declare private it means EmployeeDetails variable is accessible only inside the class
    //Public properties are accessible outside the class
    constructor(name_received : string,public ID: string ,private readonly className = "5th class")
    {
           
        this.branchName = name_received;
         console.log(`Branch Name given = ${this.branchName} \n  ID given = ${this.ID} `);
         
    }

    ModifyClassName(class_givenWord : string)
    {
          // this.className = class_givenWord; will throw an error as class Name has read only property, hence value can't be changed after initialization
    }

    printBranch()
    {
        console.log("Department = " + `${this.branchName} and given ID = ${this.ID}`);
    }

    addEmployee(emp_received : string)
    {
            this.EmployeeDetails.push(emp_received);
    }

    printEmployeeInfo()
    {
        console.log("Employee details present in string array = " + this.EmployeeDetails);
        console.log(this.EmployeeDetails);
    }

 }

var d = new Department("Account Section","ID : 5457");//Account Section
d.printBranch();//Department = Account Section and given ID = ID : 5457
d.addEmployee("Employee1");
d.addEmployee("Employee2");
d.addEmployee("Employee3");

// d.EmployeeDetails[4] = "Employee4"; will throw an error if we use this way , as we are accessing EmployeeDetails outside the class
// d.EmployeeDetails[5] = "Employee5";


d.printEmployeeInfo();//Employee details present in string array = Employee1,Employee2,Employee3,Employee4
//['Employee1', 'Employee2', 'Employee3', 'Employee4']



const dCopy = {printBranch : d.printBranch};
//dCopy.printBranch();//Department = undefined //without using this type in function

//Adding this word as a type in function

const dCopy1 = {branchName : "dCopy Department",EmployeeDetails : "Employee2",printBranch : d.printBranch};

console.log("dcopy1 details = ");
console.log(dCopy1);
console.log(dCopy1.printBranch);

//dCopy1.printBranch();//Department = dCopy Department




//Inheritance

class SportsDepartment extends Department
{
    SubjectsPresent : string[] = [];
    constructor(childClass1_name_received : string , childClass1_ID : string , public admin : string , private yearStarted : string , subjects : string[])
    {
            super(childClass1_name_received , childClass1_ID );
            // Branch Name given = Sports Section
            // ID given = child ID : 6758
             console.log("Calling child class constructor " + `Admin Name given = ${this.admin} \n  YearStarted given = ${this.yearStarted}`)
            //  Calling child class constructor Admin Name given = Admin Access
            //  YearStarted given = 2021 year

            this.SubjectsPresent = subjects;//always use this keyword after super method
     }

     static addEmployeeRecords(static_add : string)
     {
        return { Static_property_add1 :static_add }
     }

     static FiscalYear = "started around 20 years ago";
    
}

let sp = new SportsDepartment("Sports Section","child ID : 6758","Admin Access","2021 year",["Subject1","Subject2"]);//Branch Name given = Sports Section
//ID given = ID : 6758
console.log(SportsDepartment.FiscalYear);
console.log(SportsDepartment.addEmployeeRecords("added 1 word using static method"));


class ArtsDepartment extends Department
{


    constructor(childClass2_name_received : string , childClass2_ID : string,private reports : string[]
        ,private showReport : string)
    {
        
        super(childClass2_name_received,childClass2_ID);
    
    }

  

    addReports(inputReport : string)
    {
        this.reports.push(inputReport);
    }
   
    displayReport()
    {
            console.log(this.reports);
    }

    //Over -riding parent class methods
    addEmployee(this : Department,emp_received_childClass2 : string)
    {
           
            console.log("adding employee details using child class by over-riding parent class methods");
            this.EmployeeDetails.push(emp_received_childClass2);
            console.log(this.EmployeeDetails);


    }


    //Getter and Setters Methods
//Over Riding properties and methods  of the base class



    set SetShowReport(set_report : string)
    {
        if(typeof set_report == "string")
        {
            console.log("Setting the value = true");
            this.showReport = set_report;
        }
        else
        {
            console.log("Setting the value = false");
        }

    }


    get PublishedReport()
    {
        if(this.showReport)
        {
            return this.showReport;
        }
        else
        {
            throw new Error("Published Report via get method is not given");
        }
    }

}


let ar = new ArtsDepartment("Arts Section","child ID : 7685",["Report1","Report2","Report3"],"showReport sent from created instance object");//Branch Name given = Sports Section
//ID given = ID : 6758

ar.addReports("Report4");
ar.addReports("Report5");

ar.displayReport();//['Report1', 'Report2', 'Report3', 'Report4', 'Report5']

ar.addEmployee("Arts Employee1");
//adding employee details using child class by over-riding parent class methods
//['Arts Employee1']



console.log("Published report calling  via get method " +  ar.PublishedReport);
//Published report calling  via get method showReport1




//Executing getter and setter methods
let ar1 = new ArtsDepartment("Arts Section","child ID : 7685",["Report1","Report2","Report3"],"true");
//Published report calling  via get method true

console.log("printing details from ar1");
console.log(ar1.displayReport);
console.log(ar1.displayReport());
console.log("Published report calling  via get method " +  ar1.PublishedReport);


// let ar2 = new ArtsDepartment("Arts Section","child ID : 7685",["Report1","Report2","Report3"],"");//undefined
// console.log(ar2.SetShowReport);
// console.log("Published report calling  via get method " +  ar2.PublishedReport); //will throw an error


//Static Methods

console.log(Math.PI);//3.141592653589793
console.log(Math.pow(2,3));//8

console.log(SportsDepartment.addEmployeeRecords("employee1"));//{Static_property_add1: 'employee1'}Static_property_add1: "employee1"[[Prototype]]: Object

let static_variable = SportsDepartment.addEmployeeRecords("employee2");
console.log(static_variable);//{Static_property_add1: 'employee2'}

console.log(SportsDepartment.FiscalYear);//started around 20 years ago




 */
/*



//Interfaces



interface Person
{
    person_name : string;
    person_age : number;

    greet() : void
}

let User_Person1  : Person;

User_Person1 =
{
    
    person_name : "Google facebook",
    person_age : 34,

    greet()
    {
        console.log("Welcome to greet function");
    }

    
}


User_Person1.greet();//Welcome to greet function

//Implementing the same using type

type Person1 =
{
    person_name : string;
    person_age : number;

    greet() : void
}

let User_Person2  : Person;

User_Person1 =
{
    
    person_name : "Google facebook",
    person_age : 34,

    greet()
    {
        console.log("Welcome to greet function");
    }

    
}

User_Person1.greet();//Welcome to greet function


//Implementing interfaces in classes

interface CompanyDetails
{
    CompanyName : string,
    CompanyAge : number,

    greetMessage() : void
}

class googleClass implements CompanyDetails
{
    CompanyName = "googleFacebook-Bangalore";
    CompanyAge = 34;

    greetMessage()
    {
        console.log("Welcome to training courses " + this.CompanyName + " started around " + this.CompanyAge);
    }

    constructor()
    {
        this.greetMessage();
    }

}

let m = new googleClass();//Welcome to training courses googleFacebook-Bangalore started around 34
console.log(m);//googleClass{CompanyName: 'googleFacebook-Bangalore', CompanyAge: 34}




//Same implementation is possible with types

type CompanyDetails1 =
{
    readonly CompanyName : string,
    CompanyAge : number,

    greetMessage() : void
}

class googleClass1 implements CompanyDetails1
{
    CompanyName = "Google-Bangalore";
    CompanyAge = 34;

    greetMessage()
    {
        console.log("Welcome to training courses " + this.CompanyName + " started around " + this.CompanyAge);
    }

    constructor()
    {
        this.greetMessage();
    }


}

let n = new googleClass1();//Welcome to training courses Google-Bangalore started around 34
console.log(n);//googleClass1{CompanyName: 'Google-Bangalore', CompanyAge: 34}

n.CompanyName = "Name changed from original name = Google-Bangalore";
console.log(n.CompanyName);


//Extending interfaces and implementing interfaces

interface CompanyDetails_extend1
{
    CompanyName : string,
    CompanyAge : number,
    
}

interface CompanyDetails_extend2
{
    greetMessage_extend() : void,

}

interface CompanyDetails_extend3 extends CompanyDetails_extend2
{
    greetMessage1_extend() : void,

}




class extend_MindTree implements CompanyDetails_extend1,CompanyDetails_extend3
{
    CompanyName = "MindTree-Bangalore";
    CompanyAge = 34;

    greetMessage_extend()
    {
        console.log("Welcome to training courses from greetMessage() method " + this.CompanyName + " started around " + this.CompanyAge);
    }

    greetMessage1_extend()
    {
        console.log("Welcome to training courses from greetMessage1() method " + this.CompanyName + " started around " + this.CompanyAge);
    }

    constructor()
    {
        this.greetMessage_extend();
        this.greetMessage1_extend();
    }

}

let extend_m = new extend_MindTree();
//Welcome to training courses from greetMessage() method MindTree-Bangalore started around 34
//Welcome to training courses from greetMessage1() method MindTree-Bangalore started around 34



console.log(extend_m);//MindTree {CompanyName: 'MindTree-Bangalore', CompanyAge: 34}
 



//Implementing interfaces on functions

interface addFunction
{
    (a: number , b: number, c?: string) : object;
    output_property1? : string;
     //This property is optional and hence typescript will not throw an error
     takeStringValue? : Function;
}

let add_interface : addFunction;

add_interface = (a1 : number, b1: number,c1?: string) =>//when we change data types of parameters , typescript will throw an error
{
     function takeStringValue()
    {
        if (c1) {
            console.log("Given c1 string value = " + c1) ;
        }
        else
        {
            console.log("No c1 string value given");
        }
        
    }
    return {
    property1: a1 + b1,
    function_string : takeStringValue(),


    }
}
console.log(add_interface(2,3));

// Output :-
// No string value given
// {property1: 'Addition of 2 numbers = 23', function_string: undefined}


console.log(add_interface(10,10),"google and facebook 2 students in c1");

// Output :-
// No string value given
// {property1: 'Addition of 2 numbers = 23', function_string: undefined} ""


console.log(add_interface(10,10,"ServiceNow developer"),);
//  Output :-
// Given string value = ServiceNow developer
// {property1: 20, function_string: undefined}
//




 */
/*


//Advanced typing concepts



type North_Indian =
{
    Language : string;
    Currency :  number
}

type South_Indian =
{
    Culture : string;
    Breakfast : string[],
    Currency : number
}


type Indian = North_Indian | South_Indian;

const aspirant : Indian =
{
    Language : "Hindi",
    Currency : 23,
    Culture : "folk dances",

    Breakfast : ["Dosa","Idli","Pulao"]

}

console.log("Aspirant details = ");
console.log(aspirant);//{Language: 'Hindi', Currency: 23, Culture: 'folk dances', Breakfast: 'Dosa'}

//Same is possible via interfaces


//TypeGuarding functions

function typeGuarding_check(asp_TypeGuard : Indian)
{
    //console.log(asp_TypeGuard.Language) will throw an error

    if ("Language" in asp_TypeGuard) {
        //if we typeGuard this way using javascript , typescript won't throw an error
        console.log("Language : " + asp_TypeGuard.Language);
    }

    if ("Culture" in asp_TypeGuard) {
        //if we typeGuard this way using javascript , typescript won't throw an error
        console.log("Culture : " + asp_TypeGuard.Culture);
    }

}

typeGuarding_check(aspirant);
//Language : Hindi
//Culture : folk dances


 */
/*



//TypeGuarding classes

class Car
{
    drive()
    {
        console.log("Driving a car");
    }
}

class Truck
{
    drive()
    {
        console.log("Driving a truck");
    }

    loadCargo(amount : number)
    {
        console.log("Loading cargo amount = " + amount);
    }
}

let c = new Car();
let v = new Truck();

type wheeler = Car | Truck;

function driveVehicle(veh : wheeler)
{
    veh.drive();

    //veh.loadCargo() //will throw an error

    if("loadCargo" in veh)
    {
        veh.loadCargo(100);//by doing this typeGuarding using in word , typescript won't throw an error
    }

}


driveVehicle(c);//Driving a car
driveVehicle(v);
// Driving a truck
// Loading cargo amount = 100


//applying same logic using instanceOf

function instance_driveVehicle(veh : wheeler)
{
    veh.drive();

    //veh.loadCargo() //will throw an error

    if(veh instanceof Truck)
    {
        veh.loadCargo(100);//by doing this typeGuarding using in word , typescript won't throw an error since vehicle is an instance of truck
    }

    if(veh instanceof Car)
    {
        //veh.loadCargo(100);//by doing this typeGuarding using in word , typescript won't throw an error since vehicle is not an instance of Car
    }


}


instance_driveVehicle(c);//Driving a car
instance_driveVehicle(v);
// Driving a truck
// Loading cargo amount = 100


 */
/*


type Combinable1 = string | number;
type Combinable2 = string |  number;

function addCombineHello(a: Combinable1 , b: Combinable2)
{
    //typeGuarding datatypes of the variables using conditions
    //These typeGuarding conditions run only during run time
    if (typeof a == "string" && typeof b == "string") {
        return a.toString() + " " +  b.toUpperCase();
    }

    else if (typeof a == "string" && typeof b == "number" || typeof b == "string" && typeof a == "number" ) {
        return a.toLocaleString() + " " +  b.toString();
    }
    else
    {
        return +a + +b;
    
    }
}

console.log(addCombineHello(3,4));//7
console.log(addCombineHello(3,"hello"));//3hello
console.log(addCombineHello("hello",4));//hello4
console.log("hello1","hello2");//hello1hello2



 



//Discriminating Union




interface Bird
{
    flyingSpeed : number;
    type : "bird";
}

interface Horse
{
    RunningSpeed : number;
    type : "horse"
}

type animal = Bird | Horse

function checkSpeed(ani : animal)
{
       // console.log("Moving with speed = " + ani.flyingSpeed) will throw an error as ani may have horse or Bird interface

        if ("flyingSpeed" in ani) {
            console.log("Moving with speed = " + ani.flyingSpeed); //won't throw an error by using typeGuarding
        }

        // //Same is not possible using interfaces as interfaces are not understood by javascript during run time
        //during run time , these interfaces are not available as constructor functions
        // if (ani instanceof Bird) {
          //   console.log("Moving with speed = " + ani.flyingSpeed); //won't throw an error by using typeGuarding
         //}


        let Speed = 0;

        switch(ani.type)
        {
            case "bird" : Speed = ani.flyingSpeed;
            break;


            case "horse" : Speed = ani.RunningSpeed;
            break;
            
        }

        console.log("Moving at speed " + Speed);


}

checkSpeed({type : "horse" , RunningSpeed : 45});
//Output :- Moving at speed 45

//checkSpeed({type : "bird" , RunningSpeed : 45}); typescript will throw an error


checkSpeed({type : "bird" , flyingSpeed : 20});
//Output :- Moving with speed = 20
//Moving at speed 20

//checkSpeed({type : "horse" , flyingSpeed : 20}); typescript will throw an error



 */
/*

var p_element = document.querySelector("p");//will infer as paragraph element

var p_id = document.getElementById("Paragraph_ID") // will infer as HTML element

const text_element = document.getElementById("text_id")! ;

if (text_element) {
    (text_element as HTMLInputElement).value = "Hello programmer";//it won't throw an error as null or don't know value if we typecast using as elementName
    
}
console.log(text_element);
console.log((text_element as HTMLInputElement).value);



//also works this way

const text_element1 = document.querySelector("button")! ;

if (text_element1) {
    (text_element1 as HTMLInputElement).value = "Hello developer";//it won't throw an error as null or don't know value if we typecast using as elementName

}
console.log((text_element1 as HTMLInputElement).value);

 
 */
/*

//Indexing :- for indexing always use []
interface errorContainer //{email : "Not a valid email" , userName : "Enter valid user Name having no special characters"}
{
    [dynamicProperty : string] : string;
   // id : number Not possible as typescript throws an error
}

const errorMessage : errorContainer =
{
    Email : "Not a valid email",
    userName : "Enter valid user Name having no special characters"
}

console.log(errorMessage);//{Email: 'Not a valid email', userName: 'Enter valid user Name having no special characters'}


//function Overloading



type variable1 = string | number;
type variable2 = string |  boolean;

type Combine_variables = variable1 |  variable2


function operation_result(a : string , b : string) : string;
function operation_result(a : number , b : number) : number;
function operation_result(a : string , b : number) : string;
function operation_result(a : number , b : string) : string;


function operation_result(a : Combine_variables , b : Combine_variables)
{
    if (typeof a == "string" || typeof b == "string")
    {
        return a.toString() + " " +  b.toLocaleString();
    }

    return +a + +b;
}


console.log(operation_result(2,3));
console.log(operation_result(2,"hello1"));
console.log(operation_result("hello1",4));
console.log(operation_result("hello2","hello1"));


//Optional Chaining

const fetchUserData =
{
    userName : "first User Name",
    age : 34,
    JobDetails : {title : "CEO" , domain : "Software company"},
}

console.log(fetchUserData.JobDetails.domain);//Software company
//since this is a static object , typescript knows if domain is present . But if data is fetched dynamically from back end , then typescript may not know if property exists or not

console.log(fetchUserData?.JobDetails?.title);//title
//by doing this validation won't proceed , if a certain thing is not found





//Null Coalescing


const var1 = null;
const var2 = "";
const var3 = undefined;

const Input_received = var1 || "fetching default value var1 = Bangalore";
const Input_received1 = var2 || "fetching default value var2 = Bangalore";

const Input_received2 = var2 ?? "fetching default value var3 = Bangalore";
//by putting question mark , it indicates or value only when it is null , empty string but no result would be stored in console, it will be empty
const Input_received3 = var3 ?? "fetching default value var4 = Bangalore";


console.log(Input_received);//fetching default value var1 = Bangalore
console.log(Input_received1);//fetching default value var2 = Bangalore

console.log(Input_received2);//fetching default value var3 = Bangalore
//won't print anything

console.log(Input_received3);//fetching default value var4 = Bangalore



const projects_array : Array<string | number> = ["development","automation",45,67]; //same as string[]

const projects_array1 : Array<string> = [];

//generics on promises

let promise_p : Promise<string> = new Promise(function(resolve,reject)
{
    setTimeout(function()
    {
        resolve("promise function executed once");
        //will throw an error if we use number since resolve value should be of string type
    },2000);
});


 


//setting object constraints



 //here declaring t and u states that what kind of parameters it should accept
function merge<T extends object, U extends object>(Object1 : T ,Object2 : U)
{
    //we are indicating typescript that T ad U are of specific types rather than declaring undefined
    //T is an object of string type and U is an object of number type
  return  Object.assign(Object1,Object2);
}

console.log({name : "MindTree"},{age : 35});//{name: 'MindTree'} {age: 35}


//declaring here states that what kind of parameters should be passed while calling function
const Mix_Objects = merge<{name : string,hobbies : Array<string>},{age : number}>({name : "MindTree",hobbies : ["cooking","cleaning","watching TV"]},{age : 35});
console.log(Mix_Objects);//{name: 'MindTree', hobbies: Array(3), age: 35}

console.log(Mix_Objects.age);


//after declaring T and U as object types , typescript won't throw an error

//We need not do here as typescript itself infers from the data type of parameters sent
//we are forced to send 2 objects only while calling the function



function merge1<T extends object, U extends number>(Object1 : T ,Object2 : U)
{
    //we are indicating typescript that T ad U are of specific types rather than declaring undefined
    //T is an object of string type and U is an object of number type

    
   Object.assign(Object1,Object2);
   console.log(Object1);
   console.log(Object2);
}

console.log(merge1({firstName : "firstName object property"},23));



const Mix_Objects1 = merge1<{name : string,hobbies : Array<string>},number>({name : "MindTree",hobbies : ["cooking","cleaning","watching TV"]},45);
console.log(Mix_Objects1);//{name: 'MindTree', hobbies: Array(3)}
//Javascript simply ignores number data type 45 and won't combine during run time , 45 is not an object and Object.assign is capable of combining only objects


//By doing this we are stating that T and U should be any object but an object

//When we extend T and U with objects , then typescript will throw an error for line 934, this is called setting object constraints


interface Lengthy
{
    length : number
}

//this indicates that we don't bother much about T what does it accept but are very strict stating that whatever value it receives must have length property such as string and array
function CountAndDescribe<T extends Lengthy>(element : T) : [T,string] // : [T,string] indicates the return type
{
    let descriptionText = "Got no value";

    if(element.length == 1)
    {
        descriptionText = "Got 1 element";
    }

    else if(element.length > 1)
    {
        descriptionText = "Got multiple elements . Element Length = " + element.length;
    }

    return [element,descriptionText];
}

console.log(CountAndDescribe("hello"));//['hello', 'Got multiple elements . Element Length = 5']
console.log(CountAndDescribe(""));//['', 'Got no value']
console.log(CountAndDescribe("h"));//['h', 'Got 1 element']


console.log(CountAndDescribe(["hello1","hello1hello2"]));//[Array(2), 'Got multiple elements . Element Length = 2']


// below function code is not working
function acceptSomething<T extends Lengthy>(a : T) : [string,number]
{
    if(a.length == 1)
    {
        return ["element length is 1 ",a.length];
    }

    else if(a.length > 1)
    {
        return ["Element length is greater than 1",a.length];
    }

    return ["Returning sent element = " + a,a.length];
}
 
acceptSomething("helloWorld");


 */
/*


//keyOf word in Generics

function Extract_Convert <T extends object, U extends keyof T>(object3 : T , k : U)
{
    return object3[k];//Value_1
}

console.log(Extract_Convert({"key_property1":"Value_1"},"key_property1"));
//console.log(Extract_Convert({"key_property1":"Value_1"},"key_property12")); will throw an error if we use some other 2nd parameter apart from property names mentioned in 1st parameter




//Generics in classes


class storage_container
{
    private dataStorage : string[]= [];

    addStorageItems(addItem : string)
    {
        this.dataStorage.push(addItem);
    }

    removeStorageItems(RemoveItem : string)
    {
            this.dataStorage.splice(this.dataStorage.indexOf(RemoveItem),1)//1 indicates 1 element should be removed
    }

    getItems()
    {
        return [...this.dataStorage];
    }
}

//Implementing same using generics


class storage_container1<T extends string | number | boolean | object>//here T can be a string /boolean/number
{
    private dataStorage : T[] = [];

    addStorageItems(addItem : T)
    {
        this.dataStorage.push(addItem);
    }

    removeStorageItems(RemoveItem : T)
    {
        if(this.dataStorage.indexOf(RemoveItem) == -1)
        {
            return
        }
            this.dataStorage.splice(this.dataStorage.indexOf(RemoveItem),1)//1 indicates 1 element should be removed
    }

    getItems()
    {
        return [...this.dataStorage];
    }
}


//adding only string data types in class property

const stringArray = new storage_container1<string>();
stringArray.addStorageItems("word1");
stringArray.addStorageItems("word2");
//stringArray.addStorageItems(3); will throw an error since we declared sending function parameters type as string
console.log(stringArray.getItems());//['word1', 'word2']



const numberArray = new storage_container1<number>();
numberArray.addStorageItems(23);
numberArray.addStorageItems(45);
//numberArray.addStorageItems("hello1");will throw an error since we declared sending function parameters type as number
console.log(numberArray.getItems());//[23, 45]



const numberStringArray = new storage_container1<number | string>();
numberStringArray.addStorageItems(23);
numberStringArray.addStorageItems("hello1");
console.log(numberStringArray.getItems());//[23, 'hello1']


//this code works only for primitive data types but not non-primitive data types such as objects,arrays

const objectArray = new storage_container1<object>();
objectArray.addStorageItems({name : "developer"});
objectArray.addStorageItems({name : "tester"});
console.log(objectArray.getItems());
objectArray.removeStorageItems({name : "developer"})// returns -1 as it won't find anything and hence it removes last element
console.log(objectArray.getItems());


// technically 1086 and 1088 lines are different for javascript . It
 console.log(objectArray);
// storage_container1 {dataStorage: Array(1)}
// dataStorage: Array(1)
// 0: {name: 'developer'}
// length: 1

//It is not removing 1st object because object holds reference address but not exact values



const array_string : Readonly<string[]>= ["cooking","cleaning"];

// will throw an error as the property is read only
// array_string.push("washing");
// array_string.pop();


//it performs extra validations and might come really handy on few circumstances


 */
//Decorators 
//Sample decorator 
function Logger(constructor) {
    console.log("Logging data");
    console.log(constructor); //invokes complete class 
}
var Person = /** @class */ (function () {
    function Person() {
        this.fullName = "MindTree";
        console.log("creating class object ...");
    }
    Person = __decorate([
        Logger
    ], Person);
    return Person;
}());
var p = new Person();
console.log(p);
console.log(p.fullName);
// Output :-
// Logging data
// file2.js:601 class Person {
//     constructor() {
//         this.fullName = "MindTree";
//         console.log("creating class object ...");
//     }
// }
// file2.js:606 creating class object ...
// file2.js:613 Person {fullName: 'MindTree'}
//Sample decorator as a function 
/*
console.log("trying sample decorators");

function trySampleDecorator(constructor : Function)
{
    console.log("this message is coming from decorator function");
 
}


@trySampleDecorator
class helloProgrammer
{
    constructor()
    {
        console.log("This message from class helloProgrammer");
    }
}

var helloProgrammerObject = new helloProgrammer();




console.log("check above this");
 */
function LoggingString_Constructor(element) {
    return function (constructor) {
        console.log(element);
        console.log(constructor);
    };
}
function LoggingTemplate(template, hookId) {
    return function (constructor) {
        var e = new constructor();
        var hookId_element = document.getElementById(hookId);
        if (hookId_element) {
            hookId_element.innerHTML = template;
        }
        var h = document.getElementById("insert_classProperties");
        h.innerHTML = e.fullName;
    };
}
var Employee = /** @class */ (function () {
    function Employee() {
        this.fullName = "MindTree developer";
        console.log("Employee Name = " + this.fullName);
    }
    Employee = __decorate([
        Logger,
        LoggingTemplate("<h1>Inserted words via template from decorator<h1>", "template_div_add"),
        LoggingString_Constructor("sending parameters via decorator")
    ], Employee);
    return Employee;
}());
// Output :-
// Employee Name = Mindtree developer
// Logging data
// class Employee {
//    constructor() {
//        this.fullName = "Mindtree developer";
//        console.log("Employee Name = " + this.fullName);
//    }
// }
//executing decorators on class properties,methods and parameters
function LogPriceDetails_property(target, description) {
    console.log("Property decorator");
    console.log(target);
    console.log(description);
}
function LogPriceDetails_method(target1, methodName1, description) {
    console.log("Accessor/method  decorator");
    console.log(target1);
    console.log(methodName1);
    console.log(description);
}
function LogPriceDetails_parameter(target2, Argument_presentInMethodNAme, ArgumentPosition) {
    console.log("Parameter decorator");
    console.log(target2);
    console.log(Argument_presentInMethodNAme);
    console.log(ArgumentPosition);
}
console.log("tax details class below here");
var TaxDetails = /** @class */ (function () {
    function TaxDetails(price) {
        this.price = price;
        this.tax = 0;
    }
    Object.defineProperty(TaxDetails.prototype, "GetPriceValue", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaxDetails.prototype, "SetPriceValue", {
        set: function (value) {
            if (value) {
                this.price = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    // Output :- 
    // {writable: true, enumerable: false, configurable: true, value: ƒ}
    // configurable: true
    // enumerable: false
    // value: ƒ CalculateTax()
    // writable: true
    // [[Prototype]]: Object
    //CalculateTax
    TaxDetails.prototype.CalculateTax = function () {
        this.tax = this.price * 10;
        console.log(this.tax);
        console.log("After calculation tax value = " + this.tax);
    };
    __decorate([
        LogPriceDetails_property
    ], TaxDetails.prototype, "tax");
    __decorate([
        LogPriceDetails_method
    ], TaxDetails.prototype, "CalculateTax");
    return TaxDetails;
}());
var td = new TaxDetails(20);
console.log(td.GetPriceValue); //20
td.CalculateTax(); //200
//After calculation tax value = 200
//Creating an autoBind decorator
console.log("Auto bind decorator below");
function AutoBind(target, methodName, descriptor) {
    //target : any, methodName : string , descriptor : PropertyDescriptor we are not interested in these values , but just accept them 
    var originalMethod_valueObtained = descriptor === null || descriptor === void 0 ? void 0 : descriptor.value;
    var ModifyDescriptor = {
        enumerable: true,
        configurable: true,
        get: function () {
            var AssignThistoClass = originalMethod_valueObtained.bind(this);
            return AssignThistoClass;
        }
    };
    return ModifyDescriptor;
}
var Printer = /** @class */ (function () {
    function Printer() {
        this.message = "This works";
    }
    Printer.prototype.showMessage = function () {
        console.log(this.message);
    };
    __decorate([
        AutoBind
    ], Printer.prototype, "showMessage");
    return Printer;
}());
var pr = new Printer();
var button_element = document.getElementById("clickMe");
//button_element.addEventListener("click",pr.showMessage); //undefined
//button_element.addEventListener("click",pr.showMessage.bind(pr)); //This works
button_element.addEventListener("click", pr.showMessage); //This works
//Also works this way
pr.showMessage();
var Course_fees = /** @class */ (function () {
    function Course_fees(t, p) {
        this.price = p;
        this.title = t;
    }
    return Course_fees;
}());
var fees_variable = new Course_fees("React framework", 45);
console.log(fees_variable); //Course_fees {price: 45, title: 'React framework'}
var form_element = document.getElementById("validation_form");
form_element.addEventListener("submit", function (event) {
    event.preventDefault();
    var title_element = document.getElementById("Course_title");
    var price_element = document.getElementById("Price_title");
    var title = title_element.value;
    var price = +price_element.value;
    console.log("Title given = " + title);
    console.log("Price value given = " + price);
});
var formElement_random = document.getElementById("enterRandomValuesIntoHTMLPage");
formElement_random.addEventListener("submit", function (eventRandomObject) {
    eventRandomObject.preventDefault();
    var h1element = document.getElementById("h2RandomHeader");
    var jsonObject_inHeadDivision = {
        firstName: "Google Developer",
        lastName: "Development testing"
    };
    var j = JSON.stringify(jsonObject_inHeadDivision); // converts plain javaScript object to JSON Object
    h1element.innerHTML = j;
});
