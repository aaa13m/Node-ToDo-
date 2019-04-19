const yargs = require('yargs');
const {addTask} = require('./todo')
const {deleteTask} = require('./todo')
const {displayTodo} = require('./todo')
const {deleteTodo} = require('./todo')
const {displayTask} = require('./todo')
debugger
yargs
.command({
    command:'add',
    describe: 'Add todo..',
    builder:{
        title:{
            describe:'add todo task',
            alias:'t',
            demandOptions: true,
            type:'string'
        },
        description:{
            describe:'description of task',
            alias:'d',
            demandOptions: true,
            type:'string'
        }
    },

    handler:({title, description}) => {
        addTask(title, description);
        //call add method
        
    }
})
.command({
    command:'del',
    describe: 'Delete task..',
    builder:{
        title:{
            describe:'delete todo task',
            alias:'d',
            demandOptions: true,
            type:'string'
        },
        
    },

    handler:({title}) => {
        deleteTask(title);
        //call delete method
        
    }
})
.command({
    command:'list',
    describe: 'display todo..',
    builder:{
        title:{
            describe:'display todo list',
            alias:'d',
            demandOptions: false,
            type:'string'
        },
        
    },

    handler:() => {

        displayTodo();
        //call display to show the all contents of todoList
        
    }
})

.command({
    command:'task',
    describe: 'display task..',
    builder:{
        title:{
            describe:'display todo list',
            alias:'d',
            demandOptions: false,
            type:'string'
        },
        
    },

    handler:({title}) => {

        displayTask(title);
        //call display to show the all contents of todoList
        
    }
})

.command({
    command:'emp',
    describe: 'Delete the whole todolist..',
    builder:{
        title:{
            describe:'delete todo task',
            alias:'d',
            demandOptions: false,
            type:'string'
        },
        
    },

    handler:() => {
        deleteTodo();
        //call delete method
        
    }
})

yargs.parse();