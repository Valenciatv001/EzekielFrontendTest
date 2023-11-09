'use client'

import { useReducer } from 'react-reducer';


const initialState = {
  users: [],
  pageSize: 5,
  currentPage: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
      };
    case 'SET_PAGE_SIZE':
      return {
        ...state,
        pageSize: action.payload,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer