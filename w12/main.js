const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const asyncData = []; 

function getExercise() {
    console.log('Exercise')
    const exercise = ''
    console.log('Exercised')
    return exercise
}

function getReps(reps) {
    console.log('2')
    return reps
}

function getMinutes(minutes) {
    console.log('5')
    return minutes
}

function start(exercise, reps, minutes) {
    const typeExercise = getExercise(exercise)
    const targetReps = getReps(reps)
    const timeMinutes = getMinutes(minutes)
    asyncData.push({
        typeExercise: exercise,
        targetReps: reps,
        timeMinutes: minutes,
    })
}

function displayOutput() {
    for (let obj of asyncData) {
        console.log(obj)
        const output = document.getElementById("output");
        const newH2 = document.createElement("h2");
        newH2.textContent = `Start ${obj.typeExercise} doing ${obj.targetReps} reps in ${obj.timeMinutes} minute(s).`;
        output.appendChild(newH2);
    }
}

FORM.addEventListener('submit', function(e) {
    e.preventDefault();
    const typeExercise = FORM.exercise.value;
    const targetReps = FORM.reps.value;
    const timeMinutes = FORM.minutes.value;
    start(typeExercise, targetReps, timeMinutes);
    displayOutput();
   setTimeout(() => {
    OUTPUT.textContent = "Good Job!";
   }, 3000);
});