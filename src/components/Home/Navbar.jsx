import { NavLink } from "react-router-dom";
import user from '../../assets/user.png'

export default function Navbar() {
    return (
        <div className="flex justify-between container mx-auto pt-7 pb-12 items-center *:w-1/3">
            <div>
            </div>
            <div className="space-x-7 flex justify-center">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="flex gap-2 justify-end items-center">
                <img src={user} alt="" className="w-10 h-10" />
                <button className="btn  bg-stone-800 rounded-none text-white px-7">Login</button>
            </div>
        </div>
    )
}
