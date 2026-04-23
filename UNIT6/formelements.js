"use strict";
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    let t1 = document.getElementById("text1");
    console.log(t1.value);
    alert("Form submitted");
});
