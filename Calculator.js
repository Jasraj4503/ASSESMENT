// Selector
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

// EventListener
keys.forEach(key=>{
    key.addEventListener("click",calculator);
});

function calculator() {
    let buttonText = this.innerText;
    if(buttonText === "DEL"){
        output.innerText = "";
        result.innerText = "0";
        result.style.animation = "";
        output.style.animation = "";
        return;
    }
    if(buttonText === "="){
        result.innerText = eval(output.innerText);
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
    }
    else{
        output.textContent += buttonText;
        return;
    }
}