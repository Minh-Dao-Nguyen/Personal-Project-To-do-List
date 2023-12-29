import StatusBox from "./StatusBox";
import {useRef, useState} from "react";
import {GetTaskTodo} from "@/Data/Service/TaskData.ts";

const Planning = () => {
    const [todoTaskList, setTodoTaskList] = useState<TaskData[]>([]);
    useRef(async () => {
        const SetTaskList = async () => {
            const taskList = await GetTaskTodo();
            setTodoTaskList(taskList)
        }
        SetTaskList()
        , []
    });

    console.log(todoTaskList)

    const weekText = "text-2xl text-left text-white";
    const flexBetween = "flex items-center justify-center justify-between";

  return (
    <div className={`h-full bg-primary-gray p-20`}>
      <div className={`${weekText}`}>
          Week 1
      </div>
      <div className={`${flexBetween} h-full`}>
        <StatusBox status="Todo" taskList={todoTaskList}/>
        <StatusBox status="In Progress"/>
        <StatusBox status="Complete"/>
      </div>
    </div>
  )
}

export default Planning;