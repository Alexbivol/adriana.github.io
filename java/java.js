let cartItems = [];

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    updateCart();
}
 
function updateCart() {
    const cartList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    cartList.innerHTML = "";
    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.classList.add("remove-button"); // Add a class for styling
        removeButton.onclick = function() {
            removeFromCart(i); // Pass the index of the item to remove
        };

        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
        totalPrice += item.price;
    }

    totalPriceElement.textContent = `Total: $${totalPrice}`;
}

function removeFromCart(index) {
    cartItems.splice(index, 1); // Remove item from the cartItems array
    updateCart(); // Refresh the cart display
}



const productContainer = document.getElementById("product-container");
const prevBtn = document.getElementById("prev-product-btn");
const nextBtn = document.getElementById("next-product-btn");
const productWidth = 280; // Set the width of each product in pixels
let currentPosition = 0; // Track the current scroll position

prevBtn.addEventListener("click", () => {
    currentPosition += productWidth; // Move to the right (show previous product)
    if (currentPosition > 0) currentPosition = 0; // Reset to start if at the beginning
    productContainer.style.transform = `translateX(${currentPosition}px)`; 
});

nextBtn.addEventListener("click", () => {
    const maxScroll = -(productContainer.scrollWidth - productContainer.offsetWidth); // Calculate maximum scroll
    currentPosition -= productWidth; // Move to the left (show next product)
    if (currentPosition < maxScroll) currentPosition = maxScroll; // Stop at the end
    productContainer.style.transform = `translateX(${currentPosition}px)`;
});



// ... your existing JavaScript code ...

prevBtn.addEventListener("click", () => {
    currentPosition += productWidth; // Move to the right (show previous product)
    if (currentPosition > 0) currentPosition = 0; // Reset to start if at the beginning
    productContainer.style.transform = `translateX(${currentPosition}px)`; 
});

nextBtn.addEventListener("click", () => {
    const maxScroll = -(productContainer.scrollWidth - productContainer.offsetWidth); // Calculate maximum scroll
    currentPosition -= productWidth; // Move to the left (show next product)
    if (currentPosition < maxScroll) currentPosition = maxScroll; // Stop at the end
    productContainer.style.transform = `translateX(${currentPosition}px)`;
});

// ... rest of your JavaScript code

