import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store/store.js";
import NotFoundPage from "./Component/NotFoundPage/NotFoundPage.jsx";
import router from './Routes/AppRouter.jsx';

// const router = createBrowserRouter([
//   {path: '/', element: <App />},
//   {path: '/product/category', element: <div>Category Page Testing</div>}, //Test test lagaya
//   {path: "*", element: <NotFoundPage />}
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
