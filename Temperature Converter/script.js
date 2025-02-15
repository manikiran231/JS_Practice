
function con(){
    let t=document.getElementById("temp");
        let ctf=document.getElementById("cf");
        let ftc=document.getElementById("fc");
        let res=document.getElementById("ans");
        let tem = parseInt(t.value);
    if(ctf.checked){
        let mtem=(tem)*9/5+32;
        res.textContent=Number(mtem)+ " °F";    

    }
    else if(ftc.checked){
        let mtem=(tem-32)*5/9;
        res.textContent=Number(mtem)+" °C";

    }
}

