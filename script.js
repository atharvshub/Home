/*!
* Start Bootstrap - Atharv's Hub Custom Scripts
* Custom JavaScript for website interactions
*/

window.addEventListener('DOMContentLoaded', event => {

    // Function to shrink the navigation bar on scroll
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        
        // If the scroll position is at the very top (0), keep the bar expanded/standard size
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            // Add a 'shrink' class once the user scrolls down
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar when the page is loaded (if scroll position isn't 0)
    navbarShrink();

    // Shrink the navbar when the page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // ------------------------------------------------------------------
    // Simple Contact Form Submission Handler
    // ------------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Basic data retrieval
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // *** IMPORTANT ***
                // In a real application, replace this with an AJAX call 
                // to a server-side script (like a PHP/Node endpoint) to send the email.
                
                // --- Placeholder Success Action ---
                alert(`Thank you, ${name}! Your message has been received by Atharv's Hub. (Note: This is a demo alert; no email was actually sent.)`);
                contactForm.reset(); // Clear the form
                // ----------------------------------
                
            } else {
                alert('Please fill out all required fields.');
            }
        });
    }
});