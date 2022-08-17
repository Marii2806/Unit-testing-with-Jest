const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2;
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("1.2 dollar should be 127.9 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(3.5)
    const expected = 3.5 * 127.9 / 1.2;
    expect(fromDollarToYen(3.5)).toBe(373.03);
})

test("127.9 yen should be 0.8 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const pound = fromYenToPound(3.5)
    const expected = 3.5 * 0.8 / 127.9;
    expect(fromYenToPound(3.5)).toBe(0.021);
})