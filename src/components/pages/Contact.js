import React, { useInsertionEffect, useState } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import AnimatedLetters from '../AnimatedLetters';
import './Contact.css';
// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helper';

export default function Contact() {
  // const [letter, setLetter] = useState();
  // const form = useRef();

  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = e => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = e => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`,
      );
      return;
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');
  };

  return (
    <>
      {/* <div>
        <h1>Contact Page</h1>
      </div> */}
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Page</h1>
          <p>
            I am interested in an entry level opportunity in Web Development.
          </p>
          <div className="contact-form">
            <form className="form">
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="email"
              />
              <input
                value={userName}
                name="userName"
                onChange={handleInputChange}
                type="text"
                placeholder="username"
              />
              <input
                value={password}
                name="password"
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
              />
              <button type="button" onClick={handleFormSubmit}>
                Submit
              </button>
            </form>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
