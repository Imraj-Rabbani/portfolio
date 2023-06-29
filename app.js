const element_1 = document.querySelector(".nav_portion_1")

element_1.addEventListener("click",()=>{
    window.scrollBy({
        top:875,
        left:0,
        behavior:"smooth",
    })
})

const element_2 = document.querySelector(".nav_portion_2")
element_2.addEventListener("click",()=>{
    window.scrollBy({
        top:1750,
        left:0,
        behavior:"smooth",
    })
})
