import products from './products';

let productName: string = 'tote bag';
const product = products.find(product => product.name === productName);
console.log(product);

if (product?.preOrder === 'true') {
  console.log("You will be notified when the product it's on the way")
}

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "Via Fasulla, 123, New York";

if (Number(product?.price) > 25) {
  shipping = 0;
  console.log("Free shipping!");
} else {
  shipping = 5;
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1
  console.log("10% Tax")
} else {
  taxPercent = 0.05
  console.log("5% Tax")
}

taxTotal = Number(product?.price) * taxPercent
total = Number(product?.price) + taxTotal + shipping;

console.log("=====================");
console.log("Product name: " + productName);
console.log("Shipping address: " + shippingAddress);
console.log("Price of the product: " + product?.price);
console.log("Tax total: " + taxTotal);
console.log("Shipping: " + shipping);
console.log("Total amount: $" + total);
console.log("=====================");