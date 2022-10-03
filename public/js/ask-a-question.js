const form = document.querySelector('#submit-form');
const questionTitle = document.querySelector('#questionTitle');
const questionDescription = document.querySelector('#questionDescription');
const warningText = document.querySelector('.box-description p')
const submitBtn = document.querySelector('#submitBtn');

function formValidation(event) {z
    event.preventDefault();
    const questionTitleLength = questionTitle.value.length;
    const questionDescriptionLength = questionDescription.value.length;

    if (questionTitleLength >= 20 && questionTitleLength <= 45 && questionDescriptionLength >= 40 && questionDescriptionLength <= 480) {
        form.submit();
    } else if (questionTitleLength < 20) {
        window.alert('The question title must contain at least 20 characters. Please check and try again.')
    } else if (questionTitleLength > 45) {
        window.alert('The question title must contain a maximum of 45 characters. Please check and try again.')
    } else if (questionDescriptionLength < 40) {
        window.alert('Your answer contains less than 40 characters! Please check and try again.')
    } else {
        window.alert('Your answer contains more than 480 characters! Please check and try again.')
    }
}

let title = false;
let description = false;

function questionTitleLengthUpdate() {
    const questionTitleLength = questionTitle.value.length;
    warningText.innerText = `${questionTitleLength} of 45 characters filled`;

    if (questionTitleLength >= 20 && questionTitleLength <= 45) {
        warningText.classList.remove("invalid")
        warningText.classList.add("valid")
        title = true;

        if(title && description) {
            submitBtn.disabled = false;
        }

    } else {
        submitBtn.disabled = true;
        warningText.classList.remove("valid")
        warningText.classList.add("invalid")
        title = false;
    }
}


function questionDescriptionLengthUpdate() {
    const questionDescriptionLength = questionDescription.value.length;
    warningText.innerText = `${questionDescriptionLength} of 480 characters filled`;

    if (questionDescriptionLength >= 40 && questionDescriptionLength <= 480) {
        warningText.classList.remove("invalid")
        warningText.classList.add("valid")
        description = true;

        if(title && description) {
            submitBtn.disabled = false;
        }

    } else {
        submitBtn.disabled = true;
        warningText.classList.remove("valid")
        warningText.classList.add("invalid")
        description = false;
    }
}

submitBtn.addEventListener("click", formValidation);

window.onload = function eventListeners() {
    questionTitle.addEventListener("keyup", questionTitleLengthUpdate)
    questionDescription.addEventListener("keyup", questionDescriptionLengthUpdate)
    submitBtn.disabled = true;
}


