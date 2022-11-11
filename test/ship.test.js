const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship ", () => {
  let ship;
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
     dover = new Port("Dover");
     calais = new Port("Calais");
     itinerary = new Itinerary([dover, calais]);
     ship = new Ship(itinerary);
  });
  describe("with ports and an itinerary", () => {});
  it("can be instantiaed", () => {
    expect(Ship).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    expect(ship.currentPort).toBe(port);
});

it("can set sail", () => {

  ship.setSail();

  expect(ship.currentPort).toBeFalsy();
  expect(dover.ships).not.toContain(ship);
});

it("can dock at a different port", () => {

  ship.setSail();
  ship.dock();

  expect(ship.currentPort).toBe(calais);
  expect(calais.ships).toContain(ship);
});

it("can't sail further than its itinerary", () => {

  ship.setSail();
  ship.dock();

  expect(() => ship.setSail()).toThrowError("End of itinerary reached");
});
it("can added to port on instantiation", () => {

  expect(dover.ships).toContain(ship);
})

});
