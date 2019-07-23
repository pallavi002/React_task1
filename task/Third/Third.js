class character{
    constructor(firstName,lastName,  yearsOfExp,noOfSeason,latestEp,noOfAwards,age,height,weight)
    {
        this.firstName=firstName,
        this.lastName=lastName,
        this.yearsOfExp=yearsOfExp,
        this.noOfSeason=noOfSeason,
        this.latestEp=latestEp,
        this.noOfAwards=noOfAwards,
        this.age=age,
        this.height=height,
        this.weight=weight
        
    }
}
let c=new character("Sophie", "Turner", "9", "8" , "The iron throne" , "5" , "25" , "6'2" , '50');
console.log(c);