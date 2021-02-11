export class testmodule
{
    constructor(private x: number, public y: number)
    {

    }

    get X()
    {
        return this.x;
    }

    set X(value: number)
    {
        if(value>0)
        {
            this.x = value;
        }
    }


    testfun()
    {
        console.log(`x is ${this.x}.`);
        console.log(`x is ${this.y}.`);
    }

}