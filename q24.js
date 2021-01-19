function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let arr = eval(input);
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        if((!Number.isNaN(arr[i])) && (arr[i]!==null) && (arr[i]!==undefined) && (arr!==false) && (arr[i]!== 0) && (arr[i]!== "\"\"")){
            newArr.push(arr[i]);
        }
    }
    out = newArr;
    output.innerText = out;
} 