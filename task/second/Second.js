let a={
    firstName:"Sophie",
    lastName:"Turner",
    yearsOfExp:"9",
    noOfSeason:"8",
    latestEp:"The Iron Throne",
    noOfAwards:"6",
    age:"25",
    height:"6'2",
    weight:"50",
    getFullName() {
    return this.firstName + ' ' + this.lastName;
    },
    getBio() {
        return this.firstName + ' ' + this.lastName +' '+ 'years of experience:=' + this.yearsOfExp + ' '+ 'No of seasons= '+ this.noOfSeason + ' '+  'Latest Episode ='+ this.latestEp + ' '+  'No of awards= '+' '+  this.noOfAwards;
        },
    getFeatures(){
        return "age is=" + this.age + " " + "height is=" + this.height + " " +"weight is="+ this.weight;
    }
};
console.log(a.getFullName());
console.log(a.getBio());
console.log(a.getFeatures());
console.log("First Name = " + a.firstName);
console.log("No. of movies=" + a.noOfSeason );
console.log("Years of experience=" + a.yearsOfExp );

let b={
    firstName:"Tony",
    lastName:"Stark",
    yearsOfExp:"12",
    noOfSeason:"7",
    latestEp:"End Game",
    noOfAwards:"8",
    age:"31",
    height:"6'4",
    weight:"55",
};

let c={...a,...b};
console.log(c);