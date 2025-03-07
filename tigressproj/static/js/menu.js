// Function to open the modal and populate it with the clicked dish's data
function openDishModal(imageUrl, name, price, description, dishId) {
    const modal = document.getElementById('dishModal');
    const modalImage = document.getElementById('modalDishImage');
    const modalName = document.getElementById('modalDishName');
    const modalPrice = document.getElementById('modalDishPrice');
    const modalDescription = document.getElementById('modalDishDescription');
    
    let quantity = 1;
    document.getElementById('quantity').textContent = quantity;

    modalImage.src = imageUrl;
    modalName.textContent = name;
    modalPrice.textContent = `£${price.toFixed(2)}`;
    modalDescription.textContent = description;

    modal.style.display = 'block';

    document.getElementById('incrementBtn').onclick = function() {
        quantity++;
        document.getElementById('quantity').textContent = quantity;
    };
    
    document.getElementById('decrementBtn').onclick = function() {
        if (quantity > 1) {
            quantity--;
            document.getElementById('quantity').textContent = quantity;
        }
    };

    document.getElementById('addToCartBtn').onclick = function() {
        const selectedProtein = document.getElementById('proteinSelect').value;
        addToCart(dishId, name, price, quantity, selectedProtein);
    };
}

function closeModal() {
    const modal = document.getElementById("dishModal"); // Update with the correct modal ID if different
    if (modal) {
        modal.style.display = "none";
    }
}

// Function to add a dish to the cart
function addToCart(dishId, name, price, quantity, protein) {
    const existingItem = cartItems.find(dish => dish.dishId === dishId && dish.protein === protein);
    
    if (existingItem) {
        // If the dish exists, update its quantity
        existingItem.quantity += quantity;
    } else {
        // Otherwise, add a new dish object
        cartItems.push({ dishId, name, price, quantity, protein });
    }

    saveCart(); // Save updated cart to localStorage
    updateCartBadge();
    updateCartPopup();
}


// Load cart items from localStorage or initialize as an empty array
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Update cart badge based on items in cartItems array
function updateCartBadge() {
    const cartBadge = document.getElementById("cartBadge");
    let totalItems = 0;

    // Calculate the total quantity of items in the cart
    cartItems.forEach(dish => {
        totalItems += dish.quantity;
    });

    // Update badge text and visibility
    if (totalItems > 0) {
        cartBadge.textContent = totalItems;
        cartBadge.style.display = 'inline-block';
    } else {
        cartBadge.style.display = 'none';
    }
}

// Update cart popup with current items and total cost
function updateCartPopup() {
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    cartItemsContainer.innerHTML = ""; // Clear existing items

    let total = 0;

    cartItems.forEach((dish, index) => {
        total += dish.price * dish.quantity;

        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-dish");

        // Use inline `onclick` with the `index` of the item
        itemElement.innerHTML = `
            <div>
                <strong>${dish.name}</strong> - £${dish.price.toFixed(2)} 
                ${dish.protein ? `(${dish.protein})` : ""}
            </div>
            <div>
                <button class="decrement-btn" onclick="decrementQuantity(${index})">-</button>
                <span class="quantity">${dish.quantity}</span>
                <button class="increment-btn" onclick="incrementQuantity(${index})">+</button>
            </div>
        `;

        cartItemsContainer.appendChild(itemElement);
    });

    // Update total price
    document.getElementById("cartTotal").textContent = `£${total.toFixed(2)}`;
}

    // Attach event listeners to the increment and decrement buttons
    // document.querySelectorAll(".increment-btn").forEach(button => {
    //     button.addEventListener("click", event => {
    //         const dishId = button.getAttribute("data-dish-id");
    //         const protein = button.getAttribute("data-protein");
    //         increaseQuantity(dishId, protein);
    //     });
    // });

    // document.querySelectorAll(".decrement-btn").forEach(button => {
    //     button.addEventListener("click", event => {
    //         const dishId = button.getAttribute("data-dish-id");
    //         const protein = button.getAttribute("data-protein");
    //         decreaseQuantity(dishId, protein);
    //     });
    // });

// Save cart to localStorage
function saveCart() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Load cart on page load and initialize badge and popup
document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    updateCartPopup();
});

function incrementQuantity(index) {
    // Increment quantity for the specified item
    cartItems[index].quantity += 1;

    saveCart(); // Save updated cart to localStorage
    updateCartPopup(); // Re-render cart popup
    updateCartBadge(); // Update the cart badge
}

function decrementQuantity(index) {
    // Decrement quantity or remove the item if quantity reaches 0
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
    } else {
        // Remove the item if quantity reaches 0
        cartItems.splice(index, 1);
    }

    saveCart(); // Save updated cart to localStorage
    updateCartPopup(); // Re-render cart popup
    updateCartBadge(); // Update the cart badge
}


function openCartPopup() {
    document.getElementById("cartPopup").style.display = "block";
    updateCartPopup(); // Ensure the popup is updated when opened
}

function closeCartPopup() {
    document.getElementById("cartPopup").style.display = "none";
}

function checkout() {
    alert("Proceeding to checkout!");
}
