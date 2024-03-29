import './AddNewWarehouse.scss';
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState, useRef } from 'react';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
const { v4: uuid } = require('uuid');


function AddNewWarehouse() {
    let navigate = useNavigate();
    const [warehouseName, setWarehouseName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [contactName, setContactName] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const warehouseNameInput = useRef();
    const addressInput = useRef();
    const cityInput = useRef();
    const countryInput = useRef();
    const contactNameInput = useRef();
    const positionInput = useRef();
    const phoneInput = useRef();
    const emailInput = useRef();

    const[nameValid, setNameValid] =useState (true);
    const[addressValid, setAddressValid] =useState (true);
    const[cityValid, setCityValid] =useState (true);
    const[countryValid, setCountryValid] =useState (true);
    const[contactNameValid, setContactNameValid] =useState (true);
    const[positionValid, setPositionValid] =useState (true);
    const[phoneValid, setPhoneValid] =useState (true);
    const[emailValid, setEmailValid] =useState (true);

    const phoneRegex =/^(\+[0-9])\s(\([0-9]{3}\))\s([0-9]{3}\-[0-9]{4})$/;
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const handleSubmit = (event) => {
    event.preventDefault();
          let id= uuid();
          let warehouseName= event.target.warehouseName.value;
          let address=event.target.address.value;
          let city= event.target.city.value;
          let country= event.target.country.value;
          let contactName= event.target.contactName.value;
          let position= event.target.position.value;
          let phone= event.target.phone.value;
          let email= event.target.email.value;
      const newWarehouse =   {
            id,
            warehouseName,
            address,
            city,
            country,
            contact: {
                contactName,
                position,
                phone,
                email
            }
        };
        if (!warehouseName) {
          setNameValid(false)}
            else {
              setNameValid (true)
            }
 
        if (!address) {
          setAddressValid(false)}
            else {
              setAddressValid(true)
            }   
            
        if (!city) {
          setCityValid(false)}
            else {
              setCityValid (true)
            }
            
        if (!country) {
          setCountryValid(false)}
            else {
              setCountryValid (true)
            }
            
        if (!contactName) {
          setContactNameValid(false)}
            else {
              setContactNameValid (true)
            }    

        if (!position) {
          setPositionValid(false)}
            else {
              setPositionValid(true)
            }

        if (!phone) {
          setPhoneValid(false)}
            else {
              setPhoneValid(true)
            }

        if (!email) {
          setEmailValid(false)}
            else {
              setEmailValid (true)
            }
        if (!warehouseName || !address || !city || !country || !contactName || !position || !phone || !email) {
              return false;
          }
        else if (!phoneRegex.test(phone)) {
            alert("Please enter a valid phone number");
            return false;
        }
        else if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }
        else {
        axios.post(`http://localhost:8080/warehouse`, {newWarehouse}).then(()=>{
          navigate('/warehouse')
        })
      };}

      function handleChangeName(event) {
        setWarehouseName(event.target.value);
      } 
      function handleChangeAddress(event) {
        setAddress(event.target.value);
      } 
      function handleChangeCity(event) {
        setCity(event.target.value);
      } 
      function handleChangeCountry(event) {
        setCountry(event.target.value);
      } 
      function handleChangeContactname(event) {
        setContactName(event.target.value);
      } 
      function handleChangePosition(event) {
        setPosition(event.target.value);
      } 
      function handleChangePhone(event) {
        setPhone(event.target.value);
      } 
      function handleChangeEmail(event) {
        setEmail(event.target.value);
      } 

    return (
        <>

            <Link className="addnewwarehouse__direct" to="/">
            <img className="addnewwarehouse__icon" src={require("../../assets/Icons/arrow_back-24px.svg").default} alt={"icon"}/>
            <div className="addnewwarehouse__title">Add New Warehouse</div> </Link>
            <div className="addnewwarehouse">
            <form className="addnewwarehouse__form" onSubmit={handleSubmit}>
                <div className="addnewwarehouse__container">
                <section className="addnewwarehouse__warehousedetails">
                    <div className="addnewwarehouse__section">Warehouse Details</div>

                    <label className="addnewwarehouse__description">Warehouse Name</label>
                    <input className="addnewwarehouse__box" type={"text"} name="warehouseName" onChange={handleChangeName} placeholder="Warehouse Name"/>
                    {!nameValid && <ErrorMsg/>}

                    <label className="addnewwarehouse__description">Street Address</label>
                    <input className="addnewwarehouse__box" type={"text"} name="address" onChange={handleChangeAddress} placeholder="Street Address"/>
                    {!addressValid && <ErrorMsg/>}

                    <label className="addnewwarehouse__description">City</label>
                    <input className="addnewwarehouse__box" type={"text"} name="city" onChange={handleChangeCity} placeholder="City"/>

                    {!cityValid && <ErrorMsg/>}

                    <label className="addnewwarehouse__description">Country</label>
                    <input className="addnewwarehouse__box" type={"text"} name="country" onChange={handleChangeCountry} placeholder="Country"/>
     
                    {!countryValid && <ErrorMsg/>}
                </section>
                <section className="addnewwarehouse__contactdetails"> 
                    <div className="addnewwarehouse__section">Contact Details</div>

                    <label className="addnewwarehouse__description">Contact Name</label>
                    <input className="addnewwarehouse__box" type={"text"} name="contactName" onChange={handleChangeContactname} placeholder="Contact Name"/>
                    {!contactNameValid && <ErrorMsg/>}

                    <label className="addnewwarehouse__description">Position</label>
                    <input className="addnewwarehouse__box" type={"text"} name="position" onChange={handleChangePosition} placeholder="Position"/>
                    {!positionValid && <ErrorMsg/>}

                    <label className="addnewwarehouse__description">Phone Number</label>
                    <input className="addnewwarehouse__box" type={"text"} name="phone" onChange={handleChangePhone} placeholder="Phone Number"/>
                    {!phoneValid && <ErrorMsg/>}
  
                    <label className="addnewwarehouse__description">Email</label>
                    <input className="addnewwarehouse__box" type={"text"} name="email" onChange={handleChangeEmail} placeholder="Email"/>
                    {!emailValid && <ErrorMsg/>}

                </section>
                </div>
                <section className="addnewwarehouse__buttons">
                <Link to="/"><button className="addnewwarehouse__buttons-cancel"> Cancel </button></Link>
                <button className="addnewwarehouse__buttons-add" type="submit"> + Add Warehouse </button>
            </section>
            </form>

        </div>  
        </>
);
}

export default AddNewWarehouse; 