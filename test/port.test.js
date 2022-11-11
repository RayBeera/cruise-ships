const Ship = require("../src/ship.js");
const Port = require("../src/port.js");

describe("port ", () => {
  let port;
  let ship;
  let titanic;
  let queenMary;

  beforeEach(() => {
    const port = new Port("Dover");
    const titanic = {};
    const queenMary = {};
  });

  it("can be instantiaed", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});
it("has a name object", () => {
  expect(new Port()).toHaveProperty("name");
});
it("can add a ship", () => {
  const port = new Port("Dover");
  const ship = {};

  port.addShip(ship);

  expect(port.ships).toContain(ship);
});

it("can remove a ship", () => {
  const port = new Port("Dover");
  const titanic = {};
  const queenMary = {};

  port.addShip(titanic);
  port.addShip(queenMary);
  port.removeShip(queenMary);

  expect(port.ships).toEqual([titanic]);
});
