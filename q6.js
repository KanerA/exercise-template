function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let newNum="";
    for(let i=0; i<input.length; i++){
        if(Number(input[i]) %2===0 && (Number(input[i+1]))%2 === 0){
                newNum += input[i] + "-";
            }
        else{
            newNum+= input[i];
        }
        }
        out= newNum;
    output.innerText = out;
} 