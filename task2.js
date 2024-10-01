let arr=["apple", "banana", "grape", "watermelon", "kiwi", "strawberry"];
let task1=document.createElement("div");
task1.className="task1";
task1.innerHTML="<h2>Task1</h2>"
document.body.appendChild(task1);
arr.filter(n=>{
    if(n.length>5){
        let ul=document.createElement("ul");
        let li=document.createElement("li");
        li.innerText=n;
        task1.appendChild(ul);
        ul.appendChild(li);
    }
});

//Task2
let task2=document.createElement("div");
task2.className="task2";
task2.innerHTML="<h2>Task2</h2>"
document.body.appendChild(task2);
let array=["hello", "world", "javascript", "dom"];
let result=array.map(n=> n.toUpperCase())
let par=document.createElement("p");
par.innerText=result.join(" ")
task2.appendChild(par)


//Task3
let array1=["I", "am", "learning", "JavaScript", "today"];
let task3=document.createElement("div");
task3.className="task3";
task3.innerHTML="<h2>Task3</h2>"
document.body.appendChild(task3);
let div=document.createElement("div");
div.innerText=array1.join(" ");
task3.appendChild(div);

//Task4
let array2=["dog", "cat", "bird", "fish"];
let task4=document.createElement("div");
task4.className="task4";
task4.innerHTML="<h2>Task4</h2>"
document.body.appendChild(task4);
array2.map(n=>{
    let ul=document.createElement("ul");
        let li=document.createElement("li");
        li.innerText=n.split('').reverse().join('');
        task4.appendChild(ul);
        ul.appendChild(li);

})

//Task5
let array3=["apple", "banana", "grape"];
let task5=document.createElement("div");
task5.className="task5";
task5.innerHTML="<h2>Task5</h2>"
document.body.appendChild(task5);
array3.map(n=>{
  let ul=document.createElement("ul");
  let li=document.createElement("li");
  let count=n.match(/[aeiou]/gi).length;
  li.innerText=n+`(${count} vowels)`;
  ul.appendChild(li);
  task5.appendChild(ul);
})



