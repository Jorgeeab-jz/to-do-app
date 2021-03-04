

const taskHandler = (function(){
    
    let taskStorage = [];

    const checkTasks = ()=>{
        if(localStorage.getItem('myTasks') !== null){
            taskStorage = JSON.parse(localStorage.getItem('myTasks'));
        }
    }

    const getList = ()=>{
        return taskStorage;
    }

    const updateStorage = ()=>{
        localStorage.setItem('myTasks', JSON.stringify(taskStorage));
    }

    const save = (task)=>{
        taskStorage.push(task);
        console.log(taskStorage);
    }

    const generateInfo = (title,date,timestamp)=> {
        let task = {};
    
        task.title = title;
        task.date = date;
        task.complete = false;
        task.timestamp = timestamp;
        
        return task;
    }

    const remove = (task)=>{
        taskStorage.splice(task,1);
    }

    return {
        generateInfo,
        save,
        remove,
        checkTasks,
        getList,
        updateStorage
    }


})();

export {taskHandler as default}