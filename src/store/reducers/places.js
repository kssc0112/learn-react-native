import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';
const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: '' + Date.now() + Math.random(),
          name: action.placeName,
          image: {
            uri: 'https://i.ytimg.com/vi/fB8MYCGFqC0/maxresdefault.jpg'
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return state.selectedPlace.key !== place.key;
          }),
          selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find((place) => {
          return place.key === action.placeKey;
        })
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;