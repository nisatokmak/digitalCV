window.onload = main;

function main() {
  startSlideshowAnimation();
}

function startSlideshowAnimation() {
  setInterval(changeActiveImage, 4000);
}

function changeActiveImage() {
  const images = document.querySelectorAll(".slideshow-container > img");

  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains("show")) {
      images[i].classList.remove("show");
      let nextIndex = (i + 1) % images.length;
      images[nextIndex].classList.add("show");
      break;
    }
  }
}
