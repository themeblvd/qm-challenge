import axios from 'axios';

// Intial State

const initialState = {
  params: [
    {
      name: '',
      reducer: '',
      value: ''
    }
  ],
  results: '' // Would be an object of sessions, but using string to represent returned SQL query statement.
};

// Action Types

const ADD_PARAM = 'ADD_PARAM';
const UPDATE_PARAM = 'UPDATE_PARAM';
const REMOVE_PARAM = 'REMOVE_PARAM';
const GET_SESSIONS = 'GET_SESSIONS';
const RESET = 'RESET';

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // Add a search parameter set.
    case ADD_PARAM:
      return {
        ...state,
        params: [...state.params, { name: '', reducer: '', value: '' }]
      };
      break;

    // Update a search parameter set.
    case UPDATE_PARAM:
      const { index, field, value } = action;
      const newParams = [...state.params]; // Don't mutuate original state.

      newParams[index][field] = value;

      return {
        ...state,
        params: newParams
      };
      break;

    // Remove a search parameter set.
    case REMOVE_PARAM:
      return {
        ...state,
        params: state.params.filter((param, index) => index !== action.index)
      };
      break;

    // Reset everything back to original state.
    case RESET:
      return {
        params: [{ name: '', reducer: '', value: '' }],
        results: ''
      };
      break;

    // Get sessions (i.e. would be search results from db)
    case GET_SESSIONS:
      return { ...state, results: action.sessions };
      break;

    default:
      return state;
  }
}

// Actions

export function addParam() {
  return {
    type: ADD_PARAM
  };
}

export function updateParam(index, field, value) {
  return {
    type: UPDATE_PARAM,
    index,
    field,
    value
  };
}

export function removeParam(index) {
  return {
    type: REMOVE_PARAM,
    index
  };
}

export function reset() {
  return {
    type: RESET
  };
}

export function getSessions(searchParams) {
  return dispatch => {
    axios
      .get('/sessions', { params: { searchParams } })
      .then(response => {
        dispatch({
          type: GET_SESSIONS,
          sessions: response.data // Will be SQL query string statement.
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
