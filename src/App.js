import Container from 'components/Container';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Contactlist from 'components/Contactlist';
import Filter from 'components/Filter';
import Notification from 'components/Notification';

import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <Container>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        {contacts.length > 0 && <Filter />}
        {contacts.length > 0 ? (
          <Contactlist />
        ) : (
          <Notification
            text={'There are no contacts in Your phonebook . . .'}
          />
        )}
      </Section>
    </Container>
  );
}
