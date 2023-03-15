import React, { useContext } from "react";
import ListItem from "./ListItem";

import ListJobContext from "../../store/JobsContext";

import imgArray from "../../Assets/Image";


import classes from './List.module.css';



const List = () => {

  const jobsCtx = useContext(ListJobContext);



  return (
    <ul className={classes['list-data']}>
      {jobsCtx.filterItems.map((item, index) =>       
      <ListItem
      key={item.id} 
      image={imgArray[index].img}
      company={item.company}
      new={item.new}
      featured={item.featured}
      position={item.position}
      postedAt={item.postedAt}
      contract={item.contract}
      location={item.contract}
      languages={item.languages}
      tools={item.tools}
      ></ListItem>)}
    </ul>
  )
}

export default List;