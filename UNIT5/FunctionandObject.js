export {};
function greet() {
    console.log("Front End");
}
greet();
function greet1() {
    return "Hello";
}
console.log(greet1());
function add(a, b) {
    return a + b;
}
let result = add(5, 7);
console.log("Sum:", result);
let person1 = {
    name: "Sanjukta",
    age: 20,
    city: "jalpaiguri"
};
let person2 = {
    name: "Supriya",
    age: 19,
    city: "darbhanga"
};
let person3 = {
    name: "Tanishka",
    age: 20,
    city: "gohana"
};
console.log(person1);
console.log(person2);
console.log(person3);
let product1 = {
    name: "sunscream",
    price: 300,
    quantity: 1
};
let product2 = {
    name: "facesheet",
    price: 50,
    quantity: 1
};
let product3 = {
    name: "bodylotion",
    price: 300,
    quantity: 2
};
function calculatetotalprice(price, quantity) {
    return price * quantity;
}
console.log("Total Price: ", calculatetotalprice(product3.price, product3.quantity) + calculatetotalprice(product2.price, product2.quantity) + calculatetotalprice(product1.price, product1.quantity));
// using &(and) = both should be display
let student = {
    name: "Sanjukta",
    age: 19,
    city: "Jalpaiguri",
    pin: 735101,
};
let personAge = 60;
console.log(personAge);
let personName = "aman";
console.log(personName);
const newStatus = "success";
console.log(newStatus);
let stuGrade = "B";
console.log(stuGrade);
function updateStatus(n) {
    if (typeof n == "string") {
        return n.toUpperCase();
    }
    else if (typeof n == "number") {
        return n * 3;
    }
    else {
        return "Error";
    }
}
console.log(updateStatus(5));
//# sourceMappingURL=FunctionandObject.js.map