import jobsContext from './JobsContext';
import jobList from '../Assets/data.json';
import { useReducer, useState} from 'react';



const defaultState = jobList;

const filterReducer = (state, action) => {

  let filteredArray;
  let updatedArray;

  if (action.type === 'FILTER') {

    filteredArray = state.filter(item => item.languages.includes(action.val));



    if (filteredArray.length === 0) {
      filteredArray = defaultState.filter(item => !item.languages.indexOf(action.val));
    }

    return filteredArray;
  }

  if (action.type === 'DELETE') {

    const nonFilterItems = defaultState.filter(item => !item.languages.includes(action.val));
    filteredArray = state.filter(item => item.languages.includes(action.val));


    updatedArray = filteredArray.concat(nonFilterItems);


    return updatedArray;

  }

  if (action.type === 'CLEAR') {
    return defaultState
  }


  return defaultState;
} 


const ContextProvider = props => {

  const [arrayState, dispatchArray] = useReducer(filterReducer, defaultState);

  const [filterArray, setFilterArray] = useState([]);


  const filteredFunction = (condition) => {
    dispatchArray({type: "FILTER", val: condition})



    const filterArrayIndex = filterArray.indexOf(condition);

    if (filterArrayIndex === -1) {
      setFilterArray(prevState => {
        return [condition, ...prevState]
      })
    }

  }


  const clearFilterArrayHandler = (emptyArray) => {
    setFilterArray(emptyArray);
    dispatchArray({type: "CLEAR"})
  }

  const deleteFilterHandler = (item) => {
    dispatchArray({type: "DELETE", val: item})

    const newArrayOffilters = filterArray.filter(filter => filter !== item);

    setFilterArray(newArrayOffilters)
  }


  const listJobContext = {
    filterItems: arrayState,
    filterArray: filterArray,
    clearFilterArray: clearFilterArrayHandler,
    filterFunction: filteredFunction,
    deleteFilter: deleteFilterHandler,
  };


  return (
    <jobsContext.Provider value={listJobContext}>{props.children}</jobsContext.Provider>
  )
}

export default ContextProvider;