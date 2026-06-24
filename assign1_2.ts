const bookTitle: string = "เรียน TypeScript ขั้นพื้นฐาน";
const isbn: string = "978-616-000-000-0";
const price: number = 650;
const isAvailable: boolean = true;

const bookSummary: [string, number] = [bookTitle, price];
const discountedPrice: number = price * 0.85;
const isPremium: boolean = price > 500;
const canDisplay: boolean = isPremium && isAvailable;

console.log(`รายงานข้อมูลหนังสือ:`);
console.log(`- ชื่อหนังสือ: ${bookSummary[0]}`);
console.log(`- ISBN: ${isbn}`);
console.log(`- ราคาก่อนส่วนลด: ${bookSummary[1].toFixed(2)} บาท`);
console.log(`- ราคาหลังหักส่วนลด 15%: ${discountedPrice.toFixed(2)} บาท`);
console.log(`- เป็นหนังสือ Premium: ${isPremium}`);
console.log(`- สถานะว่าง: ${isAvailable}`);
console.log(`- สามารถจัดแสดงที่หน้าตู้โชว์ได้: ${canDisplay}`);
