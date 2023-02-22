import Link from 'next/link';
import React, { FC } from 'react';

export interface LogoProps {
  src: string;
  className?: string;
  onClick?: any;
}

const Logo: FC<LogoProps> = ({ src, className, ...other }) => {
  return (
    <Link href="/">
      <a {...other}>
        <img
          className={`${className} logo`}
          src={src}
          alt="Logo"
          width={145}
          height={69}
          loading={'eager'}
        />
      </a>
    </Link>
  );
};

export { Logo };
