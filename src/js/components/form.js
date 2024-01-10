// // import IMask from 'imask';

// // const form = (selector) => {

// //     const form = document.querySelector(selector);
// //     form.addEventListener('submit', (e) => {
// //         e.preventDefault();

// //         const name = form.querySelector('.input--name').value;

// //         function validateName(name) {form
// //             return name.trim() !== '';
// //         }

// //         if (!validateName(name)) {
// //             alert('Введите корректное имя.');
// //             return;
// //         } else {
// //             form.submit()
// //         }
// //     });

// //     const tel = form.querySelector('.input--tel')

// //     IMask(tel, {
// //         mask: '+{7}(000)000-00-00',
// //     });

// // }

// // export default form






// import { bodyLockStatus, bodyLock, bodyUnlock } from '../utils/constants';
// var $ = require('jquery');

// function closeModal(selector) {
//     document.querySelector(selector).setAttribute('aria-hidden', 'true');
//     $('html').removeClass('popup-show');
//     document.querySelector(selector).classList.remove('popup_show');
//     bodyUnlock();
// }

// function openModal(selector) {
//     document.querySelector(selector).setAttribute('aria-hidden', 'false');
//     $('html').addClass('popup-show');
//     $(selector).addClass('popup_show');
//     bodyLock();
// }


// const openModalWithPromise = (selector) => {
//     return new Promise((resolve) => {
//         openModal(selector);
//         resolve();
//     });
// };

// const form = (selector) => {
//     const form = document.querySelector(selector);
//     const name = form.querySelector('.input--name');
//     const phone = form.querySelector('.input--tel');
//     const checkbox = form.querySelector('.input--checkbox');
//     const nameError = form.querySelector('.input--name + span.error-span');
//     const phoneError = form.querySelector('.input--tel + span.error-span');

//     name.addEventListener('input', function (event) {
//         if (name.validity.valid) {
//             nameError.innerText = '';
//             nameError.classList.remove('active');
//             name.classList.remove('invalid');
//         } else {
//             if (name.validity.valueMissing) {
//                 nameError.classList.add('active');
//                 name.classList.add('invalid');
//             }
//             nameError.innerText = 'Введите текстовое значение';
//             nameError.classList.add('active');
//             name.classList.add('invalid');
//         }
//     });

//     phone.addEventListener('input', function (event) {
//         if (phone.validity.valid) {
//             phoneError.textContent = '';
//             phoneError.classList.remove('active');
//             phone.classList.remove('invalid');
//         } else {
//             if (phone.validity.valueMissing) {
//                 phoneError.classList.add('active');
//                 phone.classList.add('invalid');
//             }
//             phoneError.innerText = 'Введите числовое значение';
//             phoneError.classList.add('active');
//             phone.classList.add('invalid');
//         }
//     });

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const submittedName = name.value.trim();
//         const submittedPhone = phone.value.trim();

//         if (submittedName !== '' && submittedPhone !== '' && (!checkbox || (checkbox && checkbox.checked))) {
//             $.ajax({
//                 // ваш код для отправки данных
//                 success: function () {
//                     if (form.closest('.popup')) {
//                         closeModal(`#${form.closest('.popup').id}`)
//                         // document.querySelector(`#${form.closest('.popup').id}`).setAttribute('aria-hidden', 'true');
//                         // document.querySelector(`#${form.closest('.popup').id}`).classList.remove('popup_show');
//                     }
//                     // После успешной отправки выполните следующий код
//                     openModalWithPromise(e.target.dataset.popupMessage).then(() => {
//                         name.value = '';
//                         phone.value = '';
//                         if(checkbox) {
//                             checkbox.checked = false;
//                         }
                       
//                     });
//                 },
//             });
//         } else {
//             if (submittedName == '') {
//                 name.classList.add('invalid');
//                 nameError.textContent = 'Заполните поле';
//                 nameError.classList.add('active');
//             }
//             if (submittedPhone == '') {
//                 phone.classList.add('invalid');
//                 phoneError.textContent = 'Заполните поле';
//                 phoneError.classList.add('active');
//             }
//             if (!checkbox.checked) {
//                 checkbox.nextElementSibling.style.color = 'red'
//             }

//             return;
//         }
//     });

//     document.addEventListener('click', (e) => {
//         if (e.target.classList.contains('popup__success-wrapper')) {
//             closeModal(`#${e.target.closest('.popup').id}`);
//         }
//         if (e.target.classList.contains('success-close-btn')) {
//             closeModal(`#${e.target.closest('.popup').id}`);
//         }
//     });
// };

// export default form;



import './formModal';
import { formFieldsInit, formSubmit } from './formModal';

const form = () => {


  // form fields
  formFieldsInit({ viewPass: true });
  
  // submit form
  formSubmit();

    


    const num = document.querySelectorAll('.input--num')

    num.forEach(item => {
        item.addEventListener('input', () => {
            const inputValue = item.value.trim();
            const span = item.parentElement.nextElementSibling;
            const parent = item.parentElement.parentElement;

            if (!/^[0-9]+$/.test(inputValue) && inputValue !='' ) {
                span.classList.add('active');
                parent.classList.add('_form-error');
            } else {
                span.classList.remove('active');
                parent.classList.remove('_form-error');
            }
        })

        
    })

    


}

export default form

