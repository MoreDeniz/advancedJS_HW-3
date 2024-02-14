// const lookReviewsBtn = document.getElementById("lookReviews");

// // Переход на страницу отзывов
// if (lookReviewsBtn) {
//     lookReviewsBtn.addEventListener("click", function () {
//         window.location.href = "reviews.html";
//     });
// }

// const initialData = [];

// const container = document.querySelector(".container_review");
const productInput = document.querySelector("#product");
const reviewInput = document.querySelector("#review");
const addButton = document.querySelector("#add_review");
const localStorage = window.localStorage;

addButton.addEventListener("click", () => {
  if (localStorage.getItem(`${productInput.value}`) === null) {
    localStorage.setItem(`${productInput.value}`, "[]");  
  }

  const product = JSON.parse(localStorage.getItem(`${productInput.value}`));
  console.log(product);
  product.push(reviewInput.value);

  localStorage.setItem(`${productInput.value}`, JSON.stringify(product));
  productInput.value = reviewInput.value = "";
});

// function addReview() {
//     initialData.forEach((element) => {
//       // Элементы отзыва
//       let reviewBox = document.createElement("div");
//       let product = document.createElement("h3");
//       let review = document.createElement("p");
  
//       //
//       product.textContent = element.product;
//       review.textContent = element.reviews[0].text;
  
//       //
//       reviewBox.appendChild(product);
//       reviewBox.appendChild(review);
  
//       //
//       container.appendChild(reviewBox);
//     });
//   }

// button.addEventListener("click", () => {
//     try {
//         // Проверка длины
//         if (reviewInput.value.length < 5 || reviewInput.value.length > 500) {
//         throw new Error(
//             "Длина введенного отзыва не может быть менее 5 или более 500 символов!"
//         );
//     }
//    // Создаём элементы html для нового отзыва: div, h3, p
//    let reviewBox = document.createElement("div");
//    let product = document.createElement("h3");
//    let review = document.createElement("p");

//    // Помещаем введённые заголовок и текст
//    product.textContent = productInput.value;
//    review.textContent = reviewInput.value;

//    // Помещаем заголовок и текст в div
//    reviewBox.appendChild(product);
//    reviewBox.appendChild(review);

//    // Помещаем отзыв (div) в контейнер
//    container.appendChild(reviewBox);
//  } catch (error) {
//    // Сообщение об ошибке
//    errorMsg.textContent = error.message;
//  }
// });

// // Вызов функции
// addReview();
  