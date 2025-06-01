import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addContact} from '../../redux/contactsSlice';
import css from './ContactForm.module.css';

export default function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = e => {
    e.preventDefault();
    const isDuplicate = contacts.some(
      contact => typeof contact.name === 'string' && contact.name.toLowerCase() === name.toLowerCase()
  );

  if (isDuplicate) {
    alert(`${name} вже є у контактах.`);
    return;
  }

    dispatch(addContact(name, phone));
    setName('');
    setPhone('');
};

return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        className={css.input}
        type="text"
        placeholder="Ім’я"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className={css.input}
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        required
      />
      <button type="submit" className={css.button}>
        Додати контакт
      </button>
    </form>
  );
}
