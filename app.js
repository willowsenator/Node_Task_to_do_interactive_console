require('colors');
const {pause, inquireMenu} = require('./helper/inquirer');

const main = async() => {
    let option = '';

    do {
        option = await inquireMenu();
        console.log({ option });
        if (option !== '0') await pause();
    } while (option !== '0');
}

main();
