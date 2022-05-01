import React from 'react';
import ListItem from 'components/ListItem';
import { useSelector } from 'react-redux';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul className={s.list}>
      {getVisibleContacts().map(({ name, number, id }) => {
        return <ListItem key={id} name={name} number={number} id={id} />;
      })}
    </ul>
  );
};

export default ContactList;
