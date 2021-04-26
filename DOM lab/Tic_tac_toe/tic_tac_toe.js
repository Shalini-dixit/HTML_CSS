
var items = document.querySelectorAll(".box");

items.forEach(box => {
    box.addEventListener('click', clicks)
    box.addEventListener('dblclick', clicks)
});

var clickCount = 0;

var timeout = 500;

function clicks(evt) {
      clickCount++;
      if (clickCount == 1) {
        setTimeout(function(){
          if(clickCount == 1) {
              
            singleClick(evt);
          } else {
            doubleClick(evt);
          }
          clickCount = 0;
        }, timeout || 300);
      }
}


function singleClick(evt) {
    evt.target.textContent = "x";
   // evt.target.style.color = "red";
    
}

function doubleClick(evt) {
    evt.target.textContent = "o";
    //evt.target.style.color = "blue";
}

