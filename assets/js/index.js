const faqQaContainers = document.querySelectorAll(".faq-qa-container");

faqQaContainers.forEach(faqQaContainer => {
    const faqIconImg = faqQaContainer.querySelector('.faq-qa-icon');
    const faqAnswerParagraph = faqQaContainer.querySelector('.faq-qa-answer');
    const faqQuestion = faqQaContainer.querySelector('.faq-qa-icon-container');

    faqQuestion.addEventListener('click', () => {
        // If the clicked section is already open, do nothing
        if (faqAnswerParagraph.classList.contains('show-answer')) {
            return;
        }

        // Close all other accordion items
        faqQaContainers.forEach(container => {
            if (container !== faqQaContainer) {
                const icon = container.querySelector('.faq-qa-icon');
                const answer = container.querySelector('.faq-qa-answer');

                icon.src = './assets/images/icon-plus.svg';
                icon.alt = 'Faqs icon plus';
                answer.classList.remove('show-answer');
            }
        });

        // Toggle current accordion item
        faqIconImg.src = faqIconImg.src.includes('icon-plus.svg')
            ? './assets/images/icon-minus.svg'
            : './assets/images/icon-plus.svg';
        faqIconImg.alt = faqIconImg.src.includes('icon-plus.svg')
            ? 'Faqs icon minus'
            : 'Faqs icon plus';

        faqAnswerParagraph.classList.toggle('show-answer');
    });
});
