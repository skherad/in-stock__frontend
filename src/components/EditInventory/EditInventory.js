import './EditInventory.scss';
import BackArrow from '../../assets/Icons/arrow_back-24px.svg';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

const EditInventory = () => {

    let navigate = useNavigate();

    const {inventoryId} = useParams();

    const [warehouses, setWarehouses] = useState();
    const [categories, setCategories] = useState();
    //define states for handling change of input values - to be used to set edited values
    const [state, setState] = useState({
        warehouseName: "",
        itemName: "",
        description: "",
        category: "",
        status: "",    
    });

    //get a unique list of warehouses
    useEffect(() => {
        axios.get(`${API_URL}/warehouse`)
        .then(response => {
            let WarehouseData = response.data;
            let warehouseArray = [];
            WarehouseData.forEach(warehouse => warehouseArray.push(warehouse.name));
            setWarehouses(warehouseArray)
        })
        .catch(error => console.log(error))
    }, [])
    
    //get a unique list of inventory categories
    useEffect(() => {
        axios.get(`${API_URL}/inventory`)
        .then(response => {
            let inventoryData = response.data;
            let categoryArray = [];
            inventoryData.forEach(inventory => categoryArray.push(inventory.category));
            categoryArray = [...new Set(categoryArray)];
            setCategories(categoryArray)
        })
        .catch(error => console.log(error))
    }, [])

    //set initial state of the inventory details
    useEffect(() => {
        axios.get(`${API_URL}/inventory/${inventoryId}`)
        .then(response => 
            setState({
                warehouseName: response.data.warehouseName,
                itemName: response.data.itemName,
                description: response.data.description,
                category: response.data.category,
                status: response.data.status,    
            }
        ))
        .catch(error => console.log(error))
    }, [])

    //change handler for inventory details from user inputs
    const handleChange = (event) => {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value,
        })
    }

    //click handler for cancel button
    const handleCancel = () => navigate(`/inventoryDetail/${inventoryId}`)
    
    //submit handler to update inventory information on backend
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!state.itemName || !state.description) {
            return;
        } else {
            axios.put(`${API_URL}/inventory/${inventoryId}`, state)
            .then(response=>console.log(response))
            .catch(error=>console.log(error))
            navigate(`inventory/inventoryDetail/${inventoryId}`)
        }
    }

    return (
    <div className='parent-container'>
    <section className="inventory-form__container">
        {/* page header */}
        <div className='inventory-form__header-container'>
            <Link to={`/inventoryDetail/${inventoryId}`} className="inventory-form__icon">
                <img src={BackArrow} alt="arrow back"></img>
            </Link>
            <h1 className="inventory-form__header">Edit Inventory Item</h1>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit}>
            <div className='inventory-form__section-container'>
                {/* item details section */}
                <section className="inventory-form__section">
                    <h2 className="inventory-form__title">Item Details</h2>

                    {/* item name input field */}
                    <label htmlFor="itemName" className="inventory-form__label">Item Name</label>
                    <input 
                        name="itemName"
                        className={!state?.itemName?"inventory-form__input inventory-form__input--invalid": "inventory-form__input"}
                        placeholder={state?.itemName}
                        value={state?.itemName}
                        onChange={handleChange}
                    ></input>
                    <div className={!state?.itemName?"invalid": "valid"}>This field is required</div>
                    {/* item description input field */}
                    <label htmlFor="description" className="inventory-form__label">Description</label>
                    <textarea 
                        name="description"
                        className={!state?.description?"inventory-form__textarea inventory-form__textarea--invalid": "inventory-form__textarea"}
                        placeholder={state?.description}
                        value={state?.description}
                        onChange={handleChange}
                    ></textarea>
                    <div className={!state?.description?"invalid": "valid"}>This field is required</div>
                    
                    {/* item category drop down */}
                    <label htmlFor="category" className="inventory-form__label">Category</label>
                    <select className='inventory-form__drop-down' onChange={handleChange} name="category" value={state?.category}>
                        {categories?.map((category,i) => 
                            <option value={category} key={i}>{category}</option>
                        )}
                    </select>                    
                </section>

                {/* item availablity section */}
                <section className="inventory-form__section inventory-form__section--divider">
                    <h2 className="inventory-form__title">Item Availability</h2>
                    <p htmlFor="status" className="inventory-form__label" >Status</p>

                    {/* in/out of stock radio buttons */}
                    <div  className='inventory-form__radio-container'>
                            <input 
                                type="radio" 
                                value="In Stock" 
                                name='status' 
                                id='inStock'
                                className='inventory-form__radio'
                                checked={state?.status === "In Stock"}
                                onChange={handleChange}
                            /> 
                           <label className="inventory-form__radio-label  inventory-form__radio-label--left" htmlFor='inStock'> In Stock</label>
                
                            <input 
                                type="radio" 
                                value="Out of Stock" 
                                id='Out of Stock'
                                name='status' 
                                className='inventory-form__radio'
                                checked={state?.status === "Out of Stock"}
                                onChange={handleChange}
                            />
                            <label className="inventory-form__radio-label">Out of Stock</label>
                    </div>
                    
                    {/* warehouse drop down */}
                     <label htmlFor="warehouse" className="inventory-form__label">Warehouse</label>
                    <select className='inventory-form__drop-down' onChange={handleChange} name="warehouseName" value={state?.warehouseName}>
                        {warehouses?.map((warehouse,i) => 
                            <option value={warehouse} key={i}>{warehouse}</option>
                        )}
                    </select>   
                </section>
            </div>
            {/* buttons */}
            <div  className='button-container'>
                <button type="reset" className="inventory-form__cancel-button" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="inventory-form__save-button">Save</button>
            </div>
        </form>
    </section>
    </div>
  )
}

export default EditInventory