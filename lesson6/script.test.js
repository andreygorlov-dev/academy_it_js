const sum = require('./script.js');

test('сумма 1 + 2 будет 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('сумма 2 + 2 будет 4', () => {
    expect(sum(2, 2)).toBe(4);
});

test('присваивание', () => {
    let data = {
        'firstname' : 'Вася'
    }

    data['lastname'] = 'Иванов';

    expect(data).toEqual({'firstname' : 'Вася', 'lastname': 'Иванов'});
});

