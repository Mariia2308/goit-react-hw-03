
import Contact from './Contact';
import css from './ContactStyles.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
        console.log("Contacts:", contacts); 
    return (
        <ul className={css.liststyle}>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <Contact
                        id = {contact.id}
                        name={contact.name}
                        number={contact.number}
                        onDeleteContact = {onDeleteContact}
                    />
                </li>
            ))}
        </ul>
    );
};



export default ContactList;
