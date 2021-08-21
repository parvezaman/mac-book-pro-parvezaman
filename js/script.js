// variables assignment
const bestPrice = document.getElementById('best-price');
const extraMemoryCost = document.getElementById('extra-memory-cost');
const extraStorageCost = document.getElementById('extra-storage-cost');
const deliveryCharge = document.getElementById('delivary-charge');
const subTotal = document.getElementById('sub-total');
const finalTotal = document.getElementById('final-total');
const promoCodeInput = document.getElementById('promo-code-input');

// buttons assignment 
const Button8GbMemory = document.getElementById('button-8-gb-memory');
const Button16GbMemory = document.getElementById('button-16-gb-memory');
const button256GbStorage = document.getElementById('button-256-gb-storage');
const button512GbStorage = document.getElementById('button-512-gb-storage');
const button1TbStorage = document.getElementById('button-1-tb-storage');
const buttonDelivaryBy25 = document.getElementById('delivery-by-25');
const buttonDelivaryBy21 = document.getElementById('delivery-by-21');
const buttonApplyPromo = document.getElementById('apply-promo-button');


// pricing
const price8GbMemory = 0;
const price16GbMemory = 180;
const price256GbStorage = 0;
const price512GbStorage = 100;
const price1TbStorage = 180;
const priceDelivaryBy25 = 0;
const priceDelivaryBy21 = 20;


function getPrice(destinationID, price){
    document.getElementById(destinationID).innerText = price;
    subTotal.innerText = parseFloat(bestPrice.innerText) + parseFloat(extraMemoryCost.innerText) + parseFloat(extraStorageCost.innerText) + parseFloat(deliveryCharge.innerText);
    finalTotal.innerText = subTotal.innerText;
}


// extra price for extra memory 
Button8GbMemory.addEventListener('click', function(){
    getPrice('extra-memory-cost', price8GbMemory);
})
Button16GbMemory.addEventListener('click', function(){
    getPrice('extra-memory-cost', price16GbMemory);
})


// extra price for extra storage 
button256GbStorage.addEventListener('click', function(){
    getPrice('extra-storage-cost', price256GbStorage);
})
button512GbStorage.addEventListener('click', function(){
    getPrice('extra-storage-cost', price512GbStorage);
})
button1TbStorage.addEventListener('click', function(){
    getPrice('extra-storage-cost', price1TbStorage);
})


// extra price for fast delivary
buttonDelivaryBy25.addEventListener('click', function(){
    getPrice('delivary-charge', priceDelivaryBy25);
})
buttonDelivaryBy21.addEventListener('click', function(){
    getPrice('delivary-charge', priceDelivaryBy21);
})


// apply promo code segment 
function promoCode(){
    if(promoCodeInput.value == 'stevekaku'){
        finalTotal.innerText = parseFloat(finalTotal.innerText) - parseFloat(finalTotal.innerText)*.2;
    }
    promoCodeInput.value = '';
}

buttonApplyPromo.addEventListener('click',function(){
    promoCode();
})