import React, { CSSProperties, FC, memo } from 'react';

type BreakPoint = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'narrow' | 'auto';

export interface ColumnProps {
  size?: BreakPoint;
  xs?: BreakPoint;
  md?: BreakPoint;
  lg?: BreakPoint;
  xl?: BreakPoint;
  className?: string;
  children?: any;
  style?: CSSProperties;
}

const Column: FC<ColumnProps> = (props) => {
  const { size: is, xs, md, lg, className, children, style } = props;
  const classes = ['column'];

  if (is) classes.push(`is-${is}`);
  if (xs) classes.push(`is-${xs}-touch`);
  if (md) classes.push(`is-${md}-desktop`);
  if (lg) classes.push(`is-${lg}-wide`);
  if (className) classes.push(className);

  return (
    <div className={classes.join(' ')} style={style || undefined}>
      {children}
    </div>
  );
};

export default memo(Column);
