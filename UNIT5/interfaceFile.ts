export {}

interface Laptop {
    lid: number;
    brand: string;
    color: string;
    // processor?: string;  // ? makes optional
}

interface LaptopSpecs {
    ram: string;
    ssd: string;
}

interface LaptopCombine extends Laptop, LaptopSpecs {}

let laptopObject: LaptopCombine = {
    lid: 1,
    brand: "Asus",
    color: "Silver",
    ram: "16GB",
    ssd: "512GB"
}

//laptopObject.lid=5;
console.log(laptopObject);

interface stu{
    name:string;
    age:number;
    city:string;
}

interface stu{
    city:string;
    state:string;
}

interface stuCombine extends stu{}

let stuObject:stuCombine={
    name:"Sanjukta",
    age:20,
    city:"Jalpaiguri",
    state:"West Bengal"
}

class Laptopclass implements LaptopCombine {
    lid:number;
    brand:string;
    color:string;
    ram:string;
    ssd:string;

    constructor(lid:number, brand:string, color:string, ssd:string, ram:string){
        this.lid = lid;
        this.brand = brand;
        this.color = color;
        this.ssd = ssd;
        this.ram = ram;
    }

    info(){
        console.log(
            "I bought a laptop of " + this.brand +
            " and id is " + this.lid +
            " color is " + this.color +
            " ram is " + this.ram +
            " and ssd is " + this.ssd
        );
    }
}


let u = new Laptopclass(1111, "Asus", "Silver", "256gb", "16gb");
u.info();