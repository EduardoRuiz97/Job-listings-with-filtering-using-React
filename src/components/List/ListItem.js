import React, { useContext, useState } from "react";
import classes from './ListItem.module.css';
import ListJobContext from "../../store/JobsContext";

const ListItem = (props) => {

  const [isItemOn, setIsItemOn] = useState(false)

  const jobsContext = useContext(ListJobContext);



  const clickHandler = (event) => {
    const filterItem = event.target.innerText;

    setIsItemOn(true)

    jobsContext.filterFunction(filterItem.toString());
  }



  return (
    <li className={`${classes.item} ${isItemOn? classes.active : ''}`}>

      <div className={classes['item__data']}>
        <img src={props.image} alt='company logo'></img>

        <div className={classes['item__data__info']}>

          <div className={classes['item__data__info__div']}>
            <p className={classes['item__data__info__company']}>{props.company}</p>
            {props.new? <span className={classes['item__data__info__span']} id={classes.new}>New!</span>: ''}
            {props.featured? <span className={classes['item__data__info__span']} id={classes.featured}>featured</span> : ''}
          </div>

          <p className={classes['item__data__info__position']}>{props.position}</p>

          <div className={classes['item__data__info__time']}>
            <span>{props.postedAt} </span>
             <span>{props.contract}</span>  
             <span>{props.location}</span>
          </div>

        </div>

      </div>

      <div className={classes['item__data__actions']}>
        {props.languages.map((item, index) => 
        <button
        key={index}
        onClick={clickHandler}
        >
          {item}
        </button>)}

      </div>

    </li>
  )
}

export default ListItem;