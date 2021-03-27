import { useStore } from './store'

export const useCounter = () => {
  const { state, dispatch } = useStore()
  return {
    mainData: state.mainData,
    showData: state.showData,
    loadData: data =>
      dispatch({ type: 'loadData', message: 'loadData', data: data }),
    filterByName: data =>
      dispatch({ type: 'filterByName', message: 'filterByName', data: data }),
      filterByRate: data =>
      dispatch({ type: 'filterByRate', message: 'filterByRate', data: data }),
      sortData: data =>
      dispatch({ type: 'sortData', message: 'sortData', data: data }),
    reset: data => dispatch({ type: 'reset', message: 'Reset' })
  }
}
