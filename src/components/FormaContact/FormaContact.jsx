import PropTypes from 'prop-types';
import { React, Component } from 'react';
import {Lable,ContactAdd} from './FormaContact.styled';

class FormaContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
       Заполните, будь ласка, поля форми
        <ContactAdd onSubmit={this.handleSubmit}>
          <Lable>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
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
              value={this.state.number}
              onChange={this.handleChange}
            />
          </Lable>

          <button type="submit">Add contact</button>
        </ContactAdd>
      </div>
    );
  }
}

export default FormaContact;

FormaContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};