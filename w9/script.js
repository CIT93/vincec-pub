document.addEventListener('DOMContentLoaded', function () {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const form = document.getElementById('form');
    const errorElement = document.getElementById('error');

    form.addEventListener('submit', (e) => {
        let messages = []
        if (firstName.value === '' || firstName.value == null) {
            messages.push('first name is required')
        }

        if (firstName.value.length <= 6) {
            messages.push('first name must be longer than 6 characters')
        }

        if (firstName.value.length >= 20) {
            messages.push('first name must be less than 20 characters')
        }

        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(', ')
        }

        if (lastName.value === '' || lastName.value == null) {
            messages.push('last name is required')
        }

        if (lastName.value.length <= 6) {
            messages.push('last name must be longer than 6 characters')
        }

        if (lastName.value.length >= 20) {
            messages.push('last name must be less than 20 characters')
        }

        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(', ')
        }

        return messages;
    });

});