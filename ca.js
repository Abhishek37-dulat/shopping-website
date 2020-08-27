function men() {
  let a=document.getElementById('men_t');
  a.style.display="block";
}
function men_o() {
  let a=document.getElementById('men_t');
  a.style.display="none";
}
function women() {
  let a=document.getElementById('women_t');
  a.style.display="block";
}
function women_o() {
  let a=document.getElementById('women_t');
  a.style.display="none";
}
function kids() {
  let a=document.getElementById('kids_t');
  a.style.display="block";
}
function kids_o() {
  let a=document.getElementById('kids_t');
  a.style.display="none";
}
function home() {
  let a=document.getElementById('home_t');
  a.style.display="block";
}
function home_o() {
  let a=document.getElementById('home_t');
  a.style.display="none";
}


function ess() {
  let a=document.getElementById('ess_t');
  a.style.display="block";
}
function ess_o() {
  let a=document.getElementById('ess_t');
  a.style.display="none";
}

function pro() {
  let a=document.getElementById('login_t');
  a.style.display="block";
}
function pro_o() {
  let a=document.getElementById('login_t');
  a.style.display="none";
}
const slideshowImages = document.querySelectorAll(".middle_image1 img");
const slideshowImages1 = document.querySelectorAll(".middle_discount1 img");

const nextImageDelay = 3000;
const nextImageDelay1 = 3000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)
let currentImageCounter1 = 0;

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;
slideshowImages1[currentImageCounter1].style.opacity = 1;

setInterval(nextImage, nextImageDelay);
setInterval(nextImage1, nextImageDelay1);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;
  // slideshowImages1[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
  // currentImageCounter = (currentImageCounter+1) % slideshowImages1.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
  // slideshowImages1[currentImageCounter].style.opacity = 1;
}
function nextImage1() {
  // slideshowImages[currentImageCounter].style.display = "none";
  // slideshowImages[currentImageCounter].style.opacity = 0;
  slideshowImages1[currentImageCounter1].style.opacity = 0;

  // currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
  currentImageCounter1 = (currentImageCounter1+1) % slideshowImages1.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  // slideshowImages[currentImageCounter].style.opacity = 1;
  slideshowImages1[currentImageCounter1].style.opacity = 1;
}


function left_me() {
  let a = document.getElementById('side_code');
  let b = document.getElementById('side_left_code');
  a.style.display = "none";
  b.style.display = "block";
}
function right_me() {
  let b = document.getElementById('side_code');
  let a = document.getElementById('side_left_code');
  a.style.display = "none";
  b.style.display = "block";
}

function table_men_1() {
  location.replace("main.html")
}
function ca() {
  location.replace("ca.html")
}
function email() {
  let a = document.getElementById('login_b');
  let b = document.getElementById('create_b');
  let c = document.getElementById('number_1');
  let d = document.getElementById('number_1_p');
  if (d.value == "11906997") {
      location.replace("main.html")
      a.style.display = "none";
      b.style.display = "none";
  }
  else {
    alert("Incorrect Email");
  }
}
function l_b() {
  location.replace("login.html")
}
