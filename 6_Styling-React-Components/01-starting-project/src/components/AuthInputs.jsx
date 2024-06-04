import { useState } from 'react';
import { styled } from "styled-components";

import Button from './Button';
import Input from './Input';

const ControlContainer = styled.div` 
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`




export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      {/* <div className="controls"> */}
      <ControlContainer>
        {/* <p className='paragraph'> */}
        {/* <p className="paragraph"> */}
          {/* <label>Email</label> */}
          {/* <label className={`label ${emailNotValid ? 'invalid' : ''}`}>Email</label> */}
          {/* <Label className={`label ${emailNotValid ? 'invalid' : ''}`}>Email</Label> */}
          {/* <Label $invalid={emailNotValid}>Email</Label> */}
          {/* <input
            type="email"
            style={{
              backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db',
              color: emailNotValid ? '#ef4444' : '#d1d5db',
              // 'border-color': #f73f3f,
              borderColor: emailNotValid ? '#f73f3f' : '#d1d5db',
            }}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          /> */}

          <Input  
            type="email"
            label="Email"
            // $invalid={emailNotValid}
            invalid={emailNotValid}
            // style={{
            //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db',
            //   color: emailNotValid ? '#ef4444' : '#d1d5db',
            //   // 'border-color': #f73f3f,
            //   borderColor: emailNotValid ? '#f73f3f' : '#d1d5db',
            // }}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        {/* </p> */}
        {/* <p> */}
          {/* <label className={passwordNotValid ? 'invalid' : ''}>Password</label> */}
          {/* <Label className={passwordNotValid ? 'invalid' : ''}>Password</Label> */}
          {/* <Label $invalid={passwordNotValid}>Password</Label> */}
          {/* <input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          /> */}
          <Input
            type="password"
            // className={passwordNotValid ? 'invalid' : undefined}
            // $invalid={passwordNotValid}
            label="Password"
            invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        {/* </p> */}
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
