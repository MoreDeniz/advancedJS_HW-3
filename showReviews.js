const showReviewsList = document.querySelector(".show-reviews-list");
const localStorage = window.localStorage;

const productNames = [];

for (let i = 0; i < localStorage.length; i++) {
    productNames.push(localStorage.key(i));
}
    productNames.forEach((product) => {
        // Создаём элементы html для нового отзыва: div, h3, ul
        let reviewBox = document.createElement("div");
        let nameP = document.createElement("p");
        let ul = document.createElement("ul");
        const productViews = JSON.parse(localStorage.getItem(product));

        reviewBox.append(nameP, ul);
        reviewBox.addEventListener("click", ({target}) => {
            if (target.tagName === "P") {
                if (ul.innerHTML !== "") {
                    ul.innerHTML = "";
                } else {
                    productViews.forEach((view) => {
                        ul.append(updateReviewsList(product, view, productViews))
                    });
                }
            }
        });

        nameP.textContent = `${product}`;
        showReviewsList.append(reviewBox);
    })
    

    const updateReviewsList = (product, view, productViews) => {
        const li = document.createElement("li");
        li.setAttribute('id', 'li-review');
        const span = document.createElement("span");
        const removeBtn = document.createElement("button");
        removeBtn.setAttribute('id', 'remove-btn');

        span.innerText = `${view}`;
        removeBtn.innerText = "Удалить отзыв";
        removeBtn.addEventListener("click", () => {
            productViews.splice(productViews.indexOf(view), 1);
            localStorage.setItem(product, JSON.stringify(productViews));
            removeBtn.parentElement.remove();
            if (productViews.length === 0) {
                localStorage.removeItem(product);
            }
        });

        li.append(span, removeBtn);
        return li;
    }

// Переход на домашнюю страницу 
    const backBtn = document.getElementById("back");

if (backBtn) {
    backBtn.addEventListener("click", function () {
        window.location.href = "index.html";
    });
}

