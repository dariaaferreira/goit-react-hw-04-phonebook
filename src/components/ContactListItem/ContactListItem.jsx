import PropTypes from 'prop-types';
import { Item, Span, Button } from './ContactListItem.styled';

export const ContactListItem = ({ contact: { id, name, number }, handleDeleteContact }) => {
  return (
    <Item>
      <Span>{name}:</Span> {number}
      <Button onClick={() => handleDeleteContact(id)}>✕</Button>
    </Item>
  );
};

ContactListItem.propTypes = {
    contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};