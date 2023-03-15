import React, { useContext } from "react";
import iconRemove from '../../../images/icon-remove.svg';
import classes from './FilterItem.module.css';
import ListJobContext from "../../../store/JobsContext";

const FilterItem = (props) => {

  const jobsCtx = useContext(ListJobContext);

  const deleteItemHandler = () => {
    jobsCtx.deleteFilter(props.item)
  }


  return (
    <div className={classes['filter-item']}>

      <div className={classes['filter-item__name']}>
        {props.item}
      </div>
    
      <div className={classes['filter-item__action']} onClick={deleteItemHandler}>
        <img src={iconRemove} alt='remove icon'></img>
      </div>
    
    </div>
  )
}

export default FilterItem;