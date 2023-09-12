/**
 * Вычисляет ежемесячный платёж по сроку ипотеки
 *
 * @param {float} sum - сумма кредита
 * @param {integer} period - срок в годах
 * @param {float} rate - годовая ставка в процентах
 * @return {integer} или Nan
 */


function getPayment(sum, period, rate) {

    const i = (rate / 12) / 100;
    const coefficient = (i * (Math.pow(1 + i, period * 12))) / (Math.pow(1 + i, period * 12) - 1);
    const result = sum * coefficient;
    document.querySelector('.sum-outer').innerHTML = sum;
    document.querySelector('.payment-outer').innerHTML = result.toFixed();
    document.querySelector('.rate-outer').innerHTML = rate;
    
    let outerNumbers = document.querySelector('.outerNumbers');
    if(result>50000){
        outerNumbers.style.color = 'red';
    }

     else outerNumbers.style.color = 'black';


    return Number(result.toFixed());
};



