import React from 'react';
import propTypes from 'prop-types';
import ListItem from 'components/ListItem';
import s from './ContactList.module.css';

const ContactList = ({ data }) => {
  return (
    <ul className={s.list}>
      {data.map(({ name, number, id }) => {
        return <ListItem key={id} name={name} number={number} id={id} />;
      })}
    </ul>
  );
};

ContactList.propTypes = {
  data: propTypes.array.isRequired,
};

export default ContactList;
