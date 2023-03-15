import React, { useContext } from "react";
import classes from './Filter.module.css';
import ListJobContext from "../../../store/JobsContext";
import FilterItem from "./FilterItem";



const Filter = () => {

  const jobsCtx = useContext(ListJobContext);

  const clearAllHandler = () => {
    jobsCtx.clearFilterArray([]);
  }




  return (
    <div className={classes['filter-container']}>

      <div className={classes.filters}>
        {jobsCtx.filterArray.map((item, index) => <FilterItem key={index} item={item}></FilterItem>)}
      </div>
      
      <div className={classes.clear} onClick={clearAllHandler}>clear</div>
    </div>
  )
}

export default Filter;