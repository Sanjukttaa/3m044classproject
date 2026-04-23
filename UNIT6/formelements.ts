let submit = document.getElementById("submit") as HTMLButtonElement;

submit.addEventListener("click", () =>{
    let t1=document.getElementById("text1") as HTMLInputElement;
    console.log(t1.value);
    alert("Form submitted");
});

type Pizza={
    size:string;
    price:number;
}

function orderPizza(p:Pizza){
    console.log(`You have ordered a ${p.size} pizza for $${p.price}`);
}
orderPizza({size:"Large",price:15});