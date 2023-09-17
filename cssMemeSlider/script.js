const pics = document.querySelectorAll(".meme-img");
const ctrls = document.querySelectorAll(".control");
const ctrl_circles = document.querySelectorAll(".control_circle");
const texts = document.querySelectorAll(".desc");
const text = document.querySelector(".description");
const slider = document.querySelector("img-container");
let width = 0;

// const findSelect = (ctrls) => {
//    for (let i = 0; i < ctrls.length; i++) {
//       if (ctrls[i].classList.contains('selected')){
//          return i;
//       }
//    }
// }

// const changeColors = (ctrls) => {
//    ctrls.forEach((ctrl) => ctrl.classList.remove('selected'));

// }

ctrls[0].addEventListener("click", function(){
   ctrls.forEach((ctrl) => {ctrl.classList.remove('selected')})
   ctrl_circles.forEach((ctrl) => {ctrl.classList.remove('selected')})

   pics.forEach((pic) => {
      width = 0;
      pic.style.right = `${width}%` 
   })
   texts.forEach((text)=>{
      text.style.right = 0 + "%";
   })
   

   ctrl_circles[0].classList.add('selected');
   ctrls[0].classList.add('selected');
})


ctrls[1].addEventListener("click", function() {
   ctrls.forEach((ctrl) => {ctrl.classList.remove('selected')})
   ctrl_circles.forEach((ctrl) => {ctrl.classList.remove('selected')})

   pics.forEach((pic) => {
      width = 100;
      pic.style.right = `${width}%`;
       
   })
   texts.forEach((text)=>{
      text.style.right = 100 + "%";
   })
   

   ctrl_circles[1].classList.add('selected');
   ctrls[1].classList.add('selected');
   
})


ctrls[2].addEventListener("click", function() {
   ctrls.forEach((ctrl) => {ctrl.classList.remove('selected')})
   ctrl_circles.forEach((ctrl) => {ctrl.classList.remove('selected')})

   pics.forEach((pic) => {
      width = 200;
      pic.style.right = `${width}%` 
   })

   texts.forEach((text)=>{
      text.style.right = 200 + "%";
   })
   

   ctrl_circles[2].classList.add('selected');
   ctrls[2].classList.add('selected');
})


ctrls[3].addEventListener("click", function() {
   ctrls.forEach((ctrl) => {ctrl.classList.remove('selected')})
   ctrl_circles.forEach((ctrl) => {ctrl.classList.remove('selected')})

   pics.forEach((pic) => {
      width = 300;
      pic.style.right = `${width}%` 
   })
   texts.forEach((text)=>{
      text.style.right = 300 + "%";
   })
   

   ctrl_circles[3].classList.add('selected');
   ctrls[3].classList.add('selected');
})

console.log("Мне нужно ещё немного доделать. Проверьте в конце cross-check'a, пожалуйста)")
