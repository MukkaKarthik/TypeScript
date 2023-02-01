console.log("hello World from file2 on November 23rd, testing for watch mode");


/* 

//Video 43
//DOM and typecasting


const para1 = document.querySelector("p");//type HTMLParagraphElement | null


const para2 = document.querySelector("#Message Output");// type Element | null


const para3 = document.getElementById("#Message Output");//type HTMLElement | null

const in1 = <HTMLInputElement>document.querySelector("input");//type HTMLInputElement | null
in1.value = "insert 1 value query selector using input tag";//after changing into HTMl input element ,error went away 

const in2 = <HTMLInputElement>document.querySelector('type_text1');//type Element | null
in2.value = "insert 1 value query using selector ID";


const in3 = <HTMLInputElement>document.getElementById("input");////type HTMLElement | null
in3.value = "insert 2 value query selector using input tag";


const in4 = <HTMLInputElement>document.getElementById("type_text2");//type HTMLElement | null
in4.value = "insert 2 value query using selector ID";

const in5 = <HTMLInputElement>document.getElementById("type_text1");//type HTMLElement | null
in5.value = "insert 1 value query using selector ID";

//There is some conflict between ReactJS and typescript if we use angular braces . To avoid that conflict , typescript came up with a new notation
//USe this way only when u r sure that it will return some element but not null
const in6 = document.getElementById("type_text2") as HTMLInputElement;//type HTMLElement | null
in6.value = "as 2 value query using selector ID";

const in7 = document.getElementById("type_text1") as HTMLInputElement;//type HTMLElement | null
in7.value = "as 1 value query using selector ID";



//There is one more way of handling  null types .When we are not sure about return types, We can use this method for handling null type 

//type_text2 may or may not exist , if  we have a doubt then use this approach
const in8 = document.getElementById("type_text2");//type HTMLElement | null

if(in8)
{
    (in8 as HTMLInputElement).value = "as 2 value if loop using selector ID";

}

const in9 = document.getElementById("type_text1");//type HTMLElement | null

if(in9)
{
    (in9 as HTMLInputElement).value = "as 1 value if loop using selector ID";

}


 */






/* 
//Video 42 Index type typescript

//Maintaining index for the properties as dynamic 

interface ErrorContainer 
{
    [properties : string] : string;
}

let errorBag : ErrorContainer = {
 
    email : "Given input message is wrong ",
    1 : "Given number is wrong",
}



 console.log(errorBag);

 var ej = JSON.stringify(errorBag);

 (document.getElementById("displayingJSONDetails") as HTMLHeadingElement).innerHTML = ej;




 */
 



//Video 46 Optional Properties and chaining 
const userDate = 
{
    job : "facelift",

    financialDetails : {payslip : "June" , Month : 2019},
}
//Not user , what kind of data comes from server , may exist or not exist 
//Use question mark for optional and breaking the code 

console.log(userDate?.financialDetails?.Month);//Optional parameter chaining  

const userInput = null;

const ServerDate = userInput || "default";

console.log(ServerDate);//default 
//we get this output as userInput is null , so return default as the value

const userInput1 = "";

const ServerDate1 = userInput1 || "default";

console.log(ServerDate1);//default 



const userInput2 = "input value given";

const ServerDate2 = userInput2 || "default";

console.log(ServerDate2);//input value given


//Null coalescing 
const userInput3 = "";

//Use question mark only for null and undefined , but not for ""
const ServerDate3 = userInput3 ?? "default";

console.log(ServerDate3);//console log is empty , no value given 


 


