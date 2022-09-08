import BackArrow from '../../assets/Icons/arrow_back-24px.svg';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './EditInventory.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EditWarehouse = () => {



    let navigate = useNavigate();

    //TODO click will need to link to /:warehouseId coordinate with Michael
    const {inventoryId} = useParams();

    //define state for selected warehouse to be edited
    const [selectedInventory, setSelectedInventory] = useState();
    selectedInventory =   {
        id: "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Television",
        description: "This 50\", 4K LED TV provides a crystal-clear picture and vivid colors.",
        category: "Electronics",
        status: "In Stock",
        quantity: 500
      }
    //define states for handling change of input values - to be used to set edited values
    const [state, setState] = useState({
        itemName: selectedInventory.itemName,
        description: selectedInventory.description,
        category: selectedInventory.category,
        status: selectedInventory.status,
        warehouseName: selectedInventory.warehouseName
    });
    //get request to receive and set selected warehouse details
    useEffect(() => {
        axios.get(`http://localhost:8080/inventory/${inventoryId}`)
        .then(response => setSelectedInventory(response.data))
        .catch(error => console.log(error))
    }, [warehouseId])

    //change handler for warehoue details from user inputs
    const handleChange = (event) => {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value,
        })
    }

    //click handler for cancel button
    const handleCancel = () => {
        navigate('/inventoryDetails')
    }

    //click handler for submitting the form
    //put request to update the backend
    const handleSubmit = (event) => {
        event.preventDefault();
        // axios.put(`http://localhost:8080/inventory/${inventoryId}`, state)
        // .then(response=>console.log(response))
        // .catch(error=>console.log(error))
    }

    if(!selectedInventory) { return <div>loading...</div>}

    return (
    <div className='parent-container'>
    <section className="form__container">
        <div className='form__header-container'>
            <Link 
                to={`/inventoryDetails`}
                className="form__icon"
            >
                <img src={BackArrow} alt="arrow back"></img>
            </Link>
            <h1 className="form__header">Edit Inventory Item</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='form__section-container'>
                <section className="form__section">
                    <h2 className="form__title">Item Details</h2>

                    {/* warehouse name input field */}
                    <label 
                        htmlFor="itemName"
                        className="form__label"
                    >Item Name</label>
                    <input 
                        name="itemName"
                        className="form__input"
                        placeholder={selectedInventory.itemName}
                        value={state.itemName}
                        onChange={handleChange}
                    ></input>

                    {/* warehouse address input field */}
                    <label 
                        htmlFor="description"
                        className="form__label"
                    >Street Address</label>
                    <input 
                        name="description"
                        className="form__input"
                        placeholder={selectedInventory.description}
                        value={state.description}
                        onChange={handleChange}
                    ></input>

                    {/* item category drop down */}
                    <label 
                        htmlFor="category"
                        className="form__label"
                    >Category</label>
                    <input 
                        name="city"
                        className="form__input"
                        placeholder={selectedWarehouse.city}
                        value={state.city}
                        onChange={handleChangeWarehouse}
                    ></input>

                    
                </section>
                <section className="form__section form__section--divider">
                    <h2 className="form__title">Item Availability</h2>

                
                    
                </section>
            </div>
            <div  className='button-container'>
                <button className="form__cancel-button" onClick={handleCancel}>Cancel</button>
                <button className="form__save-button">Save</button>
            </div>
        </form>
    </section>
    </div>
  )
}

export default EditWarehouse