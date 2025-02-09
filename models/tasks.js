const Task = require('./task');

class Tasks {
    _list = {};

    get listArr() {
        const list = [];
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            list.push(task);
        });
        return list;
    }

    constructor() {
        this._list = {};
    }

    loadTasksFromArray(tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }

    createTask(description = '') {
        const task = new Task(description);
        this._list[task.id] = task;
    }

    completeList() {
        console.log();
        this.listArr.forEach((task, i) => {
            const idx = `${i + 1 + "."}`.green;
            const { description, completedDate } = task;
            const status = (completedDate) ? 'Completed'.green : 'Pending'.red;
            console.log(`${idx} ${description} :: ${status}`);
        });
    }

    listPendingCompletedTasks(completed = true) {
        console.log();
        let i = 0;
        this.listArr.forEach(task => {
            const { description, completedDate } = task;
            const status = (completedDate) ? 'Completed'.green : 'Pending'.red;
            if (completed) {
                if (completedDate) {
                    i++;
                    console.log(`${(i + '.').green} ${description} :: ${completedDate.green}`);
                }
            } else {
                if (!completedDate) {
                    i++;
                    console.log(`${(i + '.').green} ${description} :: ${status}`);
                }
            }
        });
    }

    deleteTask(id = '') {
        if (this._list[id]) {
            delete this._list[id];
        }
    }
}

module.exports = Tasks;