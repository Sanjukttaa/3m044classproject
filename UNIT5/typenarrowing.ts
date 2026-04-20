export{}

// typeof Narrowing
function takeInput(val:string|number){
    if(typeof val==="string"){
        return val.toUpperCase();
    }
    return val*4;
}
console.log(takeInput(11));
console.log(takeInput("Sanjukta"));

// Instanceof Narrowing

class Reading{
    read(){
        console.log("I am reading a book");
    }
}
class Playing{
    play(){
        console.log("I am playing a game");
    }
}

function chooseHobby(hobby:Reading|Playing){
    if(hobby instanceof Reading){
        hobby.read();
    }else{
        hobby.play();
    }
}

let h1=new Reading();
chooseHobby(h1);

// Truthiness Narrowing

function takeNullValue(val:string|null){
    if(!val){
        console.log("Please enter a string");
    }
    else{
        console.log(val);
    }
}
takeNullValue("");

// in operator Narrowing

type Reading1={
    read():string
}
type Playing1={
    play():void
}

function checkType(o:Reading1|Playing1){
    if("read" in o){
        o.read();
    }
    else{
        o.play();
    }
}
let r1:Reading1={
    read(){
        return "I am reading a journal";
    }
}
let r2:Playing1={
    play(){
        return "I am playing a game";
    }
}