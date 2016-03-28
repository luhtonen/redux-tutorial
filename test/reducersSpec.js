import {expect} from 'chai';
import {VisibilityFilters} from '../app/actions';
import * as reducers from '../app/reducers';

describe('reducers', function() {
  it('reducer with undefined action should return previous state', function () {
    const previousState = {
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      todos: []
    };
    const action = {type: 'unknown'};
    const reducer = reducers.todoApp(previousState, action);
    expect(reducer).to.equal(previousState);
  });
});