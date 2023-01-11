import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {Lable,ContactAdd} from './FormaContact.styled';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const FormaContact = () => {
 const dispatch = useDispatch();
 const contacts = useSelector(getContacts)

 const [name, number] = useState('');

 const handleChange = event => {
    event.preventDefault();
    // const { name, value } = event.currentTarget;

  };

 const handleSubmit = event => {
    event.preventDefault();
    if (contacts.find(contact => contact.name === name || contact.number === number)) {
      alert(`${name} або ${number} вже є`);
      return;
    }
    dispatch(addContact
      ({name: name.value,
        number: number.value,
      })
    )}


    return (
      <div>
       Заполните, будь ласка, поля форми
        <ContactAdd onSubmit={handleSubmit}>
          <Lable>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
            />
          </Lable>
          <Lable>
            Phone number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChange}
            />
          </Lable>

          <button type="submit">Add contact</button>
        </ContactAdd>
      </div>
    );
  
}

export default FormaContact;

