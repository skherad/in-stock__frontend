import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './WarehouseList.scss';
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

function WarehouseList() {
    const navigate = useNavigate();
    const [ warehouses, setWarehouses ] = useState([]);
    const [ openDelete, setOpenDelete ] = useState(false);
    const [ warehouseToDelete, setWarehouseToDelete ] = useState({});

    useEffect(() => {
        axios.get(API_URL+"/warehouse")
            .then((response) => setWarehouses(response.data))
            .catch((error) => console.log(error));
    }, [openDelete]);

    const handleAddNewWarehouse = () => {
        navigate("/addnewwarehouse");
    }

    const handleDelete = (warehouse) => {
        setOpenDelete(true);
        setWarehouseToDelete(warehouse);
    }

    const handleEdit = (id) => {
        navigate(`/editWarehouse/${id}`);
    }

    return (
        <div className="list-container">
            <main className="warehouse-list">
                <div className="warehouse-header">
                    <h1 className="warehouse-header__title">Warehouses</h1>
                    <input className="form-field warehouse-header__search" type="text" name="warehouse-search" placeholder="Search..."/>
                    <button className="button warehouse-header__button" onClick={handleAddNewWarehouse}>+ Add New Warehouse</button>
                </div>
                <div className="warehouse-table">
                    {/* table headers for tablet and desktop views */}
                    <ul className="warehouse-table__header">
                        <li className="warehouse-table__field warehouse-table__field--warehouse">WAREHOUSE</li>
                        <li className="warehouse-table__field warehouse-table__field--address">ADDRESS</li>
                        <li className="warehouse-table__field">CONTACT NAME</li>
                        <li className="warehouse-table__field warehouse-table__field--contact-info">CONTACT INFORMATION</li>
                        <li className="warehouse-table__field warehouse-table__field--action">ACTIONS</li>
                    </ul>
                    {/* create a record for each warehouse in array */}
                    {warehouses.map((warehouse) => {
                        return (
                            <div className="warehouse-table__record" key={warehouse.id}>
                                <div className="warehouse-table__content">
                                    <div className="warehouse-table__left">
                                        <p className="warehouse-table__label">WAREHOUSE</p>
                                        <Link to={`/warehouse/${warehouse.id}`} className="warehouse-table__value warehouse-table__name">{warehouse.name}</Link>
                                        <p className="warehouse-table__label">ADDRESS</p>
                                        <p className="warehouse-table__value warehouse-table__value--address">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
                                    </div>
                                    <div className="warehouse-table__right">
                                        <p className="warehouse-table__label">CONTACT NAME</p>
                                        <p className="warehouse-table__value">{warehouse.contact.name}</p>
                                        <p className="warehouse-table__label">CONTACT INFORMATION</p>
                                        <div className="warehouse-table__value warehouse-table__value--contact-info">
                                            <p>{warehouse.contact.phone}</p>
                                            <p>{warehouse.contact.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="warehouse-table__actions">
                                    <input className="warehouse-table__button" type="image" src={deleteIcon} alt="delete" onClick={() => handleDelete(warehouse)} />
                                    <input className="warehouse-table__button warehouse-table__button--edit"type="image" src={editIcon} alt="edit" onClick={() => handleEdit(warehouse.id)} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
            <DeleteWarehouse
                openDelete={openDelete}
                setOpenDelete={setOpenDelete}
                warehouseToDelete={warehouseToDelete} />
        </div>
    );
}

export default WarehouseList; 
