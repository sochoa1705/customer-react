import './App.css';
import AppTopbar from "./layout/mainLayout/AppTopbar";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AccountProducts from "./Pages/account-products/AccountProducts";
import AccountProductsDetail from "./Pages/account-products/AccountProductDetail";


const router = createBrowserRouter([
    {
        path: '/accounts/',
        element: <AccountProducts/>
    },
    {
        path: '/accounts/detail',
        element: <AccountProductsDetail/>
    },
]);

function App() {
    return (
        <div className="App">
            <AppTopbar/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
