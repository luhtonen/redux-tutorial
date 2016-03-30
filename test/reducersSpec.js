import {expect} from 'chai';
import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from '../app/actions';
import todoApp from '../app/reducers';

describe('reducers', function() {
  it('reducer with undefined action should return previous state', function () {
    const state = {
      visibilityFilter: VisibilityFilters.SHOW_COMPLETED,
      todos: []
    };
    const action = {type: 'unknown'};
    const nextState = todoApp(state, action);
    expect(nextState).to.shallowDeepEqual(state);
  });

  it('handle ADD_TODO', function () {
    const action = {
      type: ADD_TODO,
      text: 'Learn Redux'
    };
    const newState = todoApp(undefined, action);
    expect(newState.todos.length).to.equal(1);
    expect(newState.todos[0].text).to.equal(action.text);
    expect(newState.todos[0].completed).to.equal(false);
  });

  it('handle SET_VISIBILITY_FILTER', function () {
    const action = {
      type: SET_VISIBILITY_FILTER,
      filter: VisibilityFilters.SHOW_COMPLETED
    };
    const newState = todoApp(undefined, action);
    expect(newState.visibilityFilter).to.equal(action.filter);
  });

  it('handle COMPLETED_TODO', function () {
    const index = 0;
    const state = {
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      todos: [
        {
          text: 'Learn Redux',
          completed: false
        }
      ]
    };
    const action = {
      type: COMPLETE_TODO,
      index: index
    };
    const newState = todoApp(state, action);
    expect(newState.todos[index].completed).to.equal(true);
  });
});