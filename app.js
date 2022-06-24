//constants
const input=document.querySelector(".input-feild");
const submit=document.querySelector(".btn");
const mcontainer=document.querySelector(".modal-container");
const res=document.querySelector(".modal-res");
const c_lose=document.querySelector(".close");


//on submit events
submit.addEventListener("click",()=>{
   if(isNaN(input.value)){
    mcontainer.style.display="flex";
    res.innerText="Your input is String";
    res.style.color="#e84118";
   }
   else if(input.value.length==0){
    mcontainer.style.display="flex";
    res.innerText="your input is Empty";
    res.style.color="#e84118";
   }
   else{
        let res2,res3;
        res2=idCheck()
        if(res2!==null){
        res2=res2.toString();
        res3=res2.substring(0,4);
        }
        if(leapYear(Number(res3))){
            mcontainer.style.display="flex";;
            res.innerText="NID is not valid due to Leap Year";
            res.style.color="#e84118";
        }
        else if(res2==null){
            mcontainer.style.display="flex";
            res.innerText="Your NID is not valid.";
            res.style.color="#e84118";
        }
        else{
            mcontainer.style.display="flex";
            res.innerHTML=" Your NID is valid."+"<br>"+"Your Id is: "+res2;
            res.style.color="#2ed573"
        }
    }
})

//close button functionality
c_lose.addEventListener("click",()=>{
    mcontainer.style.display="none";
    input.value="";
})

//idchecker
function idCheck(){
    let reg=/(19\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d)|(2000\d\d\d\d\d\d\d\d\d\d\d\d\d)/;
    let res=input.value.match(reg);
    if(res==null){
        return null;
    }
    return res[0];
}

//leapYear
function leapYear(year){
    if((year%4==0 && year%100!=0)||year%400==0)     return true;
    else                                            return false;
}


