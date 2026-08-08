import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./Component/NotFoundPage/NotFoundPage.jsx";

// const router = createBrowserRouter([
//   {path: '/', element: <App />},
//   {path: '/product/category', element: <div>Category Page Testing</div>}, //Test test lagaya
//   {path: "*", element: <NotFoundPage />}
// ]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <Provider store={store}>
  //     <RouterProvider router={router} />
  //   </Provider>
  // </StrictMode>,

    <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
