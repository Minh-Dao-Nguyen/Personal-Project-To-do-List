
interface Props {
    task: TaskData;
}
const TaskBox = ({task}: Props) => {

    return (
        <div>
            <div>
                {task.name}
            </div>
        </div>
    )
}

export default TaskBox;