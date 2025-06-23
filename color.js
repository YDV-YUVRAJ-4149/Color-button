// const changeRed =()=>{
//     let red =document.querySelector('body');
//     red.style.background='red'
// }

// const changeYellow =()=>{
//     let yellow=document.querySelector('body') ;
//     yellow.style.background='yellow'
// }

// const changeGreen =()=>{
//     let green = document.querySelector('body');
//     green.style.background='green'
// }
// const changeOrange =()=>{
//     let orange = document.querySelector('body');
//     orange.style.background = 'orange'
// } 
// const changePurple =()=>{
//     let purple = document.querySelector('body');
//     purple.style.background = 'purple'
// }
// const changePink =()=>{
//     let pink = document.querySelector('body');
//     pink.style.background = 'pink'
// }
// const changeTeal =()=>{
//     let teal = document.querySelector('body');
//     teal.style.background = 'teal'
// }
// const changeBlue =()=>{
//     let blue = document.querySelector('body');
//     blue.style.background = 'blue'
// }
// const changeGold =()=>{
//     let gold = document.querySelector('body');
//     gold.style.background = 'gold'
// }
// const changeCrimson =()=>{
//     let crimson = document.querySelector('body');
//     crimson.style.background = 'crimson'
// }


const changeColor = (a)=>{
    document.body.style.backgroundColor= a
}


let mybtn =document.querySelectorAll('.mybtn');

mybtn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        document.body.style.backgroundColor=e.target.innerText;
    })
})