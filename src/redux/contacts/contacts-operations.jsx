import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  toggleUpdatedRequest,
  toggleUpdatedSuccess,
  toggleUpdatedError,
} from './contacts-actions';

import axios from 'axios';

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact = (name, number) => (dispatch) => {
  const contact = {
    name,
    number,
    complited: false,
  };

  dispatch(addContactsRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactsSuccess(id)))
    .catch((error) => dispatch(deleteContactsError(error)));
};

// PATCH @ /tasks/:id
const toggleUpdated = ({ id, complited }) => (dispatch) => {
  const update = { complited };

  dispatch(toggleUpdatedRequest());

  axios
    .patch(`/contacts/${id}`, update)
    .then(({ data }) => dispatch(toggleUpdatedSuccess(data)))
    .catch((error) => dispatch(toggleUpdatedError(error.message)));
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
  toggleUpdated,
};
