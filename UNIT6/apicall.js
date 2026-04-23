"use strict";
async function APICalling() {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    let data = await result.json();
    return data;
}
APICalling().then((d) => {
    console.log(d.completed);
    console.log(d.id);
    console.log(d.title);
    console.log(d.userId);
});
console.log(APICalling());
