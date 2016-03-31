import {createStore} from 'redux';
import {expect} from 'chai';
import todoApp from '../app/reducers';
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from '../app/actions';

describe('store', function () {
  it('store update logic should work', function () {
    let store = createStore(todoApp);

    const initialState = {
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      todos: []
    };
    // Log the initial state
    const state = store.getState();
    console.log(state);
    expect(state).to.shallowDeepEqual(initialState);

    // Every time the state changes, log it
    // Note that subscribe() returns a function for unregistering the listener
    let unsubscribe = store.subscribe(() =>
      console.log(store.getState())
    );

    // Dispatch some actions
    store.dispatch(addTodo('Learn about actions'));
    expect(store.getState().todos.length).to.equal(1);
    expect(store.getState().todos[0].text).to.equal('Learn about actions');

    store.dispatch(addTodo('Learn about reducers'));
    expect(store.getState().todos.length).to.equal(2);
    expect(store.getState().todos[1].text).to.equal('Learn about reducers');

    store.dispatch(addTodo('Learn about store'));
    expect(store.getState().todos.length).to.equal(3);
    expect(store.getState().todos[2].text).to.equal('Learn about store');

    expect(store.getState().todos[0].completed).to.equal(false);
    store.dispatch(completeTodo(0));
    expect(store.getState().todos[0].completed).to.equal(true);

    expect(store.getState().todos[1].completed).to.equal(false);
    store.dispatch(completeTodo(1));
    expect(store.getState().todos[1].completed).to.equal(true);

    expect(store.getState().visibilityFilter).to.equal(VisibilityFilters.SHOW_ALL);
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
    expect(store.getState().visibilityFilter).to.equal(VisibilityFilters.SHOW_COMPLETED);

    // Stop listening to state updates
    unsubscribe();
  });
});