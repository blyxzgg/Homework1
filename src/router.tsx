import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./assets/layouts/Layouts";
import { NotFound } from "./assets/pages/404";
import ToDoListPage from "./assets/pages/ToDoListPage";
import ViewList from "./assets/pages/ViewList";
import ViewListItem from "./assets/pages/ViewListItem";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <ToDoListPage />
            },
            {
                path: '/list',
                element: <ViewList />
            },
            {
                path: '/list/:id',
                element: <ViewListItem />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])