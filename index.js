for(var i = 0;i<document.querySelectorAll(".tab-links").length;i++){
    document.querySelectorAll(".tab-links")[i].addEventListener("click",function(){
        document.querySelector(".active-link").classList.remove("active-link");
        document.querySelector(".active-tab").classList.remove("active-tab");
        this.classList.add("active-tab");
        document.querySelector("#"+this.innerText).classList.add("active-link");
    })
}