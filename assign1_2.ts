type Book = [string, string, number, boolean];

let book1: Book = ['The TypeScript Handbook', 'Anders Hejlsberg', 450, true];
let book2: Book = ['Learning Node.js', 'Shelley Powers', 350, true];
let book3: Book = ['Clean Code', 'Robert C. Martin', 600, false];

let books: Book[] = [book1, book2, book3];

let totalValue: number = 0;
let inStockCount: number = 0;
let mostExpPrice: number = 0;
let mostExpIndex: number = -1;

for (let i = 0; i < books.length; i++) {
  let b = books[i];
  if (b[3]) {
    totalValue += b[2];
    inStockCount += 1;
  }
  if (b[2] > mostExpPrice) {
    mostExpPrice = b[2];
    mostExpIndex = i;
  }
}

console.log('----- Simple Book Store System -----');
console.log('Total books: %d', books.length);
console.log('Books in stock: %d', inStockCount);
console.log('Total inventory value: %d', totalValue);
if (mostExpIndex >= 0) {
  console.log('Most expensive: %s by %s - %d', books[mostExpIndex][0], books[mostExpIndex][1], books[mostExpIndex][2]);
}

console.log('List of books:');
for (let i = 0; i < books.length; i++) {
  let b = books[i];
  console.log('%d. %s - %s - %d - %s', i + 1, b[0], b[1], b[2], b[3] ? 'Available' : 'Out of stock');
}

export {};
