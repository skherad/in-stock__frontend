import "./warehouseDetails.scss";
import Logo from "../assets/Logo/InStock-Logo_1x.png";
import edit from "../assets/Icons/edit-24px.svg";
import arrowBack from "../assets/Icons/arrow_back-24px.svg";

function WarehouseDetails() {
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
      <div className="warehouse-details">
        <div className="warehouse-details__header">
          <div className="warehouse-details__back-btn">
            <img src={arrowBack} alt="back arrow" />
            <div className="warehouse-details__loc">
              <h1 className="warehouse-details__loc-header">Washington</h1>
            </div>
          </div>

          <div className="warehouse-details__edit-btn-cont">
            <div className="warehouse-details__edit-btn">
              <img
                className="warehouse-details__edit-btn-img"
                src={edit}
                alt="edit warehouse"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hr__divider"></div>

      {/* warehouse address info */}
      <div className="warehouse-details__address-cont">
        <div className="warehouse-details__address">
          <h4 className="warehouse-details__address-title">
            WAREHOUSE ADDRESS:
          </h4>
          <div className="warehouse-details__address-loc">
            33 Pearl Street SW, Washington, USA
          </div>
        </div>
        <div className="warehouse-details__contact-cont">
          <div className="warehouse-details__name-cont">
            <h4 className="warehouse-details__contact-title">CONTACT NAME:</h4>
            <div className="warehouse-details__contact-name">
              Graeme Lyon <br />
              Warehouse Manager
            </div>
          </div>
          <div className="warehouse-details__info-cont">
            <div className="warehouse-details__contact-info-title">
              <h4>CONTACT INFORMATION:</h4>
            </div>
            <div className="warehouse-details__contact-info">
              +1 (647) 504-0911 <br /> glyon@instock.com
            </div>
          </div>
        </div>
      </div>
      <div className="hr__divider"></div>
    </>
  );
}

export default WarehouseDetails;
