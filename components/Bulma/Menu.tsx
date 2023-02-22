import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';

export interface MenuItem {
  href: string;
  label: string;
}

export interface MenuProps {
  items: MenuItem[];
  menuLabel?: string;
  className?: string;
  onClickHandler?: any;
}
const Menu: FC<MenuProps> = ({ items, menuLabel, className, onClickHandler }) => {
  const { asPath } = useRouter();
  let { t } = useTranslation('common');

  return (
    <div className="menu">
      <h3 className="menu-label">{menuLabel}</h3>

      <ul className="menu-list">
        {items.map((item, i) => {
          return (
            <li key={'SIzgG_MfK' + i}>
              <Link href={item.href}>
                <a
                  onClick={onClickHandler}
                  className={`${asPath === item.href ? 'is-active' : ''} ${className}`}>
                  {t(item.label)}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Menu };
