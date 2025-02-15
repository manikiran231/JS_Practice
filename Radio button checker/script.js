let chb=document.getElementById("cb");
let rad1=document.getElementById("r1");
let rad2=document.getElementById("r2");
let rad3=document.getElementById("r3");
let o1=document.getElementById("ci");
let o2=document.getElementById("si");
let but1=document.getElementById("b1");
but1.onclick=function(){
    if(chb.checked){
        o1.textContent="Check box clicked";
    }
    else{
        o1.textContent="Check box not clicked";
    }
    if(rad1.checked){
        o2.textContent="Radio 1 clicked";
    }
    else if(rad2.checked){
        o2.textContent="rad 2 is clicked"
    }
    else if(rad3.checked){
        o2.textContent="rad 3 is clicked"
    }
    else{
        o2.textContent="click something";
    }
    
}