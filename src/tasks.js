


const taskHandler = (function(){
    
    let taskStorage = [];

    let testDate = {
        date : 'today',
        ammount : 59
    }

    if(localStorage.getItem('myTasks') !== null){
        taskStorage = JSON.parse(localStorage.getItem('myTasks'));
    }

    const updateTaskStorage = ()=>{
        localStorage.setItem('myTasks', JSON.stringify(taskStorage));
    }

    const saveTask = ()=>{
        taskStorage.push()
    }

    const generateTaskInfo = (title,description,date,priority)=> {
        let task = {};
    
        task.title = title;
        task.description = description;
        task.date = date;
        task.priority = priority;
    
        return task;
    }



})();