import { Dispatch } from 'redux';
import { AppActions, AppActionTypes } from '../actions/appActions';

export const validateAuthorMiddleware = () => 
  (next : Dispatch<AppActionTypes>) => (action : AppActionTypes) => {
    if (action.type === AppActions.ADD && !action.payload.author.length) {
      console.warn('Author has no name and surname!');
      return;
    }

    next(action);
};