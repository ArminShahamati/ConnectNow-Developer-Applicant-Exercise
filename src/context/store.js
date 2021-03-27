import React, { createContext, useContext, useReducer } from 'react'

const StoreContext = createContext()
const initialState = { mainData: [], showData: [] }

const reducer = (state, action) => {
  switch (action.type) {
    case 'loadData':
      return {
        mainData: action.data,
        showData: action.data,
        message: action.message
      }
    case 'filterByName':
      const fullData = state.showData
      var filteredData = fullData.filter(d => d.name.includes(action.data))
      if (action.data == '') {
        filteredData = state.mainData
      }
      return {
        mainData: state.mainData,
        showData: filteredData,
        message: action.message
      }
    case 'filterByRate':
      const rateFullData = state.showData
      var rateFilteredData = rateFullData.filter(d => d.rating > action.data)
      if (action.data == '') {
        rateFilteredData = state.mainData
      }
      return {
        mainData: state.mainData,
        showData: rateFilteredData,
        message: action.message
      }
    case 'sortData':    
      const sortFullData = state.showData;
      function sortByProperty (property) {
        return function (a, b) {
          if (a[property] > b[property]) return 1
          else if (a[property] < b[property]) return -1

          return 0
        }
      }
      const sortFilteredData = sortFullData.sort(sortByProperty(action.data))

      return {
        mainData: state.mainData,
        showData: sortFilteredData,
        message: action.message
      }
    case 'reset':
      console.log('reseeeeeeeeet ')
      return {
        mainData: state.mainData,
        showData: state.mainData,
        message: action.message
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
