function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    const arr = JSON.parse(input);
    out= ({}).toString.call(arr) === '[object Array]' ? 'true' : 'false';        
    output.innerText = out;
}