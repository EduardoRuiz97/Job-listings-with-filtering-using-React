import React from "react";




const ListJobContext =  React.createContext({
  filterItems: null,
  filterArray: [],
  clearFilterArray: [],
  filterFunction: ()=> {},
  deleteFilter: () => {},
})

export default ListJobContext;