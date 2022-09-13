import "./ListedItem.scss";
import lii from "../../assets/Icons/chevron_right-24px.svg";
import Trash from "../../assets/Icons/delete_outline-24px.svg";
import Edit from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
import DeleteModal from "../InventoryModal/InventoryModal"
import { useState } from "react";

function ListedItem({ key, name, category, status, quantity, warehouseName }) {
  // console.log(catagory)
  const[isOpen, setIsOpen] =useState (false);
  const [ itemToDelete, setItemToDelete ] = useState({});

  const handleDelete = (name) => {
    setIsOpen(true);
    setItemToDelete(name)
}
  return (
    <div className="item-box">
      <div className="item-box__lg">
        <div className="item-box__in-left">
          <h4 className="item-box__title">INVENTORY ITEM</h4>

          <div className="item-box__li">
            <div className="item-box__i-name">
              <Link className="item-box__link" to={`/inventory/inventoryDetail/${key}`}>
                {" "}
                {name}
                <img className="item-box__ri" src={lii}></img>
              </Link>
            </div>
          </div>
        </div>
        <div className="item-box__in-left">
          <h4 className="item-box__title">CATEGORY</h4>
          <p className="item-box__c-cat">{category}</p>
        </div>
      </div>
      <div className="item-box__rg">
        <div className="item-box__in-right">
          <h4 className="item-box__title">STATUS</h4>
          <span
            className={`item-box__${
              quantity !== 0 ? "In-Stock" : "Out-of-Stock"
            }`}
          >
            {quantity !== 0 ? "IN STOCK" : " OUT OF STOCK"}
          </span>
        </div>
        <div className="item-box__in-right">
          <h4 className="item-box__title">QTY</h4>
          <p className="item-box__input-qty">{quantity}</p>
        </div>
        <div className="item-box__in-right">
          <h4 className="item-box__title">WAREHOUSE</h4>
          <p className="item-box__input">{warehouseName}</p>
        </div>
      </div>
      <div className="item-box__icg">
        <button className="item-box__link" onClick={handleDelete}>
          <img className="item-box__tcon" src={Trash}></img>
        </button>

        <Link className="item-box__link" to={`/editInventory/${key}`}>
          <img className="item-box__econ" src={Edit}></img>
        </Link>
      </div>
      <DeleteModal 
                 openModal={isOpen} 
                 closeModal={()=>setIsOpen(false)}
                 itemToDelete={itemToDelete} /> 
    </div>
  );
}
export default ListedItem;
