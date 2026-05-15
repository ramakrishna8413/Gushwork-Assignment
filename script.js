const images = [

  "assets/images/workers.jpg",

  "assets/images/nav.png",

  "assets/images/workers.jpg"

];

let currentIndex = 0;

const sliderImage =
document.getElementById("sliderImage");


function showImage(){

  sliderImage.src =
  images[currentIndex];

}


function nextImage(){

  currentIndex++;

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  showImage();

}


function prevImage(){

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  showImage();

}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
}

const openDownloadPopupBtn = document.getElementById("openDownloadPopupBtn");
const closeDownloadPopupBtn = document.getElementById("closeDownloadPopupBtn");
const downloadPopup = document.getElementById("downloadPopup");

const openQuotePopupBtn = document.getElementById("openQuotePopupBtn");
const closeQuotePopupBtn = document.getElementById("closeQuotePopupBtn");
const quotePopup = document.getElementById("quotePopup");

if (openDownloadPopupBtn && closeDownloadPopupBtn && downloadPopup) {
  openDownloadPopupBtn.addEventListener("click", () => {
    downloadPopup.style.display = "flex";
  });

  closeDownloadPopupBtn.addEventListener("click", () => {
    downloadPopup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === downloadPopup) {
      downloadPopup.style.display = "none";
    }
  });
}

if (openQuotePopupBtn && closeQuotePopupBtn && quotePopup) {
  openQuotePopupBtn.addEventListener("click", () => {
    quotePopup.style.display = "flex";
  });

  closeQuotePopupBtn.addEventListener("click", () => {
    quotePopup.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === quotePopup) {
      quotePopup.style.display = "none";
    }
  });
}