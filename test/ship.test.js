const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship ", () => {
  let ship;
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
  });
  describe("with ports and an itinerary", () => {});
  it("can be instantiaed", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(Ship).toBeInstanceOf(Object);
  });
});

it("has a starting port", () => {
  const port = new Port("Dover");
  const itinerary = new Itinerary([port]);
  const ship = new Ship(itinerary);
  expect(ship.currentPort).toBe(port);
});

it("can set sail", () => {
  const dover = new Port("Dover");
  const calais = new Port("Calais");
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);

  ship.setSail();

  expect(ship.currentPort).toBeFalsy();
  expect(dover.ships).not.toContain(ship);
});

it("can dock at a different port", () => {
  const dover = new Port("Dover");
  const calais = new Port("Calais");
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);

  ship.setSail();
  ship.dock();

  expect(ship.currentPort).toBe(calais);
  expect(calais.ships).toContain(ship);
});

it("can't sail further than its itinerary", () => {
  const dover = new Port("Dover");
  const calais = new Port("Calais");
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);

  ship.setSail();
  ship.dock();

  expect(() => ship.setSail()).toThrowError("End of itinerary reached");
});
it("can added to port on instantiation", () => {
  const dover = new Port("Dover");
  const calais = new Port("Calais");
  const itinerary = new Itinerary([dover, calais]);
  const ship = new Ship(itinerary);

  expect(dover.ships).toContain(ship);
});
