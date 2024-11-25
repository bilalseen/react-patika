import React, { useState } from "react";

export default function Form({ addContact }) {
  const [form, setForm] = useState({ fullName: "", phone_number: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    addContact(form);
    console.log(form);
    setForm({ fullName: "", phone_number: "" });
  };
  return (
    <div>
      <div>
        <input
          value={form.fullName}
          name="fullName"
          type="text"
          placeholder="Enter Name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          value={form.phone_number}
          name="phone_number"
          type="text"
          placeholder="Enter Phone Number"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button onClick={onSubmit}>Add Contact</button>
      </div>
    </div>
  );
}
