// function fun1(){
//     let a=parseInt(document.getElementById("salary").value)
//     let b=parseInt(document.getElementById("exp").value)
//     let h3=document.getElementById('h3')
//     if (b>5){
//         bns=a*5/100
//         tslr=a+bns
//         h3.innerHTML=tslr
//     }
//     else{

//         h3.innerHTML="not eligible"
//     }

// }

function div(){
    let a=parseInt(document.getElementById("num1").value)
    let h3=document.getElementById("h3")
    let b=a%10
    if (b%3==0){
        h3.innerHTML="divisible"
    }
    else{
        h3.innerHTML="not divisible"
    }
        
    }
