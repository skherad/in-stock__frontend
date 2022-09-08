import WarehouseHeader from '../../components/Header/WarehouseHeader';
import './AddNewWarehouse.scss';
import { Link } from 'react-router-dom';
import axios from "axios";
const { v4: uuid } = require('uuid');

const API_URL = "http://localhost:8080/warehouses";


function AddNewWarehouse() {
    function handleSubmit (event) {

        event.preventDefault();
        const newWarehouseItem = {
          id: uuid(),
          warehousename: event.target.warehousename.value,
          address:event.target.address.value,
          city: event.target.city.value,
          country: event.target.country.value,
            contactname: event.target.contactname.value,
            position: event.target.position.value,
            phone:event.target.phone.value,
            email: event.target.emails.value,
        }  
      
        axios.post(`http://localhost:8080/warehouses`, newWarehouseItem)
      };

    const Input = document.getElementsByClassName(".addnewwarehouse__box");
    if (Input === "") {
        alert.error("This field is required");
    }

    return (
        <>

        <WarehouseHeader />
        <div className="addnewwarehouse">
            <Link className="addnewwarehouse__direct" to="/">
            <img className="addnewwarehouse__icon" src={require("../../assets/Icons/arrow_back-24px.svg").default} alt={"icon"}/>
            <div className="addnewwarehouse__title">Add New Warehouse</div> </Link>
            <form className="addnewwarehouse__form">
                <section className="addnewwarehouse__warehousedetails"> 
                    <div className="addnewwarehouse__section">Warehouse Details</div>
                    <label className="addnewwarehouse__description">Warehouse Name</label>
                    <div className="errMsg"> 
                        <img className="errMsg__icon"src={require("../../assets/Icons/error-24px.svg").default} alt={"erricon"}/>
                        <div className="error__text"> This field is required</div>
                    </div>
                    <input className="addnewwarehouse__box" type={"text"} name="comments" placeholder="Warehouse Name"/>
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