import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import './DeleteInventoryMobile.scss';

function DeleteInventoryMobile ({props}) {

const handleSubmit = (event, inventoryId) => {
event.preventDefault();
    axios.delete(`http://localhost:8080/inventory/${inventoryId}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  };
    return (

    <section className="deleteinventorymobile">
        <div className="deleteinventorymobile__top">
            <div className="deleteinventorymobile__title"> Delete {props.ItemName} inventory item?</div>
            <p className="deleteinventorymobile__description"> Please confirm that you'd like to delete {props.ItemName} from the inventory list. You won't be able to undo this action.</p>
        </div>
        <div className="deleteinventorymobile__button">
            <Link to="/inventory"><button className="deleteinventorymobile__button-cancel">Cancel</button></Link>
            <button className="deleteinventorymobile__button-delete" onClick={handleSubmit}>Delete</button>
        </div>
    </section>

    )
}

export default DeleteInventoryMobile;