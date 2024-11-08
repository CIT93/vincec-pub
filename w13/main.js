const FORM = document.getElementById('form');
const OUT = document.getElementById('output');

const updateDOM = (message, el = "h3") => {
    const newEl = document.createElement(el)
    newEl.textContent = message
    OUT.appendChild(newEl)
}

const startWorkout = (type, reps, time, fn) => {
    fn(`Start ${type} <> Goal reps is ${reps} <> complete in ${time} min!`, "p")
    return new Promise((resolve, reject) => {
        if (time === 0) {
            reject(`Error on Time selection`)
        } else {
            setTimeout(() => {
                resolve(`Stop ${type}`)
            }, time * 1000)
        }
    })
}

const onError = (error) => {
    updateDOM(error, "h2")
}

FORM.addEventListener('submit', e => {
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat(e.target.reps.value)
    const time = parseFloat(e.target.time.value)
    startWorkout(type, reps, time, updateDOM)
        .then(updateDOM)
        .catch(onError)
    FORM.reset()
})