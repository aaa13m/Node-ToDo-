var chalk = require('chalk');
const fs = require('fs');

// adding task in todo
const addTask = (title, description) => {
    data = loadData();
    const isDuplicate = chkDuplicate(title, data)
    if (isDuplicate) {
        console.log(chalk.red.bold("Task Already in Database!!"))
    } else {
        const newTask = {
            title,
            description
        }
        console.log(`Todo task with title "${title}" and "${description}" is added into data`);
        updatedData = [...data, newTask]
        saveData(updatedData)
    }
}

// Displaying whole todo list
const displayTodo = () => {
    const todo = loadData();
    if (todo.length!==0)
        todo.map(t => {
            console.log("  "+chalk.blue.bold.underline(t.title))
            console.log("\t"+chalk.grey(t.description))
        })
    else
        console.log(chalk.red("Your Todo List is Empty!!"))
}

//displaying description of a particular title
const displayTask = (title) => {
    dataFound = {};
    data = loadData();
    const isDuplicate = chkDuplicate(title, data)
    if (isDuplicate) {
        dataFound = data.find(d => d.title === title)
        console.log("  "+chalk.blue.bold.underline(dataFound.title))
        console.log("\t"+chalk.grey(dataFound.description))
    }
    else
        console.log(chalk.red("title not in the list"))
}

//updating data.txt after adding task, deleting task and deleting todolist
const saveData = (updatedData) => {
    console.log("Updating Todo..", updatedData)
    jsonData = JSON.stringify(updatedData)
    fs.writeFileSync("data.txt", jsonData)
}

//checking for duplicate tasks  used in addTask and deleteTask
const chkDuplicate = (title, data) => {
    const dataFound = data.filter(d => d.title == title)
    return (dataFound.length == 0) ? false : true
}

// Loading Data from data.txt
const loadData = () => {
    try {
        const rawData = fs.readFileSync("data.txt");
        const parsedData = JSON.parse(rawData)
        return parsedData
    }
    catch (e) {
        return []

    }
}

// Deleting a particular Task
const deleteTask = (title) => {
    console.log("delete task with title", title)
    dataFound = [];
    data = loadData();
    const isDuplicate = chkDuplicate(title, data)
    if (isDuplicate) {
        dataFound = data.filter(d => d.title !== title)
        console.log("in delete", dataFound);
        saveData(dataFound);

    }
    else
        console.log(chalk.red("title not in the list"))
}

// Deleting your complete todo list
const deleteTodo = () => {
    dataFound = [];
    data = loadData();
    if (data.length!==0) {
        console.log("in delete", dataFound);
        saveData(dataFound);
    }
    else
        console.log("Todo doesnot exist")
}

//exporting functions/modules
module.exports = {
    addTask,
    deleteTask,
    displayTodo,
    displayTask,
    deleteTodo,
}