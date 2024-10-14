// Get appointment now button
document.querySelectorAll('.appointment-button').forEach(button => {
    button.addEventListener('click', function() {
        var isLoggedIn = checkLoginStatus();

        if (isLoggedIn) {
            window.location.href = 'index.html';
        } else {
            var login = confirm("You need to log in to get an appointment. Do you want to log in now?");
            if (login) {
                window.location.href = 'login.html';
            }
        }
    });
});

function checkLoginStatus() {
    // Placeholder for actual login status check
    return false; // Change this to true if the user is logged in
}

// Toggle signup dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    const signupButton = document.querySelector('.signup-button');
    const dropdownMenu = document.querySelector('#dropdownMenu');
    const personalItem = document.querySelector('#dropdownMenu .dropdown-item.personal');
    const organizationalItem = document.querySelector('#dropdownMenu .dropdown-item.organizational');

    if (signupButton && dropdownMenu) {
        signupButton.addEventListener('click', function() {
            // Toggle the display of the dropdown menu
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    }

    if (personalItem) {
        personalItem.addEventListener('click', function() {
            window.location.href = 'signup.html'; // Redirect to signup page
        });
    }

    if (organizationalItem) {
        organizationalItem.addEventListener('click', function() {
            window.location.href = 'signin.html'; // Redirect to sign-in page
        });
    }
});

// Function for Sign In button to show form details
document.getElementById('signInButton').addEventListener('click', function() {
    const form = document.querySelector('form');
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = 'none'; // Hide the dropdown menu if visible
    form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';
});

// Scroll banner at the top
document.addEventListener('DOMContentLoaded', function() {
    const leftDiv = document.querySelector('.left');
    if (leftDiv) {
        leftDiv.style.transition = 'all 35s ease';
        leftDiv.style.transform = 'translateX(100px)';
        leftDiv.style.opacity = '1'; // Set opacity to 1 instead of 4
    }
});

// Initial login setup
function setUserInitials(name) {
    const initials = name.split(' ').map(word => word.charAt(0)).join('').toUpperCase();
    document.getElementById("userAvatar").innerHTML = `<div class="user-initial">${initials}</div>`;
}

function loginUser() {
    const username = prompt("Enter your username:");
    if (username) {
        setUserInitials(username);
    }
}

function logout() {
    document.getElementById("userAvatar").innerHTML = '';
}

// Handle form submission for login
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            if (username === "exampleuser" && password === "examplepassword") {
                alert("Login successful!");
                setUserInitials(username); // Set user initials on successful login
            } else {
                document.getElementById("errorMessage").innerText = "Invalid username or password.";
                document.getElementById("errorMessage").style.display = "block";
            }
        });
    }
});

// Testimonial section scroll
document.addEventListener('DOMContentLoaded', function() {
    const scrollLeftBtn = document.getElementById('scrollLeftBtn');
    const scrollRightBtn = document.getElementById('scrollRightBtn');
    const slideContainer = document.querySelector('.slide-container');

    if (scrollLeftBtn && scrollRightBtn && slideContainer) {
        // Event listener for scrolling to the left
        scrollLeftBtn.addEventListener('click', function() {
            slideContainer.scrollBy({
                left: -300, // Adjust scroll distance as needed
                behavior: 'smooth'
            });
        });

        // Event listener for scrolling to the right
        scrollRightBtn.addEventListener('click', function() {
            slideContainer.scrollBy({
                left: 300, // Adjust scroll distance as needed
                behavior: 'smooth'
            });
        });
    }
});

// Display success message on contact form submission
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert("Your message has been submitted successfully!");
            contactForm.reset();
        });
    }
});

// Newsletter subscription form functionality
document.addEventListener("DOMContentLoaded", function() {
    const newsletterForm = document.getElementById('email-form');
    const emailInput = document.getElementById('footer-email');

    if (newsletterForm && emailInput) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = emailInput.value.trim();
            if (validateEmail(email)) {
                alert("You have successfully subscribed to our newsletter!");
                emailInput.value = '';
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

// Predefined email and password login functionality
document.addEventListener('DOMContentLoaded', function() {
    const validEmail = "example@example.com";
    const validPassword = "password123";
    const loginForm = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (loginForm && emailInput && passwordInput) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const enteredEmail = emailInput.value;
            const enteredPassword = passwordInput.value;
            if (enteredEmail !== validEmail) {
                alert('Invalid email!');
            } else if (enteredPassword !== validPassword) {
                alert('Wrong password!');
            } else {
                alert('Login successful!');
                setUserInitials(enteredEmail.split('@')[0]); // Set initials from the email
            }
        });
    }
});
