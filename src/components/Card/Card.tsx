import React from 'react';
import { IEmployee } from '../../interfaces/IEmployee';
import './Card.scss';

const Card: React.FC<IEmployee> = ({name, email}) => {
  return (
    <div className='card'>
      <p className='card__text'>{name}</p>
      <p className='card__text'>{email}</p>
    </div>
  );
};

export default Card;
