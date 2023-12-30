import {TaskStatus} from "@/Data/Enum.ts";

export function GetTaskTodo(TaskList: TaskData[]) {
    const TodoTaskList:TaskData[] = [];
    for(const i of TaskList) {
        if(i.status == TaskStatus.todo) {
            TodoTaskList.push(i)
        }
    }
    return TodoTaskList;
}

export function GetTaskProgress(TaskList: TaskData[]) {
    const TodoTaskList:TaskData[] = [];
    for(const i of TaskList) {
        if(i.status == TaskStatus.progess) {
            TodoTaskList.push(i)
        }
    }
    return TodoTaskList;
}

export function GetTaskComplete(TaskList: TaskData[]){
    const TodoTaskList:TaskData[] = [];
    for(const i of TaskList) {
        if(i.status == TaskStatus.complete) {
            TodoTaskList.push(i)
        }
    }
    return TodoTaskList;
}