/* 


//Video 47 Generics

let string1 : string[]= ["word1","word2","word3",];

//let nameArray1 : Array= [];will throw an error if only array is declared , as array doesn't know what type of data is fed

let nameArray2 : Array<string> = []; //Representation of Array<string> is equivalent to string[]

let nameArray3 : Array<number> = []; //Representation of Array<string> is equivalent to number[]

let number1 : number[] = [1,2,3,4];

var promise1 : Promise<string> = new Promise(function(resolve : any ,reject : any)
{
    setTimeout(function() 
    {
        resolve("Resolving only string object");
    },2000);

}
)

promise1.then(function(data)
{
    data.split("")// will throw an error as data can't confirm that it will return only string as return data types 
    //data type is unknown , hover cursor over data and check 

    //Promise<string> when used in 157 line , error will go away in line 169
    //Promise is the return type and type of data is string 
})

promise1.catch(function(errorObject)
{
    console.log(errorObject);
});


 
 */


/* 

//Video 49 Generics 

function merge<T,U>(Object1 : T , Object2: U)
{
   return Object.assign(Object1,Object2);
}

const Merging_date  = merge<{name : string ,hobbies : string[] },{age : number}>({name : "Mindtree" , hobbies : ["Google Developer"]}, {age : 34}) 
console.log(  "Merging function age = " + + Merging_date.age)



//Typescript should throw an error if object is not send from calling function 

function merge1<T extends object,U extends object>(Object1 : T , Object2: U)
{
   return Object.assign(Object1,Object2);
}

const Merging_date1  = merge1({name : "Mindtree" , hobbies : ["Google Developer"]}, {age :34 })// will throw an error under 34 
console.log(Merging_date);//{name: 'Mindtree', hobbies: Array(1), age: 34}

//Can mention for only 1 parameter or a different data type 

function merge2<T extends string | number,U >(Object1 : T , Object2: U)
{
   return Object.assign(Object1,Object2);
}

const Merging_date2  = merge2("Mindtree" ,{ age :34} )// will throw an error under 34 
console.log(Merging_date);//{name: 'Mindtree', hobbies: Array(1), age: 34}
 


 */



 /* 



interface Element_MustGiveString
{
    length: number;
}



function getTextAndNumber<f extends Element_MustGiveString>(element : f) : [f,string]
{
    let text = "Got no value";

    if(element.length == 0)
    {
        text = "Got no element";
    }

     if(element.length > 0)
    {
        text = "No of elements given = " + element.length;
    }

    return [element,text];

}

console.log(getTextAndNumber("Hello Somebody"));//['Hello Somebody', 'No of elements given = 11']
console.log(getTextAndNumber(["Hello","Somebody"]));//[Array(2), 'No of elements given = 2']
//console.log(getTextAndNumber(1)); will throw an error because number doesn't have length property



//Video 51 keyof constraint
function KeyWithValue<a extends object,b extends keyof a>(received_key : a , received_value : b)
{
    return received_key[received_value];

}

console.log(KeyWithValue({name : "Google"},"name"))//Google
console.log(KeyWithValue({name : "Google", age : 45},"age"))//45





 







//Video 52 Generics with classes 

class Structure_values<T>
{
    //T extends string[] | number[] | string | number if we put this it won't accept object type

    data : Array<T> = []; 


    addItem(Item_received : T)
    {
        this.data.push(Item_received);
    }

    DisplayItem()
    {
        console.log(this.data);
    }

}

let string_generics = new Structure_values<string[] >();
//string_generics.addItem(12); will throw an error because class will accept only string values
string_generics.addItem(["Google Developer","Mindtree developer","Facebook developer"]);
console.log("Displaying Items = ");
string_generics.DisplayItem();

//Array(3)]0: (3) ['Google Developer', 'Mindtree developer', 'Faebook developer']length: 1[[Prototype]]: Array(0)

let string_generics1 = new Structure_values<Array <string | number> >();
//string_generics.addItem(12); will throw an error because class will accept  string array or number array values
string_generics1.addItem(["string1","string1","number1","number2",23,45,67,98,]);
console.log("Displaying Items = ");
string_generics1.DisplayItem();

//['string1', 'string1', 'number1', 'number2']

let string_generics2 = new Structure_values<string | number >();
//string_generics.addItem(12); will throw an error because class will accept  string array or number array values
string_generics2.addItem("string1");
string_generics2.addItem(34);
console.log("Displaying Items = ");
string_generics2.DisplayItem();
//['string1', 34]

let string_generics3 = new Structure_values<object>();
//string_generics.addItem(12); will throw an error because class will accept  string array or number array values
string_generics3.addItem({name1 : "string1"});
string_generics3.addItem({number1 : 34});

console.log("Displaying Items string_generics 3  = ");
string_generics3.DisplayItem();




function tryGenerics<T>(someRandomElement : T)
{
    return [someRandomElement];
}

console.log(tryGenerics<string>("yes"));

console.log(tryGenerics<number>(23));

console.log(tryGenerics<string[]>(["yes word1","yes word2"]));

console.log(tryGenerics<object>({firstName : "google developer",lastName : "facelift tester"}));



 








//Video 53 Partial Utility generics

interface course
{
    title : string,
    description : string,
    branch : string,
    
}

function CourseStarted () : course
{
 let date : Partial<course> = 
 {
   title : "Start Up",
   description : "Just now",
    branch : "Bangalore",
    
     }

 return <course>date;
} 


function CourseStarted1 (title_started : string,description_started : string,branch_started : string) : course
{
 let date : Partial<course> = 
 {
   title : title_started,
   description : description_started,
    branch : branch_started,
    
     }

 return <course>date;
} 


console.log(CourseStarted());//{title: 'Start Up', description: 'Just now', branch: 'Bangalore'}
console.log(CourseStarted1("word1","word2","word3"));//{title: 'word1', description: 'word2', branch: 'word3'}

let variable1 : Readonly<string[]> = ["Word1","Word2"];
//variable1.push("word3") will throw an error because variabl1 of of readoly type . Can't accept parameters using functions
  



//Video 55 Decorators

function LoggerData(LogString : string)
{

    return function(constructor : Function) 
    {
    console.log("Logging data ...");
    console.log(LogString);
    console.log(constructor);
    }

}



@LoggerData("Logging data , annotation present above class")
class Person
{
    constructor()
    {
        console.log("Creating Object ...");
    }
}

var p = new Person();
console.log(p);

//  Output :-
// Logging data ...
// file2.js:381 Logging data , annotation present above class
// file2.js:382 ƒ Person() {
//         console.log("Creating Object ...");
//     }
// file2.js:387 Creating Object ...
// file2.js:395 Person {} 








//Video 56 Creating simple angular component decorator 

function TestingAngular1_function(template_received : string , idElement_received: string)
{
    return function(returnObject1 : Function)
    {
            const id_variable = document.getElementById("template_id") as HTMLInputElement;
            
            if(idElement_received)
            {
                    id_variable.innerHTML = template_received;
            }

    }
}


@TestingAngular1_function("<h1>This word should disappear</h1>","template_id")
class TestingAngular1_class
{
    constructor()
    {

    }
}


//Second function

function TestingAngular2_function(template_received : string , idElement_received: string)
{
    return function(constructor : any)
    {
            const id_variable = document.getElementById("template_id") as HTMLInputElement;
        
           
            if(idElement_received)
            {
                    id_variable.innerHTML = template_received;
                     
            }

            const property_variable_fromHTMLPage = document.getElementById("property_id") as HTMLInputElement;
            const property_variable = new constructor()


            if(property_variable_fromHTMLPage)
            {
                property_variable_fromHTMLPage.innerHTML = property_variable.test_name;
            }

    }
}

@LoggerData("Using multiple decorators , loggerdata function")
@TestingAngular2_function("<h1>Word from second function should appear</h1>","template_id")
class TestingAngular2_class
{
    test_name = "Angular JS in Leela Web dev";
    constructor()
    {

    }

    
// Logging data ...
// file2.js:381 Using multiple decorators , loggerdata function
// file2.js:382 ƒ TestingAngular2_class() {
//         this.test_name = "Angular JS in Leela Web dev";
   // }
    


}

 */


