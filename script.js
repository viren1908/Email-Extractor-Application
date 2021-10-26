
const rawTxt = document.querySelector("textarea[name=txtarea]");
const outTxt = document.querySelector("textarea[name=output]");
const counter = document.querySelector(".counter");


const btn = document.querySelector("button");

btn.addEventListener("click",function(){
  
    let temp = rawTxt.value ;
    //using Regex to select all the emails from text area
    let exp = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    //Alternate shorter version 
    let shorterExp = /\S+@\S+/g ;
    let emailData = temp.match(shorterExp); 
    
    //Removing the Duplicate Emails
    let holder = [];
    for(let i = 0; i<emailData.length ; i++){
      
        if(holder.indexOf(emailData[i] == -1) ) {
            holder.push(emailData[i]);

        }
        
    }
    //concerting array element into String 
    let joinHolder = holder.join(",");
    //output 
    counter.innerText = "Emails Found : " + holder.length;
    outTxt.innerText = joinHolder;
})  



