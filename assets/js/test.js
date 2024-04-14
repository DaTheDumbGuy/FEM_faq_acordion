document.addEventListener('click', function (e) {
    const clickedContainer = e.target.closest('.faq-qa-icon-container');
    if (!clickedContainer) return; // Exit if clicked outside of any .faq-qa-icon-container

    const faqAnswerParagraph = clickedContainer.nextElementSibling;
    const faqIconImg = clickedContainer.querySelector('.faq-qa-icon');

    // Check if the answer is already open, if yes, return
    if (faqAnswerParagraph.classList.contains('show-answer')) {
        return;
    }

    // Close all other .faq-qa-icon-container elements
    document.querySelectorAll('.faq-qa-icon-container').forEach(container => {
        if (container !== clickedContainer) {
            const iconImg = container.querySelector('.faq-qa-icon');
            const answerParagraph = container.nextElementSibling;

            iconImg.src = './assets/images/icon-plus.svg';
            iconImg.alt = 'Toggle FAQ visibility.';
            answerParagraph.classList.remove('show-answer');
        }
    });

    // Toggle current .faq-qa-icon-container
    faqIconImg.src = faqIconImg.src.includes('icon-plus.svg')
        ? './assets/images/icon-minus.svg'
        : './assets/images/icon-plus.svg';
    faqIconImg.alt = faqIconImg.src.includes('icon-plus.svg')
        ? 'Collapse FAQ answer'
        : 'Toggle FAQ visibility.';

    faqAnswerParagraph.classList.toggle('show-answer');
});
