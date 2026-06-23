let item1: string = "Notebook";
let price1: number = 120.5;
let qty1: number = 2;

let item2: string = "Pen";
let price2: number = 15;
let qty2: number = 5;

let item3: string = "Water Bottle";
let price3: number = 250;
let qty3: number = 1;

let subtotal: number = price1 * qty1 + price2 * qty2 + price3 * qty3;

let discountRate: number;
if (subtotal >= 1000) discountRate = 0.1;
else if (subtotal >= 500) discountRate = 0.05;
else discountRate = 0;

let discountAmount: number = subtotal * discountRate;
let net: number = subtotal - discountAmount;
let taxRate: number = 0.07;
let taxAmount: number = net * taxRate;
let total: number = net + taxAmount;

console.log("----- Simple Shopping & Discount Calculator -----");
console.log("Items:");
console.log("1. %s - %d x %d = %d", item1, price1, qty1, price1 * qty1);
console.log("2. %s - %d x %d = %d", item2, price2, qty2, price2 * qty2);
console.log("3. %s - %d x %d = %d", item3, price3, qty3, price3 * qty3);
console.log("-----------------------------------------------");
console.log("Subtotal: %d", subtotal);
console.log("Discount Rate: %d%%", discountRate * 100);
console.log("Discount Amount: %d", discountAmount);
console.log("Net after discount: %d", net);
console.log("Tax (%d%%): %d", taxRate * 100, taxAmount);
console.log("Total payable: %d", total);

export {};
