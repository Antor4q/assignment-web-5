const allSeats = document.getElementsByClassName('seat');


let totalPrice = 0;
let count = 0;
let fillSeat = 0;
let deCount = 40;
for(const seats of allSeats){
  seats.addEventListener('click', function(){
   fillSeat +=1;
   
    if(fillSeat <= 4){
      seats.classList.add('bg-primary-color');
        if(fillSeat === 4){
          const enableButton = document.getElementById('input-btn');
          enableButton.removeAttribute('disabled');
        }
   
    totalPrice = totalPrice + 550;
    
    const price = document.getElementById('total-price');
    price.innerText = totalPrice;
    console.log(typeof price.innerText, 'price is it')
  
    const grandPrice = document.getElementById('grand-price');
    grandPrice.innerText = totalPrice;
    console.log(typeof grandPrice.innerText, 'price is it');
    

    const inputBtn = document.getElementById('input-btn');
inputBtn.addEventListener('click', function(){
  const inputField = document.getElementById('input-field').value;
  const couponCode = inputField.split(' ').join('').toUpperCase();
  console.log(couponCode)
 if(couponCode === 'NEW15' ){
  const hideInputField = document.getElementById('input-container');
  hideInputField.classList.add('hidden');

  const couponDiscount = parseInt(grandPrice.innerText);
  const newDiscount = (couponDiscount / 100) * 15;
  const discount = couponDiscount - newDiscount;
  grandPrice.innerText = parseInt(discount);
  console.log(discount);


 console.log('you got a discount')
}
else if( inputField === 'Couple 20'){
  const hideInputField = document.getElementById('input-container');
  hideInputField.classList.add('hidden');
  const couponDiscount = parseInt(grandPrice.innerText);
  const newDiscount = (couponDiscount / 100) * 20;
  const discount = couponDiscount - newDiscount;
  console.log(discount);
}
else{
  alert('invalid coupon')
 }
})

    // const dis = parseInt(grandPrice.innerText)
    // console.log(typeof dis)
    // const discount = (dis / 100) * 20;
    // console.log(discount);


    const seatCount = document.getElementById('seat-count');
    const seatCountNumber = parseInt(seatCount.innerText);
    count += 1;
    seatCount.innerText = count;


    const seatDeCount = document.getElementById('seat-left');
    const seatDeCountNumber = parseInt(seatDeCount.innerText);
    deCount -= 1;
    seatDeCount.innerText = deCount;
   




    createNewElement('seat-inform', seats);
   const seatPrice = document.getElementById('seat-price');
   const p = document.createElement('p');
   p.innerText = 550;
   seatPrice.appendChild(p);
   
    
   const seatEconomy = document.getElementById('seat-economy');
   const p2 = document.createElement('p');
   p2.innerText = 'Economy';
   seatEconomy.appendChild(p2);


   


    
    }else{
      alert('Your limitation is fill')
    }
  })
}

const nextButton = document.getElementById('next-btn');
nextButton.addEventListener('click', function(){

const nextInputField = document.getElementById('next-input').value;
const nextInputNumber = document.getElementById('next-number').value;

// console.log(nextInputField, 'its a email');
// console.log(nextInputNumber, 'its a number')




})





