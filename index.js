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
  changeToRatingState(selectedRating.innerText);
});

function changeToRatingState(rating) {
  const container = document.querySelector(".container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.style.textAlign = "center";
  const thankYouImg = document.createElement("img");
  thankYouImg.src = "./images/illustration-thank-you.svg";
  container.appendChild(thankYouImg);

  const ratingText = document.createElement("span");
  ratingText.innerText = `You selected ${rating} out of 5`;
  ratingText.classList.add("rating--summary");
  container.appendChild(ratingText);

  const thankYouTitle = document.createElement("h1");
  thankYouTitle.innerText = "Thank you!";
  container.appendChild(thankYouTitle);

  const thankYouText = document.createElement("p");
  thankYouText.innerText =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
  container.appendChild(thankYouText);
}
