import React, { FC } from 'react';

import Gap from './Bulma/Gap';
import useTranslation from 'next-translate/useTranslation';

export interface OfficeProps {
  title: string;
  address: string;
  phone: string;
  mail: string;
}

export const Office: FC<OfficeProps> = ({ title, address, phone, mail }) => {
  const { t } = useTranslation('common');

  return (
    <div className="box block p-5-mobile office-block is-flex is-flex-direction-column is-flex-wrap-wrap office-box">
      <h3 className="menu-label block menu-label-office">{title}</h3>
      <p className="block break-lines">{address}</p>
      <Gap />
      <h6 className="title is-4">{t('Kontakt')}</h6>
      <p className="mb-2">{phone}</p>
      <p>{mail}</p>
    </div>
  );
};
