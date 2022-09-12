import { useNavigate } from 'react-router-dom';
import './AddInventory.scss';
import backIcon from '../../assets/Icons/arrow_back-24px.svg'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

function AddInventory() {
    const navigate = useNavigate();
    
    const handleBack = () => {
        navigate('/inventory');
    }

    return (
        <div className="add-container">
            <main className="add-inventory">
                <div className="add-header">
                    <input className="add-header__back" type="image" src={backIcon} alt="back" onClick={handleBack} />
                    <h1 className="add-header__title">Add New Inventory Item</h1>
                </div>
            </main>
        </div>
    );
}

export default AddInventory; 
