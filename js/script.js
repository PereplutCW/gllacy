var link = document.querySelector(".feedback_open");
      
var popup = document.querySelector(".feedback_form");

var overlay = document.querySelector(".overlay");

var close = popup.querySelector(".feedback_close");

var form = popup.querySelector("form");

var name = popup.querySelector("[name=name]");

var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("feedback_show");
  overlay.classList.add("overlay_show");
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("feedback_show");
  popup.classList.remove("feedback_error");
  overlay.classList.remove("overlay_show");
});

form.addEventListener("submit", function (event) {
  if (!name.value || !email.value) {
    event.preventDefault();
    popup.classList.add("feedback_error"); 
  } 
});

 window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback_show")) {            
    popup.classList.remove("feedback_show");
    popup.classList.remove("feedback_error");                          
    }
  }
});

 window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (overlay.classList.contains("overlay_show")) {           
      overlay.classList.remove("overlay_show"); }
  }
});