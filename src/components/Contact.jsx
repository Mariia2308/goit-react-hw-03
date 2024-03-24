/* Contact.jsx */

import css from './ContactStyles.module.css';

const Contact = ({ id, name, number, favColor, onDeleteContact }) => {
    return (
        <div className={css.contact}>
            <div className={css.contactwrapp}>
            <div className={css.name}>
                <span role="img" aria-label="User icon" className={css.usericon}>👤</span>
                {name}
            </div>
            <div className={css.number}>
                <span role="img" aria-label="Phone icon" className={css.phoneicon}>📞</span>
                <span style={{ backgroundColor: favColor }}>{number}</span>
                </div>
            </div>
            <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
        </div>
    );
};

export default Contact;
