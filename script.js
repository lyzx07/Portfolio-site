// Wrap code inside $(document).ready()

$(document).ready(function () {
  const mql = window.matchMedia("(max-width: 768px)");
  let isSmallScreen = false;

  if (mql.matches) {
    isSmallScreen = true;
  }

  $(document).on("scroll", function () {
    if (!isSmallScreen) {
      $(".logo").css("left", Math.max(535 - 1 * window.scrollY, 5) + "px");
    }
  });
});

//code isnt working as hoped. wont return image to normal size when clicked a second time on mobile device

const images = document.querySelectorAll(".images");

images.forEach((image) => {
  let isEnlarged = false;

  image.addEventListener("click", () => {
    if (isEnlarged) {
      image.classList.remove("enlarged");
      isEnlarged = false;
    } else {
      image.classList.add("enlarged");
      isEnlarged = true;
    }
  });

  document.addEventListener("click", (event) => {
    if (!image.contains(event.target)) {
      image.classList.remove("enlarged");
      isEnlarged = false;
    }
  });
});
