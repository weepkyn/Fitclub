const scrollButton = document.getElementById("scrollButton");

window.addEventListener("scroll", () => {
  scrollButton.style.display = window.scrollY > 1000 ? "block" : "none";
});

scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function showDiscountPopup() {
  const popup = document.getElementById("popup-discount");
  const countdown = document.getElementById("countdown");
  let timer = 60;

  popup.style.display = "block";
  countdown.textContent = timer;
  const countdownTimer = setInterval(() => {
    timer--;
    countdown.textContent = timer;

    if (timer <= 0) {
      clearInterval(countdownTimer);
      popup.style.display = "none";
    }
  }, 1000);
}

const closeButton = document.getElementById("close-popup");
closeButton.addEventListener("click", () => {
  document.getElementById("popup-discount").style.display = "none";
});

window.addEventListener("load", showDiscountPopup);
