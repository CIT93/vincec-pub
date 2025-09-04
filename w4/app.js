// Create the form in the html page, create elements for event listeners in app.js for the form to use. 
// Make sure event listeners don't prefire before prompted, and have h2 activated with event listeners.

const instantGreetingForm = document.getElementById('instantGreetingForm');

const userName = instantGreetingForm.querySelector('#userName');

const handleFormSubmit = function(event) {
    event.preventDefault();
}

const init = function () {
    instantGreetingForm.addEventListener('submit', handleFormSubmit);
    
};

document.addEventListener('DOMContentLoaded', init);