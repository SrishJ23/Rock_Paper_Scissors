// console.log(" Hello! This side, Pratyush");
// console.log(" How you doing?");
// console.log("I love JS!");
// fullName="Pratyush Gupta";
// console.log(fullName);
// age = 24;
// console.log(age);
// price = 99.99;
// console.log(price);
// x = null;
// console.log(x);
// y = undefined;
// console.log(y);
// isFollow = false;
// console.log(isFollow);
// const student={
//     fullName: "Pratyush Gupta",
//     age: 21,
//     roll_no:85,
//     isPass: true,
// };
// console.log(student["fullName"]);
// console.log(student.roll_no);
// const product={
//     fullName: "Stylish Pen",
//     Rating: 4.5,
//     isDealoftheday: true,
//     Offer: 25,
//     price: 2500,
// };
// console.log(product);
// console.log(typeof product);
// console.log(typeof product["Rating"]);
// let a = 4;
// let b = 9;
// console.log("a =", a, "& b =", b);
// console.log("a + b = ", a + b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);
// let a = 4;
// let b = 9;
// console.log("a = ", a **= 4);
// let a = 4;
// let b = "4";
// console.log("a === b", a === b);
// let a = 6;
// let b = 5;
// console.log("cond1 && cond2 = ", a > b && a === 6);
// let a = 6;
// let b = 5;
// console.log("!(a<b) = ", !(a<b));
// let mode="dark";
// let color;
// if(mode ==="dark"){
//     color="black";
// }
// if(mode ==="light"){
//     color="white";
// }
// console.log(color);
// let num=prompt("Enter a Number : ");
// if(num % 5 === 0){
//     console.log(num ,"is a multiple of 5");
// }
// else{
//     console.log(num ,"is not a multiple of 5" );
// }
// let score = prompt("Enter the score :");
// if(score >= 90 && score <= 100){
//     console.log("Grade A");
// }
// else if(score >= 70 && score <= 89 ){
//     console.log("Grade B");
// }
// else{
//     console.log("Grade D");
// }
// for(let i=1; i<=500; i++){
//     console.log("Prats");
// }
// console.log("Loop has ended.")
// let sum=0;
// for(let i=0; i<=5; i++){
//     sum= sum+i;
// }
// console.log("Sum = ",sum);
// let i=1;
// while(i<=5){
//     console.log("i = ", i);
//     i++;
// }
// let i = 10;
// do{
//     console.log("Prats");
//     i++;
// }
// while(i>=20);
// let str="Pratyush Ji";
// let size = 0;
// for(let i of str){
//     console.log("i = ", i);
//     size++;
// }
// console.log("str size = ", size);
// let student ={
//     name: "Pratyush",
//     age: 21,
//     rollno: 86,
//     isPass: true
// };
// for(let i in student){
//     console.log("key = ",i);
//     console.log("value = ",student[i]);
// }
// for(let i=0; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//     } 
// }
// let value=20;
// let num=prompt("Guess the number");
// while(num != value){
//     num=prompt("Number incorrect. Guess again!");
// }
// console.log("Congrats.You guessed it correct!");
// let str="Pratyush Gupta";
// console.log("Length = ", str.length);
// console.log("Letter = ", str[4]);
// for(let i of str){
//     console.log("Char = ",i);
// }
// let object = {
//     name: "pen",
//     cost: 10,
// };
// let output=`The cost of ${object.name} is ${object.cost} rupees`;
// console.log(output);
// console.log("Pratyush\nGupta");
// let str="     pratyush gupta     ";
// console.log("Upper Case = ", str.toUpperCase(str));
// console.log("Remove Whitespaces = ", str.trim());
// slice = str.slice(6,11);
// console.log(slice);
// console.log(str.replace("t","y"));
// console.log(str.replaceAll("t","y"));
// console.log(str.charAt(8));
// let userName = prompt("Enter the full name!");
// let output=`@${userName}${userName.length}`;
// console.log(output);
// let marks=[96,65,87,89,67];
// console.log(marks);
// console.log(marks.length);
// console.log(marks[3]);
// marks[3]=64;
// console.log(marks);
// for (let i of marks){
//     console.log(i);
// }
// for(let idx=0;idx<marks.length;idx++){
//     console.log(marks[idx]);
// }
// let cities =["gurgoan","kanpur","delhi"];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }
// let marks=[85, 97, 44, 37, 76, 60];
// let sum=0;
// let avg=0;
// for(let i of marks){
//     sum=sum+i;
//     avg=sum/marks.length;
// }
// console.log(`The average marks of the class is ${avg}`);
// let price=[250, 645, 300, 900, 50];
// let idx=0;
// for(let val of price){
//     console.log(`The value at index ${idx} = ${val}`);
//     let offer = val /10;
//     price[idx]=price[idx]- offer;
//     console.log(`The value after offer at index ${idx} is ${price[idx]}`)
//     idx++;
// }
// let items=["chips", "potato"];
// console.log(items);
// items.push("burger", "mendhuvada");
// console.log(items);
// function myFunction(){
//     console.log("I am Prats!");
//     console.log("I love JS!");
// }
// myFunction();
// function sum(a,b){
//     result = a+b;
//     console.log(`The sum is = ${result}`);
// }
// sum(4,5);
// const arrowSum=(a,b) => {
//     console.log(a+b);
// }
// arrowSum(4,6);
// const arrowMul=(a,b)=>{
//     console.log(a*b);
// }
// arrowMul(4,6);
// function myStr(msg){
//     let num=0;
//     for(const i of msg){
//         if(i == "a" || i == "e" || i== "i" || i== "o" || i== "u" || i== "A"){
//             num+=1;
//         }
//     }
//     return num;
// }
// myStr("i am vijay");
// let arr=[26,87,67,76];
// arr.forEach((val)=>{
//     console.log(val.toString(),arr);
// });
// let arr=[3,6,12,9,15];
// let square=(num)=>{
//     console.log(num**2);
// }
// arr.forEach(square);
// let arr=[4,98,7,65];
// let newArr=arr.map((val)=>{
//     return val*val;
// });
// console.log(newArr);
// let arr=[1,5,6,78,66,90];
// let evenArr=arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(evenArr);
// let num=[5,8,87,6,3,9];
// const output=num.reduce((res,curr)=>{
//     return res + curr;
// });
// console.log(output);
// let num=[5,8,87,6,3,9];
// const output=num.reduce((previous,curr)=>{
//     return previous>curr ? previous:curr;
// });
// console.log(output);
// arr=[90,95,96,45,67];
// const output=arr.filter((val)=>{
//     return val>90;
// });
// console.log(`the students who scored above 90 are ${output}`);
// let n=prompt("Enter a number!");
// let arr=[];
// for(i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// console.log(`The sum of numbers is ${sum}`);
// let product=arr.reduce((prev,curr)=>{
//     return prev*curr;
// });
// console.log(`The product of numbers is ${product}`);
// console.log("Hello!");
// alert("Hello from Prats!");
// console.log(document);
// console.dir(document.body);
// console.log(document.body);
// let a=document.getElementById("heading");
// console.log(a);
// console.dir(a);
// let b=document.getElementsByClassName("content");
// console.log(b);
// console.dir(b);
// let c=document.getElementsByTagName("p");
// console.log(c);
// console.dir(c);
// let d=document.querySelector("#heading");
// console.log(d);
// console.dir(d);
// let e=document.querySelectorAll("#heading");
// console.log(e);
// console.dir(e);
// console.log(document.body.innerText="abcd");
// console.log(document.querySelector("#heading").innerHTML);
// console.log(document.querySelector("p").textContent);
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText + "from PRATS!";
// let divs=document.querySelectorAll(".box");
// let idx=1;
// for(div of divs){
//     div.innerText=`The new value is ${idx}`;
//     idx++;
// }
// let divs=document.querySelector("div");
// console.log(divs);
// let val=divs.getAttribute("id");
// console.log(val);
// let div=document.querySelector("div");
// div.style.backgroundColor="grey";
// let newBtn=document.createElement("button");
// newBtn.innerText="Click Me!";
// console.log(newBtn);
// let div=document.querySelector("div");
// // div.append(newBtn);
// div.after(newBtn);
// let newBtn=document.createElement("button");
// newBtn.innerText="Click Me!";
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";
// document.querySelector("body").prepend(newBtn);
// let para=document.querySelector("p");
// para.classList.add("newClass");
// console.log(`The classes of p are ${para.classList}`);
// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("Button was Clicked!");
//     let a=25;
//     a++;
//     console.log(`The sum is ${a}`);

