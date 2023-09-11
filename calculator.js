let inputBtn=document.getElementById('input');
let allBtn=document.querySelectorAll('button');
let String="";
let arr=Array.from(allBtn)
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
if(e.target.innerHTML=='='){
    String=eval(String);
    inputBtn.value=String;
}
else if(e.target.innerHTML=='AC'){
    String="";
inputBtn.value=String;
}
else if(e.target.innerHTML=='DEL'){
    String=String.substring(0,String.length-1);
    inputBtn.value=String;
}
else{String+=e.target.innerHTML;
inputBtn.value=String;
    }
    })  
    }
)