import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { FC } from 'react';
import { FaChevronRight } from 'react-icons/fa';

export interface ReadMoreButtonProps {
  href: string;
  className?: string;
  arrowColor?: string;
}

const ReadMoreButton: FC<ReadMoreButtonProps> = ({ href, className, arrowColor, ...other }) => {
  let { t } = useTranslation('common');
  return (
    <Link href={href}>
      <a
        {...other}
        className={`read-more-button is-shadowless is-size-6 has-text-weight-bold ${
          className ? className : ''
        }`}>
        <span className="mr-1">{t('Pročitaj više')}</span>
        <FaChevronRight />
      </a>
    </Link>
  );
};

export { ReadMoreButton };
