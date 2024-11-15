import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function LeftAside() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
                const jsonData = await res.json();
                setData(jsonData.data.news_category
                );
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-xl font-semibold">All Caterogy</h3>
            <div className="flex flex-col gap-2">
                {
                    data.map(category => <NavLink key={category.category_id}
                        className='btn text-lg bg-base-100'
                        to={`/category/${category.category_id}`}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
}
