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


  const [currWarehouse, setCurrWarehouse] = useState(getData(Invin))
  console.log(currWarehouse)

  // useEffect(()=> {
  //   axios.get(`${API_URL}/warehouse`)
  //   .then((res) =>{
  //     console.log(res.data)
  //     // setCurrWarehouse(res)
  //   })
  // }, [])
  function getData(array){
    const find = array.filter(x=> x.warehouseID==="2922c286-16cd-4d43-ab98-c79f698aeab0")
    return find
  }
    // console.log(getData(Invin))
  // console.lo g(currWarehouse)

useEffect(() => {
  
})


    return (
      <div className='container'>
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
          <section className='invientory__header-catagory'>
            <div className='invientory__header-cat'>
              <h3 className='invientory__cat-i'>INVENTORY ITEM</h3>
              <img className='invientory__cat-pic' src={Sort}></img>
            </div>
            <div className='invientory__header-cat'>
              <h3 className='invientory__cat-i'>CATAGORY</h3>
              <img className='invientory__cat-pic' src={Sort}></img>
            </div>
            <div className='invientory__header-cat'>
              <h3 className='invientory__cat-i'>STATUS</h3>
              <img className='invientory__cat-pic' src={Sort}></img>
            </div>
            <div className='invientory__header-cat'>
              <h3 className='invientory__cat-i'>QTY</h3>
              <img className='invientory__cat-pic' src={Sort}></img>
            </div>
            <div className='invientory__header-cat'>
              <h3 className='invientory__cat-i'>WAREHOUSE</h3>
              <img className='invientory__cat-pic' src={Sort}></img>
            </div>
            <div className='invientory__header-cat'>
              <h3 className='invientory__cat-i'>ACTION</h3>
            </div>
          </section>
          <section className='invientory__list'>
            {currWarehouse.map((x)=>{
              <ListedItem />
            })}
          </section>
        </div>
      </div>
    );
  }
  
  export default Inventory;