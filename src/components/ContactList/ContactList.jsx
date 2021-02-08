import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

import styles from './contact.module.scss';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  const onRemoveContact = (id) =>
    dispatch(contactsOperations.deleteContact(id));

  if (contacts.length === 0) return null;

  return (
    <div className={styles.contact_list_container}>
      <div className={styles.Container}>
        <ul>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={styles.contact__item}>
              <span className={styles.contact__item__}>
                <p>
                  <b>Name:</b> {name}
                </p>
                <p>
                  <b>Phone number:</b> {number}
                </p>
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
    </div>
  );
};

export default ContactList;
