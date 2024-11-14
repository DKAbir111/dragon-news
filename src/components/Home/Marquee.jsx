import MarqueeComponent from "react-fast-marquee";
import { Link } from "react-router-dom";
export default function Marquee() {
    return (
        <div className="container mx-auto bg-base-200 flex p-3">
            <span className="bg-[#D72050] p-4 py-3 text-white text-xl">
                Latest
            </span>
            <MarqueeComponent className="*:font-semibold">
                <Link>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aspernatur fugiat id voluptate eaque nam repellendus quisquam facere. Inventore, magni?</Link>
                <Link>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aspernatur fugiat id voluptate eaque nam repellendus quisquam facere. Inventore, magni?</Link>
                <Link>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio aspernatur fugiat id voluptate eaque nam repellendus quisquam facere. Inventore, magni?</Link>

            </MarqueeComponent>
        </div>
    )
}
