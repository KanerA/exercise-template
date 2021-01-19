function leapYear(year){
    if(year%4===0){
        return true;
    }

    else {
        return false;
    }
}
function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";
    let limit=Math.max(Number(input), Number(input2));
    let bottom=Math.min(Number(input), Number(input2));
    let answer="";
    for(let i=bottom; i<=limit; i++){
        if(leapYear(bottom)){
            answer+= bottom + ",";
        }
        bottom++;
    }
    out= answer;
    output.innerText = out;
}   
