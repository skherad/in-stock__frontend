import BackArrow from '../../assets/Icons/arrow_back-24px.svg';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './EditWarehouse.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

const EditWarehouse = () => {

    let navigate = useNavigate();
    const {warehouseId} = useParams();

    //define states for handling change of input values - to be used to set edited values
    const [state, setState] = useState({ 
        name: "",
        address: "",
        city: "",
        country: "",
        contact: {
            name: "",
            position: "",
            phone: "",
            email: ""
        }});

    //get request to receive and set selected warehouse details
    useEffect(() => {
        axios.get(`${API_URL}/warehouse/${warehouseId}`)
        .then(response => setState({
            name: response.data.name,
            address: response.data.address,
            city: response.data.city,
            country: response.data.country,
            contact: {
                name: response.data.contact.name,
                position: response.data.contact.position,
                phone: response.data.contact.phone,
                email: response.data.contact.email
            }
        }))
        .catch(error => console.log(error))
    }, [])

    //change handler for warehoue details from user inputs
    const handleChangeWarehouse = (event) => {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value,
        })
    }
    //change handler for contact details from user inputs
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
        navigate(`/warehouse/${warehouseId}`)
    }

    //click handler for submitting the form
    //put request to update the backend
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!state.name || !state.address || !state.city || !state.country || !state.contact.name || !state.contact.position || !state.contact.phone || !state.contact.email) {
            return;
        } else{
            axios.put(`${API_URL}/warehouse/${warehouseId}`, state)
            .then(response=>console.log(response))
            .catch(error=>console.log(error))}
        }

    return (
    <div className='parent-container'>
    <section className="form__container">
        {/* page header */}
        <div className='form__header-container'>
            <Link to={`/warehouse/${warehouseId}`} className="form__icon">
                <img src={BackArrow} alt="arrow back"></img>
            </Link>
            <h1 className="form__header">Edit Warehouse</h1>
        </div>
        {/* forms */}
        <form onSubmit={handleSubmit}>
            <div className='form__section-container'>
                <section className="form__section">
                    <h2 className="form__title">Warehouse Details</h2>

                    {/* warehouse name input field */}
                    <label htmlFor="name" className="form__label">Warehouse Name</label>
                    <input 
                        name="name"
                        className={!state?.name?"form__input form__input--invalid": "form__input"}
                        placeholder={state?.name}
                        value={state?.name}
                        onChange={handleChangeWarehouse}
                    ></input>
                    <div className={!state?.name?"invalid": "valid"}>This field is required</div>

                    {/* warehouse address input field */}
                    <label htmlFor="address" className="form__label">Street Address</label>
                    <input 
                        name="address"
                        className={!state?.address?"form__input form__input--invalid": "form__input"}
                        placeholder={state?.address}
                        value={state?.address}
                        onChange={handleChangeWarehouse}
                    ></input>
                    <div className={!state?.address?"invalid": "valid"}>This field is required</div>
                    
                    {/* warehouse city input field */}
                    <label htmlFor="city" className="form__label">City</label>
                    <input 
                        name="city"
                        className={!state?.city?"form__input form__input--invalid": "form__input"}
                        placeholder={state?.city}
                        value={state?.city}
                        onChange={handleChangeWarehouse}
                    ></input>
                    <div className={!state?.city?"invalid": "valid"}>This field is required</div>
                    
                    {/* warehouse country input field */}
                    <label htmlFor="country" className="form__label">Country</label>
                    <input 
                        name="country"
                        className={!state?.country?"form__input form__input--invalid": "form__input"}
                        placeholder={state?.country}
                        value={state?.country}
                        onChange={handleChangeWarehouse}
                    ></input>
                    <div className={!state?.country?"invalid": "valid"}>This field is required</div>
                </section>
                <section className="form__section form__section--divider">
                    <h2 className="form__title">Contact Details</h2>

                    {/* contact name input field */}
                    <label htmlFor="name" className="form__label">Contact Name</label>
                    <input 
                        name="name"
                        className={!state?.contact.name?"form__input form__input--invalid": "form__input"}
                        placeholder={state?.contact.name}
                        value={state?.contact.name}
                        onChange={handleChangeContact}
                    ></input>
                    <div className={!state?.contact.name?"invalid": "valid"}>This field is required</div>

                    {/* contact position input field */}
                    <label htmlFor="contactPosition" className="form__label">Position</label>
                    <input 
                        name="contactPosition"
                        className={!state?.contact.position?"form__input form__input--invalid": "form__input"}
                        placeholder={state?.contact.position}
                        value={state?.contact.position}
                        onChange={handleChangeContact}
                    ></input>
                    <div className={!state?.contact.position?"invalid": "valid"}>This field is required</div>

                    {/* contact phone# input field */}
                    <label htmlFor="phone" className="form__label">Phone Number</label>
                    <input 
                        name="phone"
                        className={!state?.contact.phone?"form__input form__input--invalid": "form__input"}
                        placeholder={state?.contact.phone}
                        value={state?.contact.phone}
                        onChange={handleChangeContact}
                    ></input>
                    <div className={!state?.contact.phone?"invalid": "valid"}>This field is required</div>

                    {/* contact email input field */}
                    <label htmlFor="email" className="form__label">Email</label>
                    <input 
                        name="email"
                        className={!state?.contact.email?"form__input form__input--invalid": "form__input"}
                        placeholder={state?.contact.email}
                        value={state?.contact.email}
                        onChange={handleChangeContact}
                    ></input>
                    <div className={!state?.contact.email?"invalid": "valid"}>This field is required</div>
                </section>
            </div>
            {/* page buttons */}
            <div  className='button-container'>
                <button type="reset" className="form__cancel-button" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="form__save-button">Save</button>
            </div>
        </form>
    </section>
    </div>
  )
}

export default EditWarehouse