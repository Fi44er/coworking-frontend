import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>Toggle Menu</button>
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    </div>
  );
};

export default MyComponent;