import "./InventoryModal.scss";
import axios from "axios";

function InventoryModal({ openModal, closeModal, itemToDelete }) {
  if (!openModal) return null;

  const handleSubmit = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:8080/inventory/${id}`)
      .then((response) => {
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="modal__overlay-style"> </div>
      <section className="modal">
        <div className="modal__top">
          <div className="modal__title">
            {" "}
            Delete {itemToDelete.name} inventory item?
          </div>
          <p className="modal__description">
            Please confirm that you'd like to delete {itemToDelete.name} from
            the inventory list. You won't be able to undo this action.
          </p>
        </div>
        <div className="modal__button">
          <button className="modal__button-cancel" onClick={closeModal}>
            Cancel
          </button>
          <button className="modal__button-delete" onClick={handleSubmit}>
            Delete
          </button>
        </div>
      </section>
    </>
  );
}

export default InventoryModal;
