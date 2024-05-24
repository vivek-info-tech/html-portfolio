/*-------------------for typing animation---------------- */


var typed =new Typed (".typing", {
    strings:["Web Devloper", "YouTouber","Student" ,"web designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



// for sidbar menu
function showSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
}

/*--------to style switcher-------- */
const styleSwitcherTogglel=document.querySelector(".typing");
styleSwitcherTogglel.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher" ).classList.toggle("open");
    }
})

const alternatestyles=document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
 {
    alternatestyles.forEach((style)=>{
        if(color===style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.removeAttribute("disabled",true);
        }
    })
}
/*-------------theme light and dark mode------- */
const dayNight=document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("classname");
    dayNight.querySelector("i").classList.toggle("classname");
    document.body.classList.toggle("dark")
})
window.addEventListener("load", ()=> {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("moon");
    }
})