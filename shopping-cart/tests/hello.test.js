const shoppingCart = require('../cart.js');

describe(addItem + ' was added, ' + removeItem + ' was removed and the total of items are ' + getTotalItems, function() {
    test('should return a message showing the item added, item removed and total',
function() {
    expect(shoppingCart.addItem('apple').removeItem('orange').getTotalItems(3)).toBe('apple was added, orangewas removed and the total of items are 3')
});

});