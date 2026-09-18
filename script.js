"use strict";

/* =========================================
MOBILE NAVIGATION
========================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

```
menuButton.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("show");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuButton.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

    const menuText =
        menuButton.querySelector(".menu-button-text");

    if (menuText) {
        menuText.textContent =
            isOpen ? "Close" : "Menu";
    }

});

const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 700) {

            navLinks.classList.remove("show");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            const menuText =
                menuButton.querySelector(
                    ".menu-button-text"
                );

            if (menuText) {
                menuText.textContent = "Menu";
            }

        }

    });

});
```

}

/* =========================================
LEAGUE WEEK DOM MANIPULATION
========================================= */

const weekButton =
document.getElementById("weekButton");

const weekText =
document.getElementById("weekText");

let currentWeek = 1;

if (weekButton && weekText) {

```
weekButton.addEventListener("click", function () {

    currentWeek++;

    if (currentWeek > 18) {
        currentWeek = 1;
    }

    weekText.textContent =
        "Current League Week: " + currentWeek;

});
```

}

/* =========================================
CONTACT FORM VALIDATION
========================================= */

const contactForm =
document.getElementById("contactForm");

if (contactForm) {

```
const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");

const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const messageError =
    document.getElementById("messageError");

const formStatus =
    document.getElementById("formStatus");


function setError(input, errorElement, message) {

    input.setAttribute(
        "aria-invalid",
        "true"
    );

    errorElement.textContent = message;
}


function clearError(input, errorElement) {

    input.setAttribute(
        "aria-invalid",
        "false"
    );

    errorElement.textContent = "";
}


function validEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}


function validateForm() {

    let valid = true;

    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(messageInput, messageError);

    formStatus.textContent = "";


    const name =
        nameInput.value.trim();

    const email =
        emailInput.value.trim();

    const message =
        messageInput.value.trim();


    if (name.length < 2) {

        setError(
            nameInput,
            nameError,
            "Please enter your name."
        );

        valid = false;
    }


    if (!validEmail(email)) {

        setError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        valid = false;
    }


    if (message.length < 10) {

        setError(
            messageInput,
            messageError,
            "Please enter at least 10 characters."
        );

        valid = false;
    }


    return valid;
}


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const valid = validateForm();

        if (!valid) {

            formStatus.textContent =
                "Please correct the errors above.";

            const firstInvalid =
                contactForm.querySelector(
                    '[aria-invalid="true"]'
                );

            if (firstInvalid) {
                firstInvalid.focus();
            }

            return;
        }


        formStatus.textContent =
            "Thank you! Your message passed validation.";


        contactForm.reset();


        nameInput.setAttribute(
            "aria-invalid",
            "false"
        );

        emailInput.setAttribute(
            "aria-invalid",
            "false"
        );

        messageInput.setAttribute(
            "aria-invalid",
            "false"
        );

    }
);


nameInput.addEventListener(
    "input",
    function () {

        if (nameInput.value.trim().length >= 2) {

            clearError(
                nameInput,
                nameError
            );

        }

    }
);


emailInput.addEventListener(
    "input",
    function () {

        if (
            validEmail(
                emailInput.value.trim()
            )
        ) {

            clearError(
                emailInput,
                emailError
            );

        }

    }
);


messageInput.addEventListener(
    "input",
    function () {

        if (
            messageInput.value.trim().length >= 10
        ) {

            clearError(
                messageInput,
                messageError
            );

        }

    }
);
```

}
