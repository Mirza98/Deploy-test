import React, { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';

import Column from '../Bulma/Column';
import Columns from '../Bulma/Columns';
import { Menu } from '../Bulma/Menu';
import { Logo } from './Logo';
import Gap from '../Bulma/Gap';
import { SocialButtons } from '../Buttons/SocialButtons';
import { FoooterAboutMenu, servicesMenu } from '../../lib/Navigations';

const Footer: FC = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="footer">
      <Columns multiline>
        <Column className="footer-column-mobile is-4">
          <Logo src="/assets/logos/logo-black.svg" />
          <Gap />
          {t('footer-text')
            .split('\n')
            .map((p, i) => {
              return <p key={'_u752Hzln' + i}>{p}</p>;
            })}
          <Gap />
          <SocialButtons />
          <Gap />
        </Column>

        <Column className="is-offset-1 is-2">
          <h3 className="menu-label">{t('Kontakt')}</h3>
          <p>+ 387 32 44 55 40</p>
          <p>info@aksa.ba</p>
          <Gap />
          <h4 className="title is-4">{t('Glavni ured')}</h4>
          <p>
            Ul. Londža 128b PC Roma II,
            <br />
            72 000 Zenica, BiH
          </p>
        </Column>

        <Column className="is-offset-1">
          <Menu menuLabel={FoooterAboutMenu.label} items={FoooterAboutMenu.items} />
        </Column>
        <Column>
          <Menu menuLabel={t(servicesMenu.label)} items={servicesMenu.items} />
        </Column>
      </Columns>

      <p className="has-text-left is-size-7">{t('footer-caption')}</p>
    </footer>
  );
};

export { Footer };
