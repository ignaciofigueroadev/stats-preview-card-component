const tooltipImage = document.querySelector(".tooltip__img");
const tooltip = document.querySelector(".tooltip__text");

tooltipImage.addEventListener("click", () => {
  tooltip.classList.toggle("visible");
});
