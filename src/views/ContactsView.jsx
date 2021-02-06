import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import { contactsSelectors, contactsOperations } from '../redux/contacts';
import Filter from '../components/Filter/Filter';
export default function ContactsView() {
  const dispatch = useDispatch();

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <div>
        <ContactForm onSubmit={formSubmitHandler} />
        <ToastContainer position="top-center" autoClose={2000} />
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
