import Link from 'next/link';
import React, { FC } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Direction } from '../Icons/Arrow';

export interface ArrowButtonProps {
  href?: string;
  className?: string;
  arrowColor?: string;
  arrowDirection?: Direction;
  onClickHandler?: any;
}

const ArrowButton: FC<ArrowButtonProps> = ({ href, className, onClickHandler }) => {
  return href ? (
    <Link href={href}>
      <a className={`button p-1 arrow-button is-shadowless ${className ? className : ''}`}>
        <FaChevronLeft />
      </a>
    </Link>
  ) : (
    <a
      onClick={onClickHandler}
      className={`button p-1 arrow-button is-shadowless ${className ? className : ''}`}>
      <FaChevronLeft />
    </a>
  );
};

export { ArrowButton };
