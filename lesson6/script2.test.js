//написать тест что в массиве есть банан

const product = require('./script2.js');

test('есть банан?', () => {
    expect(product).toContain('банан');
});