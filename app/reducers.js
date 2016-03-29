import {ADD_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

export const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      };
    default:
      return state;
  }
};