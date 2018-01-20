// @flow
import { UPDATE_FILTER, UPDATE_LIST } from '../actions/webcams'

const initialState = {
    filter: {},
    list: {}
}

type actionType = {
  +type: string
};

export default function webcams(state?, action: actionType) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    // case UPDATE_FILTER:
    //   return Object.assign({}, state, {
    //     list: Object.assign({}, state.list, {
    //       query: Object.assign({}, state.list.query, {
    //         [action.field]: action.value,
    //       }),
    //     }),
    //   })
    case UPDATE_LIST:
      return Object.assign({}, state, {
        list: Object.assign({}, state.list, {
          items: action.webcams,
          firstLoad: true,
        }),
      })
    default:
      return state
  }
}
