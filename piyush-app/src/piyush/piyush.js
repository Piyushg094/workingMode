 

// function greet(name){
// string is a template literal.
//   console.log(` greetings.... to  ${name}`);
// }

// // greet('piyush');

// function getSquare(a)
// {
//   const val= a**2;
//   return val;
// }

// console.log(getSquare(7));

// function countLatters( str )
// {
//   const count={}

//   for(let i=0;i<str.length;i++)
//   {
//     const char=str[i];

//     if(count[char])
//      count[char]++;
//     else
//      count[char]=1;
//   }
  
//   return count;
// }


// console.log(countLatters('ppiiyushh'));

// function createCounter()
// {
//    var count=0;
//   return function (){
//     count++;
//     return count;
//   }

  
// }

// const counter=createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());



// function getColor(color) {

//     return function () {

//       document.body.style.backgroundColor = `${color}`;

//     }
// }

// document.getElementById("green").onclick = getColor('green')
// document.getElementById("orange").onclick = getColor('orange')


// function  Greater(arr)
// {
//    let arr2=[];
//    for(let i=0;i<arr.length;i++)
//    {
//     if(arr[i].length>5)
//       arr2.push(arr[i])
//    }
//   return arr2;
// }

// const arr=["piyush","ayush","ojusvi"];
// console.log(Greater(arr));


// function takeObject(str)
// {
//  const ans=Object.values(str);

//  return ans;
  
// }

// const person = {
//   name: "John",
//   age: 30,
//   gender: "male",
//   city: "New York",
// };
// console.log(takeObject(person))


// function getPropertyValues(arr,proName)
// {
//    const values=arr.map((obj)=> obj[proName]);

//    return values;
// }

// const people = [
//   { name: "Pranay", age: 20, gender: "male" },
//   { name: "Nidhi", age: 21, gender: "female" },
//   { name: "Soumya", age: 21, gender: "male" },
// ];

// console.log(getPropertyValues(people, "name"));
// console.log(getPropertyValues(people, "age"));
// console.log(getPropertyValues(people, "gender"));


// function maxObject(arr, price)
// {
//   if(arr.length==0)
//    return null;
//   let maxObj=arr[0]

//   for(let i=0;i<arr.length;i++)
//   {
//     if(arr[i][price] > maxObj[price])
//       maxObj=arr[i];
//   }

//   return maxObj;
// }


// const arr1 = [
//   { name: "Pranay", age: 20 },
//   { name: "Nidhi", age: 21 },
//   { name: "Soumya", age: 21 },
// ];

// const maxObj=maxObject(arr1,"age")
// console.log(maxObj)

// function changeButton()
// {
//   const button=document.querySelector("button");

//   if(button.textContent==="click me yes")
//   {
//     button.textContent="clicked";
//   }
//   else{
//     button.textContent="click me yes";
//   }
// }

// const button=document.querySelector("button");
// button.addEventListener("click",changeButton);

// const data=document.getElementById("btn")
// console.log(data)

// function getRandomColor()
// {
//   let letter = "0123456789ABCDEF";
//   let color="#";
//   for(let i=0;i<6;i++)
//   {
//     color+=letter[Math.floor(Math.random() *16)];
//   }
//   return color;
// }

// function changeBackgroundColor(){
//   const color=getRandomColor();
//   document.body.style.backgroundColor=color;
//   // document.querySelector("h1").style.color=color;
// }

// document.onclick=changeBackgroundColor;

// const names=  [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", 
// "Amit", "Meera", "Rajiv", "Ananya" ]; 

// let currentIndex=0;
// const nameDisplay=document.getElementById("nam");
// console.log(nameDisplay);

// function showCurrentName()
// {
//   nameDisplay.textContent=names[currentIndex];
// }
// function showNext()
// {
//   if(currentIndex<names.length)
//   {
//   currentIndex++;
//   nameDisplay.textContent=names[currentIndex]
//   showCurrentName()
//   }
//   else
//   nameDisplay.textContent="out of Bound goto back";
// }
// function showNext()
// {
//   if(currentIndex<names.length)
//   {
//   currentIndex++;
//   nameDisplay.textContent=names[currentIndex]
//   showCurrentName()

