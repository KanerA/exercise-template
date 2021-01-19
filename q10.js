function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let text="";
    let arr = JSON.parse(input);
    for(let i=0; i<arr.length; i++){
        text += "row"+ i;
        for(let j=0; j<arr[i].length; j++){
            text += '\n';
            text += arr[i][j];
        }
        text += "\n";
    }
    out = text;


    output.innerText = out;
} 