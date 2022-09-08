import WarehouseHeader from '../../components/Header/WarehouseHeader';
import './AddNewWarehouse.scss';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
const { v4: uuid } = require('uuid');
// import { useForm } from "react-hook-form"; 

function AddNewWarehouse() {
    const [warehouseName, setWarehouseName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [contactName, setContactName] = useState("");
    const [position, setPosition] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");


    const phoneRegex =/^(\+[0-9])\s(\([0-9]{3}\))\s([0-9]{3}\-[0-9]{4})$/;
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const handleSubmit = (event) => {
    event.preventDefault();
    console.log (event.target)
    const Input = document.getElementsByClassName(".addnewwarehouse__box");
          let id= uuid();
          let name= event.target.name.value;
          let address=event.target.address.value;
          let city= event.target.city.value;
          let country= event.target.country.value;
          let contactName= event.target.contactName.value;
          let contactPosition= event.target.contactPosition.value;
          let contactPhone= event.target.contactPhone.value;
          let contactEmail= event.target.contactEmail.value;
      const newWarehouse =   {
            "id": uuid(),
            name,
            address,
            city,
            country,
            "contact": {
                contactName,
                contactPosition,
                contactPhone,
                contactEmail
            }
        };

        if (Input ==="") {
            return (
              console.log('nope')
            )
        }
        else if (!phoneRegex.test(contactPhone)) {
            alert("Please enter a valid phone number");
            return false;
        }
        else if (!emailRegex.test(contactEmail)) {
            alert("Please enter a valid email address");
            return false;
        }
        else {
        axios.post(`http://localhost:8080/warehouses`, {newWarehouse})
            console.log ("added")
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
        <div className="addnewwarehouse">
            <Link className="addnewwarehouse__direct" to="/">
            <img className="addnewwarehouse__icon" src={require("../../assets/Icons/arrow_back-24px.svg").default} alt={"icon"}/>
            <div className="addnewwarehouse__title">Add New Warehouse</div> </Link>
            <form className="addnewwarehouse__form" onSubmit={handleSubmit}>
                <div className="addnewwarehouse__container">
                <section className="addnewwarehouse__warehousedetails"> 
                    <div className="addnewwarehouse__section">Warehouse Details</div>
                    <label className="addnewwarehouse__description">Warehouse Name</label>
                    <input className="addnewwarehouse__box" type={"text"} name="name" onChange={handleChangeName} placeholder="Warehouse Name"/>
                    <div className="errmsg"> 
                    <img className="errmsg__icon"src={require("../../assets/Icons/error-24px.svg").default} alt={"erricon"}/>
                    <div className="errormsg__text"> This field is required</div>
                </div>
                    <label className="addnewwarehouse__description">Street Address</label>
                    <input className="addnewwarehouse__box" type={"text"} name="address" onChange={handleChangeAddress} placeholder="Street Address"/>
                    <div className="errmsg"> 
                    <img className="errmsg__icon"src={require("../../assets/Icons/error-24px.svg").default} alt={"erricon"}/>
                    <div className="errormsg__text"> This field is required</div>
                </div>
                    <label className="addnewwarehouse__description">City</label>
                    <input className="addnewwarehouse__box" type={"text"} name="city" onChange={handleChangeCity} placeholder="City"/>
                    <div className="errmsg"> 
                    <img className="errmsg__icon"src={require("../../assets/Icons/error-24px.svg").default} alt={"erricon"}/>
                    <div className="errormsg__text"> This field is required</div>
                </div>
                    <label className="addnewwarehouse__description">Country</label>
                    <input className="addnewwarehouse__box" type={"text"} name="country" onChange={handleChangeCountry} placeholder="Country"/>
                    <div className="errmsg"> 
                    <img className="errmsg__icon"src={require("../../assets/Icons/error-24px.svg").default} alt={"erricon"}/>
                    <div className="errormsg__text"> This field is required</div>
                </div>
                </section>
                <section className="addnewwarehouse__contactdetails"> 
                    <div className="addnewwarehouse__section">Contact Details</div>
                    <label className="addnewwarehouse__description">Contact Name</label>
                    <input className="addnewwarehouse__box" type={"text"} name="contactName" onChange={handleChangeContactname} placeholder="Contact Name"/>
                    <div className="errmsg"> 
                    <img className="errmsg__icon"src={require("../../assets/Icons/error-24px.svg").default} alt={"erricon"}/>
                    <div className="errormsg__text"> This field is required</div>
                </div>
                    <label className="addnewwarehouse__description">Position</label>
                    <input className="addnewwarehouse__box" type={"text"} name="contactPosition" onChange={handleChangePosition} placeholder="Position"/>
                    <div className="errmsg"> 
                    <img className="errmsg__icon"src={require("../../assets/Icons/error-24px.svg").default} alt={"erricon"}/>
                    <div className="errormsg__text"> This field is required</div>
                </div>
                    <label className="addnewwarehouse__description">Phone Number</label>
                    <input className="addnewwarehouse__box" type={"text"} name="contactPhone" onChange={handleChangePhone} placeholder="Phone Number"/>
                    <div className="errmsg"> 
                    <img className="errmsg__icon"src={require("../../assets/Icons/error-24px.svg").default} alt={"erricon"}/>
                    <div className="errormsg__text"> This field is required</div>
                </div>
                    <label className="addnewwarehouse__description">Email</label>
                    <input className="addnewwarehouse__box" type={"text"} name="contactEmail" onChange={handleChangeEmail} placeholder="Email"/>
                    <div className="errmsg"> 
                    <img className="errmsg__icon"src={require("../../assets/Icons/error-24px.svg").default} alt={"erricon"}/>
                    <div className="errormsg__text"> This field is required</div>
                </div>
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