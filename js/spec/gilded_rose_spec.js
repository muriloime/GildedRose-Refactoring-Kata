var Shop = require('../src/gilded_rose')
var Item  = require('../src/gilded_rose')

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gilgedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});
