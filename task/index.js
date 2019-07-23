let a=[0,1,2,3,4,5,6,7,8,9];
let [first,sec,third,fourth,fifth,...remain]=a;
console.log(fifth);   //printing 5th element of array

a.push(10,11,12,13,14,15,16,17,18,19,20);    //inserting 10-20 in array a
console.log(a);

a.pop();      //removing last element from array
console.log(a);

a.shift();    //removing first element from array
console.log(a);

a.unshift(8);    //add element in beginning of array
console.log(a);

let b=a.indexOf(17); //find value at index 17
console.log('index of 17 is: ' + b);

a.splice(a.indexOf(11));
console.log(a);

let d=[2,3,4,5,6];
let c=d.a;
console.log(c);

let e=[2,4,8];

let f=[...a,...d,...e];    //merging arrays
console.log(f);
