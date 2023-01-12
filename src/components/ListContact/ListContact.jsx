// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ItemContact from '../ItemContact/ItemContact';
import { ListBlock } from './ListContact.styled';
import {getFilter, getContacts} from '../../redux/selectors'



const ListContact = () => {
  const contacts = useSelector(getContacts);
const filter = useSelector(getFilter);
   const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    ).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ListBlock>
      {visibleContacts.map(contact => (
        <ItemContact key={contact.id} contact={contact}  />
      ))}
    </ListBlock>
  );
};
export default ListContact;

// ListContact.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       phone: PropTypes.string.isRequired,
//     })
//   ),

// };