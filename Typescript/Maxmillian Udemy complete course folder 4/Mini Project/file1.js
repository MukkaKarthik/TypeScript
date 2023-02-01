"use strict";
//declaring variables globally and using them 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log("This is coming from file1");
console.log(GLOBAL);
//import {Product} from "./interfaces"
//var p  = new Product("google Company","Service Based company");
//console.log(p.getInformation());
var Learning_Namespaces;
(function (Learning_Namespaces) {
    console.log("Practising mini project");
    //this class Manages the state of the application 
    //One project state Management
    var emptyProject = /** @class */ (function () {
        function emptyProject() {
            this.hello = "";
            this.yesWorld = ["WordWritten already"];
        }
        emptyProject.prototype.methodPrint = function () {
            this.hello = "Coming from print value";
            this.yesWorld.push("asTrue");
        };
        return emptyProject;
    }());
    var ProjectState = /** @class */ (function () {
        function ProjectState() {
            this.listeners = [];
            this.projects = [];
        }
        ProjectState.getInstance = function () {
            if (this.instance) {
                return this.instance;
            }
            else {
                this.instance = new ProjectState();
            }
        };
        ProjectState.prototype.addListener = function (listenerFn) {
            this.listeners.push(listenerFn);
        };
        ProjectState.prototype.addProject = function (title, description, people) {
            var newProject = {
                id: Math.random().toString(),
                title: title,
                description: description,
                people: people
            };
            this.projects.push(newProject);
            for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
                var listenerFn = _a[_i];
                listenerFn(this.projects.slice());
            }
        };
        return ProjectState;
    }());
    var ProjectState_variable = ProjectState.getInstance();
    function ValidateCommon(validateInput) {
        var isValid = true;
        if (validateInput.requiredValue) {
            isValid = isValid && validateInput.requiredValue.toString().trim().length != 0;
        }
        return isValid;
    }
    //AutoBind decorator
    function AutoBind_decorator(target, MethodName, descriptor) {
        var collect_OriginalMethod = descriptor.value;
        var adjusted_descriptor = {
            enumerable: true,
            configurable: true,
            get: function () {
                var BoundFunction = collect_OriginalMethod.bind(this);
                return BoundFunction;
            }
        };
        return adjusted_descriptor;
    }
    //responsible for rendering project list names 
    var ProjectList = /** @class */ (function () {
        function ProjectList(type) {
            var _this = this;
            this.type = type;
            this.templateElement = document.getElementById("project-list");
            this.HostElement = document.getElementById("app"); //host element indicates where we want to render template element
            //till here we have learnt how to access elements
            //let's go with rendering elements
            this.assignProjects = [];
            var importedNote = document.importNode(this.templateElement.content, true);
            this.element = importedNote.firstElementChild;
            this.element.id = type + "-projects"; //for enhancing user experience , it will introduea box
            ProjectState_variable === null || ProjectState_variable === void 0 ? void 0 : ProjectState_variable.addListener(function (projects) {
                _this.assignProjects = projects;
            });
            this.attach();
            this.renderContent_h2tag();
            this.renderProjects();
        }
        ProjectList.prototype.renderProjects = function () {
            var listElement = document.getElementById(this.type + "-projects-list");
            for (var _i = 0, _a = this.assignProjects; _i < _a.length; _i++) {
                var prjItem = _a[_i];
                var listItem = document.getElementById("li");
                listItem.textContent = prjItem.title;
                listElement.appendChild(listItem);
            }
        };
        ProjectList.prototype.renderContent_h2tag = function () {
            var ListId = this.type + "-projects-list";
            this.element.querySelector("ul").id = ListId; //! is used as we know only one is present and it won't throw as null
            this.element.querySelector("h2").textContent = this.type.toUpperCase() + " Projects";
        };
        ProjectList.prototype.attach = function () {
            this.HostElement.insertAdjacentElement("beforeend", this.element);
        };
        return ProjectList;
    }());
    //responsible for rendering form in div sections and passing them to console logs
    var ProjectInput = /** @class */ (function () {
        function ProjectInput() {
            // if not sure , use validation and check
            // const catchTemplate = document.getElementById("project-input")
            // if (catchTemplate) {
            //     this.templateElement = catchTemplate    
            // }
            this.templateElement = document.getElementById("project-input");
            this.HostElement = document.getElementById("app"); //host element indicates where we want to render template element
            //till here we have learnt how to access elements
            //let's go with rendering elements
            var importedNote = document.importNode(this.templateElement.content, true);
            this.element = importedNote.firstElementChild;
            this.element.id = "user-input"; //for enhancing user experience , it will introduce a box
            this.titleInputField = this.element.querySelector("#title");
            this.descriptionInputField = this.element.querySelector("#description");
            this.PeopleInputField = this.element.querySelector("#people");
            this.configure();
            this.attach();
        }
        ProjectInput.prototype.gatherUserInput = function () {
            var entered_titleValue = this.titleInputField.value;
            var entered_DescriptionValue = this.descriptionInputField.value;
            var entered_PersonValue = this.PeopleInputField.value;
            //trim() will remove extra spaces from collected value 
            //this if loop is ot scalable
            if (entered_titleValue.trim().length == 0 || entered_DescriptionValue.trim().length == 0 || entered_PersonValue.trim().length == 0) {
                alert("Invalid input , please try again");
                //return; it will not throw an error
            }
            else {
                return [entered_titleValue, entered_DescriptionValue, +entered_PersonValue];
            }
        };
        ProjectInput.prototype.clearValues = function () {
            this.titleInputField.value = "";
            this.descriptionInputField.value = "";
            this.PeopleInputField.value = "";
        };
        ProjectInput.prototype.SubmitHandler = function (e) {
            e.preventDefault(); //to prevent HTTP request to the server , which we don't want 
            // console.log("Title = " + this.titleInputField.value);
            // console.log("Description = " + this.descriptionInputField.value);
            // console.log("People = " + this.PeopleInputField.value);
            var userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                var title_const = userInput[0], description_const = userInput[1], people_const = userInput[2];
                ProjectState_variable === null || ProjectState_variable === void 0 ? void 0 : ProjectState_variable.addProject(title_const, description_const, people_const);
                console.log("Title = " + title_const + "\nDescription = " + description_const + "\nPeople = " + people_const);
            }
            this.clearValues();
        };
        ProjectInput.prototype.configure = function () {
            //  this.element.addEventListener("submit",this.SubmitHandler.bind(this));
            //removing bind and using decorators
            this.element.addEventListener("submit", this.SubmitHandler);
        };
        ProjectInput.prototype.attach = function () {
            this.HostElement.insertAdjacentElement("afterbegin", this.element);
        };
        __decorate([
            AutoBind_decorator
        ], ProjectInput.prototype, "SubmitHandler", null);
        return ProjectInput;
    }());
    var projectin = new ProjectInput();
    var ActiveProjectList = new ProjectList("active");
    var finishedProjectList = new ProjectList("finished");
})(Learning_Namespaces || (Learning_Namespaces = {}));
