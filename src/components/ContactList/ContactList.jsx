import { useSelector } from "react-redux";
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from "../../redux/contactsSlice";


export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);


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
