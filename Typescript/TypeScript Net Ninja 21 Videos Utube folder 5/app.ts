console.log("testing app.ts file under folder now changed ");




//10th Video
var anchorTag = document.querySelector('a') as HTMLAnchorElement;
console.log("Displaying anchor tag details = ");
console.log(anchorTag.href);



// //11th Video


//DOM and Type Casting 
//var form = document.querySelector('form'); //typescript knows it is an HTML element
var form1 = document.querySelector('.new-item-form') as HTMLFormElement;//typescript doesn't exactly know it is an HTML element as it a class which can apply across any tag
console.log(form1.children);

/* Output :-
HTMLCollection(5) [div.field, div.field, div.field, div.field, button]
0: div.field
1: div.field
2: div.field
3: div.field
4: button
length: 5
[[Prototype]]: HTMLCollection
 */


const type =  document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

console.log("Displaying query selector elements");
form1.addEventListener("submit",function(e : Event)
{
    e.preventDefault();

    console.log(type);
    console.log(tofrom);
    console.log(details);
    console.log(amount);


    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.value);

});



//Executing below lines using imports and exports 

import {Invoice_class} from "./classes/Invoices.js"

const iOne = new Invoice_class("Equifax","Banking sector company testing for imports",67);
const iTwo = new Invoice_class("Microsoft","Product based company testing for exports",367);
console.log(iOne);//Invoice {client: 'Equifax', details: 'Banking sector company', amount: 67}
console.log(iTwo);//Invoice {client: 'Microsoft', details: 'Product based company', amount: 367}


let InVoices : Invoice_class[]  = [];
InVoices.push(iOne);
InVoices.push(iTwo);
console.log(InVoices);//[Invoice_class, Invoice_class]


// 0: Invoice_class {client: 'Equifax', details: 'Banking sector company', amount: 67}
// 1: Invoice_class {client: 'Microsoft', details: 'Product based company', amount: 367}
// length: 2

//iOne.client = "Equifax changed to ServiceNow UK"; :- This won't work as client is a read only property 
iTwo.amount = 1000;
console.log(InVoices);

//0: Invoice_class {client: 'Equifax changed to ServiceNow UK', details: 'Banking sector company', amount: 67}
//1: Invoice_class {client: 'Microsoft', details: 'Product based company', amount: 1000}


interface IsPerson
{
    name : string;
    age : number;
    speak(a: string) : void;
    spend(a : number) : number;
}

const Male : IsPerson = //by declaring this way , it enforces rules on variables
{
    name : "Rohith",
    age : 23,
    speak(text : string)
    {
            console.log(text + "is present");
    },
    spend (a : number)
    {
       return a*10;
    }
}

console.log(Male);
Male.speak("Student");



//Video 16 Interfaces with classes 

import {HasFormatter} from "./classes/interfaces.js"

class DataExtraction implements HasFormatter
{
    NoofBytes = 23;

    dataFormat_method(a : number)
    {
        console.log("Value received from dataFormat_method = ");
        return a*10;
    }
}

let de = new DataExtraction();
console.log(de.dataFormat_method(10));//Value received from dataFormat_method = 
//100



//Video 18 Generics 


interface ReferenceBook<T>
{
    PagesPresent : number,
    BookName : string,
    indexPresent : boolean,
    topics : T
}

//Changing data types in topics property dynamically
//below line will throw an error as string is being passed to topics property but object is being passed
//let r1 : ReferenceBook<string> = {PagesPresent : 23,BookName : "Bibilograpghy",indexPresent : true , topics : {name : "Chapter 1" , contentPages : 34}};

//Now since only string is passed , hence we have pass only string data type in the topics object

//Now let's say if we want topics object to be a specific type , then we can use generics
let r1 : ReferenceBook<string> = {PagesPresent : 23,BookName : "Bibilograpghy",indexPresent : true , topics : "Chapter 1"};

let r2 : ReferenceBook<number> = {PagesPresent : 23,BookName : "Bibilograpghy",indexPresent : true , topics : 23};

let r3 : ReferenceBook<boolean> = {PagesPresent : 23,BookName : "Bibilograpghy",indexPresent : true , topics : false};

let r4 : ReferenceBook<object> = {PagesPresent : 23,BookName : "Bibilograpghy",indexPresent : true , topics : {name : "Chapter 1", pagesRequired : true}};




console.log(r1);//{PagesPresent: 23, BookName: 'Bibilograpghy', indexPresent: true, topics: 'Chapter 1'}
console.log(r2);//{PagesPresent: 23, BookName: 'Bibilograpghy', indexPresent: true, topics: 23}
console.log(r3);//{PagesPresent: 23, BookName: 'Bibilograpghy', indexPresent: true, topics: false}
console.log(r4);//{PagesPresent: 23, BookName: 'Bibilograpghy', indexPresent: true, topics: {…}}



enum RememberFilmType {"Patriotic Movie","Romantic Drama","Comedy Thriller","Horror Movie"}


interface films
{
    FilmIndexNo : number,
    filmName: string,
    MovieType : RememberFilmType
}

let f1 : films = {FilmIndexNo :45 , filmName : "Chak De India",MovieType : RememberFilmType["Patriotic Movie"]};
let f2 : films = {FilmIndexNo :23, filmName :"Interstellar",MovieType : RememberFilmType["Horror Movie"]};
let f3 : films = {FilmIndexNo : 99, filmName : "Inception",MovieType : RememberFilmType["Romantic Drama"]};
let f4 : films = {FilmIndexNo :123, filmName : "Mission Impossible",MovieType : RememberFilmType["Comedy Thriller"]};

//By doing this way it will be an easy  job to remember all films

//observe output properly for movietype , it is giving index no from enums 
console.log(f1);//{FilmIndexNo: 45, filmName: 'Chak De India', MovieType: 0}

console.log(f2);
// {FilmIndexNo: 23, filmName: 'Interstellar', MovieType: 3}
// FilmIndexNo: 23
// MovieType: 3
// filmName: "Interstellar"


console.log(f3);
// {FilmIndexNo: 99, filmName: 'Inception', MovieType: 1}
// FilmIndexNo: 99
// MovieType: 1
// filmName: "Inception"


console.log(f4); 
// {FilmIndexNo: 123, filmName: 'Mission Impossible', MovieType: 2}
// FilmIndexNo: 123
// MovieType: 2
// filmName: "Mission Impossible" 

//Now we need not remember what kind of film it was 