var sellingPrice = 299;
var listingPrice = 899;

var discountPentage = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log(discountPentage);

displayDiscountPercentag = Math.round(discountPentage);

console.log(displayDiscountPercentag + '% off')