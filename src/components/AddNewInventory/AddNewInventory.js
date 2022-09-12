import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import './AddNewInventory.scss';
import backIcon from '../../assets/Icons/arrow_back-24px.svg';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

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

    // flag if form has been submitted
    const [ submitted, setSubmitted ] = useState(false);

    // form field states
    const [ itemName, setItemName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ status, setStatus ] = useState("In Stock");
    const [ quantity, setQuantity ] = useState(0);
    const [ warehouseName, setWarehouseName ] = useState("");

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

    const changeStatus = (event) => {
        setStatus(event.target.value);
    }

    const changeQuantity = (event) => {
        setQuantity(event.target.value);
    }

    const changeWarehouseName = (event) => {
        setWarehouseName(event.target.value);
    }

    // show or hide quantity option depending on status (invoked if status is in stock)
    const showQuantity = () => {
        return (
            <label className="add-form__label">Quantity
                <input className="form-field add-form__input add-form__input--quantity" type="text" placeholder="Quantity" value={quantity} onChange={changeQuantity} />
                {status==="In Stock" && quantity===0 && submitted && <ErrorMsg />} {/*show error message if input invalid*/}
            </label>
        );
    }

    // return user to inventory list on back button
    const handleBack = () => {
        navigate('/inventory');
    }

    // add item via api call
    const handleAdd = (event) => {
        event.preventDefault();
        
        if (itemName && description && category && warehouseName && !(status==="In Stock" && quantity===0)) {
            let warehouseId;

            // find corresponding warehouse id if already exists in warehouse data
            axios.get(API_URL+"/warehouse")
                .then((response) => warehouseId = response.data.filter((warehouse) => warehouse.name === warehouseName)?.id)
                .catch((error) => console.log(error));

            // set quantity to 0 if out of stock
            if (status==="Out Of Stock") {
                setQuantity(0);
            }

            // request header
            const header = {
                "Content-Type": "application/json"
            }
            // new inventory item
            const newItem = {
                "id": uuid(),
                "warehouseID": warehouseId? warehouseId : uuid(),
                warehouseName,
                itemName,
                description,
                category,
                status,
                quantity
            }

            axios.post(API_URL+"/inventory", newItem, header)
                .then(() => {
                    handleBack(); // navigate back to inventory list on successful add
                }).catch((error) => console.log(error));
        } else {
            setSubmitted(true);
        }
    }

    return (
        <div className="add-container">
            <main className="add-inventory">
                <div className="add-header">
                    <input className="add-header__back" type="image" src={backIcon} alt="back" onClick={handleBack} />
                    <h1 className="add-header__title">Add New Inventory Item</h1>
                </div>
                <form className="add-form">
                    <div className="add-form__subforms">
                        <div className="add-form__subform">
                            <h2 className="add-form__subheader">Item Details</h2>
                            <label className="add-form__label">Item Name
                                <input className="form-field add-form__input" type="text" name="itemName" placeholder="Item Name" value={itemName} onChange={changeName} />
                                {!itemName && submitted && <ErrorMsg />} {/*show error message if input invalid*/}
                            </label>
                            <label className="add-form__label">Description
                                <textarea className="form-field add-form__input add-form__input--textarea" name="description" placeholder="Please enter a brief item description..." value={description} onChange={changeDescription}></textarea>
                                {!description && submitted && <ErrorMsg />} {/*show error message if input invalid*/}
                            </label>
                            <label className="add-form__label">Category
                                <select className="form-field add-form__input add-form__input--select" name="category" value={category} onChange={changeCategory} required>
                                    <option value="" disabled hidden>Please select</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Gear">Gear</option>
                                    <option value="Apparel">Apparel</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Health">Health</option>
                                </select>
                                {!category && submitted && <ErrorMsg />} {/*show error message if input invalid*/}
                            </label>
                        </div>
                        <div className="add-form__subform">
                            <h2 className="add-form__subheader">Item Availability</h2>
                            <label className="add-form__label">Status
                                <div className="add-form__radios">
                                    <div className="add-form__radio-container">
                                        <input className="add-form__radio" type="radio" id="in-stock" name="status" value="In Stock" checked={status==="In Stock"} onChange={changeStatus} />
                                        <label className="add-form__radio-label" htmlFor="in-stock">In stock</label> 
                                    </div>
                                    <div className="add-form__radio-container">
                                        <input className="add-form__radio" type="radio" id="out-of-stock" name="status" value="Out Of Stock" checked={status==="Out Of Stock"} onChange={changeStatus} />
                                        <label className="add-form__radio-label" htmlFor="out-of-stock">Out of stock</label>    
                                    </div>
                                </div>
                            </label>
                            {status==="In Stock" ? showQuantity() : null}
                            <label className="add-form__label">Warehouse
                                <select className="form-field add-form__input add-form__input--select" name="warehouse" value={warehouseName} onChange={changeWarehouseName} required>
                                    <option value="" disabled hidden>Please select</option>
                                    {warehouses.map((warehouse) => <option value={warehouse} key={uuid()}>{warehouse}</option>)}
                                </select>
                                {!warehouseName && submitted && <ErrorMsg />} {/*show error message if input invalid*/}
                            </label>
                        </div>
                    </div>
                    <div className="add-form__buttons">
                        <button className="button add-form__button add-form__button--cancel" onClick={handleBack}>Cancel</button>
                        <button className="button add-form__button add-form__button--add" onClick={handleAdd}>+ Add Item</button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default AddNewInventory; 
