import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getContacts } from '../../redux/contacts/contacts-selectors';

import { contactsOperations } from '../../redux/contacts';

import styles from './form.module.scss';

export default function ContactsForms({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      return toast.info('Please input name');
    }

    if (contacts.find((contact) => contact.name === name)) {
      return toast.error(`${name} is already in contacts`);
    }

    dispatch(contactsOperations.addContact(name, number));
    onSubmit(name, number);
    onReset();
  };

  const onReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.Container}>
      <h1>Add contact to my list</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <b>Name</b>
          <input
            className={styles.input__item}
            type="text"
            name="name"
            value={name}
            placeholder="enter contact name"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <b>Pnone number</b>
          <input
            className={styles.input__item}
            type="tel"
            name="number"
            value={number}
            placeholder="enter phone number"
            onChange={handleChange}
          ></input>
        </label>

        <button type="submit" className={styles.form__button}>
          Add contact
        </button>
      </form>
    </div>
  );
}
