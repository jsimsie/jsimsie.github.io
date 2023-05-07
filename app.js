let cart = []; // array to hold items in cart
let inventory = [ // array to hold available items for sale
  { name: "Item 1", price: 10.99 },
  { name: "Item 2", price: 15.99 },
  { name: "Item 3", price: 7.99 },
  { name: "Item 4", price: 20.99 },
  { name: "Item 5", price: 12.99 }
];

function addToCart(itemIndex) { // function to add item to cart
  let selectedItem = inventory[itemIndex];
  cart.push(selectedItem);
}

function removeFromCart(itemIndex) { // function to remove item from cart
  cart.splice(itemIndex, 1);
}

function calculateTotal() { // function to calculate total price of items in cart
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total;
}
