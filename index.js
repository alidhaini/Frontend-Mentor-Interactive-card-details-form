const submitBtn = document.querySelector('.form-btn');

const thanks_btn = document.querySelector('.thank_btn');

const form = document.querySelector('.form-wrapper');

const thanks_page = document.querySelector('.thank-wrapper');

// input variables
const cardHolderName = document.querySelector('.name-input');

const cardNumber = document.querySelector('.num-input');

const month = document.querySelector('.month-input');

const year = document.querySelector('.year-input');

const cvcInput = document.querySelector('.cvc-input');
//end of inputs

//---------------------------------------------------------------

//displayers
const cardHolderNameDisplay = document.querySelector('.bg-card__cardholder-name');

const cardNumberDisplay = document.querySelector('.bg-card__number');

const monthDisplay = document.querySelector('.bg-card__exp_date-month');

const yearDisplay = document.querySelector('.bg-card__exp_date-year');

const cvcDispaly = document.querySelector('.bg-card-back__p');
//end of displayers
//---------------------------------------------------------------

//error messages
const nameError = document.querySelector('.name_input_error');

const numError = document.querySelector('.card_number_error');
const numError_length = document.querySelector('.card_number_error-length');

const monthYearError = document.querySelector('.month_input_error');

const cvcError = document.querySelector('.cvc_input_error');
//end of error messages


// real time data management:

//cardholder name
cardHolderName.addEventListener('input',() => {
    if(cardHolderName.value !== ''){
        if(cardHolderName.value.length > 24){
            nameError.style.visibility = 'visible';
            cardHolderName.value = cardHolderName.value.slice(0,24);
        }

        cardHolderNameDisplay.innerHTML = cardHolderName.value;
        
    }
    else
       cardHolderNameDisplay.innerHTML = 'Jane Appleseed';

       nameError.style.visibility = 'hidden';
       cardHolderName.classList.remove('invalid-input');

});

//card number
cardNumber.addEventListener('input',() => {
    if(cardNumber.value !== '')
        cardNumberDisplay.innerHTML = cardNumber.value;
    else
        cardNumberDisplay.innerHTML = '0000 0000 0000 0000'

        numError.style.display = 'none';
        numError_length.style.display = 'none';
        cardNumber.classList.remove('invalid-input')
});


//month
month.addEventListener('input',()=> {
    if(month.value !== ''){

        if (month.value.length === 1) 
            // If so, prefix it with '0'
            monthDisplay.innerHTML = '0'+month.value;
        else if(month.value > 12 || month.value == '00'){
            month.value = '';
            monthDisplay.innerHTML = '00';
        }
        else
            monthDisplay.innerHTML = month.value;
    }

    else
        monthDisplay.innerHTML = '00';


        if(window.getComputedStyle(year).getPropertyValue('border-color') != 'rgb(255, 0, 0)')
            monthYearError.style.visibility = 'hidden';
        
        month.classList.remove('invalid-input');
});

//year
year.addEventListener('input',() => {
    if(year.value !== ''){
        if(year.value.length === 1)
            yearDisplay.innerHTML = '0'+year.value;
        else
        yearDisplay.innerHTML = year.value;
    }
    else
        yearDisplay.innerHTML = '00';

        if(window.getComputedStyle(month).getPropertyValue('border-color') != 'rgb(255, 0, 0)')
            monthYearError.style.visibility = 'hidden';
        
        year.classList.remove('invalid-input');
});

//cvc
cvcInput.addEventListener('input',() => {
    if(cvcInput.value !== '')
    {
        if(cvcInput.value.length === 1)
            cvcDispaly.innerHTML = '00'+cvcInput.value;
        else if (cvcInput.value.length == 2)
            cvcDispaly.innerHTML = '0'+cvcInput.value;
        else
            cvcDispaly.innerHTML = cvcInput.value;
    }

    else
        cvcDispaly.innerHTML = '000'


        cvcError.style.visibility = 'hidden';
        cvcInput.classList.remove('invalid-input');
});

//end real time management

//display errors

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(cardHolderName.value == '')
    {
        nameError.style.visibility = 'visible';
        cardHolderName.classList.add('invalid-input');
    }

    if(cardNumber.value == ''){
        numError.style.display = 'block';
        cardNumber.classList.add('invalid-input');
    }

    if( cardNumber.value.length < 19){
        numError_length.style.display = 'block';
        cardNumber.classList.add('invalid-input');
    }

    if(month.value == ''){
        monthYearError.style.visibility = 'visible';
        month.classList.add('invalid-input');
    } 
    
    if( year.value == ''){
        monthYearError.style.visibility = 'visible';
        year.classList.add('invalid-input');
    }

    if(cvcInput.value == ''){
        cvcError.style.visibility = 'visible';
        cvcInput.classList.add('invalid-input');
    }

    else{
        form.style.display = 'none';
        thanks_page.style.display = ''
    }
    
});

//back to the form
thanks_btn.addEventListener('click',(e) => {
    e.preventDefault();
    form.style.display = '';
    thanks_page.style.display = 'none'

    cardHolderName.value='';
    cardNumber.value = ''
    month.value = '';
    year.value = '';
    cvcInput.value = '';
    
    cardHolderNameDisplay.innerHTML = 'Jane Appleseed';
    cardNumberDisplay.innerHTML = '0000 0000 0000 0000';
    monthDisplay.innerHTML = '00';
    yearDisplay.innerHTML = '00';
    cvcDispaly.innerHTML = '000';
})