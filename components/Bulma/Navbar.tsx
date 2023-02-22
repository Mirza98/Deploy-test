import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

export interface NavbarItem {
  href: string;
  label: string;
}

export interface NavbarProps {
  items: NavbarItem[];
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { items } = props;
  const { asPath } = useRouter();

  return (
    <>
      {items.map((item, i) => (
        <Link href={item.href} key={'0bNiNZUz3' + i}>
          <a
            className={`navbar-item ${asPath === item.href ? 'is-active' : ''} ${props.className}`}>
            {item.label}
          </a>
        </Link>
      ))}
    </>
  );
};

export default Navbar;
