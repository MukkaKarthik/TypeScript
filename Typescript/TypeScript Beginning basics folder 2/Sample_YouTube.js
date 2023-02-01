var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
console.log("Hello world from TypeScript file . Aspiring to become JavaScript developer. Save the text in file");
console.log("checking changes for watch mode , now trying again");
function addIntegers() {
    for (var i = 1; i <= 10; i++) {
        document.write("TypeScript Value = " + i + "<br>");
    }
}
function greetName(name) {
    var GreetVariable;
    if (name == "Chandler") {
        GreetVariable = "Hello Chandler (function changed) ";
    }
    else {
        GreetVariable = "you typed an incorrect name (function changed) ";
    }
    document.write(GreetVariable);
}
greetName("facebook");
var a = 1;
var b = 2;
if (a == 1) {
    var a = 12;
    var b_1 = 34;
    console.log(a);
    console.log(b_1);
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
    var num1;
    var num2 = 23;
    var JSON_object = {
        fullName: "Google Alphabet"
    };
    JSON_object.fullName = "Name changed to Microsoft";
    // we can include in the simple way as follows
    document.getElementById("FullName_id").innerHTML = JSON_object.fullName;
    // This way we can explicitly mention about the kind of html specific element 
    document.getElementById("FullName_id").innerHTML = JSON_object.fullName;
}
//Var used in the form of functions(consisting of a single statement) using let or const
var RegularValue = function () {
    return "Bangalore";
};
console.log(RegularValue());
var getArrayValue = function (m) { return 20 * m; };
console.log(getArrayValue(5));
var getNumericalValue = function (n, bonus) { return 15 * n - bonus; }; //Assigning without brackets is possible
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
var displayColors = function (message_Variable, subjectsList_temp) {
    var ColorsObject = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        ColorsObject[_i - 2] = arguments[_i];
    }
    console.log(arguments.length);
    // Displaying 1st argument
    console.log(message);
    // Working on 2nd Argument
    console.log(subjectsList_temp);
    console.log.apply(console, subjectsList_temp);
    for (var _a = 0, subjectsList_temp_1 = subjectsList_temp; _a < subjectsList_temp_1.length; _a++) {
        var a_1 = subjectsList_temp_1[_a];
        console.log("subjectsList_temp : " + a_1);
    }
    // Using for each function 
    var forEachFunction = function (local_temp) {
        console.log("getting value from forEach function " + local_temp);
    };
    subjectsList_temp.forEach(forEachFunction);
    // Working on 3rd Argument
    console.log(ColorsObject);
    console.log("After destructuring colors object");
    console.log.apply(console, ColorsObject);
    for (var i in ColorsObject) {
        console.log("typed value = " + ColorsObject[i]);
    }
};
var message = "List of colors";
var colors_List = ["Red", "Blue", "Green"];
var SubjectsList = ["English", "Maths", "Social", "Physics"];
displayColors.apply(void 0, __spreadArray([message, SubjectsList], colors_List, false));
/*
displayColours(message,"Red");
displayColours(message,"Red","Blue");
displayColours(message,'Red','Blue',"Green");
*/
var firstName = "Google";
var lastName = "Developer";
var person = {
    firstName: firstName,
    lastName: lastName
};
console.log("Person's first Name = " + person.firstName + "\n Person's last name = " + person.lastName);
function getFullName(firstName, lastName, SeniorAge, StudentAge) {
    var FullName = firstName + " " + lastName;
    //ShortHand Notation for return, need not use colon for every property
    return {
        FullName: FullName,
        firstName: firstName,
        lastName: lastName,
        isSenior: function () {
            return SeniorAge > 60;
        },
        isStudent: function () {
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
var LN = "last Name";
var FullDetails = (_a = {
        "First Name": "Indian Citizen"
    },
    _a[LN] = "Asia Continent",
    _a.citizen = "Indian",
    _a);
console.log("Given full name = " + FullDetails["First Name"]);
console.log("Given full name = " + FullDetails[LN]);
console.log("Person citizenship belongs to = " + FullDetails.citizen);
console.log(FullDetails);
var StudentDetails = ["Microsoft", "Developer", "Bangalore"];
var fName = StudentDetails[0], lName = StudentDetails[1], station = StudentDetails[2];
console.log("First Name = " + fName);
console.log("\nLast Name = " + lName);
console.log("\nLocation posted = " + station);
//Using destructuring but not defining every part
var EmployeeDetails = ["Google", "Associate", "Canada"];
var Company_Station = EmployeeDetails[2];
console.log("\n EmployeeDetails Location posted = " + Company_Station);
//Using destructuring by rest operator
var Employee1Details = [, "AssociateDifferent", "CanadaDifferent", "England", "London"];
var _b = Employee1Details[0], Given_firstName = _b === void 0 ? "default value = Google1" : _b, Company_Station_1 = Employee1Details.slice(1);
//Assigning default value to first Name
console.log("Organization first name : " + Given_firstName);
console.log("Organization's rest operator = " + Company_Station_1);
var temporary = "Hello World";
var permanent = "As per language\n" + temporary + "\tEnding sentence";
console.log(permanent);
var temporary1 = "Hello World";
var permanent1 = "As per language 'single' " + temporary1 + " \" double\" \tEnding sentence\n            \nThis is the second line \n            \nThis\t   third line\n            \n            ";
console.log(permanent1);
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p1 = new Person();
console.log("Type of class person = " + typeof Person); //function
function function1() {
}
console.log(typeof function1); //function 
var PersonNext = /** @class */ (function () {
    function PersonNext() {
    }
    PersonNext.prototype.Method1 = function () {
    };
    return PersonNext;
}());
var pNext = new PersonNext();
console.log(pNext.Method1() == PersonNext.prototype.Method1()); //true
var Employee = /** @class */ (function () {
    function Employee() {
        this.name_fromConstructor = "";
    }
    Employee.prototype.Employee1 = function (name) {
        this.name_fromConstructor = name;
        console.log("Invoking Employee1 prototype method : " + this.name_fromConstructor);
    };
    Employee.prototype.Employee2 = function (name) {
        this.name_fromConstructor = name;
        console.log("Invoking Employee2 prototype method : " + this.name_fromConstructor);
    };
    Employee.prototype.Employee3 = function (name) {
        this.name_fromConstructor = name;
        console.log("Invoking Employee3 prototype method : " + this.name_fromConstructor);
    };
    return Employee;
}());
var e = new Employee();
e.Employee1("Chandler1"); //Invoking Employee1 prototype method : Chandler1
var f = new Employee();
f.Employee3("Chandler3"); ///Invoking Employee1 prototype method : Chandler3
var EmployeeNext = /** @class */ (function () {
    function EmployeeNext(name) {
        console.log(name + " Invoking Parent constructor Method");
    }
    EmployeeNext.prototype.getId = function () {
        return 15;
    };
    return EmployeeNext;
}());
var PersonNext1 = /** @class */ (function (_super) {
    __extends(PersonNext1, _super);
    function PersonNext1(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + " Invoking child constructor Method");
        return _this;
    }
    PersonNext1.prototype.getId = function () {
        // return 20;
        return _super.prototype.getId.call(this); // gives the return value of getId() method in parent class
    };
    return PersonNext1;
}(EmployeeNext));
var p1Next = new PersonNext1("Chandler"); //Chandler Invoking Parent constructor Method
//Chandler Invoking child constructor Method
//console.log(p.getId());//20
console.log(p1Next.getId()); //15 (when super used in the getId() method from child class ,we get the value from parent class)*/
var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["Brown"] = 0] = "Brown";
    EyeColor[EyeColor["Black"] = 5] = "Black";
    EyeColor[EyeColor["Blue"] = 6] = "Blue";
    EyeColor[EyeColor["Yellow"] = 7] = "Yellow";
})(EyeColor || (EyeColor = {}));
var myEyeColor = EyeColor.Brown;
console.log(myEyeColor); //0
console.log(EyeColor.Brown); //0
console.log(EyeColor.Black); //5
console.log(EyeColor.Blue); //6
console.log(EyeColor.Yellow); //7
console.log(EyeColor[myEyeColor]); //Brown
