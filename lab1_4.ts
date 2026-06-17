let annualincome: number = 50000;
let taxrate: number = 0.07;

let taxamount: number = annualincome * taxrate;
let netincome: number = annualincome - taxamount;

console.log("--- Tax Calculation Report ---");
console.log("Gross Income: $%d", annualincome);
console.log("Tax Rate: %d%%", taxrate * 100);
console.log("Tax Amount: $%d", taxamount);
console.log("Net Income: $%d", netincome); 