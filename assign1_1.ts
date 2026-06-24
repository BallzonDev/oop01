const productName: string = "สมุดโน้ต";
const pricePerUnit: number = 120;
const quantity: number = 10;
const isMember: boolean = true;

const totalPrice: number = pricePerUnit * quantity;
const hasDiscount: boolean = totalPrice > 1000 || isMember;
const discountRate: number = hasDiscount ? 0.1 : 0;
const discountAmount: number = totalPrice * discountRate;
const finalPrice: number = totalPrice - discountAmount;

console.log(`รายงานสรุปการซื้อสินค้า:`);
console.log(`- ชื่อสินค้า: ${productName}`);
console.log(`- จำนวนที่ซื้อ: ${quantity} ชิ้น`);
console.log(`- ราคารวมทั้งหมด: ${totalPrice.toFixed(2)} บาท`);
console.log(`- ได้รับส่วนลด: ${hasDiscount}`);
console.log(`- ราคาที่ต้องจ่ายจริง: ${finalPrice.toFixed(2)} บาท`);
