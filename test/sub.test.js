window.jQuery = window.$ = require("jquery");
var add = require('../js/sub');

describe('Add Function', () => {
    test('add function to accept two numbers and utput the sum of it', () => {
        expect(add(2,3)).toBe(5);
    });
})

