let prompt = require('prompt-sync')();
let robot = require("robotjs");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function main() {
    let ask = parseInt(prompt("hom much clicks do you want to do? "))



    for (let i = 0; i < ask; i++) {
        robot.mouseClick();
    }

}

main()