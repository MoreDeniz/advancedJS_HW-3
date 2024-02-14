const showReviewsList = document.querySelector(".show-reviews-list");
const localStorage = window.localStorage;

const productNames = [];
for (let i = 0; i < localStorage.length; i++) {
    productNames.push(localStorage.key(i));
}
    productNames.forEach((product) => {
        // Создаём элементы html для нового отзыва: div, h3, p
        let reviewBox = document.createElement("div");
        let name = document.createElement("h3");
        let ul = document.createElement("ul");
        const productReviews = JSON.parse(localStorage.getItem(product));

        reviewBox.append(name, ul);
        reviewBox.addEventListener("click", ({target}) => {
            if (target.tagName === "P") {
                if (ul.innerHTML !== "") {
                    ul.innerHTML = "";
                } else {
                    productReview.forEach((view) => {
                        ul.append(updateReviewsList(product, view, productReviews))
                    });
                }
            }
        });
        name.textContent = `${product}`;
        showReviewsList.append(reviewBox);
    })

    const updateReviewsList = (product, view, productReviews) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        const removeBtn = document.createElement("button");

        span.innerText = `${view}`;
        removeBtn.innerText = "Удалить отзыв";
        removeBtn.addEventListener("click", () => {
            productReviews.indexOf(view), 1;
            localStorage.setItem(product, JSON.stringify(productReviews));
            removeBtn.parentElement.remove();
            if (productReviews.length === 0) {
                localStorage.removeItem(product);
            }
        });

        li.append(span, removeBtn);
    }


