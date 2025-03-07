// menu filter
function filterProducts() {
  var select = document.getElementById("category-select");
  var category = select.value;
  var products = document.getElementsByClassName("product-card");

  for (var i = 0; i < products.length; i++) {
    products[i].style.display = 'none'; // Hide all products

    if (category === 'all' || products[i].id === category) {
      products[i].style.display = 'block'; // Show products of selected category
    }
  }
}
// Initially show all products
filterProducts();




/// Scroll Reveal ///

// base.html
document.addEventListener("DOMContentLoaded", function () {
  // Initialize ScrollReveal
  ScrollReveal().reveal('.logo', {
    duration: 1000,
    origin: 'left',
    distance: '50px',
    reset: true // Ensure animation happens when scrolling up or down
  });

  ScrollReveal().reveal('.thenavlinks li', {
    interval: 200,
    duration: 800,
    origin: 'top',
    distance: '20px',
    reset: true // Ensure animation happens when scrolling up or down
  });

  ScrollReveal().reveal('.content, .cart-popup', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    reset: true // Ensure animation happens when scrolling up or down
  });

  ScrollReveal().reveal('.footer-link', {
    duration: 800,
    interval: 200,
    origin: 'right',
    distance: '30px',
    reset: true // Ensure animation happens when scrolling up or down
  });
});





//base2.html
document.addEventListener("DOMContentLoaded", function () {
  // ScrollReveal animations
  ScrollReveal().reveal('.logo', {
    duration: 1000,
    origin: 'left',
    distance: '50px',
    reset: true // Ensures animation re-triggers when scrolling up or down
  });

  ScrollReveal().reveal('.thenavlinks li', {
    interval: 200,
    duration: 800,
    origin: 'top',
    distance: '20px',
    reset: true
  });

  ScrollReveal().reveal('.thecontent', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    reset: true
  });

  ScrollReveal().reveal('.footer-link', {
    duration: 800,
    interval: 200,
    origin: 'right',
    distance: '30px',
    reset: true
  });
});



//contact.html
document.addEventListener("DOMContentLoaded", function () {
  // Animate contact header
  ScrollReveal().reveal('.contact-header', {
    duration: 1000,
    origin: 'top',
    distance: '50px',
    reset: true
  });

  // Animate contact details
  ScrollReveal().reveal('.contact-details > div', {
    interval: 200,
    duration: 800,
    origin: 'left',
    distance: '30px',
    reset: true
  });

  // Animate images
  ScrollReveal().reveal('.contact-sec img', {
    duration: 1000,
    origin: 'right',
    distance: '50px',
    reset: true
  });
});



//menu.html
document.addEventListener("DOMContentLoaded", function () {
//   // Reveal category select dropdown
//   ScrollReveal().reveal('.category-select', {
//     duration: 1000,
//     origin: 'top',
//     distance: '50px',
//     reset: true
//   });

// //  Reveal product cards
//   ScrollReveal().reveal('.product-card', {
//     interval: 200, // Delay between revealing each card
//     duration: 800,
//     origin: 'bottom',
//     distance: '30px',
//     reset: true
//   });

  //Reveal modal content (when it's initially displayed)
  ScrollReveal().reveal('.modal-flex-container', {
    duration: 800,
    origin: 'left',
    distance: '50px',
    reset: true
  });
});




///Track your order page
function showTrackOrderPopup() {
  document.getElementById('trackOrderPopup').style.display = 'flex';
}

function closeTrackOrderPopup() {
  document.getElementById('trackOrderPopup').style.display = 'none';
}
