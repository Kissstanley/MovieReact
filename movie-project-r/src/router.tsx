import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./Layouts";
import {GenresPage, MoviesPage} from "./Pages";
import {MoviesPageDetails} from "./Pages";

export const router=createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {
            index:true,
            element:<Navigate to={'movies'}/>
            },
            {
                path:'movies/',
                element:<MoviesPage/>,

            },
            {
                path:'movies/:id',
                element:<MoviesPageDetails/>,

            },
            {
                path:'genres',
                element:<GenresPage/>
            }
        ]
    }
])