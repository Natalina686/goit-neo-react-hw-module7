import { useSelector } from "react-redux";
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';


export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name)?.toLowerCase() || '';


  const visibleContacts = contacts.filter(contact =>
  typeof contact.name === 'string' &&
  contact.name.toLowerCase().includes(filter)
);


  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
