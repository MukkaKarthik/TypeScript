function addNumbers_typescript( a : number , b : number)
{
    return a + b + 20;
}

console.log(addNumbers_typescript(10,20));



let objectType : 
{
    firstName : string,
    lastName : string,
    age : number,
    DoesHeExist : boolean
} = 
{
    firstName : "hello",
    lastName : "programming",
    age : 25,
    DoesHeExist : true
}



function changeObjectName_typescript()
{
    objectType.firstName = "first Name changed";
    objectType.DoesHeExist = false;
    console.log(objectType);
}

changeObjectName_typescript();




let  combineObject_Array : Object | string[] =  ["yes",23,{
    first : "change",
    last : "hello"
},true ];

console.log(combineObject_Array);


let hello : {
    first : string,
    last : string,
    isPresent : boolean
}[];


hello = [
    {first : "first object",
last : "last 1st index",
isPresent : true},

{first : "first object",
last : "last 1st index",
isPresent : true},

{first : "Second object",
last : "last 2nd index",
isPresent : false},
    
]





type changeObject = string | boolean;


let collegeDetails : changeObject;

collegeDetails = "hello world , welcome to programming" + 24 + " "  + true + {NetworkingPlatform : "facebook development"};

console.log(collegeDetails);



function combineStrings_random(str1 : string , ref1 : string) : string
{
    return str1 + ref1 + 34;
}




// Generics concept is used because we have any type and typescript can't infer any type



function combineStrings_typescript<T>(reference : T[] , reference2 : T)
{
    return [...reference , 23, true , "hello world" , ...reference]

    //By using this generics concept typescript can infer specific pattern types and return TypeScript

    // flexibility and type safety can be achieved using generics 

}


let Array1 : string[] = ["yes","no","hobbies","patters"];

let Array2 : number[] = [23, 45, 67, 98, 12];

/*  console.log(addAnything(Array1,Array2)); This statement will throw an error as T is 
already is inferred as string , hence it can't infer as number again   */






// defining classes


class BluePrint
{
    firstName : string = "";

    ageDefined : number = 0;

    thingsExist : boolean = true ;

    ArrayNeeded : string[] | number ;

    ObjectType : {};

    constructor( ref1 : string , ref2 : number , ref3 : boolean , ref4 : string[] , ref5 : {} )
    {
        
        this.ArrayNeeded = ref4;
        this.firstName = ref1 ;

        this.ageDefined = ref2;

        this.thingsExist = ref3;

         this.ObjectType = ref5;


    }


    printAllDetails()
    {
        console.log( this.firstName + this.ageDefined + this.thingsExist + this.ArrayNeeded + this.ObjectType );
    }

}


let a = new BluePrint("1st word",23,true ,["1st index", "2nd index" , "3rd index"],{firstWord : "hello" , secondWord : "programming"});

a.printAllDetails();



type a =
{
    firsName : string;
    doPersonExist : boolean;
    JSONObjectDetails : 
    {
        a_JSONObject : string[],
        b_JSONObject : number,
        
    }
}



// Implementing interfaces 

let excuseMe : a = 
{
    firsName : "hello world",
    doPersonExist : true,
    JSONObjectDetails :
    {
        a_JSONObject : ["English","Maths","Social","Science"],
        b_JSONObject : 23
    }
}

console.log(excuseMe);


interface helloWord 
{
    firstName : string ,
    lastName : string,

    printHello : Function,
}


class HelloProgrammer implements helloWord
{
    firstName: string = "extending hello programmer";

    lastName: string = "extend last name";

    printHello: Function = function()
    {
        console.log("Printing hello world");
    };
    
}

let h = new HelloProgrammer();

h.printHello();

console.log("Good Bye , best of luck");




let helloWorld : 
{
    firstName : string ,
    doesHeExist : number ,
    notPresent : boolean,
    SubjectsRequired : string[],
    MarksObtained : Array<Number>
} 


helloWorld =
{
    firstName : "yes",
    doesHeExist : 23,
    notPresent : true,
    SubjectsRequired : ["Maths","English","Social","Science"],
    MarksObtained : [23,45,3,1]
};

console.log(helloWorld);