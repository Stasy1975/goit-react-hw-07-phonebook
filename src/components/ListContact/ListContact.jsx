import PropTypes from 'prop-types';
import { React } from 'react';
import ItemContact from '../ItemContact/ItemContact';
import { ListBlock } from './ListContact.styled';

const ListContact = ({ contacts }) => {
  return (
    <ListBlock>
      {contacts.map(contact => (
        <ItemContact key={contact.id} contact={contact}  />
      ))}
    </ListBlock>
  );
};
export default ListContact;

ListContact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};