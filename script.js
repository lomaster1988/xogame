let elements = document.querySelector('form');

for(i=0; i<elements.length; i++){
    let price = Number(document.querySelector('.price').value);
    let firstPayment = Number(document.querySelector('.first-payment').value);
    let period1 = Number(document.querySelector('.period').value);
    let sum1 = price - firstPayment;
    let rate1 = Number(document.querySelector('.rate').value);
 elements[i].addEventListener("input", getPayment(sum1,period1,rate1))

  }


 
