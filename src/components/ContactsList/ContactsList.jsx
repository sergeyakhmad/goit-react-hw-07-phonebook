import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import {
  getLoading,
  getVisibleContacts,
} from 'redux/contacts/contacts-selector';
import s from './ContactsList.module.css';
import Loader from 'components/Loader/Loader';

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const isLoadig = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoadig && <Loader />}
      {contacts.length > 0 && (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.item}>
              <span className={s.name}>{name}: </span>
              <span className={s.number}>{number}</span>
              <button
                type="button"
                className={s.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
