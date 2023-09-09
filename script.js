function changeImage(element) {
  element.setAttribute(
    "src",
    "https://advance2-exam.netlify.app/assets/img-header2.png"
  );
}

function changeImageBack(element) {
  element.setAttribute(
    "src",
    "https://advance2-exam.netlify.app/assets/img-header1.png"
  );
}

var btnLike = document.querySelector("#green");
var btnDislike = document.querySelector("#red");

btnLike.onclick = likeColor;
btnDislike.onclick = dislikeColor;

function likeColor() {
  if (btnDislike.classList.contains("red")) {
    btnDislike.classList.remove("red");
  }

  this.classList.toggle("green");
}

function dislikeColor() {
  if (btnLike.classList.contains("green")) {
    btnLike.classList.remove("green");
  }

  this.classList.toggle("red");
}
