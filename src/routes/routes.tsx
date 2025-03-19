import App from "@/App";
import AddServiceForm from "@/pages/dashboard/AddServiceForm";
import Dashboard from "@/pages/dashboard/Dashboard";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import EventItemManagement from "@/pages/dashboard/EventItemManagement";
import ServiceManagement from "@/pages/dashboard/ServiceManagement";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'about',
                element: <Home/>
            },
            {
                path: 'contact',
                element: <Home/>
            },
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard/>,
        children: [
            {
                index: true,
                element: <DashboardHome/> 
            },
            {
                path: "/dashboard/service-management",
                element: <ServiceManagement/>
            },
            {
                path: "/dashboard/add-service",
                element: <AddServiceForm/>
            },
            {
                path: "/dashboard/event-item-management",
                element: <EventItemManagement/>
            }
        ]
    }
])

export default router;