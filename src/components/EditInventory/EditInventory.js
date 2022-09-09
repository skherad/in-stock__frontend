import BackArrow from '../../assets/Icons/arrow_back-24px.svg';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './EditInventory.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import inventoryData from '../../assets/JSON Data/inventories.json'
import WarehouseData from '../../assets/JSON Data/warehouses.json';
const EditWarehouse = () => {



    let navigate = useNavigate();

    //TODO click will need to link to /:warehouseId coordinate with Michael
    const {inventoryId} = useParams();

    //define state for selected warehouse to be edited
    // const [selectedInventory, setSelectedInventory] = useState(); 
    let  selectedInventory =   {
        id: "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Television",
        description: "This 50\", 4K LED TV provides a crystal-clear picture and vivid colors.",
        category: "Electronics",
        status: "In Stock",
        quantity: 500
      }

    //get a unique list of categories from inventory data
    //currently using JSON file but should use axios
    let categoryArray = [];
    inventoryData.forEach(inventory => categoryArray.push(inventory.category));
    categoryArray = [...new Set(categoryArray)];

    let warehouseArray = [];
    WarehouseData.forEach(warehouse => warehouseArray.push(warehouse.name));

    //define states for handling change of input values - to be used to set edited values
    const [state, setState] = useState({
        warehouseName: "Manhattan",
        itemName: "Television",
        description: "This 50\", 4K LED TV provides a crystal-clear picture and vivid colors.",
        category: "Electronics",
        status: "In Stock",
    });

    //get request to receive and set selected warehouse details
    // useEffect(() => {
    //     axios.get(`http://localhost:8080/inventory/${inventoryId}`)
    //     .then(response => setSelectedInventory(response.data))
    //     .catch(error => console.log(error))
    // }, [inventoryId])

    //change handler for warehoue details from user inputs
    const handleChange = (event) => {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value,
        })
        console.log(value)
    }

    //click handler for cancel button
    const handleCancel = () => {
        navigate('/inventoryDetails')
    }

    //click handler for submitting the form
    //put request to update the backend
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state)
        // axios.put(`http://localhost:8080/inventory/${inventoryId}`, state)
        // .then(response=>console.log(response))
        // .catch(error=>console.log(error))
    }

    if(!selectedInventory) { return <div>loading...</div>}

    return (
    <div className='parent-container'>
    <section className="inventory-form__container">
        <div className='inventory-form__header-container'>
            <Link 
                to={`/inventoryDetails`}
                className="inventory-form__icon"
            >
                <img src={BackArrow} alt="arrow back"></img>
            </Link>
            <h1 className="inventory-form__header">Edit Inventory Item</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='inventory-form__section-container'>
                <section className="inventory-form__section">
                    <h2 className="inventory-form__title">Item Details</h2>

                    {/* warehouse name input field */}
                    <label 
                        htmlFor="itemName"
                        className="inventory-form__label"
                    >Item Name</label>
                    <input 
                        name="itemName"
                        className="inventory-form__input"
                        placeholder={selectedInventory.itemName}
                        value={state.itemName}
                        onChange={handleChange}
                    ></input>

                    {/* warehouse address input field */}
                    <label 
                        htmlFor="description"
                        className="inventory-form__label"
                    >Street Address</label>
                    <textarea 
                        name="description"
                        className="inventory-form__textarea"
                        placeholder={selectedInventory.description}
                        value={state.description}
                        onChange={handleChange}
                    ></textarea>

                    {/* item category drop down */}
                    <label 
                        htmlFor="category"
                        className="inventory-form__label"
                    >Category</label>
                    <select 
                        className='inventory-form__drop-down'
                        onChange={handleChange}
                        name="category"
                        value={state.category}
                    >
                        {categoryArray.map((category,i) => 
                            <option value={category} key={i}>{category}</option>
                        )}
                    </select>                    
                </section>
                <section className="inventory-form__section inventory-form__section--divider">
                    <h2 className="inventory-form__title">Item Availability</h2>
                    <p 
                        htmlFor="status"
                        className="inventory-form__label"
                    >Status</p>
                    <div  className='button-container button-container--radio'>
                        <label className="inventory-form__radio-label">
                            <input 
                                type="radio" 
                                value="In Stock" 
                                name='status' 
                                className='inventory-form__radio'
                                checked={state.status === "In Stock"}
                                onChange={handleChange}
                            /> 
                            In Stock
                        </label>
                        <label className="inventory-form__radio-label">
                            <input 
                                type="radio" 
                                value="Out of Stock" 
                                name='status' 
                                className='inventory-form__radio'
                                checked={state.status === "Out of Stock"}
                                onChange={handleChange}
                            />
                            Out of Stock
                        </label>
                    </div>
                    
                    {/* warehouse drop down */}
                     <label 
                        htmlFor="warehouse"
                        className="inventory-form__label"
                    >Warehoue</label>
                    <select 
                        className='inventory-form__drop-down'
                        onChange={handleChange}
                        name="warehouseName"
                        value={state.warehouseName}
                    >
                        {warehouseArray.map((warehouse,i) => 
                            <option value={warehouse} key={i}>{warehouse}</option>
                        )}
                    </select>   
                </section>
            </div>
            <div  className='button-container'>
                <button className="inventory-form__cancel-button" onClick={handleCancel}>Cancel</button>
                <button className="inventory-form__save-button">Save</button>
            </div>
        </form>
    </section>
    </div>
  )
}

export default EditWarehouse