import WarehouseHeader from '../../components/Header/WarehouseHeader';
import './AddNewWarehouse.scss';
import { Link } from 'react-router-dom';
import axios from "axios";
const { v4: uuid } = require('uuid');



function AddNewWarehouse() {
    function handleSubmit (event) {
        const Input = document.getElementsByClassName(".addnewwarehouse__box");

        event.preventDefault();

          let id= uuid();
          let warehousename= event.target.warehousename.value;
          let address=event.target.address.value;
          let city= event.target.city.value;
          let country= event.target.country.value;
          let contactname= event.target.contactname.value;
          let position= event.target.position.value;
          let phone=event.target.phone.value;
          let email= event.target.emails.value;
        if (Input === "") {
            alert.error("This field is required");
        }
        
        else {
        axios.post(`http://localhost:8080/warehouses`, {
            id,
            name: warehousename,
            address,
            city,
            country,
            contact: {
              name: contactname,
              position,
              phone,
              email
            }})}
      };



    return (
        <>

        <WarehouseHeader />
        <div className="addnewwarehouse">
            <Link className="addnewwarehouse__direct" to="/">
            <img className="addnewwarehouse__icon" src={require("../../assets/Icons/arrow_back-24px.svg").default} alt={"icon"}/>
            <div className="addnewwarehouse__title">Add New Warehouse</div> </Link>
            <form className="addnewwarehouse__form" onSubmit={handleSubmit}>
                <section className="addnewwarehouse__warehousedetails"> 
                    <div className="addnewwarehouse__section">Warehouse Details</div>
                    <label className="addnewwarehouse__description">Warehouse Name</label>
                    <input className="addnewwarehouse__box" type={"text"} name="comments" placeholder="Warehouse Name"/>
                    <div className="errmsg"> 
                        <img className="errmsg__icon"src={require("../../assets/Icons/error-24px.svg").default} alt={"erricon"}/>
                        <div className="errormsg__text"> This field is required</div>
                    </div>
                    <label className="addnewwarehouse__description">Street Address</label>
                    <input className="addnewwarehouse__box" type={"text"} name="comments" placeholder="Street Address"/>
                    <label className="addnewwarehouse__description">City</label>
                    <input className="addnewwarehouse__box" type={"text"} name="comments" placeholder="City"/>
                    <label className="addnewwarehouse__description">Country</label>
                    <input className="addnewwarehouse__box" type={"text"} name="comments" placeholder="Country"/>
                </section>
                <section className="addnewwarehouse__contactdetails"> 
                    <div className="addnewwarehouse__section">Contact Details</div>
                    <label className="addnewwarehouse__description">Contact Name</label>
                    <input className="addnewwarehouse__box" type={"text"} name="comments" placeholder="Contact Name"/>
                    <label className="addnewwarehouse__description">Position</label>
                    <input className="addnewwarehouse__box" type={"text"} name="comments" placeholder="Position"/>
                    <label className="addnewwarehouse__description">Phone Number</label>
                    <input className="addnewwarehouse__box" type={"text"} name="comments" placeholder="Phone Number"/>
                    <label className="addnewwarehouse__description">Email</label>
                    <input className="addnewwarehouse__box" type={"text"} name="comments" placeholder="Email"/>
                </section>
            </form>
            <section className="addnewwarehouse__buttons">
                <Link to="/"><button className="addnewwarehouse__buttons-cancel"> Cancel </button></Link>
                <button className="addnewwarehouse__buttons-add" type="submit"> + Add Warehouse </button>
            </section>
        </div>  
        </>
);
}

export default AddNewWarehouse; 