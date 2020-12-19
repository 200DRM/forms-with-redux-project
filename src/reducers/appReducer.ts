import { 
    AppActions, AppActionTypes, Payload
  } from '../actions/appActions';
  
  type State = Payload[];
   
  export const appReducer = ( state = [] as State, action : AppActionTypes ) => {
   
    switch(action.type) {
      case AppActions.ADD:
        return [...state, action.payload];
      case AppActions.DELETE:
        return state.filter(currentStateElement => currentStateElement.id !== action.payload.id);
      case AppActions.EDIT:
        return state.map(currentStateElement => {
          if (currentStateElement.id !== action.payload.id) {
            return currentStateElement;
          }
          const { author, comment, rate } = action.payload;
          
          return ({
            author,
            comment,
            id: currentStateElement.id,
            rate
          });
        });
      default:
        console.warn(`No ${action!.type} action`);
        return state;
    }
  }