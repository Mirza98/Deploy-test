import { ClientsLogos, OtherClientsList1, OtherClientsList2 } from '../lib/ClientsData';

import Column from '../components/Bulma/Column';
import Columns from '../components/Bulma/Columns';
import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';
import Section from '../components/Bulma/Section';
import useTranslation from 'next-translate/useTranslation';

const Clients: NextPage = () => {
  const { t } = useTranslation('clients');

  return (
    <>
      <Head>
        <title>{t('title')} | AKSA d.o.o.</title>
      </Head>
      <Section container className="py-0">
        <h1 className="title is-1 has-text-centered my-4rem">{t('ourClients/investitors')}</h1>
        <Section className="py-0">
          <Columns
            multiline
            className="clients-logos-columns is-centered has-text-centered is-variable is-">
            {ClientsLogos.map((logo, i) => (
              <Column className="clients-logos" size={3} key={'ZQE_I5xxq' + i}>
                <div
                  data-aos="zoom-in"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay={`${100 * i}`}>
                  <a href={logo.url} target="_blank">
                    <img className="client-logo" src={logo.src} alt="client logo" />
                  </a>
                </div>
              </Column>
            ))}
          </Columns>
        </Section>
        <Section className="py-0" container>
          <h1 className="title is-1 has-text-centered my-4rem">{t('others')}</h1>

          <Section className="py-0 my-4rem">
            <Columns className="is-variable is-8">
              <Column>
                <ul className="dashed">
                  {OtherClientsList1.map((client, i) => {
                    return (
                      <li className="title is-4 mb-4 other-clients-list" key={'1qqZhNeYP' + i}>
                        {t(`OtherClientsList1.${i}`)}
                      </li>
                    );
                  })}
                </ul>
              </Column>
              <Column>
                <ul className="dashed">
                  {OtherClientsList2.map((client, i) => {
                    return (
                      <li className="title is-4 mb-4 other-clients-list" key={'_p0FbEswt' + i}>
                        {t(`OtherClientsList2.${i}`)}
                      </li>
                    );
                  })}
                </ul>
              </Column>
            </Columns>
          </Section>
        </Section>
      </Section>
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  const translations = await import(`../locales/${locale}/clients.json`).then((m) => m.default);

  return { props: { translations } };
};

export default Clients;
