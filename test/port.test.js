const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');


describe('Port', () => {
    describe('before', () => {
        let dover;
        let ship;
        
        beforeEach(() => {
            dover = new Port("Dover");
            itinerary = new Itinerary([dover])
            ship = jest.fn;
    })
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })
    it('initialises name property as a string', () => {     
        expect(dover.name.toString()).toBe("Dover");
    })
    it('Can add a ship', () => {
        expect(dover.ships).toEqual([])
        dover.addShip(ship);

        expect(dover.ships.length).toEqual(1);

    })
    it('Can remove a ship', () => {
        
        const titanic = jest.fn;

        dover.addShip(ship)
        dover.addShip(titanic)
        dover.removeShip(titanic)

        expect(dover.ships).toEqual([ship]);
    })
})
})