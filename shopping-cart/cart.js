/*
Instructions 
Implement and test a basic shopping cart module. The module should include the 
following methods: 
1. addItem(cart, item, quantity): Adds an item to the cart. 
2. removeItem(cart, item): Removes an item from the cart. 
3. getTotalItems(cart): Returns the total number of items in the cart. 
*/

function addItem(cart, item, quantity) {
    if (cart[item]) {
        cart[item] += quantity;
    } else {
        cart[item] = quantity;
    }
    return 'In ' + cart + ' there is a total of ' + quantity + " " + item;
}

function removeItem(cart, item) {
    if (cart[item]) {
        delete cart[item];
    }
    return 'Item ' + item + ' has been removed leaving a balance of ' + cart + ' in the cart';
}

function getTotalItems(cart) {
    let total = 0;
    for (let item in cart) {
        total += cart[item];
    }
    return 'The total amount in the cart is ' + total;
}
module.exports = { addItem, removeItem, getTotalItems };
