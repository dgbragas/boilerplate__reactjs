import React from 'react';

interface IfProps {
  condition: boolean;
}

const If: React.FC<IfProps> = ({ children, condition }) => (
  <>{condition && children}</>
);

export default If;
