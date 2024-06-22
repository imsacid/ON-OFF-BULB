// let btnElement = document.getElementById("btn")

// let p = document.getElementsByTagName('p')[0]

// let helo = document.getElementsByClassName('title') [0]

// let getForm = document.querySelector("#form") 

// console.log(p)
// console.log(btnElement)
// console.log(title)
// console.log(helo)
// console.log(getForm)




// const title = document.querySelector("#title")
//         title.innerHTML = 'This is DOM JS'

//         title.style.background="purple"
//         title.style.color = "lime"
//         title.style.padding = "20px"
//         title.style.borderRadius = "10px"
//         title.style.fontSize = "20px"
//         title.style.textAlign = "center"
//         title.style.margin = "20px"
//         title.style.fontWeight = "bold"
//         title.style.textDecoration = "underline"

// const p = document.querySelector('.p')
//     p.innerHTML = 'this is some description of Js '


// const btn = document.querySelector('#btn')
// btn.innerHTML = 'Submit'


//     btn.style.background="#ade8f4"
//     btn.style.color = "#03045e"
//     btn.style.padding = "8px 20px 8px 20px"
//     btn.style.border = "none"
//     btn.style.borderRadius = "10px"
//     btn.style.fontSize = "20px"
//     btn.style.textAlign = "center"
//     btn.style.margin = "20px"
//     btn.style.fontWeight = "bold"
//     btn.style.cursor = "pointer"



// const button = document.querySelector("#btn")

//     button.addEventListener('click', function(){
//         document.body.style.backgroundColor = "#6a040f"
//     })


const light = document.querySelector("#light")
const onButton = document.querySelector("#onbtn")
const offButton = document.querySelector("#offbtn")

onButton.addEventListener("click", function(){
    light.style.backgroundColor = "yellow"
})

offButton.addEventListener("mouseover", function(){
    light.style.backgroundColor = "green"
})