const car = { 
    isFuelType: "CNG",
    isType: "SUV", 
    isBrand: "BMW", 
    display() {
        document.write(`<h3>Calling by Object</h3>this car use ${this.isFuelType}. type of this car is ${this.isType} and brand is ${this.isBrand}<br>`);
    },
};
console.log(car.display())
function GetDetail(petrol, Hatchback, Audi) { 
    this.isFuelType = petrol; 
    this.isType = Hatchback; 
    this.isBrand = Audi; 
    this.display = function () {
    document.write(`<h3>Calling	by	Constructor</h3>this	car	use ${this.isFuelType}.	type	of	this	car	is	${this.isType}	and	brand	is ${this.isBrand}`);
    }
};
let ans = new GetDetail("Diesel","Luxury","Tata") ;
console.log(ans.display());