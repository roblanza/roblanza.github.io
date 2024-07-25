// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal
var img = document.getElementsByClassName("dvd")[0];
var modalImg = document.getElementById("dvd");
var modalImgSrc = "img/dvd.jpg"; // replace with the source of the modal image
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = modalImgSrc;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}