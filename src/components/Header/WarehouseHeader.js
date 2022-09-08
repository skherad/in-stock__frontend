import './WarehouseHeader.scss';
import { Link } from 'react-router-dom';

function WarehouseHeader() {
    return (
<header className="header">
<Link to="/">
     <div className="header__logo"/> </Link>
<nav>
    <ul className="header__navbar-container">
        <li className="header__navbar">
        <Link to="/" className="header__description header__description--active">Warehouses</Link>
        </li>
        <li className="header__navbar">
            <Link to= "/inventory" className="header__description">Inventory</Link>
        </li>
     </ul>
</nav>
</header>

);
}

export default WarehouseHeader; 
