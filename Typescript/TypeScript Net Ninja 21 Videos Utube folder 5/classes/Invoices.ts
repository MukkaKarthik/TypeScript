//12th Video - classes
export class Invoice_class
{
   readonly client : string = "Print Something";
    private details : string;
    public amount : number 

    //readOnly :-Value can be written only during initialization but can't be changed inside or outside class
    //private:- Value can be modified inside class but not outside class 
    //public :- Value can be modified everywhere inside and outside class 


        constructor(c: string , d: string , a: number)
        {
                this.client = c;
                this.details = d;
                this.amount = a;
        }



    //Access Modifiers can also be written this way

  /*   constructor(readonly client : string = "Print Something" , private details : string, public amount : number)
    {

    }
 */

        printStatement()
        {
            return `${this.client} owes ${this.amount} for the reason ${this.details}`
        }

}

