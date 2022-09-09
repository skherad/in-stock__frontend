import "./warehouseDetails.scss";

import edit from "../../assets/Icons/edit-24px.svg";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";

import rightArrow from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import inventories from "../../assets/data/inventories.json";
import warehouses from "../../assets/data/warehouses.json";
import { useParams, Link } from "react-router-dom";
import sortImg from "../../assets/Icons/sort-24px.svg";
import EditWarehouse from "../EditWarehouse/EditWarehouse";

function WarehouseDetails() {
  const { warehouseId, inventoryId } = useParams();
  return (
    <>
      {/* <div className="header">
        <div className="header__Logo-cont">
          <img className="header__InStock-logo" src={Logo} alt="Instock Logo" />
        </div>
        <div className="header__buttons">
          <button className="header__warehouse-btn">Warehouses</button>
          <button className="header__inventory-btn">Inventory</button>
        </div>
      </div> */}

      {/* Warehouse Name */}
      <div className="outer-background">
        <div className="box-shadow">
          <div className="warehouse-details">
            <div className="warehouse-details__header">
              <div className="warehouse-details__back-btn">
                <img src={arrowBack} alt="back arrow" />
                <div className="warehouse-details__loc">
                  <h1 className="warehouse-details__loc-header">
                    {warehouses[1].name}
                  </h1>
                </div>
              </div>

              <div className="warehouse-details__edit-btn-cont">
                <Link
                  to={`/editWarehouse/${warehouseId}`}
                  element={EditWarehouse}
                >
                  <div className="warehouse-details__edit-btn">
                    <img
                      className="warehouse-details__edit-btn-img"
                      src={edit}
                      alt="edit warehouse"
                    />
                    <div className="warehouse-details__edit-btn-tab">Edit</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="hr-divider"></div>

          {/* warehouse address info */}
          <div className="warehouse-details__address-cont">
            <div className="warehouse-details__address">
              <h4 className="warehouse-details__address-title">
                WAREHOUSE ADDRESS:
              </h4>
              <div className="warehouse-details__address-loc">
                {warehouses[1].address}, <br /> {warehouses[1].city},{" "}
                {warehouses[1].country}
              </div>
            </div>
            <div className="warehouse-details__contact-cont">
              <div className="warehouse-details__name-cont">
                <h4 className="warehouse-details__contact-title">
                  CONTACT NAME:
                </h4>
                <div className="warehouse-details__contact-name">
                  {warehouses[1].contact.name} <br />
                  {warehouses[1].contact.position}
                </div>
              </div>
              <div className="warehouse-details__info-cont">
                <div className="warehouse-details__contact-info-title">
                  <h4>CONTACT INFORMATION:</h4>
                </div>
                <div className="warehouse-details__contact-info">
                  {warehouses[1].contact.phone} <br />{" "}
                  {warehouses[1].contact.email}
                </div>
              </div>
            </div>
          </div>
          <div className="hr-divider__top"></div>

          {/* Sub menu for tablet & desktop mode */}
          <div className="warehouse-details__row-titles">
            <div className="warehouse-details__invent-title-tab">
              INVENTORY ITEM
              <img
                className="warehouse-details__sort-invent-img"
                src={sortImg}
                alt="Sort items"
              />
            </div>

            <div className="warehouse-details__invent-title-tab">
              CATEGORY{" "}
              <img
                className="warehouse-details__sort-categ-img"
                src={sortImg}
                alt="Sort items"
              />
            </div>
            <div className="warehouse-details__invent-title-tab">
              STATUS{" "}
              <img
                className="warehouse-details__sort-status-img"
                src={sortImg}
                alt="Sort items"
              />
            </div>
            <div className="warehouse-details__invent-title-tab">
              QUANTITY{" "}
              <img
                className="warehouse-details__sort-qty-img"
                src={sortImg}
                alt="Sort items"
              />
            </div>
            <div className="warehouse-details__invent-title-tab">
              ACTIONS{" "}
              <img
                className="warehouse-details__sort-actions-img"
                src={sortImg}
                alt="Sort items"
              />
            </div>
          </div>

          {/* Each Item to iterate through */}

          {inventories.map((item) => {
            return (
              <>
                <div className="warehouse-details__item-cont">
                  {/* first flex child */}
                  <div className="warehouse-details__item-invent-cont">
                    <div className="warehouse-details__invent-title">
                      <h4>INVENTORY ITEM</h4>
                    </div>
                    <div className="warehouse-details__invent-type">
                      {item.itemName}
                      <img
                        className="warehouse-details__arr-cont"
                        src={rightArrow}
                        alt="product"
                      />
                    </div>
                    <div className="warehouse-details__category">
                      <h4 className="warehouse-details__category-title">
                        CATEGORY
                      </h4>

                      <div className="warehouse-details__prod-categ">
                        {item.category}
                      </div>
                    </div>
                  </div>

                  {/* Second flex child */}
                  <div className="warehouse-details__item-right-cont">
                    <div className="warehouse-details__status">
                      <h4 className="warehouse-details__status-title">
                        STATUS
                      </h4>
                      <span
                        className={
                          item.quantity !== 0
                            ? "warehouse-details__instock"
                            : "warehouse-details__instock--notinstock"
                        }
                      >
                        {item.quantity !== 0 ? "IN STOCK" : "OUT OF STOCK"}
                      </span>
                    </div>
                    <div className="warehouse-details__QTY">
                      <h4 className="warehouse-details__QTY-title">QTY</h4>
                      <div className="warehouse-details__QTY-num">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="warehouse-details__icons-tab">
                      <div className="warehouse-details__delete-icon-cont">
                        <img src={deleteIcon} alt="delete item" />
                      </div>
                      <div className="warehouse-details__edit-icon-cont">
                        <Link
                          to={`/editWarehouse/${warehouseId}`}
                          element={EditWarehouse}
                        >
                          <img
                            className="warehouse-details__edit-icon"
                            src={edit}
                            alt="edit item"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* third flex child */}
                </div>
                <div className="warehouse-details__icons">
                  <div className="warehouse-details__delete-icon-cont">
                    <img src={deleteIcon} alt="delete item" />
                  </div>
                  <div className="warehouse-details__edit-icon-cont">
                    <Link to={`/EditWarehouse/${warehouseId}`}>
                      <img
                        className="warehouse-details__edit-icon"
                        src={edit}
                        alt="edit item"
                      />
                    </Link>
                  </div>
                </div>
                <div className="hr-divider"></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default WarehouseDetails;
