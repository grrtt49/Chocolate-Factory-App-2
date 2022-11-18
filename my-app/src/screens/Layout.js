import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Outlet, Link } from "react-router-dom";

export default function Layout (props) {
    const {login, signUp, username, logOut} = props;

    return (
        <>
            <ResponsiveAppBar login={login} signUp={signUp} username={username} logOut={logOut} />
            <Outlet />
        </>
    );
}