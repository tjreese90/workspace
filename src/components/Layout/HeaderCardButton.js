import {useEffect, useState} from 'react';
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import  {useContext} from 'react';
import CartContext from '../../store/cart-context';


const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnHighLight, setBtnHightLight] = useState(false);

  const {items} = cartCtx;

  useEffect(() => {
    if (items.length === 0){
      return;
    }
    setBtnHightLight(true);
    
    const timer = setTimeout(() => {
      setBtnHightLight(false);
    }, 100);

    //Clean up function for useEffect
    return () => {
      clearTimeout(timer);
    }

  }, [items])



  const numberOfCardItems = items.reduce((currNumber, item) => {
    if (item && item.amount) {
      return currNumber + item.amount;
    } else {
      return currNumber;
    }
  }, 0);
  
const btnClasses = `${classes.button} ${btnHighLight ? classes.bump : ''}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCardItems}</span>
    </button>
  );
};
export default HeaderCardButton;