//   }
//   else
//   nameDisplay.textContent="out of Bound goto back";
// }
// function showPrevious()
// {
//   if(currentIndex>0)
//   {
//   currentIndex--;
//   nameDisplay.textContent=names[currentIndex]
//   }
//   else
//   nameDisplay.textContent="out of Bound goto next";
// }


  // function addClassOnMouseOver(elementID,className)
  // {
  //   const element=document.querySelector(elementID)

  //   element.addEventListener("mouseover",() =>{

  //     element.classList.add(className);
  //     console.log(className)
  //   })

  //     element.addEventListener("mouseout",() =>{

  //       element.classList.remove(className);
  //       console.log(className)  
  //   })
  // }

  // addClassOnMouseOver("button","active");


  // var a=document.querySelector("button");
  // console.log(a);
  
  // let flag=0;

  // a.addEventListener("click", ()=>{

  //  if(flag==0)
  //  {
  //   let bulb=document.querySelector(".circle");
  //   console.log(bulb);
  //   bulb.style.backgroundColor="yellow"
  //   flag=1;
  
  //  }
  //  else
  //  {
  //   let bulb=document.querySelector(".circle");
  //   console.log(bulb);
  //   bulb.style.backgroundColor="white"
  //   flag=0;
  //  }

  // })

//   const arr=[1,2,3,4,5];
 
//   arr.shift();
//   console.log(arr);
//   arr.unshift(7);
//   console.log(arr);
//  arr.sort();
//  console.log(arr);

//  const nam =(a,b)=> (a+b)

// console.log(nam(2.,3))

// console.log(...arr)
// let arr2=arr
// console.log(arr2)

// const arr3=["a","b","c"];
// const[x,...z]=arr3;
// console.log(z)
//they are referance type
//they are good to handle real world problem data;
//objects store data in the key value form
//objects dont have indexing

// const person={
//   age: 23,
//   name:"piyush gupta",
//   gender: "male",
 
//   }


  // function yes(x,...y)
  // {
  //   console.log(x);
  //   console.log(y);
    
    
  // }
  
 
//   yes(9,8,4,5,6,7,8,0)
//   //yeah bakki parameter k baad bacha hua arra ban kayega agr 
//   //spread operator ka use karege tho apn rest parameter

// //callback functions


// function second(name)
// {
//   console.log(name)
// }

// function first(callback)
// {
//   callback("piyush")
// }

// first(second);

// let se=new Set();
// se.add(1);
// se.add(2);
// se.add(1);
// se.add(35)
// se.delete(1)
// se.forEach(element => {
//  console.log(element); 
// });



// let mp=new Map()
// mp.set('name',"piyush")
// mp.set(1,24)
// mp.set(1,23)
// mp.set('yes',true)

// console.log(mp)
// console.log(mp.get('yes'))

// console.log(mp)

// for(const [key,value] of mp)
// {
//   console.log(key,value);
// }

// const person={
//   name : "piyush" ,
//   age: 21,
//   danger: function (){
//     console.log(`don't touch ${this.name} he is very danger guy`)
//   },
// }

// person.danger()

// const user1={
//   name: "piyush",
//   age :21,
//   intro : function(){console.log(this.name,this.age)}
// }

// const use2={
//   name: 'coder',
//   age:23

// }
// user1.intro.call(use2)
  

// const parent=document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[3].innerHTML); 

// const dayone=document.querySelector('.day')
// // console.log(dayone.parentElement) 
// console.log(dayone.nextElementSibling) 

// ############## how to create a new element ##############################

// const div=document.createElement('div');
// console.log(div);
// div.className="dayone"
// div.id=Math.round(Math.random()*10+1)
// div.setAttribute("title","genrate_idea")
// div.style.backgroundColor="green"
// div.style.padding="12px"
// div.innerText="piyush gupta and ayush gupta bhai bhai h pakke wale"
// document.body.appendChild(div)
// document.body.appendChild(div)



// // ##################### edit and remove elements in DOM ####################

// function addlanguage(lang)
// {
//   const list=document.createElement('li');
//   list.innerHTML=`${lang}`
//   document.querySelector('.language').appendChild(list)
// }
// addlanguage("python")
// addlanguage("ruby & royal")

// function addOpti(lang)
// {
//   const li=document.createElement('li');
//   li.appendChild(document.createTextNode(lang))
//   document.querySelector('.language').appendChild(li)
// }
// addOpti("piyush")

// // ######### edit
// const secondlang=document.querySelector("li:nth-child(2)")
// // secondlang.innerHTML="garba"
// const newli=document.createElement('li')
// newli.textContent="bauji"
// secondlang.replaceWith(newli);

// // ############### remove #############

// const lastlang= document.querySelector('li:last-child')
// lastlang.remove();
 
// const buttons=document.querySelectorAll('.button')
// const body=document.querySelector('body')

