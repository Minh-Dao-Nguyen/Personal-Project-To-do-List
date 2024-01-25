import {TaskStatus} from "@/Data/Enum.ts";

export function ProjectProgress(projectTaskList: TaskData[]) {
    const completeTask = projectTaskList.filter((x) => (x.status === TaskStatus.complete))
    let percentage = completeTask.length / projectTaskList.length
    percentage = Math.round(percentage * 100)
    return percentage
}