import './ListedItem.scss'
import lii from "../../assets/Icons/chevron_right-24px.svg"
import Trash from '../../assets/Icons/delete_outline-24px.svg'
import Edit from '../../assets/Icons/edit-24px.svg'


function ListedItem ({key, name, category, status, quantity, warehouseName}) {
    // console.log(catagory)
    return(
        <div className="item-box">
            <div className='item-box__lg'>
                <div className='item-box__in'>
                    <p className='item-box__title'>INVENTORY ITEM</p>
                    <div className='item-box__li'>
                        <p className='item-box__data'>{name}</p>
                        <img className='item-bo__ri' src={lii}></img>
                    </div>
                </div>
                <div className='item-box__in'>
                    <p className='item-box__title'>CATAGORY</p>
                    <p>{category}</p>
                </div>
            </div>
            <div className='rg'>
                <div className='item-box__in'>
                    <p className='item-box__title'>STATUS</p>
                    <p className={`item-box__${status ? 'In-Stock' : 'Out-of-Stock'}`}>{status}</p>
                </div>
                <div className='item-box__in'>
                    <p className='item-box__title'>QTY</p>
                    <p>{quantity}</p>
                </div>
                <div className='item-box__in'>
                    <p className='item-box__title'>WAREHOUSE</p>
                    <p>{warehouseName}</p>
                </div>
            </div>
            <div className='item-box__icg'>
            <img className='item-box__icon' src={Trash}></img>
            <img className='item-box__icon' src={Edit}></img>    
            </div>    
        </div>
    )
}
export default ListedItem