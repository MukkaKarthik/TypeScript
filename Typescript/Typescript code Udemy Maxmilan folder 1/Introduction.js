var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function addNumbers_typescript(a, b) {
    return a + b + 20;
}
console.log(addNumbers_typescript(10, 20));
var objectType = {
    firstName: "hello",
    lastName: "programming",
    age: 25,
    DoesHeExist: true
};
function changeObjectName_typescript() {
    objectType.firstName = "first Name changed";
    objectType.DoesHeExist = false;
    console.log(objectType);
}
changeObjectName_typescript();
var combineObject_Array = ["yes", 23, {
        first: "change",
        last: "hello"
    }, true];
console.log(combineObject_Array);
var hello;
hello = [
    { first: "first object",
        last: "last 1st index",
        isPresent: true },
    { first: "first object",
        last: "last 1st index",
        isPresent: true },
    { first: "Second object",
        last: "last 2nd index",
        isPresent: false },
];
var collegeDetails;
collegeDetails = "hello world , welcome to programming" + 24 + " " + true + { NetworkingPlatform: "facebook development" };
console.log(collegeDetails);
function combineStrings_random(str1, ref1) {
    return str1 + ref1 + 34;
}
// Generics concept is used because we have any type and typescript can't infer any type
function combineStrings_typescript(reference, reference2) {
    return __spreadArray(__spreadArray(__spreadArray([], reference, true), [23, true, "hello world"], false), reference, true);
    //By using this generics concept typescript can infer specific pattern types and return TypeScript
    // flexibility and type safety can be achieved using generics 
}
var Array1 = ["yes", "no", "hobbies", "patters"];
var Array2 = [23, 45, 67, 98, 12];
/*  console.log(addAnything(Array1,Array2)); This statement will throw an error as T is
already is inferred as string , hence it can't infer as number again   */
// defining classes
var BluePrint = /** @class */ (function () {
    function BluePrint(ref1, ref2, ref3, ref4, ref5) {
        this.firstName = "";
        this.ageDefined = 0;
        this.thingsExist = true;
        this.ArrayNeeded = ref4;
        this.firstName = ref1;
        this.ageDefined = ref2;
        this.thingsExist = ref3;
        this.ObjectType = ref5;
    }
    BluePrint.prototype.printAllDetails = function () {
        console.log(this.firstName + this.ageDefined + this.thingsExist + this.ArrayNeeded + this.ObjectType);
    };
    return BluePrint;
}());
var a = new BluePrint("1st word", 23, true, ["1st index", "2nd index", "3rd index"], { firstWord: "hello", secondWord: "programming" });
a.printAllDetails();
// Implementing interfaces 
var excuseMe = {
    firsName: "hello world",
    doPersonExist: true,
    JSONObjectDetails: {
        a_JSONObject: ["English", "Maths", "Social", "Science"],
        b_JSONObject: 23
    }
};
console.log(excuseMe);
var HelloProgrammer = /** @class */ (function () {
    function HelloProgrammer() {
        this.firstName = "extending hello programmer";
        this.lastName = "extend last name";
        this.printHello = function () {
            console.log("Printing hello world");
        };
    }
    return HelloProgrammer;
}());
var h = new HelloProgrammer();
h.printHello();
console.log("Good Bye , best of luck");
var helloWorld;
helloWorld =
    {
        firstName: "yes",
        doesHeExist: 23,
        notPresent: true,
        SubjectsRequired: ["Maths", "English", "Social", "Science"],
        MarksObtained: [23, 45, 3, 1]
    };
console.log(helloWorld);
