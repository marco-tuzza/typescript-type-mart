"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
let productName = 'tote bag';
const product = products_1.default.find(product => product.name === productName);
console.log(product);
if ((product === null || product === void 0 ? void 0 : product.preOrder) === 'true') {
    console.log("You will be notified when the product it's on the way");
}
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = "Via Marche, 137, Messina";
if (Number(product === null || product === void 0 ? void 0 : product.price) > 25) {
    shipping = 0;
    console.log("Free shipping!");
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
    console.log("10% Tax");
}
else {
    taxPercent = 0.05;
    console.log("5% Tax");
}
taxTotal = Number(product === null || product === void 0 ? void 0 : product.price) * taxPercent;
total = Number(product === null || product === void 0 ? void 0 : product.price) + taxTotal + shipping;
console.log("=====================");
console.log("Product name: " + productName);
console.log("Shipping address: " + shippingAddress);
console.log("Price of the product: " + (product === null || product === void 0 ? void 0 : product.price));
console.log("Tax total: " + taxTotal);
console.log("Shipping: " + shipping);
console.log("Total amount: $" + total);
console.log("=====================");
