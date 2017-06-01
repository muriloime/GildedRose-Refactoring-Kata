var Shop = require('../src/gilded_rose').Shop;
var Item = require('../src/gilded_rose').Item;


describe("Gilded Rose", function() {

  it("should foo", function() {
    const gilgedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });


  it("Aged Brie should foo", function() {
    const gilgedRose = new Shop([ new Item("Fromage", 50, 50) ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(49);
    expect(items[0].sellIn).toEqual(49);
  });

  it("Backstage should increase when sellin is less than 5", function() {
    const gilgedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 10)
    ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(13);
  });

  it("Backstage should increase when sellin is less than 10", function() {
    const gilgedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10)
    ]);
    const items = gilgedRose.updateQuality();
    expect(items[0].quality).toEqual(12);
  });

});
