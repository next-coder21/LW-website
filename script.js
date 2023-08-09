function validte(){
        let x = document.forms["validate"]["name"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
      }
var loader = document.getElementById('preloader');
const fadeOutEffect = setInterval(() => {
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 1;
  } else {
    clearInterval(fadeEffect);
  }
}, 5000);
