let birthday = new Date('07-09-2002');

console.log(birthday.getTime() / 1000)

function date(date) {
    let time = new Date(date).getTime();

    let epoch = new Date('01-01-1970');


    let difference = time - epoch;

    let day = Math.floor(difference / (1000 * 60 * 60 * 24))

    return day;
}
console.log(date('01-04-1970'));