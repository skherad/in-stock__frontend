import './Inventory.scss';
//icons
import Search from '../../assets/Icons/search-24px.svg';



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
        <section className='invientory__header-cat'>
          <h3 className=''></h3>
        </section>
      </div>
    );
  }
  
  export default Inventory;