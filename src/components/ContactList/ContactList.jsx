import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';

import { ListItems, Text } from './ContactList.styled';

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <>
      {contacts.length > 0 ? (
        <ListItems>
          {contacts.map((contact) => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              handleDeleteContact={handleDeleteContact}
            />
          ))}
        </ListItems>
      ) : (
        <Text>Phonebook is empty. Add your first contact!</Text>
      )}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};
