import React from 'react';
import propTypes from 'prop-types';
import s from './ListItem.module.css';

import { useDispatch } from 'react-redux';
import { deleteItem } from 'Redux/contactsSlice';

const ListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      {name}: {number}
      <button
        className={s.delete_button}
        onClick={() => dispatch(deleteItem(id))}
      >
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default ListItem;
