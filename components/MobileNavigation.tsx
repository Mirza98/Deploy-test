import React, { FC } from 'react';
import { ArrowButton } from './Buttons/ArrowButton';

export interface MobileNavigationProps {
  children: any;
}

const MobileNavigation: FC<MobileNavigationProps> = () => {
  return (
    <>
      <ArrowButton />
    </>
  );
};

export { MobileNavigation };
