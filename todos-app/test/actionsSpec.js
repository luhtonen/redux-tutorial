import {expect} from 'chai';
import * as actions from '../app/actions';

describe('actions creators', function () {
  it('addTodo', function () {
    const text = 'Test';
    const action = actions.addTodo(text);
    expect(action.type).to.equal(actions.ADD_TODO);
    expect(action.text).to.equal(text);
  });

  it('completeTodo', function () {
    const index = 1;
    const action = actions.completeTodo(index);
    expect(action.type).to.equal(actions.TOGGLE_TODO);
    expect(action.index).to.equal(index);
  });

  it('setVisibilityFilter', function () {
    const filter = actions.VisibilityFilters.SHOW_ACTIVE;
    const action = actions.setVisibilityFilter(filter);
    expect(action.type).to.equal(actions.SET_VISIBILITY_FILTER);
    expect(action.filter).to.equal(filter);
  });
});