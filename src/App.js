import Container from 'components/Container';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Contactlist from 'components/Contactlist';
import Filter from 'components/Filter';
import Notification from 'components/Notification';

import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);

  const contactCheck = (name, number) => {
    const item = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (item) {
      return;
    }

    return contact;
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm onSubmit={contactCheck} />
      </Section>
      <Section title={'Contacts'}>
        {contacts.length > 0 && <Filter />}
        {contacts.length > 0 ? (
          <Contactlist data={getVisibleContacts()} />
        ) : (
          <Notification
            text={'There are no contacts in Your phonebook . . .'}
          />
        )}
      </Section>
    </Container>
  );
}
