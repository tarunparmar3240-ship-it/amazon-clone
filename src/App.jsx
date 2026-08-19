import "./App.css";
// import Navbar from "./Component/Navbar/Navbar";
import AdminLayout from "./Layout/AdminLayout/AdminLayout";
import MainLayout from "./Layout/MainLayout/MainLayout";
import HomePage from "./Pages/Customer/HomePage/HomePage";
import CreateCategory from "./Component/CreateCategory/CreateCategory";
import CreateProduct from "./Component/Product/CreateProduct/CreateProduct";
import router from './Routes/AppRouter'; 

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
