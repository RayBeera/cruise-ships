const Itinerary = require('../src/Itinerary.js')
const Ship = require("../src/ship.js")
const Port = require("../src/port.js")

describe('Itinerary', () => {

    it("can be instantiaed", () => {
        expect(new Itinerary).toBeInstanceOf(Object);
    })
})
it('can have ports', () => {
    const calais = new Port('Calais')
    const dover = new Port('Dover')
    const itinerary = new Itinerary([calais, dover])

    expect(itinerary.ports).toEqual([calais, dover])


});

