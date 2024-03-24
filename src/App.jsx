
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox"
import ContactForm from "./components/ContactForm";
import contacts from "./components/contactslist.json"
import './App.css'
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'

function App() {
  const [contact, setContact] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts")
    if (!stringifiedContacts) return contacts;
    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact))
  }, [contact])

  const [filter, setFilter] = useState('')

  const onChangeFilter = (event) => {
    setFilter(event.target.value)
  }


  const onAddUser = (formData) => {
    const finalUser = { ...formData, id: nanoid() }
    
    setContact([...contact, finalUser])
    console.log(contact);

  }

  const onDeleteContact = (contactId) => {
    setContact(prevContact => prevContact.filter(contact => contact.id !== contactId))
  }

const filterContactName = contact.filter(
  (contact) => 
    (contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())) ||
    (contact.number && contact.number.toLowerCase().includes(filter.toLowerCase()))
);


  return (
  
    
    <>
      
      <h1>Phonebook</h1>

      
      <ContactForm onAddUser={ onAddUser} />

      <SearchBox value={filter} onChange={onChangeFilter}/>

      <ContactList contacts = {filterContactName} onDeleteContact = {onDeleteContact}/>


    </>
  )
}

export default App;
