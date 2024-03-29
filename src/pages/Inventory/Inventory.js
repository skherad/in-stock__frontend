
import "./Inventory.scss";
//icons
import Search from "../../assets/Icons/search-24px.svg";
import Sort from "../../assets/Icons/sort-24px.svg";
import Invin from "../../assets/data/inventories.json";
import ListedItem from "../../components/ListedItem/ListedItem";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

function Inventory() {
  const [currWarehouse, setCurrWarehouse] = useState();

  useEffect(()=>{
    axios.get(`${API_URL}/inventory`)
    .then(res=>setCurrWarehouse(getData(res.data)))
  },[])
  function getData(array) {
    const find = array.filter(
      (x) => x.warehouseID === "2922c286-16cd-4d43-ab98-c79f698aeab0"
      // this should be replaced with whatever is searched
    );
    return find;
  }

  return (
    //This is the main container
    <div className="container">
      {/* this is the container that will hold all content that gets displayed */}
      <div className="invientory">
        <div className="invientory__head">
          <h1 className="invientory__title">Inventory</h1>
          <div className="invientory__ui-head">
            <div className="invientory__search">
              <input
                className="invientory__input"
                type="text"
                size="25"
                placeholder="Search..."
              ></input>
              {/* <img
                className="invientory__s-icon"
                src={Search}
                alt="magnifying glass"
              ></img> */}
            </div>
            <div className="invientory__add-btn">
              <Link to="/inventory/addNewInventory">
                <button className="invientory__btn">+ Add New Item</button>
              </Link>
            </div>
          </div>
        </div>
        <section className="invientory__header-catagory">
          <div className="invientory__header-cat">
            <h3 className="invientory__cat-i">INVENTORY ITEM</h3>
            <img className="invientory__cat-pic" src={Sort}></img>
          </div>
          <div className="invientory__header-cat">
            <h3 className="invientory__cat-i">CATEGORY</h3>
            <img className="invientory__cat-pic" src={Sort}></img>
          </div>
          <div className="invientory__header-cat">
            <h3 className="invientory__cat-i">STATUS</h3>
            <img className="invientory__cat-pic" src={Sort}></img>
          </div>
          <div className="invientory__header-cat">
            <h3 className="invientory__cat-i">QTY</h3>
            <img className="invientory__cat-pic" src={Sort}></img>
          </div>
          <div className="invientory__header-cat">
            <h3 className="invientory__cat-i">WAREHOUSE</h3>
            <img className="invientory__cat-pic" src={Sort}></img>
          </div>
          <div className="invientory__header-cat">
            <h3 className="invientory__cat-i">ACTIONS</h3>
          </div>
        </section>
        <section className="invientory__list">
          {currWarehouse?.map((x) => {
            return (
              <ListedItem
                key={x?.id}
                name={x?.itemName}
                category={x?.category}
                status={x?.status}
                quantity={x?.quantity}
                warehouseName={x?.warehouseName}
                inventoryId = {x?.id}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Inventory;
