import React from 'react';
import { useState } from 'react';
import ReactDom from 'react-dom';

function InventoryModal ({props}) {
const[isOpen, setIsOpen] =useState (false);

deleteItem = (inventoryId) => {
    axios.delete(`http://localhost:8080/inventory/${inventoryId}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  };
    return ReactDom.createPortal(
      <>
    <div className="modal__overlay-style"> </div>
    <section className="modal">
        <div className="modal__title"> Delete {props.itemName} inventory item?</div>
        <p className="modal__description">Please confirm that you'd like to delete {props.itemName} from the inventory list. <br> You won't be able to undo this action.</br></p>
        <div className="modal__button">
        <button className="modal__button-cancel" onClick={() =>setIsOpen(false)}>Cancel</button>
        <button className="modal__button-delete" onClick={() =>setIsOpen(true)}>Delete</button>
        </div>
    </section>
    </>,
    document.getElementById('portal')
    )
}

export default InventoryModal;