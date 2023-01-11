// Code your solution here
function findMatching(names, name) {
    return names.filter(n => n.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(names, startingLetters) {
    return names.filter(n => {
        let sub = n.substr(0,startingLetters.length).toLowerCase();
        return sub === startingLetters.toLowerCase();
    })
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}