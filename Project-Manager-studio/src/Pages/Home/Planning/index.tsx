import StatusBox from "./StatusBox";
import {useEffect, useState} from "react";
import {GetTaskComplete, GetTaskProgress, GetTaskTodo} from "@/Data/Service/TaskData.ts";
import {GetTaskData} from "@/Data/Service/MapData.ts";

const Planning = () => {
    const [todoTaskList, setTodoTaskList] = useState<TaskData[]>([]);
    const [progressTaskList, setProgressTaskList] = useState<TaskData[]>([]);
    const [completeTaskList, setCompleteTaskList] = useState<TaskData[]>([]);

    const makeTaskList = async () => {
        const taskList = await GetTaskData();
        const todoList = GetTaskTodo(taskList);
        setTodoTaskList(todoList)
        const progressList = GetTaskProgress(taskList);
        setProgressTaskList(progressList);
        const completeList = GetTaskComplete(taskList);
        setCompleteTaskList(completeList);
    }

    useEffect(() => {
        makeTaskList()
    }, []);

    const weekText = "text-2xl text-left text-white";
    const flexBetween = "flex items-center justify-center justify-between";

  return (
    <div className={`h-full bg-primary-gray p-20`}>
      <div className={`${weekText}`}>
          Week 1
      </div>
      <div className={`${flexBetween} h-full`}>
        <StatusBox status="Todo" taskList={todoTaskList}/>
        <StatusBox status="In Progress" taskList={progressTaskList}/>
        <StatusBox status="Complete" taskList={completeTaskList}/>
      </div>
    </div>
  )
}

export default Planning;