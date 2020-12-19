import React, { FC, useState } from 'react';
import { Payload } from '../actions/appActions';

import Form from './Form';

const Element : FC<Payload> = ({
  author, comment, id, rate
}) => {
  
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const toggleElements = () => setIsVisibleForm(prev => !prev);

  const formOrButtonElement = isVisibleForm
  ? <Form 
      author={author}
      callback={toggleElements}
      comment={comment}
      id={id}
      rate={rate}
    />
  : <button onClick={toggleElements}>
      Edit book  
    </button>

  return (
    <div className='rates-list-element'>
      <div className='rates-list-element-with-listed-paragraphs'>
        <p>Author: { author }</p>
        <p>Rate: { rate }</p>
        <p>Komentarz: { comment }</p>
      </div>
      <div className='rates-list-element-with-button'>
        { formOrButtonElement }
      </div>
    </div>
  )
};

export default Element;