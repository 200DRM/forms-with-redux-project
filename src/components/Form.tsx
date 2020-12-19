import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import BasicInput from './Inputs/BasicInput';

import './Components.css';

import { addRate, editRate } from '../actions/appActions';


interface FormProps {
  author ?: string;
  callback ?: () => void;
  comment ?: string;
  id ?: number;
  rate ?: number;
}

const Form : FC<FormProps> = ({
  author = '',
  callback,
  comment = '',
  id,
  rate = 0
}) => {
 
  const [authorInput, setAuthorInput] = useState(author);
  const [rateInput, setRateInput] = useState(rate);
  const [commentInput, setCommentInput] = useState(comment);

  const dispatch = useDispatch();

  const handleChangeAuthor = (e : any) => 
    setAuthorInput(e.target.value);
  const handleCommentChange = (e : any) =>
    setCommentInput(e.target.value);
  const handleChangeRate = (e : any) =>
    setRateInput(e.target.value);
  
  const handleOnSubmit = (e : any) => {
    e.preventDefault();

    const rateObject = {
      author : authorInput,
      comment : commentInput,
      id : id ?? 0,
      rate : Number(rateInput)
    };

    id
    ? dispatch(editRate(rateObject))
    : dispatch(addRate(rateObject));

    if (id) {
      callback && callback();
    }
  };

  return (
    <form className='add-rate-form' onSubmit={handleOnSubmit}>
      <BasicInput 
        label='Author'
        onChange={handleChangeAuthor}
        value={authorInput}
        type='text'
      />
      <BasicInput 
        label='Rate'
        onChange={handleChangeRate}
        value={rateInput}
        type='number'
      />
      <BasicInput 
        label='Comment'
        onChange={handleCommentChange}
        value={commentInput}
        type='text'
      />
      <button type="submit">
        {id ? 'Confirm changes' : 'Add rate'}
      </button>
    </form>
  );
};

export default Form;