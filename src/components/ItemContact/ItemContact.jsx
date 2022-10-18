import PropTypes from 'prop-types';
import { ItemElement, ItemContent, DeleteButton } from './ItemContact.stayled';
import { AiOutlineClose } from 'react-icons/ai'

const ItemContact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <ItemElement>
      <ItemContent>{name}</ItemContent>
      <ItemContent>{number}</ItemContent>
      <DeleteButton onClick={() => onDelete(id)}><AiOutlineClose /></DeleteButton>
    </ItemElement>
  );
};

export default ItemContact;

ItemContact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};