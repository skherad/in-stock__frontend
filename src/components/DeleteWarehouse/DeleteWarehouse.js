import './DeleteWarehouse.scss';
import closeIcon from '../../assets/Icons/close-24px.svg'
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

const DeleteWarehouse = ({ openDelete, setOpenDelete, warehouseToDelete }) => {
    if (!openDelete) {
        return;
    }

    const closeModal = () => {
        setOpenDelete(false);
    }

    const handleDelete = () => {
        axios.delete(API_URL+"/warehouse/"+warehouseToDelete.id)
            .then((response) => {
                closeModal();
            }).catch((error) => console.log(error));
    }

    return (
        <>
            <div className="modal-overlay"></div>
            <div className="delete-modal">
                <input className="delete-modal__close" type="image" src={closeIcon} alt="close" onClick={closeModal} />

                    <h2 className="delete-modal__title">Delete {warehouseToDelete.name} warehouse?</h2>
                    <p className="delete-modal__text">Please confirm that you'd like to delete the {warehouseToDelete.name} from the list of warehouses. You won't be able to undo this action.</p>
                    <div className="delete-modal__buttons">
                        <button className="button delete-modal__button delete-modal__button--cancel" onClick={closeModal}>Cancel</button>
                        <button className="button delete-modal__button delete-modal__button--delete" onClick={handleDelete}>Delete</button>
                    </div>
            </div>
        </>
    )
}

export default DeleteWarehouse; 