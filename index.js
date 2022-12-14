let cardNumber = document.querySelector('.card-number-display');
let cardName = document.querySelector('.name-display');
let expiryDate = document.querySelector('.date-display');
let cvcNumber = document.querySelector('.cvc-number-display')
let nameInput = document.querySelector('#card-name')
let cardNumInput = document.querySelector('#card-number')
let expMonthInput = document.querySelector('#month');
let expYearInput = document.querySelector('#year');
let cvcInput = document.querySelector('#cvc');
let confirmButton = document.querySelector('.confirm-button')
let continueButton = document.querySelector('.continue-button')
let completeSect = document.querySelector('.complete-state');
let activeSect = document.querySelector('.active-state')
let form = document.querySelector('.card-form')


// declare variables for valid entry verification
let nameCheck;
let numCheck;
let monthCheck;
let yearCheck;
let cvcCheck;



// add event listener to card inputs and format their patterns.
form.addEventListener('input', (e) => {
    if (e.target === document.activeElement) {

        //name input
        if (e.target === nameInput) {
            cardName.textContent = nameInput.value;
            if (nameInput.value.includes(' ') && nameInput.value.length > 5) {
                nameInput.classList.add('input-valid')
                nameCheck = true;
            } else {
                nameInput.classList.remove('input-valid');
            }
        }

        //card number input
        else if (e.target === cardNumInput) {
            e.target.value = e.target.value.replace(/(\d{4})(\d+)/g, '$1 $2').slice(0, 19);
            cardNumber.textContent = cardNumInput.value;
            let errorMsg = document.querySelector('.number');
            if (cardNumInput.value.length < 19) {
                cardNumInput.classList.add('input-invalid')
                errorMsg.style.display = 'contents';
                errorMsg.innerHTML = 'Complete card number';
                if (cardNumInput.value.match(/[a-zA-Z]/)) {
                    errorMsg.innerHTML = 'Wrong format, numbers only';
                }

            }
            else {
                cardNumInput.classList.remove('input-invalid')
                cardNumInput.classList.add('input-valid')
                errorMsg.style.display = 'none';
                numCheck = true
            }
        }

        // expiry date input
        else if (e.target === expMonthInput || e.target === expYearInput) {
            e.target.value = e.target.value.slice(0, 2)
            const month = expMonthInput.value;
            const year = expYearInput.value;
            expiryDate.textContent = `${month}/${year}`;
            let errorMsg = document.querySelector('.date');
            if (month.match(/[a-zA-Z]/) || year.match(/[a-zA-Z]/)) {
                expMonthInput.classList.add('input-invalid')
                expYearInput.classList.add('input-invalid')
                errorMsg.style.display = 'contents';
                errorMsg.innerHTML = 'digits only'

            }
            if (month > 12) {
                expMonthInput.classList.add('input-invalid')
                errorMsg.style.display = 'contents';
                errorMsg.innerHTML = "12 months only"
            }
            else {
                expMonthInput.classList.remove('input-invalid')
                expMonthInput.classList.add('input-valid')
                expYearInput.classList.remove('input-invalid')
                expYearInput.classList.add('input-valid')
                errorMsg.style.display = 'none';
                monthCheck = true
                yearCheck = true
            }
        }

        //CVC input
        else if (e.target === cvcInput) {
            e.target.value = e.target.value.slice(0, 3)
            cvcNumber.textContent = cvcInput.value;
            let errorMsg = document.querySelector('.cvc');
            if (cvcInput.value.match(/[a-zA-Z]/)) {
                cvcInput.classList.add('input-invalid')
                errorMsg.style.display = 'block';
                errorMsg.innerHTML = 'digits only'
            }
            else if (cvcInput.value.length < 3) {
                cvcInput.classList.add('input-invalid')
                errorMsg.style.display = 'block';
                errorMsg.innerHTML = 'Complete cvc number';
            }
            else if (cvcInput.value.length > 3) {
                cvcInput.classList.add('input-invalid')
                errorMsg.style.display = 'block';
                errorMsg.innerHTML = '3 digits';
            }
            else if (cvcInput.value.length === 3) {
                cvcInput.classList.remove('input-invalid')
                cvcInput.classList.add('input-valid')
                errorMsg.style.display = 'none';
                cvcCheck = true
            }
        }

    }


})

//submit button and form valdattion
confirmButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (nameCheck && numCheck && monthCheck && yearCheck && cvcCheck) {
        activeSect.style.display = 'none'
        completeSect.style.display = 'block'
    }
})

//continue button to reload page.
continueButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.location.reload(true);
})


