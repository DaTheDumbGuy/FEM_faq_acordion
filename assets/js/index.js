const faqQaContainers = document.querySelectorAll(".faq-qa-container");

faqQaContainers.forEach(faqQaContainer => {
    faqQaContainer.addEventListener('click', () => {
        const faqIconImg = faqQaContainer.querySelector('img.faq-qa-icon');
        const faqAnswerParagraph = faqQaContainer.querySelector('p.faq-qa-answer');

        faqIconImg.src = faqIconImg.src.includes('icon-plus.svg')
            ? './assets/images/icon-minus.svg'
            : './assets/images/icon-plus.svg';
        faqIconImg.alt = faqIconImg.src.includes('icon-plus.svg')
            ? 'Faqs icon minus'
            : 'Faqs icon plus';

        faqAnswerParagraph.classList.toggle('show-answer');
        console.log(faqAnswerParagraph);
    });
});
