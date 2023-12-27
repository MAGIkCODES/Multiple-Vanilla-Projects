// const formEl = document.getElementById('form');
// const usernameEl = document.getElementById('username');
// const emailEl = document.getElementById('username');
// const passwordEl = document.getElementById('password');
// const password2El = document.getElementById('password2');

// // Show input error message
// function showError(input, message) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.queryselector('small');
//     small.innerText = message;
// }

// // Show success outline
// function showSuccess(input) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }


// // Check email is valid
// function checkEmail(input) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (re.test(input.value.trim())) {
//         showSuccess(input);
//     } else {
//         showError(input, 'Email is not valid');
//     }
// }

// // Check required fields
// function checkRequired(inputArr) {
//     let isRequired = false; 
//     inputArr.forEach(function(input) {
//         if (input.value.trim() === '') {
//             showError(input, `${getFieldName(input)} is required`);
//             isRequired = true;
//         } else {
//             showSuccess(input);
//         }
//     });
    
//     return isRequired;
// }

// // Check input length 
// function checkLenght(input, min, max) {
//     if (input.value.lenght < min) {
//         showError(input,  `${getFieldName(input)} must be at least ${min} characters`);
//     } else if (input.value.lenght > max) {
//         showError(input,  `${getFieldName(input)} must be less than ${max} characters`);
//     } else {
//         showSuccess(input);
//     }
// }

// // Check passwords match
// function checkPasswordsMatch(input1, input2) {
//     if (input1.value !== input2.value) {
//         showError(input2, 'passwords do not match');
//     }
// }

// // Get fieldname
// function getFieldName(input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// // Event Listeners
// formEl.addEventListener('submit', function(e) {
//     e.preventDefault();

//     if(checkRequired([usernameEl, emailEl, passwordEl, password2El])){
//         checkLenght(usernameEl, 3, 15);
//         checkLenght(passwordEl, 6, 25);
//         checkEmail(emailEl);
//         checkPasswordsMatch(passwordEl, password2El);
//     }
// });


// chat gpt
        const form = document.getElementById('form');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const password2 = document.getElementById('password2');


        // Handle all the form input addEventListener
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            if (username.value === '') {
                showError(username, 'Username is required');
            } else {
                showSuccess(username);
            }

            if (email.value === '') {
                showError(email, 'Email is required');
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Enter a valid email address');
            } else {
                showSuccess(email);
            }

            if (password.value === '') {
                showError(password, 'Password is required');
            } else {
                showSuccess(password);
            }

            if (password2.value === '') {
                showError(password2, 'Please confirm your password');
            } else if (password.value !== password2.value) {
                showError(password2, 'Passwords do not match');
            } else {
                showSuccess(password2);
            }
        });

        // Handle the error message display mode
        function showError(input, message) {
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');

            formControl.className = 'form-control error';
            small.innerText = message;
            small.style.display = 'block';
        }

        function showSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = 'form-control success';
        }

        function isValidEmail(email) {
            // Simple email validation, you can use a more complex regex
            return  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }