function run() {
    const prop = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    let arr=eval(input2);
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i].hasOwnProperty(prop)){
            newArr.push(arr[i][prop]);
        }
    }
    out = newArr;
    output.innerText = out;
} 