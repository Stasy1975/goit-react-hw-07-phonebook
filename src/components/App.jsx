import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import FormaContact from "../components/FormaContact/FormaContact";
import ListContact from '../components/ListContact/ListContact'
import { Container, H1 } from './App.styled'
import Filter from './Filter/Filter'
import { addContact, removeContact } from 'redux/contactSlice';
import {filterContact} from 'redux/filterSlice'


const App = () => {

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();


    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    ).sort((a, b) => a.name.localeCompare(b.name));


  const saveContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name || contact.number === number)) {
      alert(`${name} або ${number} вже є`);
      return;
    }
    dispatch( addContact({
        id: nanoid(),
      name,
      number,
    }))
   
    
    
  };
  
  
  const deleteContact = keyId => {
   return dispatch(removeContact(keyId))
  };
  
  const findContact = filter => {
   dispatch(filterContact(filter))
  };

  
  







  return (
    <Container>
      <H1>Phonebook</H1>
      <FormaContact onSubmit={saveContact} />
          
      <H1>Contacts</H1>
      <Filter value={filter} onSearch={findContact} />
        <ListContact contacts={visibleContacts} onDelete={deleteContact} />
        </Container>
  );
  };
export default App;


