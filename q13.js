
const arr=[];
let i=0;    

function display() {
    // const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = [];
    out= arr;
    output.innerText = out;
} 

function addToArr(){
    arr.push("Element "+ i + "= "+document.getElementById("input").value+"\n");
    i++;
}
