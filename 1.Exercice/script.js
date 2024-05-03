let date = new Date();

let anchorage = date.toLocaleString('en-US', { timeZone: 'America/Anchorage' });

console.log(anchorage)

let reykjavik = date.toLocaleString('en-US', { timeZone: 'Atlantic/Reykjavik' });
console.log(reykjavik)

let saintPetersburg = date.toLocaleString('en-US', { timeZone: 'Europe/Moscow' })
console.log(saintPetersburg);

let bruxelles = date.toLocaleString('us-US', { timeZone: 'Europe/Brussels' })

console.log(bruxelles);