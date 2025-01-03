class Todo {
    length = 0;
    tasks = [];

    addTask(task) {
        this.tasks.push(task);
        this.length++;
    }

    deleteTask(task) {
        const index = this.tasks.findIndex((t) => t === task);

        if (index === -1) {
            throw Error("Task not found: " + task)
        }

        this.tasks.splice(index, 1);
        this.length--;
    }

    popMostRecentTask() {
        if (this.length === 0) {
            throw Error("No tasks to pop")
        }

        const lastIndex = this.tasks.length - 1;

        const mostRecentTask = this.tasks[lastIndex];

        this.tasks.splice(lastIndex, 1);
        this.length--;

        return mostRecentTask;
    }

    clear() {
        // this.tasks = [];
        // this.length = 0;
    }
}

module.exports = Todo;