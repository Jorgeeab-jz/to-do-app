import tasks from './tasks';
import uiHandle from './interface';

const content = document.getElementById('content');


tasks.save(tasks.generateInfo('title','description','tomorrow', 'low'));
tasks.save(tasks.generateInfo('title','description','tomorrow', 'low'));
tasks.updateStorage();

tasks.taskStorage.forEach((task,i)=>{
    console.log(task,i)
    let newTask = uiHandle.createCard(task,i.toString())
    console.log(newTask);
    content.append(newTask);
})
