import React, { FC, HTMLAttributes, memo } from 'react';

export interface ColumnsProps extends HTMLAttributes<HTMLDivElement> {
  mobile?: boolean;
  variable?: boolean;
  multiline?: boolean;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 'multiline';
}

const Columns: FC<ColumnsProps> = (props) => {
  const { mobile, variable, gap, className, children, multiline, ...other } = props;

  const classes = ['columns'];

  if (mobile) classes.push('is-mobile');
  if (variable) classes.push(`is-variable is-${gap || 1}`);
  if (className) classes.push(className);
  if (multiline) classes.push('is-multiline');

  return (
    <div className={classes.join(' ')} {...other}>
      {children}
    </div>
  );
};

export default memo(Columns);
