import './Header.scss';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Header() {

    return (
    <header className="header">
    <Link to="/">
     <div className="header__logo"/> </Link>
<nav>
    <ul className="header__navbar-container">
        <li className="header__navbar">
        <CustomLink to="/" className="header__description">Warehouses</CustomLink>
        </li>
        <li className="header__navbar">
            <CustomLink to= "/inventory" className="header__description">Inventory</CustomLink>
        </li>
     </ul>
</nav>
</header>

);
}

export default Header; 

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch ({path:resolvedPath.pathname})
    return (
        <li className = {isActive ? "header__description--active": " "}>
            <Link to={to}  {...props}> 
            {children}
            </Link>
        </li>
    )
}
