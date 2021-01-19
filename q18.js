function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    let text=0;
    let arr=JSON.parse(input);
    const index=Number(input2);
    for(let i=0; i<arr.length; i++){
        if(arr[i]=== index){
            text = i;
            break;
        }

    }
    out = text;
    output.innerText = out;
} 