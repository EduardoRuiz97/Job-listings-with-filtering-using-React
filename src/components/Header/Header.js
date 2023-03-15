import React, {useContext} from "react";

import backgroundMobile from  '../../images/bg-header-mobile.svg';

import classes from '../Header/Header.module.css';
import Filter from "../UI/Filter/Filter.js";

import ListJobContext from "../../store/JobsContext";



const Header = () => {

  const jobsCtx = useContext(ListJobContext);

  return (
    <header className={classes.header}>
      <img src={backgroundMobile} alt='background'></img>
      {jobsCtx.filterArray.length ? <Filter></Filter> : ''}
    </header>
  )
}

export default Header;