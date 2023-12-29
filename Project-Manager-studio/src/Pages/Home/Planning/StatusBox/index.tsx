import TaskBox from "@/Pages/Home/Planning/TaskBox";

type Props = {
    status: string,
    taskList: TaskData[]
}

const StatusBox = ({status, taskList}: Props) => {
    const titleText = "text-xl text-center text-white";
  return (
    <div className={` bg-secondary-gray w-1/4`}>
        <div className={`${titleText} p-4`}>
            {status}
        </div>
        <div className={`border-gray-300 border-t-2 h-96`}>
            {taskList.map((item, index) => (
                <TaskBox task={item} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default StatusBox;