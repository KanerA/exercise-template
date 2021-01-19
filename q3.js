function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    const arr = JSON.parse(input);
    let newArr=[];
    if(input2 === ""){
        out= arr[0];
    }
    else if(Number(input2)<0){
        out= "[]";
    }
    else{
        for(let i=0; i<input2; i++){
            newArr.push(arr[i]);
        }
    out= newArr;
    }

    


            
    output.innerText = out;
}