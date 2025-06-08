// Features:
// - Add tasks (push)
// - Remove tasks (splice/filter)
// - Mark tasks as complete (map)
// - Display stats (reduce)

const todoList = [];

function addTask(task) {
    todoList.push({task, completed: false});
}

function removeTask(id) {
    todoList.splice(id,1);
}

function markAsComplete(id) {
    todoList.id.completed = !todoList.id.completed;
}

function displayStats() {
    const total = todoList.length;
    const completed = todoList.reduce((count, item) => item.completed ? count + 1 : count, 0);
    return { total, completed};
}

//  Test it
addTask("Learn JavaScript");
addTask("Build a project");
toggleComplete(0);
console.log(todoList);
console.log(displayStats());