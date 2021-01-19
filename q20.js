function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let arr= JSON.parse(input);
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        let counter=0;
        let pend=arr[i];
        for(let j=0; j<arr.length; j++){
            if(arr[i]===arr[j]){
                counter++;
            }
        }
        if(counter>1){
            let isTrue= false;
            for(let k=0; k < newArr.length; k++){
                if(pend === newArr[k]){
                    isTrue= true;
                }
            }
            if(!isTrue){
                newArr.push(arr[i]);
        }
        }
    }
    out= newArr;
    output.innerText = out;
} 