// }
// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("You are inside box!");
//     alert("You went over Box!");
// }
// let div=document.querySelector("div");
// div.onmouseover=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }
// btn1.addEventListener("click",()=>{
//     console.log("Button was clicked-Hander1");
// });
// btn1.addEventListener("click",()=>{
//     console.log("Button was clicked-Hander2");
// });
// const hander3=()=>{
//     console.log("Button was clicked-Hander3");
// };
// btn1.addEventListener("click",hander3);
// btn1.addEventListener("click",()=>{
//     console.log("Button was clicked-Hander4");
// });
// btn1.removeEventListener("click",hander3);
// let change=document.querySelector("#mode");
// let currMode="light";
// let body=document.querySelector("body");
// change.addEventListener("click", ()=>{
//     // console.log("You are trying to change the mode!");
//     if(currMode==="light"){
//         currMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//         // document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currMode="light";
//         // document.querySelector("body").style.backgroundColor="white";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });
let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    // console.log("Game result is draw");
    msg.innerText="Game results in Draw..Play your move again!";
    msg.style.backgroundColor="brown";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        // console.log("You Win!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        // console.log("You Lose!");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    // console.log("User Choice =", userChoice);
    const compChoice=genCompChoice();
    // console.log("Comp Choice =", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper"){
            userwin = compChoice === "scissors" ? false:true;
        }
        else{
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }    
};
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked!", userChoice);
        playGame(userChoice);
    });
});

