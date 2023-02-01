export interface NameSpace_app
    {
        title: string,
        description : string
    }

export class School implements NameSpace_app {

        title: string;
        description : string
       
        constructor() {
            this.description = "School started few years ago";
            this.title = "Primary School"
        }

        showDisplay()
        {
            console.log("output from show display method");
        }
    }

   
     

