import { useLoaderData } from "react-router-dom"
import NewsCard from "./NewsCard";

export default function Main() {
    const { data } = useLoaderData();
    console.log(data)
    return (
        <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-xl">Dragon News Home</h3>
            {
                data.map(data => <NewsCard data={data} key={data._id} />)
            }
        </div>
    )
}
