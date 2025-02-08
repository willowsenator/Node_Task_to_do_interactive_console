require('colors');
const { pause, inquireMenu, readInput } = require('./helper/inquirer');
const {saveDB, readDB} = require('./helper/dbTools');
const Tasks = require('./models/tasks');

const main = async () => {
    let option = '';
    const tasks = new Tasks();
    const dbTasks = readDB();
    console.log(dbTasks);
    if (dbTasks) {
       tasks.loadTasksFromArray(dbTasks);
    }

    do {
        option = await inquireMenu();
        switch (option) {
            case '1':
                const description = await readInput('Description:');
                tasks.createTask(description);
                break;
            case '2':
                tasks.completeList();
                break;
            case '3':
                tasks.listPendingCompletedTasks();
                break;
            case '4':
                tasks.listPendingCompletedTasks(false);
                break;
        }

        saveDB(tasks.listArr);

        if (option !== '0') await pause();
    } while (option !== '0');
}

main();
