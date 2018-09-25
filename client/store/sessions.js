import axios from 'axios';

// Intial State

const initialState = ''; // Normally an object; using string here to represent returned SQL query statment.

// Action Types

const GET_SESSIONS = 'GET_SESSIONS';

// Reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SESSIONS:
      return action.sessions;
    default:
      return state;
  }
}

// Actions

export function getSessions() {
  return dispatch => {
    axios
      .get('/sessions')
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
