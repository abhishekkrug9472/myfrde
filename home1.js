const output=document.querySelector(".output");
const result=document.querySelector(".result");
var keys=document.querySelectorAll("button");
keys.forEach(key=>{
    key.addEventListener("click",say);
});

function say(){
  var buttonText=this.innerText;
  if(buttonText==="AC"){
    output.innerText="";
    result.innerText="0";
    return;

  }
  else if(buttonText==="DEL"){
    output.textContent=output.textContent.substr(0,output.textContent.length-1);
    return ;

  }
  if(buttonText==='='){
result.innerText=eval(output.innerText);
  }
  else{
    output.textContent+=buttonText;
  }

}
