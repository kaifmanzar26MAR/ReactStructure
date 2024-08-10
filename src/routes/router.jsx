import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import LoginLayout from "../layout/Login";
import Login from "../pages/Login";

const router= createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    },
    {
        path:"/login",
        element:<LoginLayout/>,
        children:[
            {
                path:"/login",
                element:<Login/>
            }
        ]
    }
]);

export default router;