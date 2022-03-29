const { expect } = require('chai');
const app = require('./app');

describe('Unit test ainun problems', () => {

test('totalbox should return equal 5 person', () => {
    expect(app.totalBox).to.equal(5);
});

test('itemInsideBox should be an array', () => {
    expect(app.itemInsideBox).to.be.an.instanceof(Array);
});

test('itemInsideBox should be have 45 total items', () => {
    const data = app.itemInsideBox;
    let appleCounter = 0
    let cakeCounter = 0;
    data.forEach((res) => {
        appleCounter = appleCounter + res.apples;
        cakeCounter = cakeCounter + res.cakes;
    });

    const totalItem = appleCounter+cakeCounter;
    expect(totalItem).to.equal(45);
});

test('should have 20 cakes and 25 apples', () => {
    const data = app.itemInsideBox;
    let appleCounter = 0
    let cakeCounter = 0;
    data.forEach((res) => {
        appleCounter = appleCounter + res.apples;
        cakeCounter = cakeCounter + res.cakes;
    });

    expect(appleCounter).to.equal(25);
    expect(cakeCounter).to.equal(20);
});

  
});