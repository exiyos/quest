var tasks = [];
var strike = [];
var doneTasks = [];
var ul = document.getElementById('ul');
var input = document.getElementById('input');
var inputValue;

function submit(){
  
inputValue = input.value;
tasks.push(inputValue);


for(var x = 0; x<tasks.length;x++){
if(!doneTasks.includes(tasks[x]) && tasks[x] != "") {
var li = document.createElement("LI");
var p = document.createElement("P");
var button1 = document.createElement("BUTTON");
var button2 = document.createElement("BUTTON");
li.appendChild(p);
p.classList.add("text");
li.appendChild(button1);
button1.innerText = "Done";
button1.classList.add("t");
button1.setAttribute("onclick", "done(this) ");
li.appendChild(button2);
button2.innerText ="Delete";
button2.classList.add("t");
button2.setAttribute("onclick", "delet(this) ");
ul.appendChild(li);
p.innerText = tasks[x];
input.value = "";
doneTasks.push(tasks[x]);
localStorage.setItem('tasks', JSON.stringify(tasks));

if(strike.includes(tasks[x])){
  p.classList.add("done");
}
}





}

}




function done(btn){

  btn.previousElementSibling.classList.toggle("done");
  
  if(btn.previousElementSibling.classList.contains("done")){
  strike.push(btn.previousElementSibling.innerText);
  }else{
    strike = strike.filter(e => e !== btn.previousElementSibling.innerText);
    
  }
  localStorage.setItem('stroke', JSON.stringify(strike));
}

function delet(btn){
  var text = btn.previousElementSibling.previousElementSibling.innerText;
  var textEl = btn.previousElementSibling.previousElementSibling;
  var textEl2 = btn;
  var textEl1 = btn.previousElementSibling;
  
  
  
  btn.parentNode.removeChild(textEl);
  btn.parentNode.removeChild(textEl1);
  btn.parentNode.removeChild(textEl2);
  tasks = tasks.filter(e => e !== text);
  doneTasks = doneTasks.filter(e => e !== text);
strike = strike.filter(e => e !== textEl.innerText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('stroke', JSON.stringify(strike));
}




if(localStorage.getItem('stroke') != null){
  
strike = localStorage.getItem('stroke');
strike = JSON.parse(strike);
submit();
}else{
   strike = [];
   
}


if(localStorage.getItem('tasks') != null){
tasks = localStorage.getItem('tasks');
tasks = JSON.parse(tasks);

submit();
}else{
  tasks = [];
  
}
