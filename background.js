//TODO figure out how to pass the string of image into fucntion
// document.getElementById("background").style.backgroundImage = "url(\'" + imagePath + "\')"

function changeBkgPurp() {
  document.getElementById("background").style.backgroundImage = "url('images/mountain_purple.jpg')";
}

function changeBkgRed() {
  document.getElementById("background").style.backgroundImage = "url('images/mountain_red.jpg')";
}

function changeBkgTeal() {
  document.getElementById("background").style.backgroundImage = "url('images/mountain_teal.jpg')";
}

function changeBkgGreen() {
  document.getElementById("background").style.backgroundImage = "url('images/mountain_green.jpg')";
}

function reset() {
  document.getElementById("background").style.backgroundImage = "url('images/mountain.jpg')";
}
