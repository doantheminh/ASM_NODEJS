import { Layout } from "antd";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

export const HeaderAdmin = () => {
    return (
        <Header className="bg-white text-center text-black">
            <NavLink className="mr-5" to="/admin">Admin</NavLink>
            <NavLink to="/">Client</NavLink>
        </Header>
    )
};