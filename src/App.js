import './App.css';
import AppTopbar from "./layout/mainLayout/AppTopbar";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AccountProducts from "./Pages/account-products/AccountProducts";
import AccountProductsDetail from "./Pages/account-products/AccountProductDetail";
import LoginDemo from "./components/pure/forms/login";
import LoginLayout from "./layout/loginLayout";
import AccountTransfer from "./Pages/account-transactions/accountTransfer";


const router = createBrowserRouter([
    {
        path: '/accounts',
        element: <AppTopbar/>,
        children:
            [
                {
                    path: '',
                    element: <AccountProducts/>
                },
                {
                    path: '/accounts/detail',
                    element: <AccountProductsDetail/>
                },
                {
                    path: '/accounts/transfer',
                    element: <AccountTransfer/>
                }
            ]
    },
    {
        path: '/',
        element: <LoginLayout/>,
        children: [

            {
                path: '',
                element: <LoginDemo/>
            }
        ]
    }

]);

function App() {
    return (
        <div className="App">

            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
