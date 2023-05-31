for(var i = 0;i<document.querySelectorAll(".tab-links").length;i++){
    document.querySelectorAll(".tab-links")[i].addEventListener("click",function(){
        document.querySelector(".active-link").classList.remove("active-link");
        document.querySelector(".active-tab").classList.remove("active-tab");
        this.classList.add("active-tab");
        document.querySelector("#"+this.innerText).classList.add("active-link");
    })
}
document.querySelector(".fa-bars").addEventListener("click",()=>{
    document.querySelector(".nav-links").style.right = "0";
})
document.querySelector(".fa-circle-xmark").addEventListener("click",()=>{
    document.querySelector(".nav-links").style.right = "-100vw";
})
for(var i = 0;i<document.querySelectorAll(".nav-li").length;i++){
    document.querySelectorAll(".nav-li")[i].addEventListener("click",()=>{
        document.querySelector(".nav-links").style.right = "-100vw";
    })
}