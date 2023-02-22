import React, { FC, HTMLAttributes } from 'react';

export interface GapProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const Gap: FC<GapProps> = ({ size = 1.5, ...props }) => {
  return <div data-gap="true" style={{ height: size + 'rem' }} {...props} />;
};

export default Gap;
