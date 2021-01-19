function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let array1= JSON.parse(input);
    let array2= JSON.parse(input2);
    let out = "";
    let arrNew=array1.concat(array2);
    arrNew.sort(function(a, b){return a-b});
   let counter=0;
   for(let i=0; i< arrNew.length; i++){
       if(arrNew[i]=== arrNew[i+1]){
           arrNew.splice(i,1);
           i--;
       }
   }
    out= arrNew;
    output.innerText = out;
} 
