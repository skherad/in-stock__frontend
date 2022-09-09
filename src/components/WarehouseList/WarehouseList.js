import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './WarehouseList.scss';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

function WarehouseList() {
    const navigate = useNavigate();
    const [ warehouses, setWarehouses ] = useState([]);

    useEffect(() => {
        axios.get(API_URL+"/warehouse")
            .then((response) => setWarehouses(response.data))
            .catch((error) => console.log(error));
    }, []);

    const handleAddNewWarehouse = () => {
        navigate("/addnewwarehouse");
    }

    const handleDelete = (id) => {
        // fill in
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
                        <li className="warehouse-table__field">WAREHOUSE</li>
                        <li className="warehouse-table__field">ADDRESS</li>
                        <li className="warehouse-table__field">CONTACT NAME</li>
                        <li className="warehouse-table__field">CONTACT INFORMATION</li>
                        <li className="warehouse-table__field--action">ACTIONS</li>
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
                                        <p className="warehouse-table__value">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
                                    </div>
                                    <div className="warehouse-table__right">
                                        <p className="warehouse-table__label">CONTACT NAME</p>
                                        <p className="warehouse-table__value">{warehouse.contact.name}</p>
                                        <p className="warehouse-table__label">CONTACT INFORMATION</p>
                                        <p className="warehouse-table__value">{warehouse.contact.phone}</p>
                                        <p className="warehouse-table__value">{warehouse.contact.email}</p>
                                    </div>
                                </div>
                                <div className="warehouse-table__actions">
                                    <input className="warehouse-table__button" type="image" src={deleteIcon} alt="delete" onClick={() => handleDelete(warehouse.id)} />
                                    <input className="warehouse-table__button"type="image" src={editIcon} alt="edit" onClick={() => handleEdit(warehouse.id)} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    );
}

export default WarehouseList; 
