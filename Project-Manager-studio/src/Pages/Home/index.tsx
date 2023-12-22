import {Outlet} from 'react-router-dom';

import SideNavBar from "./SideNavBar"


const Home = () => {
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