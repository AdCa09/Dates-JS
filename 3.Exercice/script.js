// const timeStamp = new Date('01-01-1970');
// console.log(timeStamp)
// let addHours = Math.floor(80000 / 24);

// timeStamp.setHours(timeStamp.getHours() + addHours);
// console.log(timeStamp);


function displayTime(Inputhours) {
    let actualTime = new Date();

    let adding = new Date(actualTime.getTime() + Inputhours * 1000 * 60 * 60);

    let sum = adding.toLocaleString();
    console.log(sum);
}
let input = document.querySelector('hours');
let h1 = document.querySelector('h1');
document.addEventListener('DOMContentLoaded', function () {
    let p = document.querySelector('p');
    let present = new Date().toDateString();
    p.textContent = present;
});

document.addEventListener('input', function () {
    displayTime(input.value).toLocaleString;
});
//ajouter la valeur de l'input à l'heure actuelle 