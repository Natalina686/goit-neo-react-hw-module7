import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export default function Contact({name, number, id}) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    }

    return (
       <div className={css.contact}>
      <p className={css.text}>
        {name}: <span className={css.number}>{number}</span>
      </p>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div> 
    )
}