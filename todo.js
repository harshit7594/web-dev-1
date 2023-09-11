let inputs=document.querySelector('.input');
let btn=document.querySelector('.btn')
let task=document.querySelector('.task')
function add(){
    if(inputs.value==""){
        alert("pls enter the task")
    }else{
        let newElem=document.createElement('ul')
        newElem.innerHTML=inputs.value;
        task.appendChild(newElem);
        inputs.value="";
        let span=document.createElement('span')
        span.innerHTML="\u00d7";
        newElem.appendChild(span)
span.addEventListener('click',remove);
function remove(){
    newElem.remove();
}}}