// buttons.forEach((button)=>{
//   button.addEventListener('click',function(button){
//     console.log("MY NAme is piyuh gupta")
//     console.log(button.target)
//     if(button.target.id=='grey')
//       body.style.background='grey'
//     if(button.target.id=='white')
//       body.style.background='white'
//     if(button.target.id=='blue')
//       body.style.background='blue' 
//     if(button.target.id=='yellow')
//       body.style.background='yellow '   
//       if(button.target.id=='purple')
//       body.style.background='purple '  

//     }) 
//   console.log(button)
  
// })

// ########### BGI calCULATOR ###############

// const form=document.querySelector('form')

// form.addEventListener("submit",function(e){
//    e.preventDefault()
  
//   const height=parseInt(document.querySelector('#height').value)
   
//   const weight=parseInt(document.querySelector('#weight').value)
  
//   const result=document.querySelector('#results');
//   if(height==='' || height<0 || isNaN(height))
//   {
//     result.innerHTML=`value is not valid this ${height}`
//   }
//   else if(weight==='' || weight<0 || isNaN(weight))
//   {
//     result.innerHTML=`value is not valid this ${weight}`
//   }
//   else
//   {
//     const BMI=  (weight /((height*height)/10000)).toFixed(2)
    
//     if(BMI < 18.6)
//      result.innerHTML=`<span>${BMI}   it is under weight</span> `
//     else if(BMI >=18.6 && BMI<24.9)
//      result.innerHTML=`<span>${BMI} it  is normal Range weight</span>`
//     else
//       result.innerHTML=`<span>${BMI}   it is  over weight</span> ` 
//   }


// ###################### digital clock###########
// const clock=document.querySelector('#clock')


// setInterval(function(){
//   let date= new Date();
//   clock.innerHTML=date.toLocaleTimeString()

// },1000)

//  ################## gusse the number ##################

// const randomNumber=parseInt(Math.random()*100)+1

// const inputUser=document.querySelector("#guessField")
// const submit=document.querySelector("#subt");
// const guessSlot=document.querySelector(".guesses")
// const remaining=document.querySelector('.lastResult')
// const lowOrHi=document.querySelector('.lowOrHi');
// const starOver=document.querySelector('.resultParas');

// const p=document.createElement('p');


// let prevGuess=[];
// let newGuess=1;

// let playGame=true;

// if(playGame)
// {

//   submit.addEventListener('click',function(e){
//     e.preventDefault()
//     const guess= parseInt(inputUser.value);
//     console.log(guess)
//     validateGuess(guess)
//   })
// }

// //validate value bt 100 to 1
// function validateGuess(guess)
// {
//    if(isNaN(guess))
//    {
//     alert("please enter a valid number");
//    }
//    else if(guess<1)
//    {
//     alert("please enter a value more than 1")
//    }
//    else if(guess>100)
//    {
//     alert("please enter a value less than 1")
//    }
//    else
//    {
//     prevGuess.push(guess)
//     if(newGuess===11)
//     {
//       displayGuess(guess)
//       displayMessage(`Game over. Random number was  ${randomNumber}`)
//       endGame()
//     }else{
//     displayGuess(guess)
//     checkGuess(guess)
//    }
//   }
// }

// // value is random value then win
// function checkGuess(guess)
// {
//    if(guess === randomNumber)
//    {
//     displayMessage("your guess is right")
//     endGame();
//    }
//    else if(guess< randomNumber)
//    {
//      displayMessage("number is Too low");
//    }
//    else if(guess > randomNumber)
//    {
//     displayMessage("number is two long");
//    }


// }

// //clean prev value
// function displayMessage(message)
// {
//    lowOrHi.innerHTML=`<h2> ${message}</h2>`
// }

// //right message display
// function displayGuess(guess)
// {
//   inputUser.value='';
//   guessSlot.innerHTML+=`${guess}, `
//   newGuess++;
//   remaining.innerHTML=`${11-newGuess}`
// }

// function newGame()
// {

//   const newGameButton=document.querySelector('#new')
//   newGameButton.addEventListener('click',function(e){
//     randomNumber=parseInt(Math.random()*100)+1;
//     prevGuess=[]
//     newGuess=1;
//     guessSlot.innerHTML=''
//     remaining.innerHTML=`${11-newGuess}`
//     inputUser.removeAttribute('disabled')
//     starOver.removeChild(p)
//     playGame=true;
//   });

// }

