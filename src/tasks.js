

const taskHandler = (function(){
    
    let taskStorage = [];

    const checkTasks = ()=>{
        if(localStorage.getItem('myTasks') !== null){
            taskStorage = JSON.parse(localStorage.getItem('myTasks'));
        }
    }

    const updateStorage = ()=>{
        localStorage.setItem('myTasks', JSON.stringify(taskStorage));
    }

    const save = (task)=>{
        taskStorage.push(task);
        console.log(taskStorage);
    }

    const generateInfo = (title,date,priority)=> {
        let task = {};
    
        task.title = title;
        task.date = date;
        task.priority = priority;
        task.complete = false;
        
        return task;
    }

    const remove = (task)=>{
        taskStorage.splice(task,1);
    }

    return {
        generateInfo,
        save,
        checkTasks,
        updateStorage,
        taskStorage
    }


})();

export {taskHandler as default}