//declaring variables globally and using them 

console.log("This is coming from file1");
declare var GLOBAL : string;

console.log(GLOBAL);


//import {Product} from "./interfaces"

//var p  = new Product("google Company","Service Based company");
//console.log(p.getInformation());

namespace Learning_Namespaces
{

    console.log("Practising mini project");


//this class Manages the state of the application 
//One project state Management


class emptyProject 
{
    private hello : string = "";

    public yesWorld : Array<string> = ["WordWritten already"];

    methodPrint()
    {
        this.hello = "Coming from print value";
        this.yesWorld.push("asTrue");

    }
}

class ProjectState
{


    private listeners : any[] = [];

    private projects : any = [];

    private static instance: ProjectState;

    private constructor()
    {
    


    }

    static getInstance()
    {
        if (this.instance) {
            return this.instance;
        }
        else
        {
            this.instance = new ProjectState();
        }
    }

    addListener(listenerFn : Function)
    {
            this.listeners.push(listenerFn);
    }

    public addProject(title : string , description : string , people : number)
    {
        const newProject = 
        {
            id : Math.random().toString(),
            title : title,
            description : description,
            people : people

        };

        this.projects.push(newProject);

        for(const listenerFn of this.listeners)
         {
                listenerFn(this.projects.slice());
         }
    
}


}



var ProjectState_variable = ProjectState.getInstance()


interface Validation_perform
{
    Min_lengthOfString?: number;
    Max_lengthOfString? : number;

    MinNumber? : number;
    MaxNumber? : number;

    requiredValue? : boolean;
    collectedStringNumberValue? : string | number
}


function ValidateCommon(validateInput : Validation_perform)
{
    let isValid = true;

    if (validateInput.requiredValue) {
        
        isValid = isValid && validateInput.requiredValue.toString().trim().length != 0;
    }
    return isValid;

 
}


//AutoBind decorator
function AutoBind_decorator(target : string | any,MethodName : string , descriptor : PropertyDescriptor) 
{
    const collect_OriginalMethod = descriptor.value;

    const adjusted_descriptor : PropertyDescriptor = 
    {
        enumerable : true,
        configurable : true,
        

        get()
        {
            const BoundFunction = collect_OriginalMethod.bind(this);
            return BoundFunction;
        }
    }
    return adjusted_descriptor;
}



//responsible for rendering project list names 
class ProjectList
{
    templateElement : HTMLTemplateElement;
    HostElement: HTMLDivElement;
    element : HTMLElement;
    assignProjects : any[];

   
    constructor(private type : "active" | "finished")
    {
        this.templateElement = document.getElementById("project-list")! as HTMLTemplateElement;
         
        this.HostElement = document.getElementById("app")! as HTMLDivElement//host element indicates where we want to render template element
    
            //till here we have learnt how to access elements

            //let's go with rendering elements

            this.assignProjects = [];

            const importedNote = document.importNode(this.templateElement.content,true);



            this.element = importedNote.firstElementChild as HTMLElement;
            this.element.id = `${type}-projects`;//for enhancing user experience , it will introduea box

            ProjectState_variable?.addListener((projects: any[]) => {
                this.assignProjects = projects;
            });

            this.attach();
            this.renderContent_h2tag();
            this.renderProjects();


    }


    private renderProjects()
    {
        const listElement = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;

        for(const prjItem of this.assignProjects)
        {
            const listItem = document.getElementById("li")! as HTMLLIElement ;
            listItem.textContent = prjItem.title;
            listElement.appendChild(listItem);
        }

    }

    private renderContent_h2tag()
    {
        const ListId = `${this.type}-projects-list`;
        this.element.querySelector("ul")!.id = ListId;//! is used as we know only one is present and it won't throw as null
        this.element.querySelector("h2")!.textContent = this.type.toUpperCase() + " Projects";
    }


    private attach()
    {
        this.HostElement.insertAdjacentElement("beforeend",this.element);
    }
}



//responsible for rendering form in div sections and passing them to console logs
class ProjectInput
{
    templateElement : HTMLTemplateElement;
    HostElement: HTMLDivElement;
    element : HTMLFormElement;

    titleInputField : HTMLInputElement;
    descriptionInputField : HTMLInputElement;
    PeopleInputField : HTMLInputElement


    constructor()
    {


        // if not sure , use validation and check
        // const catchTemplate = document.getElementById("project-input")
     
        // if (catchTemplate) {
        //     this.templateElement = catchTemplate    
        // }

        this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
         
        this.HostElement = document.getElementById("app")! as HTMLDivElement//host element indicates where we want to render template element
    
            //till here we have learnt how to access elements

            //let's go with rendering elements

            

            const importedNote = document.importNode(this.templateElement.content,true);

            this.element = importedNote.firstElementChild as HTMLFormElement;
            this.element.id = "user-input";//for enhancing user experience , it will introduce a box

            this.titleInputField = this.element.querySelector("#title") as HTMLInputElement;
            this.descriptionInputField = this.element.querySelector("#description") as HTMLInputElement;
            this.PeopleInputField = this.element.querySelector("#people") as HTMLInputElement;



            this.configure();
            this.attach();

    }

    private gatherUserInput() : [string,string,number] | void
    {
            const entered_titleValue = this.titleInputField.value;
            const entered_DescriptionValue = this.descriptionInputField.value;
            const entered_PersonValue = this.PeopleInputField.value;

            //trim() will remove extra spaces from collected value 
            //this if loop is ot scalable
            if (entered_titleValue.trim().length == 0 || entered_DescriptionValue.trim().length == 0 || entered_PersonValue.trim().length == 0) {
                    alert("Invalid input , please try again");
                    //return; it will not throw an error
            }
            else
            {
                return [entered_titleValue,entered_DescriptionValue,+entered_PersonValue];
            }
    }


    private clearValues()
    {
        this.titleInputField.value = "";
        this.descriptionInputField.value = "";
        this.PeopleInputField.value = "";
    }


 




    @AutoBind_decorator
    private SubmitHandler(e : Event)
    {
        e.preventDefault();//to prevent HTTP request to the server , which we don't want 
        // console.log("Title = " + this.titleInputField.value);
        // console.log("Description = " + this.descriptionInputField.value);
        // console.log("People = " + this.PeopleInputField.value);

        const userInput = this.gatherUserInput();

        if (Array.isArray(userInput)) {
            const [title_const,description_const,people_const] = userInput;
            ProjectState_variable?.addProject(title_const,description_const,people_const);
            console.log("Title = " + title_const +  "\nDescription = " + description_const + "\nPeople = " +people_const);
        }

        this.clearValues();

    }

    private configure() {
      //  this.element.addEventListener("submit",this.SubmitHandler.bind(this));
     //removing bind and using decorators
      this.element.addEventListener("submit",this.SubmitHandler);
    }
           
    private attach() {
              this.HostElement.insertAdjacentElement("afterbegin",this.element);
            }

}

const projectin = new ProjectInput();
const ActiveProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");


}










