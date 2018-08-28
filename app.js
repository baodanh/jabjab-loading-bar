const loadingBarItemEl = document.querySelector(".loading-bar__item");

let width = 1;
let loadingBar = setInterval(function() {
  width++;
  loadingBarItemEl.style.width = width + "%";
  if (width >= 100) {
    clearInterval(loadingBar);
  }
}, 15)

// MORE FUNCTION:
// Add buttons to determine when the bar ends loading