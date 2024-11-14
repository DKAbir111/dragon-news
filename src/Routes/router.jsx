import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />
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