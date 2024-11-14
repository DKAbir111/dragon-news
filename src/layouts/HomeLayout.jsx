import Header from "../components/Home/Header";
import Marquee from "../components/Home/Marquee";
import Navbar from "../components/Home/Navbar";

export default function HomeLayout() {
    return (
        <div>
            {/* Header section */}
            <section className="flex flex-col gap-7">
                <Header />
                <Marquee />
            </section>
            <Navbar />
            {/* Main section */}
            <section>

            </section>
        </div>
    )
}
