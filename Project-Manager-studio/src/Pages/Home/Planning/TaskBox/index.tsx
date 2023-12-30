
interface Props {
    task: TaskData;
}
const TaskBox = ({task}: Props) => {

    return (
        <div className={'p-2 border-2 border-aqua-300 mb-2 mt-2'} draggable={true}>
            <div className={'text-white text-xl'}>
                {task.name}
            </div>
            <div className={'pt-3'}>
                {task.description}
            </div>
            <div className={'text-gray-700 text-xs'}>
                {task.status}
            </div>
        </div>
    )
}

export default TaskBox;