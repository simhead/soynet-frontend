import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function LoginButton() {
  return (
    <Link to='log-in'>
      <button className='btn'>Log In</button>
    </Link>
  );
}
