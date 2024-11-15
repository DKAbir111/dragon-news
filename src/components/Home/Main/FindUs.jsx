import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FindUs() {
    return (
        <div className="join join-vertical w-full mt-5">
            <button className="btn join-item border bg-base-100 justify-start"><FaFacebook className="text-xl" /> FaceBook</button>
            <button className="btn join-item border  bg-base-100 justify-start"><FaTwitter className="text-xl" /> Twitter</button>
            <button className="btn join-item border bg-base-100 justify-start"><FaInstagram className="text-xl" /> Instagram</button>
        </div>
    )
}
