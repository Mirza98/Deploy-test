import React, { FC } from 'react';

import Column from './Bulma/Column';
import Columns from './Bulma/Columns';
import useTranslation from 'next-translate/useTranslation';

export interface CareerPostProps {
  data: {
    date?: string;
    title?: string;
    subtitle?: string;
    content?: any;
    caption?: string;
  };
  index?: number;
}

const CareerPost: FC<CareerPostProps> = ({
  index,
  data: { date, caption, subtitle, title, content },
}) => {
  const { t } = useTranslation('career');
  return (
    <div className="my-4rem">
      <Columns variable gap={4}>
        <Column size={4} className="has-text-lef">
          <h2 className="title is-2">{t(`JobOffers.${index}.title`)}</h2>
          <h2 className="subtitle is-3">{t(`JobOffers.${index}.subtitle`)}</h2>
        </Column>
        <Column>
          {content.map((item, i) => {
            return (
              <div key={i} className="block">
                <h5 className="title is-5 mb-4">{t(`JobOffers.${index}.content.${i}.title`)}</h5>
                <ul className="dashed pl-3">
                  {item.list.map((listItem, innerIndex) => (
                    <li key={listItem + innerIndex}>
                      {t(`JobOffers.${index}.content.${i}.list.${innerIndex}`)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <h5 className="title is-6">
            {t('appliactions')}{' '}
            <span className="underline-hover">
              <a href="mailto: info@aksa.ba">
                <span className="underline-span">info@aksa.ba</span>
              </a>
            </span>
          </h5>
        </Column>
      </Columns>
    </div>
  );
};

export { CareerPost };
