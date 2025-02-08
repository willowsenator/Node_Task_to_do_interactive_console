require('colors');
const {pause, inquireMenu, readInput} = require('./helper/inquirer');
const Tasks = require('./models/tasks');

const main = async() => {
    let option = '';
    const tasks = new Tasks();

    do {
        option = await inquireMenu();
        switch (option) {
            case '1':
                const description = await readInput('Description:');
                tasks.createTask(description);
                break;
            case '2':
               console.log(tasks._list);
                break;
        }

      if (option !== '0') await pause();
    } while (option !== '0');
}

main();
