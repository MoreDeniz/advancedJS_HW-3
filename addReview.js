const productInput = document.querySelector("#product");
const reviewInput = document.querySelector("#review");
const addButton = document.querySelector("#add_review");
const localStorage = window.localStorage;

addButton.addEventListener("click", () => {
  //сохраняем в localStorage
  if (localStorage.getItem(`${productInput.value}`) === null) {
    localStorage.setItem(`${productInput.value}`, "[]");
  }

  const product = JSON.parse(localStorage.getItem(`${productInput.value}`));
  console.log(product);
  product.push(reviewInput.value);

  localStorage.setItem(`${productInput.value}`, JSON.stringify(product));
  // productInput.value = reviewInput.value = "";
  productInput.value = "";
  reviewInput.value = "";
});

// Переход на страницу отзывов
const showReviewsBtn = document.getElementById("showReviews");

if (showReviewsBtn) {
  showReviewsBtn.addEventListener("click", function () {
    window.location.href = "showReviews.html";
  });
}
