import React, { ReactNode } from 'react';

interface IfProps {
  condition: boolean;
  children: ReactNode;
}

export function If({ children, condition }: IfProps): JSX.Element {
  return <>{condition && children}</>;
}
