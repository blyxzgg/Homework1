import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToDoListPage from "./assets/pages/ToDoListPage";
import HomePage from "./assets/pages/HomePage";
import type { ToDo } from "./assets/models/todo-item";
import ItemDescription from "./assets/pages/ItemDescription";
import { Layout } from "./assets/layouts/Layouts";
import { NotFound } from "./assets/pages/404";

const todos: ToDo[] = [
  {
    id: 0,
    text: 'Первое действие',
    isDone: false
  },
  {
    id: 1,
    text: 'Второе действие',
    isDone: true
  },
  {
    id: 2,
    text: 'Третье действие',
    isDone: false
  },
  {
    id: 3,
    text: 'Четвертое действие',
    isDone: true
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos} />
      },
      {
        path: '/todo',
        element: <ToDoListPage />
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos} />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
], { basename: '/app/' })

const App = () => {
  return (
    <>
    <RouterProvider router={router} />
      {/* <Header />
      <Routes>
        <Route path="/" element={<HomePage todos={todos} />}></Route>
        <Route path="/list/:id" element={<ItemDescription todos={todos} />}></Route>
        <Route path="/todo" element={<ToDoListPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes> */}
    </>
  )
}

export default App;