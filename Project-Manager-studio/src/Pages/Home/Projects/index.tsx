import {useEffect, useState} from "react";
import {GetProjectData} from "@/Data/Service/MapData.ts";
import ProjectBar from "@/Pages/Home/Projects/Project Bar";


const Projects = () => {
    const [projectList, setProjectList] = useState<Project[]>([]);

    useEffect(() => {
        const makeProjectList = async () => {
             const list =  await GetProjectData();
             setProjectList(list);
        }
        makeProjectList()
    }, []);

    return (
        <div className={`h-full w-full bg-primary-gray flex justify-center`}>
            <div className={'flex flex-col justify-center w-full p-20'}>
                {projectList.map((item, index) => (
                    <ProjectBar project={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Projects