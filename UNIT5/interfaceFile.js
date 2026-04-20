export {};
let laptopObject = {
    lid: 1,
    brand: "Asus",
    color: "Silver",
    ram: "16GB",
    ssd: "512GB"
};
//laptopObject.lid=5;
console.log(laptopObject);
let stuObject = {
    name: "Sanjukta",
    age: 20,
    city: "Jalpaiguri",
    state: "West Bengal"
};
class Laptopclass {
    lid;
    brand;
    color;
    ram;
    ssd;
    constructor(lid, brand, color, ssd, ram) {
        this.lid = lid;
        this.brand = brand;
        this.color = color;
        this.ssd = ssd;
        this.ram = ram;
    }
    info() {
        console.log("I bought a laptop of " + this.brand +
            " and id is " + this.lid +
            " color is " + this.color +
            " ram is " + this.ram +
            " and ssd is " + this.ssd);
    }
}
let u = new Laptopclass(1111, "Asus", "Silver", "256gb", "16gb");
u.info();
//# sourceMappingURL=interfaceFile.js.map