/* 




//Video 58 Property decorator     

function LogResult(logstring : any , logNumber : any)
{
    console.log(logstring);
    console.log(logNumber);
}


function LogMethod(target : any , name : string , descriptor : PropertyDescriptor)
{
    console.log("Executing accessor methods = ");
    console.log(target);//ObtainTax: ƒ, constructor: ƒ}
    console.log(name);//PriceValue (method name)
    console.log(descriptor);//{get: undefined, enumerable: false, configurable: true, set: ƒ}


}

function LogMethod3(target : any , name : string , descriptor : PropertyDescriptor)
{
    console.log("Executing accessor methods = ");
    console.log(target);//{ObtainTax: ƒ, constructor: ƒ}
    console.log(name);//PriceValue (method name)
    console.log(descriptor);//{writable: true, enumerable: true, configurable: true, value: ƒ}


}


function LogMethod4(target : any , name : string , position : number)
{
    console.log("Executing parameters methods = ");
    console.log(target);//{ObtainTax: ƒ, constructor: ƒ}
    console.log(name);//ObtainTax
    console.log(position);//0


}



class Product
{
    @LogResult //when executed , we get prototype of the entire instance of the class
    title : string
    price : number

    constructor(title : string , price : number)
    {
        this.price = price;
        this.title = title;
    }

    @LogMethod //decorators for methods
    set PriceValue(price_value_set: number)
    {
        if(price_value_set)
        {
            this.price= price_value_set;
        }
        else
        {
            throw new Error("Price value not given in set function call");
            
        }
    }

    @LogMethod3 
    ObtainTax(@LogMethod4 tax : number)
    {
        if(tax * 10)
        {
            let tax_calculated = tax * this.price;
            console.log("After tax calculation result obtained = " + tax_calculated);
        }

        else
        {
            throw new Error("Tax value not given via function ");
        }
    }


}

var p1 = new Product("Bag product",500);
console.log(p1);//Product {price: 500, title: 'Bag product'}



//Return decorators 

//We can override class property name variables inside class . Return function decorator code should resemble same as class 

//if we declare return type for parameter and property ia decorator , then typescript will ignore the return type 




*/


