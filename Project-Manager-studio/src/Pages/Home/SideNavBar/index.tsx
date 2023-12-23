import {Link, useLocation} from 'react-router-dom';
import {useState} from "react";

export const TabType = {
    planning: "PLANNING",
    project: "PROJECT",
    task: "TASK",
    analytic: "ANALYTIC",
}
const SideNavBar = () => {

    const location = useLocation().pathname.toUpperCase().slice(1);
    const currPath = (location == "")? TabType.planning : location;
    const [currentTab, setTab] = useState(currPath);

    const flexBetween = "flex items-center justify-center flex-col ";

    const textType = "text-white text-2xl text-center ";
    const linKContainer = "w-full h-20 flex items-center justify-center ";

    const notActiveLink = textType + linKContainer;
    const activeLink = "bg-white bg-opacity-10 " + notActiveLink;

    const linkStyle = (tabType: string) => {
        if (tabType == currentTab) return activeLink;
        else return notActiveLink;
    }

  return (
    <div className={`${flexBetween} h-full  bg-primary-gray w-1/6 align-center border-gray-300 border-r-4`}>
        <div className={(linkStyle(TabType.planning))}>
            <Link to='/' onClick={() => setTab(TabType.planning)}>Planning</Link>
        </div>
        <div className={(linkStyle(TabType.project))}>
            <Link to='/Project' onClick={() => setTab(TabType.project)}>Project</Link>
        </div>
        <div className={(linkStyle(TabType.task))}>
            <Link to='/Task' onClick={() => setTab(TabType.task)}>Task</Link>
        </div>
        <div className={(linkStyle(TabType.analytic))}>
            <Link to='/Analytic' onClick={() => setTab(TabType.analytic)}>Analytic</Link>
        </div>
    </div>
  )
}

export default SideNavBar;