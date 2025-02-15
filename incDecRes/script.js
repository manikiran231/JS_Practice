
let inb = document.getElementById('inc');
let deb = document.getElementById('dec');
let reb = document.getElementById('res');
let count = document.getElementById('cnt');
let x = 0;

inb.onclick = function() {
    x += 1;
    count.innerText = x;
    count.style.color="green";

}
deb.onclick = function() {
    x -= 1;
    count.innerText = x;
    count.style.color="red";
}
reb.onclick = function() {
    x=0;
    count.innerText = x;
    count.style.color="black";
}