const Ship = require("../src/ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Ship", () => {
  describe("with ports and itinerary", () => {
    let ship;
    let dover;
    let calais;
    let itinerary;

    beforeEach(() => {
      dover = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Dover",
        ships: [],
      };

      calais = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: "Calais",
        ships: [],
      };

      itinerary = {
        ports: [dover, calais],
      };

      ship = new Ship(itinerary);
    });

    it("can be instantiated", () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it("has a starting port", () => {
      expect(ship.currentPort).toBe(dover);
    });

    it("can set sail from a port", () => {
      ship.setSail();

      expect(ship.currentPort).toBeFalsy();
      expect(dover.removeShip).toHaveBeenCalledWith(ship);
    });
    it("Has a currentPort", () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toEqual(calais);
    });
    it("can dock at different port", () => {
      ship.setSail();
      ship.dock();

      expect(ship.currentPort).toEqual(calais);
      expect(calais.addShip).toHaveBeenCalledWith(ship);
    });
    it("can't sail further than its itinerary", () => {
      ship.setSail();
      ship.dock();

      expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });
    it("gets added to port on instantiation", () => {
      expect(dover.addShip).toHaveBeenCalledWith(ship);
    });
  });
});
