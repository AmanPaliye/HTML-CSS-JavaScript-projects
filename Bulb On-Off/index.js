const bulbSwitch = document.querySelector("#bulbSwitch");
const bulb = document.querySelector("#bulb");

bulbSwitch.addEventListener('click', function () {
    console.log(bulb.src);
    if (bulb.src.match('off')) {
        bulb.src = './bulb-on.gif';
        bulbSwitch.innerHTML = 'Turn OFF';
    } else {
        bulb.src = './bulb-off.gif';
        bulbSwitch.innerHTML = 'Turn ON';
    }
});
