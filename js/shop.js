// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
},
{
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
},
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;
var cartList = document.getElementById("cart_list");
var totalPrice = document.getElementById("total_price");

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  let itemIndex = products.findIndex((item) => item.id === id);
  let itemToAdd = products[itemIndex];

  // 2. Add found product to the cart array
  let itemCartIndex = cart.findIndex((item) => item.id === id);
  if (cart.length < 1 || itemCartIndex < 0) {
    itemToAdd.quantity = 1;
    cart.push(itemToAdd);
  } else cart[itemCartIndex].quantity++;
}

// Exercise 2
function cleanCart() {
  cart.splice(0);  
  cartList.innerHTML = "";  
  totalPrice.innerHTML = "0";
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
  }
  return totalPrice;
}

// Exercise 4
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (let i = 0; i < cart.length; i++) {
    let actualItem = cart[i];

    if (actualItem.offer && actualItem.quantity >= actualItem.offer.number) {
      actualItem.subtotalWithDiscount =
        (actualItem.price -
          (actualItem.offer.percent * actualItem.price) / 100) *
        actualItem.quantity;
    } else {
      actualItem.subtotalWithDiscount = actualItem.price * actualItem.quantity;
    }
  }
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    let newItemRow = document.createElement("tr");
    applyPromotionsCart();

    newItemRow.innerHTML = `
    <th scope="row">${item.name}</th>
    <td>${item.price}</td>
    <td>${item.quantity}</td>
    <td>${item.subtotalWithDiscount.toFixed(2)}</td>
    `;
    cartList.appendChild(newItemRow);
    console.log(item.subtotalWithDiscount);

    total += item.subtotalWithDiscount;
  });
  totalPrice.innerHTML = `${total.toFixed(2)}`;
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
  printCart();
}
