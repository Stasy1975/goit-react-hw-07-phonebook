import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FormaContact from "../components/FormaContact/FormaContact";
import ListContact from '../components/ListContact/ListContact'
import { Container, H1 } from './App.styled'
import Filter from './Filter/Filter'
import {getContacts,getIsLoading,getError} from '../redux/selectors'
import { getAllContacts } from 'redux/operations';


const App = () => {

  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)
  const dispatch = useDispatch();
 
useEffect(()=>{dispatch(getAllContacts())
}, [dispatch]);



  return (
    <Container>
      <H1>Phonebook</H1>
      <FormaContact />
          
      <H1>Contacts</H1>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>Oops, something went wrong. Error is: "{error}"</p>}
      {!isLoading && contacts.length > 0 && (
     
        <ListContact  />)}
        </Container>
  );
  };
export default App;


