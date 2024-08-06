const OBSERVER = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const HIDDEN = document.querySelectorAll(".hidden");
HIDDEN.forEach((el) => OBSERVER.observe(el));
const HIDDEN_REVERSED = document.querySelectorAll(".hidden__reversed");
HIDDEN_REVERSED.forEach((el) => OBSERVER.observe(el));

const OBSERVER_SCALE = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show__scale");
    } else {
      entry.target.classList.remove("show__scale");
    }
  });
});

const HIDDEN_SCALE = document.querySelectorAll(".hidden__scale");
HIDDEN_SCALE.forEach((el) => OBSERVER_SCALE.observe(el));
