const shoppingCart = require('../cart.js');
const removeItem = require('../cart.js');
const getTotalItems = require('../cart.js');

const item = 'apple';
const cart = 'basket';
const quantity = 1;
const invalidQuantity = -1

describe(item + ' was added to the ' + cart + ' with a quantity of ' + quantity, function() {
    test('should return a message showing the item added',
function() {
    expect(shoppingCart.addItem(item, cart, quantity)).toBe('apple was added to the basket with a quantity of 1')
});
    test('should return an invalid number',
function() {
    expect(shoppingCart.addItem(item, cart, invalidQuantity)).toBe('apple was added to the basket with a quantity of -1')
});

});