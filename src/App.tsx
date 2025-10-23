import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { store } from './store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
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