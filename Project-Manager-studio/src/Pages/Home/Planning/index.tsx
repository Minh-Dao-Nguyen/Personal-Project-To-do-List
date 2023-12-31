import StatusBox from "./StatusBox";
import {useEffect, useState} from "react";
import {GetTaskComplete, GetTaskProgress, GetTaskTodo} from "@/Data/Service/TaskData.ts";
import {GetTaskData} from "@/Data/Service/MapData.ts";

const Planning = () => {
    const [todoTaskList, setTodoTaskList] = useState<TaskData[]>([]);
    const [progressTaskList, setProgressTaskList] = useState<TaskData[]>([]);
    const [completeTaskList, setCompleteTaskList] = useState<TaskData[]>([]);
    const [taskChange, triggerTaskChange] = useState<boolean>(false);

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
    }, [taskChange]);

    const handleOnDrop = (e: React.DragEvent, boxStatus: string) => {
        const taskID = e.dataTransfer.getData("TaskDataTransfer") as string;

        triggerTaskChange(!taskChange);
    }

    const handleOnDrag = (e: React.DragEvent, taskID: string) => {
        e.dataTransfer.setData("TaskDataTransfer", taskID);
    }

    const weekText = "text-2xl text-left text-white";
    const flexBetween = "flex items-center justify-center justify-between";

  return (
    <div className={`h-full bg-primary-gray p-20`}>
      <div className={`${weekText}`}>
          Week 1
      </div>
      <div className={`${flexBetween} h-full`}>
        <StatusBox status="Todo" taskList={todoTaskList} handleOnDropFunc={handleOnDrop} handleOnDragFunc={handleOnDrag}/>
        <StatusBox status="In Progress" taskList={progressTaskList} handleOnDropFunc={handleOnDrop} handleOnDragFunc={handleOnDrag}/>
        <StatusBox status="Complete" taskList={completeTaskList} handleOnDropFunc={handleOnDrop} handleOnDragFunc={handleOnDrag}/>
      </div>
    </div>
  )
}

export default Planning;