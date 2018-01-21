// @flow

export const UPDATE_FILTER = 'WEBCAMS_UPDATE_FILTER'
export const UPDATE_LIST = 'WEBCAMS_UPDATE_LIST'

// export function updateFilter(field, value) {
//   return (dispatch, getState) => {
//     dispatch({
//       type: UPDATE_FILTER,
//       field,
//       value,
//     })
//     dispatch(updateList())
//   }
// }

export function updateList(webcams) {
  return {
    type: UPDATE_LIST,
    data: {
      webcams
    }
  };
}
