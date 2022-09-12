import './ListedItem.scss'
import lii from "../../assets/Icons/chevron_right-24px.svg"
import Trash from '../../assets/Icons/delete_outline-24px.svg'
import Edit from '../../assets/Icons/edit-24px.svg'
import deleteModal from '../InventoryModal/InventoryModal'
import {Link, useNavigate } from 'react-router-dom';
import {useState } from 'react';


function ListedItem ({key, name, category, status, quantity, warehouseName}) {

    const[isOpen, setIsOpen] =useState (false);

    const navigate = useNavigate();

    //Handlers
    const handleDelete = () => {
        console.log("deleted")
    }
    const handleEdit = (key) => {
        navigate(`/editInventory/${key}`);
    }

    return(
        <div className="item-box">
            <div className='item-box__lg'>
                <div className='item-box__in'>
                    <p className='item-box__title'>INVENTORY ITEM</p>
                    <Link className='item-box__link' to='/item/:id'>
                    <div className='item-box__li'>
                        <p className='item-box__i-name'>{name}</p>
                        <img className='item-box__ri' src={lii}></img>
                    </div>
                    </Link>
                </div>
                <div className='item-box__in'>
                    <p className='item-box__title'>CATAGORY</p>
                    <p className='item-box__c-cat'>{category}</p>   
                </div>
            </div>
            <div className='item-box__rg'>
                <div className='item-box__in'>
                    <p className='item-box__title'>STATUS</p>
                    <p className={`item-box__${status ? 'In-Stock' : 'Out-of-Stock'}`}>{status}</p>
                </div>
                <div className='item-box__in'>
                    <p className='item-box__title'>QTY</p>
                    <p className='item-box__input'>{quantity}</p>
                </div>
                <div className='item-box__in'>
                    <p className='item-box__title'>WAREHOUSE</p>
                    <p className='item-box__input'>{warehouseName}</p>
                </div>
            </div>
            <div className='item-box__icg'>
                <input className="item-box__dcon" type="image" src={Trash} alt="delete" onClick={() => setIsOpen(true)} />
                <deleteModal openModal={isOpen} closeModal={()=>setIsOpen(false)}> </deleteModal>
                <input className="item-box__econ" type="image" src={Edit} alt="edit" onClick={() => handleEdit(key)} />  
            </div>    
        </div>
    )
}
export default ListedItem