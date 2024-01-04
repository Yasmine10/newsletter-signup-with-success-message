const main = document.getElementsByTagName("main")[0];
const signupDiv = document.querySelector(".card--form");
const signupForm = document.getElementById("signup_form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get value from email input
  const email = document.getElementById("email");
  const emailError = document.getElementById("email_error");
  console.log(email.value);

  // Validate email value
  const valid = validateForm(email, emailError);

  console.log(valid);

  // Hide form card and show thank you card
  if (valid) {
    // hide signup form card
    signupDiv.classList.add("hidden");
    // show thank you card
    thankyouMessage(email.value);

    // go back to signup form when close button is pressed
    const closeButton = document.querySelector(".card--thanks .close");

    closeButton.addEventListener("click", (e) => {
      e.preventDefault();

      const signupDiv = document.querySelector(".card--form");
      const thankyouMessage = document.querySelector(".card--thanks");

      signupDiv.classList.remove("hidden");
      thankyouMessage.style.display = "none";
    });
  }
});

const validateForm = (field, fieldError) => {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let valid = false;

  if (field.value === "") {
    fieldError.innerHTML = "This field is required";
  } else if (field.type === "email" && !field.value.match(emailFormat)) {
    fieldError.innerHTML = "Not a valid email address";
  } else {
    valid = true;
  }

  if (!valid) {
    signupForm.classList.add("invalid");
  }

  return valid;
};

const thankyouMessage = (email) => {
  main.innerHTML +=
    `
			<div class="card--thanks">
				<img class="thank-you-message__image" src="/src/assets/images/icon-success.svg" alt="">
				<h2 class="thank-you-message__title">Thanks for subscribing!</h2>
				<p class="thank-you-message__text">A confirmation email has been sent to <span>` +
    email +
    `</span>. Please open it and click the button inside to confirm your subscription</p>
				<button type="button" class="thank-you-message__btn | btn btn--primary close">Dismiss message</button>
			</div>
		`;
};
