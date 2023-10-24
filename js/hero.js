// Dropdown on mouse hover
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 992px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

// Facts counter
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 2000,
});

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});
$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 10, "easeInOutExpo");
  return false;
});

// Hero carousel
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.querySelector(".carousel-card");
const carouselItems = carousel.querySelectorAll(".carousel-card > div");

let currentIndex = 0;
let intervalId;

function showItem(index) {
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function nextItem() {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  showItem(currentIndex);
}

function prevItem() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  showItem(currentIndex);
}

function startCarousel() {
  intervalId = setInterval(nextItem, 2500);
}

function stopCarousel() {
  clearInterval(intervalId);
}

showItem(currentIndex);
startCarousel();

nextBtn.addEventListener("click", () => {
  nextItem();
  stopCarousel();
});

prevBtn.addEventListener("click", () => {
  prevItem();
  stopCarousel();
});
