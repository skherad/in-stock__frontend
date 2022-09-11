import './DeleteWarehouse.scss';
import closeIcon from '../../assets/Icons/close-24px.svg'

const DeleteWarehouse = ({ openDelete, setOpenDelete, warehouseToDelete }) => {
    if (!openDelete) {
        return;
    }

    const closeModal = () => {
        setOpenDelete(false);
    };

    return (
        <>
            <div className="modal-overlay"></div>
            <div className="delete-warehouse">
                <input className="delete-warehouse__close" type="image" src={closeIcon} alt="close" onClick={closeModal} />
                <h2 className="delete-warehouse__title">Delete {warehouseToDelete.name} warehouse?</h2>
                <p className="delete-warehouse__text">Please confirm that you'd like to delete the {warehouseToDelete.name} from the list of warehouses. You won't be able to undo this action.</p>
                <div className="delete-warehouse__buttons">
                    <button className="button delete-warehouse__button delete-warehouse__button--cancel" onClick={closeModal}>Cancel</button>
                    <button className="button delete-warehouse__button delete-warehouse__button--delete" onClick={closeModal}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default DeleteWarehouse; 