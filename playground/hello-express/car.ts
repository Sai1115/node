class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getFormattedCarDetails(): string {
      return `${this.make} ${this.model} (${this.year})`;
    }
  }
  
  // Create an instance of the Car class
  const myCar = new Car('Tesla', 'Model S', 2021);
  
  // Test the getFormattedCarDetails method
  const formattedDetails = myCar.getFormattedCarDetails();
  console.log(formattedDetails); // Output: Tesla Model S (2021)

  