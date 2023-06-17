export function ScrollLeft(e) {
  const $Slider = document.querySelector(".slider-proximamente");
  $Slider.scrollLeft += 410;
  console.log($Slider.scrollLeft);
}

export function ScrollRinght(e) {
  const $Slider = document.querySelector(".slider-proximamente");
  $Slider.scrollLeft -= 410;
  console.log($Slider.scrollLeft);
}

