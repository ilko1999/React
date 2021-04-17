import React, { useContext } from 'react';
import './QuantityButton.css';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import IconButton from '@material-ui/core/IconButton';
import { ProductContext } from '../../context/ProductProvider';

function QuantityButton({ item }) {
  const { setProductCount } = useContext(ProductContext);

  return (
    <div className="Button">
      <IconButton
        className="iconButton"
        disabled={item.count >= item.quantity}
        onClick={() => {
          setProductCount(item.id, item.count + 1);
        }}
      >
        {/* <AddRoundedIcon className="button" /> */}
        <span className="button">&#43;</span>
      </IconButton>

      <h4>{item.count}</h4>

      <IconButton
        className="iconButton"
        onClick={() => {
          if (item.count && item.count > 0) {
            setProductCount(item.id, item.count - 1);
          } else {
            setProductCount(item.id, 0);
          }
        }}
      >
        {/* <RemoveRoundedIcon className="button" /> */}
        <span className="button">&#45;</span>
      </IconButton>
    </div>
  );
}

export default QuantityButton;
