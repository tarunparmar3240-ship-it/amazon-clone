import "./App.css";
// import Navbar from "./Component/Navbar/Navbar";
import AdminLayout from "./Layout/AdminLayout/AdminLayout";
import MainLayout from "./Layout/MainLayout/MainLayout";

//Home Aur Admin ke child pages (dummay Component for exapmle)
import HomePage from "./Pages/Customer/HomePage/HomePage";
import CreateCategory from "./Component/CreateCategory/CreateCategory";
import CreateProduct from "./Component/Product/CreateProduct/CreateProduct";
import router from './Routes/AppRouter'; //Approuter se configured router import kar rahe hain

function App() {
  return (
    <>
    {/* RouterProvider pure application ko URL ke hisab se render karega */}
    <RouterProvider router={router} />
    </>
  );
}

export default App;
