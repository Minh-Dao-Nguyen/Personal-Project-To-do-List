import {useEffect, useState} from "react";
import {GetTaskData} from "@/Data/Service/MapData.ts";
import {ProjectProgress} from "@/Computation/ProjectFunc.ts";

interface Props {
    project: Project
}

const ProjectBar = ({project}: Props) => {
    const [projectTaskList, setProjectTaskList] = useState<TaskData[]>([])
    const [projectProgress, setProjectProgress] = useState<number>(0)
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        const makeTaskList = async () => {
            const taskList = await GetTaskData();
            const ProjTaskList = taskList.filter((x) => (x.projectID === project._id))

            setProjectTaskList(ProjTaskList)
            setTrigger(!trigger)
        }
        makeTaskList()
    }, []);

    useEffect(() => {
        setProjectProgress(ProjectProgress(projectTaskList))
    }, [trigger]);

    return (
        <div className={'w-10/12 bg-gray-bg h-20 mb-5 flex-col justify-center'}>
                <div className={'flex flex-row justify-between'}>
                    <span className={'p-5 text-blue-300 text-xl flex-col justify-center'}>
                        {project.name}
                    </span>
                    <span className={'flex flex-col justify-center pr-10'}>
                        progress: {projectProgress} %
                    </span>
                </div>
        </div>
    )
}

export default ProjectBar;