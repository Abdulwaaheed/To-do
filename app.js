let big_box = document.querySelector(".big_box")
let title = document.querySelector(".title")
let body = document.querySelector(".body")
let inp = document.querySelector("#inp")
let btn = document.querySelector("#btn")
let reset = document.querySelector("#reset")

let list  =document.querySelector(".list")
function card(i){

    let li = document.createElement("div")  
    li.className="li"  
    li.textContent=i
    list.append(li)

    let icon = document.createElement("i")
    icon.classList="fa-solid fa-trash-can"
    icon.id="icon"
    icon.style.color="white"
    li.append(icon)

    icon.addEventListener("click",()=>{
        li.remove()
        localStorage.removeItem(inp.value)
    })
    localStorage.setItem(inp.value, inp.value)



    
}

reset.addEventListener("click",()=>{
    localStorage.clear()
    list.innerHTML=""
})

btn.addEventListener("click",()=>{
    console.log(inp.value);
    card(inp.value)
})
