import React, { FC } from 'react';
import Container from './Container';

export interface SectionProps {
  id?: string;
  className?: string;
  dark?: boolean;
  container?: boolean;
  children?: any;
  size?: 'default' | 'small' | 'medium' | 'large';
}

const Section: FC<SectionProps> = (props) => {
  const { id, className, children, dark = false, container, size, ...other } = props;

  const classes = ['section'];
  if (!dark) classes.push('is-light');
  if (className) classes.push(className);
  if (size) classes.push(`is-${size}`);

  return (
    <section id={id} className={classes.join(' ')}>
      {container ? <Container>{children}</Container> : children}
    </section>
  );
};

export default Section;
