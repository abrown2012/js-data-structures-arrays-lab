// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    return drivers.push(name);
}

function destructivelyPrependDriver(name) {
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    return drivers.shift();
}

function appendDriver(name) {
    let new_driver;
    return new_driver = [...drivers, name];
}

function prependDriver(name) {
    let new_driver;
    return new_driver = [name, ...drivers];
}

function removeLastDriver() {
    let new_driver =  drivers.slice(0, -1);
    return new_driver
}

function removeFirstDriver() {
    let new_driver = drivers.slice(1)
    return new_driver
}