import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const Link = ({ children, path }) => {
  return (
    <RouterLink
      to={path}
      className="text-sm text-red-700 hover:underline font-medium transition duration-200 ease-in-out px-5 py-2"
    >
      {children}
    </RouterLink>
  );
};
