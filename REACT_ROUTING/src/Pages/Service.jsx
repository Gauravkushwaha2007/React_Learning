import { Link, NavLink, Outlet } from "react-router-dom"
import BackNavigate from "../components/BackNavigate"
const Service = () => {
  return (
    <div>
        <BackNavigate></BackNavigate>
        <div className="flex flex-wrap gap-10 font-bold text-purple-900 absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <NavLink to={'/service/men'}>Men</NavLink>
            <NavLink to={'/service/women'}>Women</NavLink>
        </div>
        <Outlet/>
        <h2>Service Page</h2>
    </div>
  )
}

export default Service