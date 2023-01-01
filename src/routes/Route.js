import React from 'react'
import Add from '../pages/Add'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import MainRoot from '../components/Main/MainRoot'
import DataDetails from '../components/Main/DataDetails'

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
                path:":id",
                element:<DataDetails/>
            },
            {
                path:"*",
                element:<NotFound/>
            }
        ]
    }
]
export default ROUTES;