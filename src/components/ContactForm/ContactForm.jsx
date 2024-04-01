import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useState } from 'react';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeNumber = value => {
    setNumber(value);
  };

  const handleAddContact = event => {
    event.preventDefault();

    if (!name.trim() || !number.trim()) {
      alert('Please enter both name and phone number.');
      return;
    }

    addContact({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactForm} onSubmit={handleAddContact}>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Please enter a valid name"
        required
        value={name}
        onChange={handleChangeName}
        placeholder="Enter Full Name"
        className={css.input}
      />

      <PhoneInput
        placeholder="Enter phone number e.g. 9178856322"
        value={number}
        onChange={handleChangeNumber}
        defaultCountry="PH"
        className={css.customPhoneInput}
        limitMaxLength
        name="number"
      />

      <button className={css.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};