export enum AppActions {
    ADD = 'ADD',
    DELETE = 'DELETE',
    EDIT = 'EDIT',
  }
  
  export interface Payload {
    author : string;
    comment : string;
    id : number;
    rate : number;
  }
  
  interface AddRateResult {
    type : AppActions.ADD;
    payload : Payload;
  }
  
  interface DeleteRateResult {
    type : AppActions.DELETE;
    payload : Pick<Payload, 'id'>;
  }
  
  interface EditRateResult {
    type : AppActions.EDIT;
    payload : Payload;
  }
  
  export type AppActionTypes = AddRateResult | DeleteRateResult | EditRateResult;
  
  export const addRate = (payload : Payload) : AppActionTypes => ({
    type : AppActions.ADD,
    payload : {
      author : payload.author,
      comment : payload.comment,
      id : Number(Math.floor(Math.random() * 1234)),
      rate : payload.rate
    }
  });
   
  export const deleteRate = (id : number) : AppActionTypes => ({
    type : AppActions.DELETE,
    payload : {
      id
    }
  });
   
  export const editRate = (payload : Payload) : AppActionTypes => ({
    type : AppActions.EDIT,
    payload : {
      author : payload.author,
      comment : payload.comment,
      rate : payload.rate,
      id : payload.id
    }
  });