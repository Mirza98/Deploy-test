import Link from 'next/link';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

export interface BreadcrumbItem {
  label: string;
  href: string;
  locale?: string;
}

export interface BreadcrumbProps {
  className?: string;
  items: BreadcrumbItem[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ className, items }) => {
  const router = useRouter();
  let { t } = useTranslation('common');

  return (
    <nav className={`breadcrumb ${className ? className : ''}`} aria-label="breadcrumbs">
      <ul>
        {items.map((item, i) => (
          <li
            key={'TUlrlw8Mi' + i}
            className={
              (item.locale && router.locale === item.locale) ||
              (!item.locale && item.href === router.asPath) ||
              (!item.locale && item.href === router.asPath.split('?')[0])
                ? 'is-active'
                : ''
            }>
            <Link href={item.href} locale={item.locale ? item.locale : router.locale}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Breadcrumb };
