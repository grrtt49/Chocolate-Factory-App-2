import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Outlet, Link } from "react-router-dom";

export default function Layout (props) {
    return (
        <>
            <ResponsiveAppBar />
            <Outlet />
        </>
    );
}