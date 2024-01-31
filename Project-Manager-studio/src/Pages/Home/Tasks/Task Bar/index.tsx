
interface Props {
    task: TaskData
}

const TaskBar = ( {task}: Props) => {
    return (
        <div className={'w-10/12 bg-gray-bg h-20 mb-5 flex-col justify-center'}>
            <div className={'flex flex-row justify-between'}>
                    <span className={'p-5 text-blue-300 text-xl flex-col justify-center'}>
                        {task.name}
                    </span>
                <span className={'flex flex-col justify-center pr-10'}>
                        project: {task.projectID}, status: {task.status}
                    </span>
            </div>
        </div>
    )
}

export default TaskBar;