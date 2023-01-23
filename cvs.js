
function bigImg(x) {
  x.style.height = "360px";
  x.style.width = "360px";
}

function normalImg(x) {
    x.style.height = "120px";
    x.style.width = "120px";
  }

function myFunction() {
    var x = document.getElementById("demo");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}