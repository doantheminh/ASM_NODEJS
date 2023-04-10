import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="flex items-center justify-center w-full h-[30px] border-b shadow">
            <NavLink to="/" className="font-normal text-[12px] leading-[22px] text-[#707070] mr-5">Trang Chủ</NavLink>
            <NavLink to="/product" className="font-normal text-[12px] leading-[22px] text-[#707070]">Điện Thoại</NavLink>
        </nav>
    )
}