const form = document.querySelector('#submit-form');
const reply = document.querySelector('#reply');
const warningText = document.querySelector('.box-description p')
const submitBtn = document.querySelector('#submitBtn');

function formValidation(event) {
    event.preventDefault();
    const replyLength = reply.value.length;

    if (replyLength >= 30 && replyLength <= 480) {
        form.submit();
    } else if (replyLength < 30) {
        window.alert('Your answer contains less than 30 characters! Please check and try again.')
    } else {
        window.alert('Your answer contains more than 480 characters! Please check and try again.')
    }
}

function replyLengthUpdate() {
    const replyLength = reply.value.length;
    warningText.innerText = `${replyLength} of 480 characters filled`;

    if (replyLength >= 30 && replyLength <= 480) {
        submitBtn.disabled = false;
        warningText.classList.remove("invalid")
        warningText.classList.add("valid")
    } else {
        submitBtn.disabled = true;
        warningText.classList.remove("valid")
        warningText.classList.add("invalid")
    }
}

submitBtn.addEventListener("click", formValidation);

window.onload = function eventListeners() {
    reply.addEventListener("keyup", replyLengthUpdate)
    submitBtn.disabled = true;
}


