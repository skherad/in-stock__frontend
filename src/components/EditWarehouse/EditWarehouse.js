import BackArrow from '../../assets/Icons/arrow_back-24px.svg';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './EditWarehouse.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EditWarehouse = () => {

    let navigate = useNavigate();

    //TODO click will need to link to /:warehouseId coordinate with Michael
    const {warehouseId} = useParams();

    //define state for selected warehouse to be edited
    const [selectedWarehouse, setSelectedWarehouse] = useState();
    //define states for handling change of input values - to be used to set edited values
    const [state, setState] = useState({
        name: selectedWarehouse?.name,
        address: selectedWarehouse?.address,
        city: selectedWarehouse?.city,
        country: selectedWarehouse?.country,
        contact: {
            name: selectedWarehouse?.contact.name,
            position: selectedWarehouse?.contact.position,
            phone: selectedWarehouse?.contact.phone,
            email: selectedWarehouse?.contact.email
        }
    });
    //get request to receive and set selected warehouse details
    useEffect(() => {
        axios.get(`http://localhost:8080/warehouse/${warehouseId}`)
        .then(response => setSelectedWarehouse(response.data))
        .catch(error => console.log(error))
    }, [warehouseId])

    //change handler for warehoue details from user inputs
    const handleChangeWarehouse = (event) => {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value,
        })
    }

    const handleChangeContact = (event) => {
        const value = event.target.value;
        setState({
          ...state,
          contact: {
            ...state.contact,
            [event.target.name]: value,
          }
        })
    }

    //click handler for cancel button
    const handleCancel = () => {
        navigate('/warehouseDetails')
    }

    //click handler for submitting the form
    //put request to update the backend
    const handleSubmit = (event) => {
        event.preventDefault();
        // axios.put(`http://localhost:8080/warehouse/${warehouseId}`, state)
        // .then(response=>console.log(response))
        // .catch(error=>console.log(error))
    }

    if(!selectedWarehouse) { return <div>loading...</div>}

    return (
    <div className='parent-container'>
    <section className="form__container">
        <div className='form__header-container'>
            <Link 
                to={`/warehouseDetails`}
                className="form__icon"
            >
                <img src={BackArrow} alt="arrow back"></img>
            </Link>
            <h1 className="form__header">Edit Warehouse</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='form__section-container'>
                <section className="form__section">
                    <h2 className="form__title">Warehouse Details</h2>

                    {/* warehouse name input field */}
                    <label 
                        htmlFor="name"
                        className="form__label"
                    >Warehouse Name</label>
                    <input 
                        name="name"
                        className="form__input"
                        placeholder={selectedWarehouse.name}
                        value={state.name}
                        onChange={handleChangeWarehouse}
                    ></input>

                    {/* warehouse address input field */}
                    <label 
                        htmlFor="address"
                        className="form__label"
                    >Street Address</label>
                    <input 
                        name="address"
                        className="form__input"
                        placeholder={selectedWarehouse.address}
                        value={state.address}
                        onChange={handleChangeWarehouse}
                    ></input>

                    {/* warehouse city input field */}
                    <label 
                        htmlFor="city"
                        className="form__label"
                    >City</label>
                    <input 
                        name="city"
                        className="form__input"
                        placeholder={selectedWarehouse.city}
                        value={state.city}
                        onChange={handleChangeWarehouse}
                    ></input>

                    {/* warehouse country input field */}
                    <label 
                        htmlFor="country"
                        className="form__label"
                    >Country</label>
                    <input 
                        name="country"
                        className="form__input"
                        placeholder={selectedWarehouse.country}
                        value={state.country}
                        onChange={handleChangeWarehouse}
                    ></input>
                </section>
                <section className="form__section form__section--divider">
                    <h2 className="form__title">Contact Details</h2>

                    {/* contact name input field */}
                    <label 
                        htmlFor="name"
                        className="form__label"
                    >Contact Name</label>
                    <input 
                        name="name"
                        className="form__input"
                        placeholder={selectedWarehouse.contact.name}
                        value={state.contact.name}
                        onChange={handleChangeContact}
                    ></input>

                    {/* contact position input field */}
                    <label 
                        htmlFor="contactPosition"
                        className="form__label"
                    >Position</label>
                    <input 
                        name="contactPosition"
                        className="form__input"
                        placeholder={selectedWarehouse.contact.position}
                        value={state.contact.position}
                        onChange={handleChangeContact}
                    ></input>

                    {/* contact phone# input field */}
                    <label 
                        htmlFor="phone"
                        className="form__label"
                    >Phone Number</label>
                    <input 
                        name="phone"
                        className="form__input"
                        placeholder={selectedWarehouse.contact.phone}
                        value={state.contact.phone}
                        onChange={handleChangeContact}
                    ></input>

                    {/* contact email input field */}
                    <label 
                        htmlFor="email"
                        className="form__label"
                    >Email</label>
                    <input 
                        name="email"
                        className="form__input"
                        placeholder={selectedWarehouse.contact.email}
                        value={state.contact.email}
                        onChange={handleChangeContact}
                    ></input>
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