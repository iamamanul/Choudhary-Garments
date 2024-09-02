document.addEventListener('DOMContentLoaded', () => {
    // Function to handle smooth scrolling
    function scrollToSection(selector) {
        document.querySelector(selector).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Smooth scroll for About link
    const aboutLink = document.querySelector('a[href="#about"]');
    if (aboutLink) {
        aboutLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor click behavior
            scrollToSection('#about');
        });
    }

    // Smooth scroll for Shop link
    const shopLink = document.querySelector('a[href="#shop"]');
    if (shopLink) {
        shopLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor click behavior
            scrollToSection('.upperbox');
        });
    }

    // Smooth scroll for Contact link
    const contactLink = document.querySelector('a[href="#contact"]');
    if (contactLink) {
        contactLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor click behavior
            scrollToSection('#contact');
        });
    }

    
});


document.querySelector('.navcontent a[href="#home"]').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Adding animation to the "mid" section
    const midSection = document.querySelector('.mid');
    midSection.classList.add('animate-mid');

    // Remove the animation class after it's done
    setTimeout(() => {
        midSection.classList.remove('animate-mid');
    }, 1500); // Duration of the animation
})



