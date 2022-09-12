import React from "react";
import { useState } from "react";
import ReactDom from "react-dom";
import axios from "axios";

function InventoryModal({ openModal, closeModal, DeleteInventory }) {
  if (!openModal) return null;

  const handleSubmit = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:8080/inventory/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return ReactDom.createPortal(
    <>
      <div className="modal__overlay-style"> </div>
      <section className="modal">
        <div className="modal__title">
          {" "}
          Delete {DeleteInventory.itemName} inventory item?
        </div>
        <p className="modal__description">
          Please confirm that you'd like to delete {DeleteInventory.itemName}{" "}
          from the inventory list.{" "}
          <br> You won't be able to undo this action.</br>
        </p>
        <div className="modal__button">
          <button className="modal__button-cancel" onClick={closeModal}>
            Cancel
          </button>
          <button className="modal__button-delete" onClick={handleSubmit}>
            Delete
          </button>
        </div>
      </section>
    </>,
    document.getElementById("portal")
  );
}

export default InventoryModal;
