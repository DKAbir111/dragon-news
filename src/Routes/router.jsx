import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Main from "../components/Home/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: "",
                element: <Navigate to={'/category/01'}></Navigate>,
            },
            {
                path: "category/:id",
                element: <Main />,
                loader: async ({ params }) => await fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/about',
        element: <h1>Hello from about elemnt</h1>
    },
    {
        path: '/carrer',
        element: <h1>Hello from carrer elemnt</h1>
    }
])
export default router;