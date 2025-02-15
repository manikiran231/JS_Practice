
function gen() {
    let input = document.getElementById("input");
    let output = document.getElementById("res");
    let a5 = "!@#$%^&*()_+-={}:<>?1234567890qwertyuioplkjhgfdsazxcvbnmWERTYUIOPLMNBVCXZADFGHJK";

    let n = Number(input.value);
    let res = "";
    if(n<1){
        res = "Please enter a positive integer.";
    }
    for (let i = 0; i < n; i++) {
        let randind = Math.floor(Math.random() * a5.length);
        res += a5[randind];
    }
    output.innerText = res;
}
