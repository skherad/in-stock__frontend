// import ArrowBack from '../../assets/images/arrow_back-24px.svg'
import './EditWarehouse.scss'

const EditWarehouse = () => {

    //TODO change all placeholders to be dynamic from onclick
    return (
    <section className="form__container">
        {/* <img src={ArrowBack} alt="arrow back" className=""></img> */}
        <h1 className="form__header">Edit Warehouse</h1>
        <form>
            <section className="form__section">
                <h2 className="form__title">Warehouse Details</h2>
                {/* warehouse name input field */}
                <label 
                    htmlFor="warhouseName"
                    className="form__label"
                >Warehouse Name</label>
                <input 
                    name="warehouseName"
                    className="form__input"
                    placeholder="Washington" 
                ></input>

                {/* warehouse address input field */}
                <label 
                    htmlFor="streetAddress"
                    className="form__label"
                >Street Address</label>
                <input 
                    name="streetAddress"
                    className="form__input"
                    placeholder="33 pearl"
                ></input>

                {/* warehouse city input field */}
                <label 
                    htmlFor="city"
                    className="form__label"
                >City</label>
                <input 
                    name="city"
                    className="form__input"
                    placeholder="washington"
                ></input>

                {/* warehouse country input field */}
                <label 
                    htmlFor="country"
                    className="form__label"
                >Country</label>
                <input 
                    name="country"
                    className="form__input"
                    placeholder="USA"
                ></input>
            </section>
            <section className="form__section">
                <h2 className="form__title">Contact Details</h2>

                {/* contact name input field */}
                <label 
                    htmlFor="contactName"
                    className="form__label"
                >Contact Name</label>
                <input 
                    name="contactName"
                    className="form__input"
                    placeholder="Graeme Lyon"
                ></input>

                {/* contact position input field */}
                <label 
                    htmlFor="contactPosition"
                    className="form__label"
                >Position</label>
                <input 
                    name="contactPosition"
                    className="form__input"
                    placeholder="Warehouse Manager"
                ></input>

                {/* contact phone# input field */}
                <label 
                    htmlFor="contactPhone"
                    className="form__label"
                >Phone Number</label>
                <input 
                    name="contactPhone"
                    className="form__input"
                    placeholder="+1 (647) 504-0911"
                ></input>

                {/* contact email input field */}
                <label 
                    htmlFor="contactEmail"
                    className="form__label"
                >Email</label>
                <input 
                    name="contactEmail"
                    className="form__input"
                    placeholder="glyon@instock.com"
                ></input>
            </section>
            <button className="form__save-button">Save</button>
            <button className="form__cancel-button">Cancel</button>
        </form>
    </section>
  )
}

export default EditWarehouse