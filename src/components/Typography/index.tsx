import React from 'react';

interface TypographyProps {
  tag: keyof JSX.IntrinsicElements;
}

const Typografy: React.FC<TypographyProps> = ({
  tag: Tag = 'p',
  children,
  ...rest
}) => <Tag {...rest}>{children}</Tag>;

export default Typografy;
