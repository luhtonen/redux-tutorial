import {expect} from 'chai';
import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from '../app/actions';
import * as reducers from '../app/reducers';

describe('reducers', function() {
  it('reducer with undefined action should return previous state', function () {
    const previousState = {
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      todos: []
    };
    const action = {type: 'unknown'};
    const nextState = reducers.todoApp(previousState, action);
    expect(nextState).to.equal(previousState);
  });

  it('handle ADD_TODO', function () {
    const action = {
      type: ADD_TODO,
      text: 'Learn Redux'
    };
    const newState = reducers.todoApp(undefined, action);
    expect(newState.todos.length).to.equal(1);
    expect(newState.todos[0].text).to.equal(action.text);
    expect(newState.todos[0].completed).to.equal(false);
  });

  it('handle SET_VISIBILITY_FILTER', function () {
    const action = {
      type: SET_VISIBILITY_FILTER,
      filter: VisibilityFilters.SHOW_COMPLETED
    };
    const newState = reducers.todoApp(undefined, action);
    expect(newState.visibilityFilter).to.equal(action.filter);
  });
});