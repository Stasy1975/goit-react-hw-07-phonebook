import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import FormaContact from "../components/FormaContact/FormaContact";
import ListContact from '../components/ListContact/ListContact'
import { Container, H1 } from './App.styled'
import Filter from './Filter/Filter'


const App = () => {
  const [contacts, setContacts] = useState(() =>
    JSON.parse(localStorage.getItem('contacts'))
      ? JSON.parse(localStorage.getItem('contacts'))
      : []
  );
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} вже є`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    }
    setContacts(prevState => [newContact, ...prevState]);
  };
  
  
  const deleteContact = keyId => {
        setContacts(prevState =>
      prevState.filter(contact => contact.id !== keyId))
  };
  
  const findContact = searchName => {
    setFilter( searchName);
  };

  
  




useEffect(() => {
   
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    ).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Container>
      <H1>Phonebook</H1>
      <FormaContact onSubmit={addContact} />
          
      <H1>Contacts</H1>
      <Filter value={filter} onSearch={findContact} />
        <ListContact contacts={visibleContacts} onDelete={deleteContact} />
        </Container>
  );
  };
export default App;


