import ContactsList from './components/ContactsList/ContactsList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <h1 className={s.phoneBook}>PhoneBook</h1>
      <ContactForm />
      <h2 className={s.contacts}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
