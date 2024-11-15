import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
export default function SocialLink() {
    return (
        <div className="flex flex-col mt-5 gap-2">
            <button className="flex items-center btn "><FcGoogle className="text-xl" /> Login with Google</button>
            <button className="btn flex items-center"><FaGithub className="text-xl" /> Login with Github</button>
        </div>
    )
}
