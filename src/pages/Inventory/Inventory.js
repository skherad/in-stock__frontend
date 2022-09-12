import './Inventory.scss';
//icons
import Search from '../../assets/Icons/search-24px.svg';
import Sort from '../../assets/Icons/sort-24px.svg'
import Invin from '../../assets/data/inventories.json'
import ListedItem from '../../components/ListedItem/ListedItem';

import { useState, useEffect } from "react"
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";


function Inventory () {


  const [currWarehouse, setCurrWarehouse] = useState([])
  console.log(currWarehouse)

  useEffect(() => {
    axios.get(API_URL+"/inventory")
        .then((response) => getData(response.data))
        .catch((error) => console.log(error));
}, []);
  function getData(array){
    const find = array.filter(x=> x.warehouseID==="2922c286-16cd-4d43-ab98-c79f698aeab0")
    return setCurrWarehouse(find)
  }
    // console.log(getData(Invin))
  // console.lo g(currWarehouse)

useEffect(() => {
  
})


    return (
      //This is the main container
      <div className='container'>
        {/* this is the container that will hold all content that gets displayed */}
        <div className='invientory'>
          <div className='invientory__head'>
            <h1 className='invientory__title'>Inventory</h1>
            <div className='invientory__ui-head'>
              <div className='invientory__search'>
                <input className='invientory__input' type="text" size='8' placeholder='Search...'></input>
                <img className='invientory__s-icon' src={Search} alt="magnifying glass"></img>
              </div>
              <div className='invientory__add-btn'>
                <button className='invientory__btn'>+ Add New Item</button>
              </div>
            </div>
          </div>
          {/* Inventory Item Header */}
          <section className='invientory__header-catagory'>
            <div className='invientory__header-cat'>
              <h3 className='invientory__cat-i'>INVENTORY ITEM</h3>
              <img className='invientory__cat-pic' src={Sort}></img>
            </div>
            {/* CATAGORY Header */}
            <div className='invientory__header-cat'>
              <h3 className='invientory__cat-i'>CATAGORY</h3>
              <img className='invientory__cat-pic' src={Sort}></img>
            </div>
            <div className='invientory__header-cat'>
              <h3 className='invientory__cat-i'>STATUS</h3>
              <img className='invientory__cat-pic' src={Sort}></img>
            </div>
            {/* QTY Header */}
            <div className='invientory__header-cat'>
              <h3 className='invientory__cat-i'>QTY</h3>
              <img className='invientory__cat-pic' src={Sort}></img>
            </div>
            {/* WAREHOUSE Header */}
            <div className='invientory__header-cat'>
              <h3 className='invientory__cat-i'>WAREHOUSE</h3>
              <img className='invientory__cat-pic' src={Sort}></img>
            </div>
            {/* ACTION Header */}
            <div className='invientory__header-cat'>
              <h3 className='invientory__cat-i'>ACTION</h3>
            </div>
          </section>
          {/* Map for all dynamically gegneretated items */}
          <section className='invientory__list'>
            {currWarehouse.map((x)=>{
              return(
                <ListedItem
                key = {x.id}
                name = {x.itemName}
                category = {x.category}
                status = {x.status}
                quantity = {x.quantity}
                warehouseName = {x.warehouseName}
                />
              )
              
            })}
          </section>
        </div>
      </div>
    );
  }
  
  export default Inventory;