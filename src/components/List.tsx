import { useSelector } from 'react-redux';
import { Payload } from '../actions/appActions';
import { RootState } from '../reducers/rootReducer';

import Element from './Element';

import './Components.css';

const List = () => {
  
  const rates = useSelector((state : RootState) => state.rates);

  const ratesElements = rates.map((rate : Payload) => (
    <Element key={rate.id} {...rate} />
  ));
  
  return (
    <div className='rates-list'>
      {ratesElements}
    </div>
  );
}

export default List;