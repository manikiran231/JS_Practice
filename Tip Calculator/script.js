const a=document.getElementById("in");
const b=document.getElementById("mk");
let c=document.getElementById("k")
function t1(){
  let x=Number(a.value).toFixed(2);
  let p=(x*5)/100;
  p=p.toFixed(2)
  c.innerText="Your Bill Amount is $"+x;
  b.innerText="Tip Amount is $"+p;
}
function t2(){
  let x=Number(a.value).toFixed(2);
  let p=(x*10)/100;
  p=p.toFixed(2)
  c.innerText="Your Bill Amount is $"+x;
  b.innerText="Tip Amount is $"+p;
}
function t3(){
  let x=Number(a.value).toFixed(2);
  let p=(x*15)/100;
  p=p.toFixed(2)
  c.innerText="Your Bill Amount is $"+x;
  b.innerText="Tip Amount is $"+p;
}
function t4(){
  let x=Number(a.value).toFixed(2);
  let p=(x*20)/100;
  p=p.toFixed(2)
  c.innerText="Your Bill Amount is $"+x;
  b.innerText="Tip Amount is $"+p;
}
