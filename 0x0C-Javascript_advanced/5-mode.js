function changeMode (size, weight, transform, background, color) {}

function main () {
    let spooky = changeMode(9, bold, uppercase, pink, green);
    let darkMode = changeMode(12, bold, capitalize, black, white);
    let screamMode = changeMode(12, normal, lowercase, white, black);
    let p = document.createElement('p');
    p.textContent = 'Welcome Holberton!';
    let spooky = document.createElement('button');
    spooky.textContent = 'Spooky';
    let darkMode = document.createElement('button');
    darkMode.textContent = 'Dark mode';
    let screamMode = document.createElement('button');
    screamMode.textContent = 'Scream mode';
}

main();
