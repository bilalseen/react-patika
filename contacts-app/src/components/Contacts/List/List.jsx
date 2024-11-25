import React, { useEffect, useState } from "react";

export default function List({ contacts = [], search = "" }) {
  const [filteredContacts, setFilteredContacts] = useState([]);

  const filterContact = () => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.fullName.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredContacts(filteredContacts);
    console.log(filteredContacts);
  };

  useEffect(() => {
    filterContact();
  }, [contacts, search]);

  return (
    <div>
      {filteredContacts.map((contact, index) => (
        <div key={index}>
          <li>{contact.fullName}</li>
        </div>
      ))}
    </div>
  );
}
