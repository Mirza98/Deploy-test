import React, { FC } from 'react';
import { FaChevronRight } from 'react-icons/fa';

export const Direction = {
  up: -90,
  down: 90,
  left: 180,
  right: 0,
};

export type Direction = 'up' | 'down' | 'left' | 'right';

export interface ArrowProps {
  color?: string;
  className?: string;
}

const Arrow: FC<ArrowProps> = ({ color, className }) => {
  return (
    <span className={`${className ? className : ''}`}>
      <FaChevronRight />
    </span>
  );
};

export { Arrow };
