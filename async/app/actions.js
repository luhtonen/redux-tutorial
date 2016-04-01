import fetch from 'isomorphic-fetch'

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const selectSubreddit = (subreddit) => {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  };
};

export const invalidateSubreddit = (subreddit) => {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  };
};

export const requestPosts = (subreddit) => {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
};

export const receivePosts = (subreddit, json) => {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
};

// Thunk actions
export const fetchPosts = (subreddit) => {
  // the app state is updated to inform that the API call is starting
  dispatch(requestPosts(subreddit));

  return fetch(`http://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json)
    .then(json =>
      // Update the app state with the results of the API call
      dispatch(receivePosts(subreddit, json))
    );
};