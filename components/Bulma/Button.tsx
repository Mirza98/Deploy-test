import React, { ButtonHTMLAttributes, FC } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: any;
  variant?: string;
  outlined?: boolean;
  size?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { loading, className, variant, outlined = false, size, ...inputProps } = props;
  const classes = [`button is-${variant}`];

  if (className) classes.push(className);
  if (loading) classes.push('is-loading');
  if (outlined) classes.push('is-outlined');
  if (size) classes.push(`is-${size}`);

  return (
    <button {...inputProps} className={classes.join(' ')}>
      {props.children}
    </button>
  );
};

export default Button;
