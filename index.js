function initializeCarousel(options) {
  const carouselEl = document.querySelector(options.carouselSelector);
  const carouselListItems = carouselEl.querySelectorAll("*");
  const carouselContainer = document.querySelector(options.containerSelector);
  const prevButton = document.querySelector(options.prevButtonSelector);
  const nextButton = document.querySelector(options.nextButtonSelector);

  let scrollWidth = 0;
  let offsetwidth = 0;
  let carouselLength = 0;
  let currentLength = 0;

  let isDragging = false;
  let startX = 0;
  let deltaX = 0;

  function getRandomBg() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color = `rgb(${red},${green},${blue})`;
    return color;
  }

  if (carouselEl) {
    (async function () {
      let maxHeight = 0;
      carouselListItems.forEach((each) => {
        let background = getRandomBg();
        if (maxHeight < each.offsetHeight) maxHeight = each.offsetHeight;
        each.style.background = background;
      });
      carouselContainer.style.height = maxHeight + "px";
      scrollWidth = carouselEl.scrollWidth;
      offsetwidth = carouselEl.offsetWidth;
      carouselLength = Math.round(scrollWidth / offsetwidth) - 1;
      carouselListItems[0].classList.add("carousel-active");
    })();
  }

  prevButton.addEventListener("click", () => {
    carouselListItems[currentLength].classList.remove("carousel-active");
    if (currentLength > 0) {
      currentLength--;
      slideCarousel();
    } else {
      currentLength = options.loop ? carouselLength : 0;
      slideCarousel();
    }
  });

  nextButton.addEventListener("click", () => {
    carouselListItems[currentLength].classList.remove("carousel-active");
    if (currentLength < carouselLength) {
      currentLength++;
      slideCarousel();
    } else {
      currentLength = options.loop ? 0 : carouselLength;
      slideCarousel();
    }
  });

  carouselEl.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    carouselEl.style.transition = "none";
  });

  carouselEl.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    deltaX = currentX - startX;
    carouselEl.style.transform = `translateX(${deltaX}px)`;
  });

  carouselEl.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    carouselEl.style.transition = "transform 0.3s ease"; // Add a transition effect
    if (deltaX > 50) {
      currentLength--;
    } else if (deltaX < -50) {
      currentLength++;
    }
    slideCarousel();
  });

  function slideCarousel() {
    const translateX = -currentLength * 100;
    carouselEl.style.transform = `translateX(${translateX}%)`;
    carouselListItems[currentLength].classList.add("carousel-active");
  }
}

// Example of initializing the carousel with options
initializeCarousel({
  carouselSelector: "[data-carousel]",
  containerSelector: ".carousel-container",
  prevButtonSelector: ".prev-button",
  nextButtonSelector: ".next-button",
  loop: false, // Enable looping
  drag: true, // Enable dragging
});
