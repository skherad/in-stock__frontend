import rightArrow from "../../assets/Icons/chevron_right-24px.svg";

import { useParams, Link } from "react-router-dom";
import EditWarehouse from "../EditWarehouse/EditWarehouse";
import edit from "../../assets/Icons/edit-24px.svg";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import "./InventoryItemDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";
let warehouseArray;

function InventoryItemDetails() {
  // const [warehouseInvent, setWarehouseInvent] = useState([]);
  const {inventoryId } = useParams();
  const [selectedInventory, setSelectedInventory] = useState();
  useEffect(() => {
    axios.get(`${API_URL}/inventory/${inventoryId}`)
    .then(res => setSelectedInventory(res.data))
    .catch(err=>console.log(err))
  },[])

  return (
    <>
      {/* Warehouse Name */}
      <div className="outer-background">
        <div className="box-shadow">
          <div className="inventory-details">
            <div className="inventory-details__header">
              <div className="inventory-details__back-btn">
                <Link to={`/warehouse/${selectedInventory?.warehouseID}`}>
                  <img src={arrowBack} alt="back arrow" />
                </Link>
                <div className="inventory-details__loc">
                  <h1 className="inventory-details__loc-header">
                    {selectedInventory?.itemName}
                  </h1>
                </div>
              </div>

              <div className="inventory-details__edit-btn-cont">
                <Link
                  to={`/inventory/editInventory/${inventoryId}`}
                >
                  <div className="inventory-details__edit-btn">
                    <img
                      className="inventory-details__edit-btn-img"
                      src={edit}
                      alt="edit warehouse"
                    />
                    <div className="inventory-details__edit-btn-tab">Edit</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="hr-divider"></div>

          {/* Item info */}
          <div className="inventory-details__desc-cont">
            <div className="inventory-details__top-flex">
              <div className="inventory-details__desc">
                <h4 className="inventory-details__desc-title">
                  ITEM DESCRIPTION:
                </h4>
                <div className="inventory-details__desc-desc">
                  {selectedInventory?.description}
                </div>
              </div>
              <div className="inventory-details__category-cont">
                <h4 className="inventory-details__category-title">CATEGORY</h4>
                <div className="inventory-details__category-name">
                  {selectedInventory?.category}
                </div>
              </div>
            </div>
            <div className="inventory-details__bottom-flex">
              <div className="inventory-details__stat-qty">
                <div className="inventory-details__stat">
                  <h4 className="inventory-details__status">STATUS</h4>
                  <span
                    className={
                      selectedInventory?.quantity !== 0
                        ? "inventory-details__instock"
                        : "inventory-details__instock--notinstock"
                    }
                  >
                    {selectedInventory?.quantity !== 0
                      ? "IN STOCK"
                      : "OUT OF STOCK"}
                  </span>
                </div>
                <div className="inventory-details__qty">
                  <h4>QUANTITY:</h4>
                  <div className="inventory-details__QTY-num">
                    {selectedInventory?.quantity}
                  </div>
                </div>
              </div>
              <div className="inventory-details__warehouse">
                <h4 className="inventory-details__warehouse-title">
                  WAREHOUSE:
                </h4>
                <div className="inventory-details__warehouse-loc">
                  {selectedInventory?.warehouseName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InventoryItemDetails;
