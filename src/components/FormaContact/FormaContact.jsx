import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {Lable,ContactAdd} from './FormaContact.styled';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

const FormaContact = () => {
 const dispatch = useDispatch();
 const contacts = useSelector(getContacts)

//  const [name, phone] = useState('');

 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');

 const handleChange = event => {
   const { name, value } = event.currentTarget;
   switch (name) {
     case 'name':
       setName(value);
       break;
     case 'number':
       setPhone(value);
       break;
     default:
       console.log('incorrect input name');
   }
 };

//  const handleChange = event => {
//     event.preventDefault();
//     // const { name, value } = event.currentTarget;

//   };

 const handleSubmit = event => {
    event.preventDefault();
    // // const user = event.target;
    // const {
    // //   elements: { name, phone },
    // } = event.target;
    if (contacts.find(contact => contact.name === name || contact.phone === phone)) {
      alert(`${name} або ${phone} вже є`);
      return;
    }
    dispatch(addContact({name, phone}));
    setName('');
    setPhone('');
    
  }

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
              value={phone}
              onChange={handleChange}
            />
          </Lable>

          <button type="submit">Add contact</button>
        </ContactAdd>
      </div>
    );
  
}

export default FormaContact;

