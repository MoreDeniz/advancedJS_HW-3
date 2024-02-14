const addReviewsBtn = document.getElementById("addReview");

// Переход на страницу добавления отзывов
if (addReviewsBtn) {
    addReviewsBtn.addEventListener("click", function () {
        window.location.href = "addReview.html";
    });
}

const showReviewsBtn = document.getElementById("showReviews");

// Переход на страницу отзывов
if (showReviewsBtn) {
    showReviewsBtn.addEventListener("click", function () {
        window.location.href = "showReviews.html";
    });
}