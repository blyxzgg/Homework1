import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { store } from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from "./assets/styles/GlobalStyle";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
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