export{}

function greet():void{
    console.log("Front End");
}
greet();

function greet1():string{
    return "Hello";
}
console.log(greet1());


function add(a: number, b: number): number {
    return a + b;
}
let result = add(5, 7);
console.log("Sum:", result);


let person1:PersonType={
    name:"Sanjukta",
    age:20,
    city:"jalpaiguri"
}

let person2:PersonType ={
    name:"Supriya",
    age:19,
    city:"darbhanga"
}

let person3:PersonType ={
    name:"Tanishka",
    age:20,
    city:"gohana"
}

type PersonType={
    name:string;
    age:number;
    city:string
}

console.log(person1);
console.log(person2);
console.log(person3);

let product1:ProductType ={
    name:"sunscream",
    price:300,
    quantity:1

}
let product2:ProductType ={
    name:"facesheet",
    price:50,
    quantity:1

}
let product3:ProductType ={
    name:"bodylotion",
    price:300,
    quantity:2

}

type ProductType={
    name:string;
    price:number;
    quantity:number
}

function calculatetotalprice(price:number, quantity:number): number{
    return price*quantity;
}
console.log("Total Price: ",calculatetotalprice(product3.price, product3.quantity)+calculatetotalprice(product2.price,product2.quantity)+calculatetotalprice(product1.price,product1.quantity))


type stu={
    name:string;
    age:number;
}

type stuAdd={
    city:string;
    state:string;
    pin:number;
}


type stuCombine= stu | stuAdd;   //using |(or) = atleast one type should be fully display
                                // using &(and) = both should be display
let student:stuCombine={
    name:"Sanjukta",
    age:19,
    city:"Jalpaiguri",
    pin:735101,

}