import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import Home from '../pages/home/Home';
import Rents from '../pages/rents/Rents';


export const routes = createBrowserRouter([
    {
        path: '/Dashboard', Component: Dashboard, errorElement: 'error component', children:
            [
                { path: '', Component: Home, errorElement: 'error componet' },
                { path: 'Rents', Component: Rents, errorElement: 'error componet' }
            ]
    }
]);