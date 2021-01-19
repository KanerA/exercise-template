function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let arr = JSON.parse(input);
    let sortedArr=[];
    OgLen=arr.length;
    while(arr.length!==0){
        let num=arrBig(arr);  
        sortedArr.unshift(arr[num]);
        arr.splice(num,1);
    }
    out = sortedArr;
    output.innerText = out;
} 

function arrBig(arr) {
    let check=arr[0];
    let index=0;
    for(let i=0; i<arr.length; i++){
            if(check< arr[i]){
                check=arr[i];
                index= i;
            }
           
    }
    return index;
}