import React from 'react';
import Container from "./container/Container";
import { Link } from './Link';

const Header = () => {
  return (
    <Container>
      <ul className="flex flex-row space-x-4">
        <li>
          <Link path="/">Home</Link>
        </li>
        <li>
          <Link path="/about">About</Link>
        </li>
        <li>
          <Link path="/contact">Contact</Link>
        </li>
        <li>
          <Link path="/services">Services</Link>
        </li>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Get in Touch</button>
        </div>
      </ul>
    </Container>
  );
};

export default Header;
