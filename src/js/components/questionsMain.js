
const questionsMain = () => {
    const accordionItemHeaders = document.querySelectorAll('.questions__accordion-item-header');

    accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener('click', () => {
        const currentlyActiveAccordionItemHeader = document.querySelector('.questions__accordion-item-header.active');
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle('active');
            currentlyActiveAccordionItemHeader.parentElement.classList.toggle('active');
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        accordionItemHeader.classList.toggle('active');
        accordionItemHeader.parentElement.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });

});



};





export default questionsMain;






