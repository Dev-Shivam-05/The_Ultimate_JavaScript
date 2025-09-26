let carouselItems = document.querySelectorAll(".carousel-item");
let index = 0;

const next = () => {
  carouselItems[index].classList.remove("active");
  if (index === carouselItems.length - 1) {
    index = 0;
  } else {
    index++;
  }
  carouselItems[index].classList.add("active");
  console.log(index);
};

const previous = () => {
  carouselItems[index].classList.remove("active");
  if (index <= 0) {
    index = carouselItems.length - 1;
  } else {
    --index;
  }
  carouselItems[index].classList.add("active");
};
