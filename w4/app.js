// Create the form in the html page, create elements for event listeners in app.js for the form to use. 
// Make sure event listeners don't prefire before prompted, and have h2 activated with event listeners.
// I used the w3 code in the private repo to model my html and setup my app.js.
// I used chatgpt to help me with my event listeners, as I had trouble with my formSubmit and id.
// Prompt: I am trying to fix my JavaScript code to where when I submit it, it will have a pop-up message upon submitting your name telling you to keep your head up. My submit is not working, can you help me find the problem?

const instantGreetingForm = document.getElementById('instantGreetingForm');
const userNameInput = instantGreetingForm.querySelector('#userName');

const handleFormSubmit = function(event) {
    event.preventDefault();

    const name = userNameInput.value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    const userNameDisplay = document.querySelector('#userNameDisplay');
    const noteDisplay = document.querySelector('#results .note em');

    userNameDisplay.textContent = name;
    noteDisplay.textContent = "Keep your head up!";
};

const init = function () {
    instantGreetingForm.addEventListener('submit', handleFormSubmit);

};

document.addEventListener('DOMContentLoaded', init);