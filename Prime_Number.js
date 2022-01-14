let total = " ";
let i;
for(i=2;i<10000;i++){
    if (i===2){
        total += i + ","
    }
    else if(checkPrime(i)){
        total += i + ", "
    }
}
function checkPrime(){
    let n;
    let check = true
    for(n=2;n<=Math.sqrt(i);n++){
        if (i%n==0){
            check = false
            break;
        }
    }
    return check;
}
document.getElementById("result").innerText= total