//Video 63 Return property descriptor data from method decorator

/* 

//Code not Working

function AutoBind(target : any , MethodName : string , PropertyValues : PropertyDescriptor)
{
    console.log(target);

    const getMethodNames = PropertyValues.value;

    const Custom_buildingPrototypes : PropertyDescriptor = 
    {
        configurable :true,
        enumerable : false,

        get()
        {
            return getMethodNames.bind(this);
        }

    }
}


class Company1
{
    message1 = "Hello world , developer programmer, calling from company1";

    @AutoBind    
    getInfo1() : any //{getInfo1: ƒ, constructor: ƒ}
    {
        console.log(this.message1);
    }
}

var c1 = new Company1();


const button_element1 = document.getElementById("decorator_id1") as HTMLInputElement;

button_element1.addEventListener("click",c1.getInfo1());//Hello world , developer programmer, calling from company1


 */




class Company
{
    message = "Hello world , developer programmer";

    getInfo()
    {
        console.log(this.message);
    }
}



var c = new Company();


const button_element = document.getElementById("decorator_id")!;

button_element.addEventListener("click",function()
{
    c.getInfo();
})

 



//Video 64 Implement Property validation decorators 

interface Course_interface
{
    [property : string] : {
        [validationProperty : string] : string[]
    }
   
}



class Course 
{
    constructor(public title : string , public price : number) {}

}

const form_element = document.getElementById("form_course")!;

form_element.addEventListener("click",function(eventCustomObject) //Course {title: 'Java Programming Language', price: 23}

{
          eventCustomObject.preventDefault();  
        let title_element = document.getElementById("Course_title")  as HTMLInputElement;
        let price_element = <HTMLInputElement>document.getElementById("Course_price");

        let button_element_course = document.getElementById("form_course_button") as HTMLInputElement;

        const title_element_value = title_element.value;
        const price_element_value = parseInt(price_element.value);


        var c_form = new Course(title_element_value,price_element_value);
        console.log(c_form);

})



