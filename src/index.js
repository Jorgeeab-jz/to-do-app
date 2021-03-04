import tasks from './tasks';
import uiHandle from './interface';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import isValid from 'date-fns/isValid';
import getTime from 'date-fns/getTime';
import isPast from 'date-fns/isPast';

const content = document.getElementById('content');
const addBtn = document.getElementById('addTask');
let taskDate;
let taskStamp;

const datePicker = document.getElementById('taskDate');
datePicker.addEventListener('change',function(){
    taskDate = format(parseISO(datePicker.value),"dd MMMMMMMM yyyy");
    console.log(taskDate)
    taskStamp = getTime(parseISO(datePicker.value));
});


function clear(){
    document.getElementById('taskTitle').value = ''
    datePicker.value = '';
}

function drawTasks(){
    content.innerHTML = '';
    tasks.getList().forEach((task,i)=>{
        console.log(task,i)
        let newTask = uiHandle.createCard(task,i.toString())
        console.log(newTask);
        content.append(newTask);
    });
}

function startApp(){
    tasks.checkTasks();
    drawTasks();
}

addBtn.addEventListener('click', function(){
    let thisDate = parseISO(datePicker.value);
    if(isValid(thisDate) && !isPast(thisDate)){
        let taskTitle = document.getElementById('taskTitle').value;
        tasks.save(tasks.generateInfo(taskTitle,taskDate,taskStamp));
        tasks.updateStorage();
        drawTasks();
        clear();
    }else if(!isValid(thisDate)){
        alert('Please select a date.')
    }else if(isPast(thisDate)){
        alert('You cant go back in time silly');
    }
});

startApp()

