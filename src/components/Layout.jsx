import { Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";



// const setActive = ({ isActive }) => isActive ? 'active-link' : ''
const Layout = () => {
    return (
        <>
            <header>
                {/* <NavLink to='/' style={({isActive}) => ({color: isActive ? 'var(--color-active' : 'white'})}>Home</NavLink>
                <NavLink to='/posts' className={setActive} >Blog</NavLink>
                <NavLink to='/about' className={setActive} >About</NavLink> */}
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/posts">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header> 
            <Outlet/>
            <footer>2023</footer>
        </>
    )
}

export default Layout;