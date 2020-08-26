import React, { createContext, useReducer } from 'react';

const initialState = {
  isLoading: false,
  isLoggedIn: null,
  currrentUser: null,
};

//reducer for different states
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, isLoading: true };
    case 'SET_AUTHROIZED':
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        currentUser: action.payload,
      };
    case 'SET_UNAUTHORIZED':
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

// [{}, () => {}]
// Before argument this was parameter
export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  // const [state, setState] = useState({
  //   isLoading: false,
  //   isLoggedIn: null,
  //   currrentUser: null,
  // });

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};
