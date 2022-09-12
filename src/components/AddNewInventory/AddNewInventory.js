import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './AddNewInventory.scss';
import backIcon from '../../assets/Icons/arrow_back-24px.svg'

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

function AddNewInventory() {
    const navigate = useNavigate();

    // get list of warehouses from current warehouse data
    const [ warehouses, setWarehouses ] = useState([]);
    useEffect (() => {
        axios.get(API_URL+"/warehouse")
            .then((response) => setWarehouses(response.data.map((warehouse) => warehouse.name)))
            .catch((error) => console.log(error));
    }, []);

    // form field states
    const [ itemName, setItemName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ category, setCategory ] = useState("Please select");
    const [ quantity, setQuantity ] = useState(0);
    const [ warehouse, setWarehouse ] = useState("Please select");
    
    // return user to inventory list on back button
    const handleBack = () => {
        navigate('/inventory');
    }

    // form field value change functions
    const changeName = (event) => {
        setItemName(event.target.value);
    }

    const changeDescription = (event) => {
        setDescription(event.target.value);
    }

    const changeCategory = (event) => {
        setCategory(event.target.value);
    }

    const changeQuantity = (event) => {
        setQuantity(event.target.value);
    }

    const changeWarehouse = (event) => {
        setWarehouse(event.target.value);
    }

    return (
        <div className="add-container">
            <main className="add-inventory">
                <div className="add-header">
                    <input className="add-header__back" type="image" src={backIcon} alt="back" onClick={handleBack} />
                    <h1 className="add-header__title">Add New Inventory Item</h1>
                </div>
                <form className="add-form">
                    <div className="add-form__item-details">
                        <h2 className="add-form__subheader">Item Details</h2>
                        <label className="add-form__label">Item Name
                            <input className="form-field add-form__input" type="text" placeholder="Item Name" value={itemName} onChange={changeName} />
                        </label>
                        <label className="add-form__label">Description
                            <textarea className="form-field add-form__input add-form__input--textarea" placeholder="Please enter a brief item description..." value={description} onChange={changeDescription}></textarea>
                        </label>
                        <label className="add-form__label">Category
                            <select className="form-field add-form__input" name="category" value={category} onChange={changeCategory}>
                                {/* <option value="none" selected disabled hidden>Please select</option> */}
                                <option value="electronics">Electronics</option>
                                <option value="gear">Gear</option>
                                <option value="apparel">Apparel</option>
                                <option value="accesories">Accesories</option>
                                <option value="health">Health</option>
                            </select>
                        </label>
                    </div>
                    <div className="add-form__item-availability">
                        <h2 className="add-form__subheader">Item Availability</h2>
                        <label className="add-form__label">Status
                            <label className="add-form__label">In stock
                                <input className="add-form__radio" type="radio" id="in-stock" name="status" value="inStock" checked />
                            </label> 
                            <label className="add-form__label">Out of stock
                                <input className="add-form__radio" type="radio" id="out-of-stock" name="status" value="outOfStock" />
                            </label>       
                        </label>
                        <label className="add-form__label">Quantity
                            <input className="form-field add-form__input" type="text" placeholder="Quantity" value={quantity} onChange={changeQuantity} />
                        </label>
                        <label className="add-form__label">Warehouse
                            <select className="form-field add-form__input" name="warehouse" value={warehouse} onChange={changeWarehouse}>
                                {warehouses.map((warehouse) => <option value={warehouse}>{warehouse}</option>)}
                            </select>
                        </label>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default AddNewInventory; 
