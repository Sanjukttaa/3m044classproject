import { avg, bigger } from "./logic";
let student = {
    name: "Sanjukta",
    age: 19,
    course: "React",
};
const {name, age, course} = student;
console.log(name,age,course);
// console.log(avg(4,6,8,9,6));
let arr1=[3,7,9,4,5]
console.log(avg(...arr1)); //using spread operator
console.log(bigger(2,7,8,5,6));