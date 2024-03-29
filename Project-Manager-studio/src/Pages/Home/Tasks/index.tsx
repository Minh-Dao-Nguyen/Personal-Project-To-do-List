import {useEffect, useState} from "react";
import TaskBar from "@/Pages/Home/Tasks/Task Bar";
import {GetTaskData} from "@/Data/Service/MapData.ts";

const Tasks = () => {

    const[taskList, setTaskList] = useState<TaskData[]>([])

    useEffect(() => {
        const makeTaskList = async () => {
            const list = await GetTaskData();
            setTaskList(list)
        }
        makeTaskList()
    }, []);

    return (
        <div className={`h-full w-full bg-primary-gray flex justify-center`}>
            <div className={'w-full h-full flex-col flex justify-center'}>
                <div className={'w-full flex pl-20 mt-10 '}>
                    <button className={'border-2 p-5'}> Add new </button>
                </div>
                <div className={'flex flex-col justify-center w-full p-20 overflow-scroll mt-10'}>
                    <div className={'p-10'}>
                    </div>
                    {taskList.map((item, index) => (
                        <TaskBar task={item} key={index} />
                    ))}
                </div>
            </div>
    </div>
    )
}

export default Tasks;