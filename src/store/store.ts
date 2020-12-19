import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { validateAuthorMiddleware } from '../middleware/validateAuthorMiddleware';

export const store = createStore(
  rootReducer,
  { rates : [] },   
  applyMiddleware(validateAuthorMiddleware) 
);