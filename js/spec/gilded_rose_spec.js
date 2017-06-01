// var Shop = require('../src/gilded_rose');
// var Item = require('../src/gilded_rose');
import Shop from '../src/gilded_rose';
import Item from '../src/gilded_rose';


console.log(Shop);
console.log(Item);

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gilgedRose = new Shop([ new Item("foo", 0, 0) ]);
    console.log(gilgedRose);
    const items = gilgedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});
