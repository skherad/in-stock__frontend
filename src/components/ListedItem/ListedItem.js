import './ListedItem.scss'
import lii from "../../assets/Icons/chevron_right-24px.svg"
import Trash from '../../assets/Icons/delete_outline-24px.svg'
import Edit from '../../assets/Icons/edit-24px.svg'
import {Link} from "react-router-dom"


function ListedItem ({key, name, category, status, quantity, warehouseName}) {
    // console.log(catagory)
    return(
        <div className="item-box">
            <div className='item-box__lg'>
                <div className='item-box__in'>
                    <p className='item-box__title'>INVENTORY ITEM</p>
                    <Link className='item-box__link' to='/item/:id'>
                    <div className='item-box__li'>
                        <p className='item-box__i-name'>{name}</p>
                        <img className='item-bo__ri' src={lii}></img>
                    </div>
                    </Link>
                </div>
                <div className='item-box__in'>
                    <p className='item-box__title'>CATAGORY</p>
                    <p className='item-box__c-cat'>{category}</p>   
                </div>
            </div>
            <div className='item-box__rg'>
                <div className='item-box__in'>
                    <p className='item-box__title'>STATUS</p>
                    <p className={`item-box__${status ? 'In-Stock' : 'Out-of-Stock'}`}>{status}</p>
                </div>
                <div className='item-box__in'>
                    <p className='item-box__title'>QTY</p>
                    <p className='item-box__input'>{quantity}</p>
                </div>
                <div className='item-box__in'>
                    <p className='item-box__title'>WAREHOUSE</p>
                    <p className='item-box__input'>{warehouseName}</p>
                </div>
            </div>
            <div className='item-box__icg'>
                <Link className='item-box__link' to='/delete'>
                <img className='item-box__tcon' src={Trash}></img>
                </Link>
                <Link className='item-box__link' to='/edit'>
                <img className='item-box__econ' src={Edit}></img>
                </Link>       
            </div>    
        </div>
    )
}
export default ListedItem