const shoppingCart = require('../cart.js');
const removeItem = require('../cart.js');
const getTotalItems = require('../cart.js');

const item = 'apple';
const cart = 'basket';
const quantity = 1;

describe(item + ' was added to the ' + cart + ' with a quantity of ' + quantity, function() {
    test('should return a message showing the item added',
function() {
    expect(shoppingCart.addItem('apple', 'basket', 1)).toBe('apple was added to the basket with a quantity of 1')
});

});