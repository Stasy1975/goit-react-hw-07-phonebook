import { React, Component } from "react";
import { nanoid } from 'nanoid';
import FormaContact from "../components/FormaContact/FormaContact";
import ListContact from '../components/ListContact/ListContact'
import { Container, H1 } from './App.styled'
import Filter from './Filter/Filter'


class App extends Component {
state = {
  contacts: [
    // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
}

  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} вже є`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    }
        this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  }


  deleteContact = keyId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== keyId),
    }));
  };

  findContact = searchName => {
    this.setState({ filter: searchName });
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'))
    if (contacts){
      this.setState({contacts: contacts})
    }
    
}

  componentDidUpdate(prevProps, prevState) {
      if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }


  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    ).sort((a, b) =>
a.name.localecompare(b.name))
;
  return (
    <Container>
      <H1>Phonebook</H1>
      <FormaContact onSubmit={this.addContact} />
          
      <H1>Contacts</H1>
      <Filter value={this.state.filter} onSearch={this.findContact} />
        <ListContact contacts={visibleContacts} onDelete={this.deleteContact} />
        </Container>
  );}
};
export default App;


