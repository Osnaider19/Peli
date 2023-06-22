export function ScrollLeft(e) {
  const $Slider = document.querySelectorAll(".container-slider-movie");
  const $buttonLeft = document.querySelectorAll(".button-left");
  const $buttonRight = document.querySelectorAll(".button-ringht");

  for (let i = 0; i < $Slider.length; i++) {
    if ($Slider[i] && $buttonLeft[i]) {
      $Slider[i].scrollLeft += 410;
    }
  }
}

export function ScrollRight(e) {
  const $Slider = document.querySelectorAll(".container-slider-movie");
  const $buttonLeft = document.querySelectorAll(".button-left");
  const $buttonRight = document.querySelectorAll(".button-ringht");
  for (let i = 0; i < $Slider.length; i++) {
    if ($Slider[i] && $buttonRight[i]) {
      $Slider[i].scrollLeft -= 410;
    }
  }
}

