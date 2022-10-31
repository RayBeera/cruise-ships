const Ship = require("../src/ship.js")

describe("Ship ", () => {
    it("can be instantiaed", () => {
        // const ship = new Ship("Dover")
        expect(new Ship()).toBeInstanceOf(Object);
    });
});

it("has a starting port", () => {
    const ship = new Ship("Dover");

    expect(ship.startingPort).toBe("Dover");
})