// function endGame()
// {
//   inputUser.value='';
//   inputUser.setAttribute('disabled','')
//   p.classList.add('button')
//   p.innerHTML=`<h2 id="new"> start new Game</h2>`
//   starOver.appendChild(p)
//   playGame=false;
//   newGame()

// }

//  ####################### Event Listener ##################
// document.querySelector('#one').addEventListener('click',function(e)
// { console.log("this is my first event")
// },true)

// document.querySelector('#name').addEventListener('click',function(e)
// { console.log("this is my main event")
// },true)


// document.querySelector('#google').addEventListener('click',function(e)
// { console.log("google maharaj ki")
// },true)

//################# aysc fucions

// const change=function(){

//   document.querySelector('#new').innerHTML="jai Shree Ram"
//   console.log("hogya")
// }

// const newChange=setTimeout(change,2000)

//  document.querySelector('#btn').addEventListener('click',function()
//  {
//    clearTimeout(newChange)
//   console.log("stooped")
// })



// const changeColor=function(){
//   let hax='0123456789ABCDEF';
//    let color='#'
//   for(let i=0;i<=5;i++)
//   {
//     color+=hax[Math.floor(Math.random()*16)]
//   }

//   return color
// }

// console.log(changeColor())


// let changeImp
// const startProcess = function(){

//   if(!changeImp)
//    changeImp= setInterval(newData,500)
//    function newData(){
//     document.body.style.backgroundColor=changeColor()}
//    }

// const stopProcess= function(){

//   clearInterval(changeImp)
//   changeImp=''
//   console.log("stopped")
// }

// document.querySelector("#start").addEventListener('click',startProcess)

// document.querySelector("#stop").addEventListener('click',stopProcess)


// const insert=document.querySelector("#insert")
// console.log(insert)
// window.addEventListener( 'keydown' , (e)=>{

//   insert.innerHTML=`<ul>
//                    <li>${e.key==' '?"space":e.key}</li>
//                    <li>${e.keyCode}</li>
//                    <li>${e.code}</li>
                   
//   </ul>`
// ;
// }
// )

  //############### using Api start#############

// let requestUrl='https://api.github.com/users/hiteshchoudhary'  
// let xhr= new XMLHttpRequest();
// xhr.open('GET',requestUrl)
// //console.log(xhr.readyState);
// xhr.onreadystatechange=function(){ //request track ho rhi h asyc kr rhe h callback ho rha h baar baar wps kaam pura ho rha h baar baar
//   if(xhr.readyState===4)
//   {
//     // console.log(this.responseText)
//     const data=JSON.parse(this.responseText); 
//     console.log(data)
//     console.log(data.avatar_url)
//     console.log(data.location)

//     const photoChange=document.querySelector(".card__img")
//     const nameChange=document.querySelector('.card__header')
//     const exoloreBtn=document.querySelector('.card__btn')
//     const followChange=document.querySelector('.card__text')
  
   
//     exoloreBtn.addEventListener('click',function(e){
//       e.preventDefault()

//     console.log(photoChange)
//     nameChange.innerHTML=data.name 
//     followChange.innerHTML=data.followers
//     photoChange.src='https://avatars.githubusercontent.com/u/11613311?v=4'
//     console.log(nameChange)
//     })
//   }
// //  console.log(xhr.readyState);
// }

// xhr.send()

// promiseOne=  new Promise(function(resolve,reject){

//   setTimeout(()=>{

//     let error=true;
//     if(!error)
//     {
//     console.log("async function is calling now days")
//     resolve({user:'piyush',pass:'123'})
//    }else{
//     console.log("Error is here")
//    }
// },1000)
    
// }).then((response)=>{
// console.log("process consumed")
// return response
// }).then((user)=>{
//   console.log(user.user)
//   console.log(user.pass)
// }).catch((error)=>
// {
//   console.log(error);
// }).finally(()=>{
//   console.log("it will definetly run either error")
// })


// async function consumePromise(){

//    try{
//   const response= await promiseOne;
//   console.log(response)
//   console.log(response.user)
//   console.log(response.pass)
//    }catch(error)
//    {
//     console.log(error)
//    }

// }

// ###########  API calling nowdays ##############
async function callAllUsers(){
  try{
    const response=await fetch('https://randomuser.me/api/')
    const data= await response.json()
    console.log(data)
  }
  catch(error){
    console.log('Error',error)
  }
}

callAllUsers()

//############ second way ####################

fetch('https://randomuser.me/api/')
.then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data)}).
  catch((error)=>
  {
    console.error("return ",error)
  })











  
  






