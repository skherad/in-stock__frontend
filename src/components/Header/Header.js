import './Header.scss';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Header() {

    return (
    <header className="header">
    <Link to="/">
     <div className="header__logo"/> </Link>
<nav>
    <ul className="header__navbar-container">
        <CustomLink to="/" className="header__description header__navbar">Warehouses</CustomLink>
        <CustomLink to= "/inventory" className="header__description header__navbar">Inventory</CustomLink>
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

