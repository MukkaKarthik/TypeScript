namespace Learning_Namespaces
{

    export class Logs
    {

        constructor()
        {
            this.Export_consoleLogs();
        }


          Export_consoleLogs()
        {
           console.log("Using namespaces so that they are available in other files");
        }
    }
  

}




    export class Product {

      title: string;
      description: string;

      constructor(t: string, d: string) {
        this.title = t;
        this.description = d;
      }

      getInformation() {
        return [this.title, this.description];
      }
    }





