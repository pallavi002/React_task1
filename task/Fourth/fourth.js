class Animals
{
    constructor()
    {
            this.NoOfLegs=4;
    }
}

class Dogs extends Animals
{
    constructor()
    {
        super();
        this.voice="Barks";
        this.color="Brown";
    }
}
let a= new Dogs();
console.log(a);