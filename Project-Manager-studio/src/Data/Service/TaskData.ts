import {GetTaskData} from "@/Data/Service/MapData.ts";

export function GetTaskTodo():Promise<TaskData[]> {
    const TodoTaskList:TaskData[] = [];

    const TaskList:TaskData[] = GetTaskData();
    console.log(TaskList)
    for(const i of TaskList) {
        if(i.status == TaskStatus.todo) {
            TodoTaskList.push(i)
        }
    }
    console.log(TodoTaskList)
    return TodoTaskList;
}