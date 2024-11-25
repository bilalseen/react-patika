import React, { useEffect, useState } from "react";
import Form from "./Form/Form";
import List from "./List/List";
import "./Style.css";

export default function Contacts() {
  const [contacts, setContacts] = useState([
    { fullName: "John Doe", phone_number: "1234567890" },
    { fullName: "Jane Doe", phone_number: "0987654321" },
  ]);
  const [search, setSearch] = useState("");

  const onChangeInput = (e) => {
    setSearch(e.target.value);
  };

  const addContact = (contactValue) => {
    setContacts([...contacts, contactValue]);
  };

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div className="formContainer">
      <h1>Contacts</h1>
      <input
        type="text"
        placeholder="Search Contact"
        value={search}
        onChange={onChangeInput}
      />
      <br />
      <br />
      <List contacts={contacts} search={search} />
      <Form addContact={addContact} />
    </div>
  );
}
