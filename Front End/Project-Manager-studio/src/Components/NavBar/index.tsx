import { NavLink } from "react-router-dom";

type Props = {}

const NavBar = (props: Props) => {

    const flexBetween = "flex justify-left justify-between";

    const navLink = "text-white text-sl text-left w-50 h-15 flex items-center py-2 px-4 hover:bg-hover-gray-200 mx-6";

  return (
    <div className={`${flexBetween} h-20 w-full fixed top-0 bg-blue-400 align-center border-gray-300 border-b-4`}>
        <div className={`${flexBetween}`}>
            <NavLink to="/" className={`${navLink}`}>Home</NavLink>
            <NavLink to="/about" className={`${navLink}`}>About</NavLink>
            <NavLink to="/report" className={`${navLink}`}>Report</NavLink>
        </div>
    </div>
  )
}

export default NavBar