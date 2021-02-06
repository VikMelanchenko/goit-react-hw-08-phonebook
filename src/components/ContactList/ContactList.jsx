import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import Filter from '../Filter/Filter';

import styles from './styles.module.scss';

// список добавленных контактов и удаление при клике на кнопку
const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  const onRemoveContact = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  if (contacts.length === 0) return null;

  return (
    <div className={styles.container}>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.contact__item}>
            <span className={styles.contact__item__}>
              {name}: {number}
            </span>

            <button
              onClick={() => onRemoveContact(id)}
              className={styles.contact__button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
