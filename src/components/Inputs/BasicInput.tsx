import { FC } from 'react';

import './BasicInput.css';

interface BasicInputProps {
  label : string,
  onChange ?: (e : any) => void;
  value : string | number,
  type : 'text' | 'number'
}

const BasicInput : FC<BasicInputProps> = ({
  label,
  onChange,
  value,
  type
}) => {
 
  return (
    <div className='basic-input-div'>
      <label>
        {label}:
        <input
          onChange={onChange}
          value={value} 
          type={type}
        />
      </label>
    </div>
  );
};

export default BasicInput;