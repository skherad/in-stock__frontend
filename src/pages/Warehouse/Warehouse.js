import './Warehouse.scss';
import WarehouseHeader from '../../components/Header/WarehouseHeader';
import { Link } from 'react-router-dom';


function Warehouse () {

  
    return (
      <>
      <WarehouseHeader />
      {/* TODO add a note here to wrap the edit button in a link component */}
      <ul>
        <Link
          to={`editWarehouse/id1`}
        >
          <li>1</li>
        </Link>
        <Link
          to={`editWarehouse/id2`}
        >
          <li>2</li>
        </Link>
      </ul>
      </>
    );
  }
  
  export default Warehouse;