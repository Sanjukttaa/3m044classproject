
export{}  //This will make the file local
let age:number = 20;
console.log(age);

let name:String="Sanjukta";
console.log(name);

let isActive:boolean= true;
console.log(isActive);

let nums:number[]=[3,4,5,6,7]
console.log(nums);

let section = "3m044";
// section = 70;
console.log(section);

let value1;
value1="section";
value1=true;
console.log(value1);

let arraynum:number[]=[1,2,3,4,5];
console.log(arraynum);

let arraystr:(string|number|boolean)[]=["a","b",1,false];
console.log(arraystr);

let arraystr1:string[];
arraystr1=["1","s"];
console.log(arraystr1);

for(let i=0;i<arraystr1.length;i++){
    console.log(i+" "+arraystr1[i]);
}
