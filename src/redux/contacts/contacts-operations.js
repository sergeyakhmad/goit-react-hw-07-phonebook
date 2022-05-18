import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.addContact({ name, number });
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { id } = await contactsAPI.deleteContact(contactId);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// const fetchContacts = () => dispatch => {
//   dispatch(fetchContactRequest());
//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchContactSuccess(data)))
//     .catch(error => dispatch(fetchContactError(error)));
// };

// export const addContact = (name, number) => dispatch => {
//   const contact = { name, number };
//   dispatch(addContactRequest());
//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };

// export const deleteContact = id => dispatch => {
//   dispatch(deleteContactRequest());
//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch(error => dispatch(deleteContactError(error)));
// };
