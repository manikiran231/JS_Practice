function pclk(){
    const d=new Date();
    let m=d.getMinutes().toString().padStart(2,0);
    let h=d.getHours().toString().padStart(2,0);
    let s=d.getSeconds().toString().padStart(2,0);
    let mer;
    if(h>=12) mer="PM";
    else mer="AM";  
    h=h%12 || 12;
    
    const time=h+":"+m+":"+s+" "+mer;
    document.getElementById("mclk").innerText=time;
}
pclk();
setInterval(pclk,1000);