// Array to store the cart items
var cartItems = [];

// Function to add an item to the cart
function addToCart(itemIndex) {
  var item = items[itemIndex];

  // Check if the item already exists in the cart
  var existingItem = cartItems.find(function (cartItem) {
    return cartItem.id === item.id;
  });

  if (existingItem) {
    // Item already exists in the cart, increment the quantity
    existingItem.quantity++;
  } else {
    // Item does not exist in the cart, add it with a quantity of 1
    cartItems.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    });
  }

  // Update the cart count
  updateCartCount();

  // Update the cart items display
  updateCartItems();
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
  // Find the index of the item in the cart
  var itemIndex = cartItems.findIndex(function (item) {
    return item.id === itemId;
  });

  if (itemIndex !== -1) {
    // Item found in the cart, remove it
    cartItems.splice(itemIndex, 1);

    // Update the cart count
    updateCartCount();

    // Update the cart items display
    updateCartItems();
  }
}

// Function to update the cart count
function updateCartCount() {
  var cartCountElement = document.getElementById('cart-count');
  var cartCount = 0;

  cartItems.forEach(function (item) {
    cartCount += item.quantity;
  });

  cartCountElement.textContent = cartCount;
}

// Function to update the cart items display
function updateCartItems() {
  var cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  cartItems.forEach(function (item) {
    var cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
     border-innerWidth:2px
    var itemNameElement = document.createElement('span');
    itemNameElement.textContent = item.name;

    var itemPriceElement = document.createElement('span');
    itemPriceElement.textContent = '$' + item.price;

    var removeBtnElement = document.createElement('button');
    removeBtnElement.classList.add('remove-btn');
    removeBtnElement.textContent = 'Remove';
    removeBtnElement.addEventListener('click', function () {
      removeFromCart(item.id);
    });

    cartItemElement.appendChild(itemNameElement);
    cartItemElement.appendChild(itemPriceElement);
    cartItemElement.appendChild(removeBtnElement);

    cartItemsElement.appendChild(cartItemElement);
  });
}

// Sample data for items
var items = [
  {
    id: 1,
    name: 'Shoe 1',
    price: 49.99,
    image: 'https://happygentleman.com/wp-content/uploads/2019/11/80058-6-mens-shoes-black2.jpg',
  },
  {
    id: 2,
    name: 'Shoe 2',
    price: 59.99,
    image: 'https://i5.walmartimages.com/asr/d84a2996-8edf-4750-8738-65048e13d707_1.7450ecb6ce57a5ba0445ce8acf3e618d.jpeg',
  },
  // Add more items as needed
  {
    id: 3,
    name: 'Shoe 3',
    price: 69.99,
    image: 'https://pngimg.com/uploads/women_shoes/women_shoes_PNG7472.png',
  },
  {
    id: 4,
    name: 'Shoe 4',
    price: 79.99,
    image: 'https://images.freeimages.com/images/large-previews/b79/shoes-1422387.jpg',
  },
  {
    id: 5,
    name: 'Shoe 5',
    price: 89.99,
    image: 'http://4.bp.blogspot.com/-35OTXtNOH98/VpDGZNjnPoI/AAAAAAAAOww/zGGuCJYdurQ/s1600/SHOES16.jpg',
  },
  {
    id: 6,
    name: 'Shoe 6',
    price: 99.99,
    image: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Air-Jordan-Shoes-Photo.jpg',
  },
  {
    id: 7,
    name: 'Shoe 7',
    price: 95.99,
    image: 'https://tse3.mm.bing.net/th?id=OIP.KxmSN9cavfpHW6B39SivYQHaFj&pid=Api&P=0&h=180',
  },
  {
    id: 8,
    name: 'Shoe 8',
    price: 97.99,
    image: 'https://w7.pngwing.com/pngs/548/331/png-transparent-unpaired-green-and-b-lack-nike-air-max-shoe-nike-free-nike-mag-shoe-nike-running-shoes-game-girls-outdoor-shoe.png',
  },
];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart-btn').forEach(function (button, index) {
  button.addEventListener('click', function () {
    addToCart(index);
  });
});

// for navigating to other html pages
// 1.running section
document.getElementById('runningBtn').addEventListener('click', function() {
  window.location.href = 'running.html';
});

// 2.SPORTSTYLE section
document.getElementById('sportBtn').addEventListener('click', function() {
  window.location.href = 'sport.html';
});

// 3.apparel section
document.getElementById('apparelBtn').addEventListener('click', function() {
  window.location.href = 'apparel.html';
});

// 4.performance section
document.getElementById('performanceBtn').addEventListener('click', function() {
  window.location.href = 'performance.html';
});