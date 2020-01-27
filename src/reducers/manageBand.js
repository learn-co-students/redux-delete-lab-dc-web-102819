import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  // console.log(action)
  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {id: uuid(), name: action.name}
      return { ...state, bands: [...state.bands, newBand] }

    case 'DELETE_BAND':
      return {bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
