
import NavBar from '../Nav/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Layout;