let min=1;
let max=100;
let ans=Math.floor(Math.random()*(max-min+ 1)+ min);

let run=true;
while(run){
    let s=window.prompt("Enter a number btw 1 ans 10");
    if(s>max || s<min){
        window.alert("Limit Exceeded");
    }
    else if(s<ans){
        window.alert("Too Low");
    }
    else if(s>ans){
        window.alert("Too High")
    }
    else if(s==ans){
        window.alert("Congrats!!!!!");
        run =false;
    }
    
}
