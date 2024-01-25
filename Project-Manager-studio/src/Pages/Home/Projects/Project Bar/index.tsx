
interface Props {
    project: Project
}

const ProjectBar = ({project}: Props) => {
    return (
        <div className={'w-10/12 bg-gray-bg h-20 mb-5'}>
            <div className={'p-5 text-blue-300 text-xl flex-col justify-center'}>
                {project.name}
            </div>
        </div>
    )
}

export default ProjectBar;