const ratingElems = document.querySelectorAll(".rating");
const submitBtn = document.getElementById("submit");
const ratings = document.querySelector(".rating--container");

ratings.addEventListener("click", (e) => {
  if (!e.target.classList.contains("rating")) {
    return;
  }
  ratingElems.forEach((elem) => {
    elem.classList.remove("rating--active");
    elem.classList.remove("rating--inactive");
    elem.classList.add("rating--inactive");
  });
  const ratingElem = e.target;
  ratingElem.classList.toggle("rating--active");
  ratingElem.classList.toggle("rating--inactive");
});

submitBtn.addEventListener("click", (e) => {
  const selectedRating = document.querySelector(".rating--active");
  if (selectedRating == null) {
    return;
  }
  console.log(selectedRating.innerText);
});
