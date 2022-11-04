const Ship = require("../src/ship.js")
const Port = require("../src/port.js")

describe("port ", () => {
    it("can be instantiaed", () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

});
it("has a name object", () => {
    expect(new Port()).toHaveProperty("name");

})

