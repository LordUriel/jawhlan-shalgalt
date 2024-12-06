// Cart array to store the added items
let cart = [];

// Function to update cart count in navbar
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Function to update the cart items displayed in the "Products in cart" section
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items
    
    // Loop through the cart and add each item to the list
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(listItem);
    });
}

// Function to handle adding an item to the cart
function addToCart(item) {
    cart.push(item);
    updateCartCount();
    displayCartItems();
}

// Function to handle deleting an item from the cart
function deleteItem(itemIndex) {
    cart.splice(itemIndex, 1); // Remove the item at the specified index
    updateCartCount();
    displayCartItems();
}

// Function to handle the "Buy Now" button (For simplicity, just log the purchase)
function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your purchase!");
        cart = []; // Empty the cart after purchase
        updateCartCount();
        displayCartItems();
    }
}

// Handle "Add to Cart" button click
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.getElementById('add-to-cart-btn');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            const shoeItem = {
                name: 'Random shoe',
                price: 100,
            };
            addToCart(shoeItem);
        });
    }

    // Handle "Delete" button click
    const deleteButton = document.getElementById('delete-btn');
    if (deleteButton) {
        deleteButton.addEventListener('click', function() {
            const shoeItem = {
                name: 'Random shoe',
                price: 100,
            };
            const index = cart.findIndex(item => item.name === shoeItem.name && item.price === shoeItem.price);
            if (index !== -1) {
                deleteItem(index);
            } else {
                alert("Item not found in cart.");
            }
        });
    }

    // Handle "Buy Now" button click
    const buyNowButton = document.getElementById('buy-now-btn');
    if (buyNowButton) {
        buyNowButton.addEventListener('click', function() {
            buyNow();
        });
    }
});
