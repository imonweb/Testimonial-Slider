let slide = document.querySelector('#slide');
let upArrow = document.querySelector('#upArrow');
let downArrow = document.querySelector('#downArrow');

let x = 0;

upArrow.onclick = () => {
  if(x > "-900"){
    x = x - 300;
    slide.style.top = x + "px";
  }
}

downArrow.onclick = () => {
  if(x < 0){
    x = x + 300;
    slide.style.top = x + "px";
  }
}