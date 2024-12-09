function odd(){
    let a=parseInt(document.getElementById("num1").value)
    let b=parseInt(document.getElementById("num2").value)
    for(a;a<=b;a++){
        if(a%2==1){
            console.log(a);
        }
    }
    

}
function even(){
    let a=parseInt(document.getElementById("num1").value)
    let b=parseInt(document.getElementById("num2").value)
    for(a;a<=b;a++){
        if(a%2==0){
            console.log(a);
        }
    }
    

}

function mult(){
    let a=parseInt(document.getElementById("num1").value)
    for(b=1;a<=10;b++){
        console.log(b+"*"+a+"="+a*b);
    }

}