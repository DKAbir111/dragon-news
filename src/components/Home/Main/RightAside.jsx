import FindUs from "./FindUs";
import SocialLink from "./SocialLink";

export default function RightAside() {
    return (
        <div>
            <h3 className="font-semibold text-xl">Login With</h3>
            <SocialLink />
            <h3 className="font-semibold text-xl mt-5">Find Us On</h3>
            <FindUs />
        </div>
    )
}
