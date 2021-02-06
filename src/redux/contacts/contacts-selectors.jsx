import { createSelector } from '@reduxjs/toolkit';

export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

const getTotalContactsCount = (state) => {
  const contacts = getContacts(state);
  return contacts.length;
};

const getCompletedContactCount = createSelector([getContacts], (contacts) => {
  return contacts.reduce(
    (total, contact) => (contact.completed ? total + 1 : total),
    0
  );
});

// мемоизация
const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const contactsSelectors = {
  getContacts,
  getVisibleContacts,
  getFilter,
  getTotalContactsCount,
  getCompletedContactCount,
};

export default contactsSelectors;
