export function ScrollLeft(e) {
  const $Slider = document.querySelectorAll(".container-slider-movie");
  const $buttonLeft = document.querySelectorAll(".button-left");
  const $buttonRight = document.querySelectorAll(".button-ringht");

  $Slider[0].scrollLeft += 410;
  console.log($Slider.scrollLeft);
  console.log($Slider.length);
  console.log($Slider);
}

export function ScrollRight(e) {
  const $Slider = document.querySelectorAll(".container-slider-movie");
  const $buttonLeft = document.querySelectorAll(".button-left");
  const $buttonRight = document.querySelectorAll(".button-ringht");

  $Slider[0].scrollLeft -= 410;
  console.log($Slider.scrollLeft);
}

