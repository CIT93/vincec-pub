const FORM = document.getElementById('form');
const OUT = document.getElementById('output');

function updateDOM(message, el) {
    const newEl = document.createElement(el)
    newEl.textContent = message
    OUT.appendChild(newEl)
}

const startWorkout = (type, reps, time, fn) => {
    return new Promise((resolve, reject) => {
        fn(`Start ${type} <> Goal reps is ${reps} <> complete in ${time} min!`, "p")
        setTimeout(() => {
            resolve(`Stop ${type}`, "h1")
        }, time * 1000)
    })
}

const startWorkoutIcon = (type, reps, time, fn) => {
return new Promise (function(resolve, reject) {
    setTimeout(() => {
        switch(startWorkout){
            case 'Finished':
                resolved('done')
                break
            case 'Not finished':
                resolved('not done')
            default:
                reject('No Icon Found')
        }
    }, time * 1000)
})
}

function onFinish() {
    console.log(`${type} finished`)
}

startWorkout()
.then(startWorkout)
.then(onFinish)
.catch()

FORM.addEventListener('submit', e => {
    e.preventDefault();
    const type = e.target.type.value
    const reps = parseFloat (e.target.reps.value)
    const time = parseFloat(e.target.time.value)
    startWorkout(type, reps, time, updateDOM)
    FORM.reset()
})