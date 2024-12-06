
let cart = [];


function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}


function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    
    
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(listItem);
    });
}


function addToCart(item) {
    cart.push(item);
    updateCartCount();
    displayCartItems();
}


function deleteItem(itemIndex) {
    cart.splice(itemIndex, 1); 
    updateCartCount();
    displayCartItems();
}


function buyNow() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your purchase!");
        cart = []; 
        updateCartCount();
        displayCartItems();
    }
}


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

   
    const buyNowButton = document.getElementById('buy-now-btn');
    if (buyNowButton) {
        buyNowButton.addEventListener('click', function() {
            buyNow();
        });
    }
});
