type User = {
    name: string;
    age: number;
};

type Item = {
    name: string;
    price: number;
};

function placeOrder(user: User, items: Item[]) {
    let total = 0;
    for (let item of items) {
        total += item.price;
    }
    return { username: user.name, totalAmount: total, status: "Order Placed" };
}

const user: User = { name: "Rahul", age: 22 };
const items: Item[] = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 150 }
];

const order = placeOrder(user, items);
console.log(order.totalAmount.toFixed(2));