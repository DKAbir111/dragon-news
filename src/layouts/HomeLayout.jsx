import { Outlet } from "react-router-dom";
import Header from "../components/Home/Header";
import LeftAside from "../components/Home/Main/LeftAside";
import RightAside from "../components/Home/Main/RightAside";
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
            <section className="container mx-auto grid gap-4 grid-cols-12">
                <aside className="col-span-3">
                    <LeftAside />
                </aside>
                <main className="col-span-6">
                    <Outlet />
                </main>
                <aside className="col-span-3">
                    <RightAside />
                </aside>
            </section>
        </div>
    )
}
