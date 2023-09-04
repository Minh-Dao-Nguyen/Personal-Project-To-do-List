import {Outlet} from 'react-router-dom';

import SideNavBar from "./SideNavBar"
import Planning from './Planning';
import Projects from './Projects';
import Tasks from './Tasks';
import Analytic from './Analytic';


type Props = {}

const Home = (props: Props) => {
  return (
    <div className={`flex h-full justify-between`}>
        <SideNavBar/>  
        <div className={`w-5/6`}>
            <Outlet/>
        </div>
    </div>
  )
}

export default Home