export class Room {
    roomNumber: string;
    name: string;
    availablePpl: number;
    price: number;
    brNoci: number;

    constructor(roomNumber: string, name: string, availablePpl: number , price: number, brNoci: number) {
        this.roomNumber = roomNumber;
        this.name = name;
        this.availablePpl = availablePpl;
        this.price = price;
        this.brNoci = brNoci;
    }

}