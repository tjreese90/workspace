import mealImg from "../../assets/meals.jpg";
import React from "react";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = props => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart}/>
      </header>

      <div className={classes["main-image"]}>
        <img src={mealImg} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
