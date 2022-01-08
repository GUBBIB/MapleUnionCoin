
function print() {
    let a = Number(document.getElementById("input").value);
    let result;

    
    result = a*8.64/10000000;

    document.getElementById("result").innerHTML = "1일 : " + result + "개<br>7일 : " + Math.floor(result)*7 + "개";
    
}