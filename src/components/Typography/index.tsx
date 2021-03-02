import React, { ReactNode } from 'react';

interface TypographyProps {
  tag: keyof JSX.IntrinsicElements;
  children: ReactNode;
}

export function Typografy({
  tag: Tag = 'p',
  children,
  ...rest
}: TypographyProps): JSX.Element {
  return <Tag {...rest}>{children}</Tag>;
}
