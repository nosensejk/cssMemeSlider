let pics = document.querySelectorAll(".meme-img");
let ctrls = document.querySelectorAll(".control");
let slider = document.querySelector("img-container");
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
   pics.forEach((pic) => {
      width = 0;
      pic.style.right = `${width}%` 
   })
   ctrls[0].classList.add('selected');
})
ctrls[1].addEventListener("click", function() {
   ctrls.forEach((ctrl) => {ctrl.classList.remove('selected')})
   pics.forEach((pic) => {
      width = 100;
      pic.style.right = `${width}%` 
   })
   ctrls[1].classList.add('selected');
})
ctrls[2].addEventListener("click", function() {
   ctrls.forEach((ctrl) => {ctrl.classList.remove('selected')})
   pics.forEach((pic) => {
      width = 200;
      pic.style.right = `${width}%` 
   })
   ctrls[2].classList.add('selected');
})
ctrls[3].addEventListener("click", function() {
   ctrls.forEach((ctrl) => {ctrl.classList.remove('selected')})
   pics.forEach((pic) => {
      width = 300;
      pic.style.right = `${width}%` 
   })
   ctrls[3].classList.add('selected');
})
