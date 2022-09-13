import "./InventoryModal.scss";
import axios from "axios";
import closeIcon from '../../assets/Icons/close-24px.svg'

function InventoryModal({ openModal, closeModal, itemToDelete }) {
  if (!openModal) return null;

  const handleSubmit = (itemToDelete) => {
    console.log(itemToDelete.id);
    axios
      .delete(`http://localhost:8080/inventory/${itemToDelete.id}`)
      .then((response) => {
        // console.log(response.data);
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
      <img className="modal__close" src={closeIcon} alt="close" onClick={closeModal}/>
        <div className="modal__top">
          <div className="modal__title">
            Delete {itemToDelete.itemName} inventory item?
          </div>
          <p className="modal__description">
            Please confirm that you'd like to delete {itemToDelete.itemName} from
            the inventory list. You won't be able to undo this action.
          </p>
        </div>
        <div className="modal__button">
          <button className="modal__button-cancel" onClick={closeModal}>
            Cancel
          </button>
          <button className="modal__button-delete" onClick={() => handleSubmit(itemToDelete)}>
            Delete
          </button>
        </div>
      </section>
    </>
  );
}

export default InventoryModal;
