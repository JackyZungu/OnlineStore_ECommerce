// JavaScript source code
const buyNowButtons = document.querySelectorAll('.buy-now-button');

for (const buyNowButton of buyNowButtons) {
    buyNowButton.addEventListener('click', (event) => {
        const productId = event.target.dataset.productId;
        addToCart(productId);
    });
}

function addToCart(productId) {
    // Add the product to the cart
}
