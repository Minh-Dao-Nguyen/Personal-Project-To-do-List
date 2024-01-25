import TaskBox from "@/Pages/Home/Planning/TaskBox";

type Props = {
    status: string,
    taskList: TaskData[]
    handleOnDropFunc: (e: React.DragEvent, boxStatus: string) => void
    handleOnDragFunc: (e: React.DragEvent, taskID: string) => void
}

function handleOnDragOver(e: React.DragEvent) {
    e.preventDefault();
}

const StatusBox = ({status, taskList, handleOnDropFunc, handleOnDragFunc}: Props) => {
    const titleText = "text-xl text-center text-white";

  return (
    <div className={` bg-secondary-gray w-1/4`} >
        <div className={`${titleText} p-4`}>
            {status}
        </div>
        <div className={`border-gray-300 border-t-2 h-96`}
             onDrop={(e) => handleOnDropFunc(e, status.toLowerCase())}
             onDragOver={handleOnDragOver} >
            {taskList.map((item, index) => (
                <TaskBox task={item} key={index} handleOnDragFunc={handleOnDragFunc}/>
            ))}
        </div>
    </div>
  )
}

export default StatusBox;