import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import './sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Sign In
      </a>
      <a className="menu-item" href="/salads">
        Register
      </a>
      <a className="menu-item" href="/pizzas">
        My Account
      </a>
    </Menu>
  );
};