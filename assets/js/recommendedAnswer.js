// Select the currently open FAQ answer
let currentOpenAnswer = document.querySelector('.show-answer');

// Event listener for clicks
document.addEventListener('click', e => {
    const clickedContainer = e.target.closest('.faq-qa-icon-container');
    if (!clickedContainer) return; // Exit if clicked outside of any .faq-qa-icon-container

    // Find the FAQ answer paragraph corresponding to the clicked icon
    const faqAnswerParagraph = clickedContainer.nextElementSibling;
    const faqIconImg = clickedContainer.querySelector('.faq-qa-icon');

    // Check if the answer is already open, if yes, return
    if (faqAnswerParagraph.classList.contains('show-answer')) {
        return;
    }
    //@Grego Here's your recommended approach, though I didn't create a function for changing the icons (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
    // Change the currently open FAQ icon to a plus icon and hide its corresponding answer
    const currentOpenFaq = currentOpenAnswer.previousElementSibling;
    const currentIconImg = currentOpenFaq.querySelector('.faq-qa-icon');

    currentIconImg.src = './assets/images/icon-plus.svg';
    currentIconImg.alt = 'Toggle FAQ visibility.';
    currentOpenAnswer.classList.remove('show-answer');

    // Update the currently open FAQ answer to the newly clicked one
    currentOpenAnswer = faqAnswerParagraph;

    // Update current clickedContainer icon to display collapsed FAQ state (icon-minus)
    faqIconImg.src = './assets/images/icon-minus.svg'
    faqIconImg.alt = 'Collapse FAQ answer';

    // Toggle visibility of the clicked FAQ answer
    faqAnswerParagraph.classList.toggle('show-answer');
});
