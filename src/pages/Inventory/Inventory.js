import './Inventory.scss';
//icons
import Search from '../../assets/Icons/search-24px.svg';
import Sort from '../../assets/Icons/sort-24px.svg'



function Inventory () {

  
    return (
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
      
        </section>
      </div>
    );
  }
  
  export default Inventory;