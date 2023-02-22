import Column from '../components/Bulma/Column';
import Columns from '../components/Bulma/Columns';
import Container from '../components/Bulma/Container';
import Head from 'next/head';
import { NextPage } from 'next';
import { Office } from '../components/Office';
import React from 'react';
import Section from '../components/Bulma/Section';
import { SocialButtons } from '../components/Buttons/SocialButtons';
import useTranslation from 'next-translate/useTranslation';

const Contact: NextPage = () => {
  let { t, lang } = useTranslation('contact');

  const isBosnianLang = lang === "bs";

  return (
    <>
      <Head>
        <title>{t('title')} | AKSA d.o.o.</title>
      </Head>
      <Container>
        <h1 className="title is-1 has-text-centered my-4rem">{t('title')}</h1>
        <Section container className="py-0">
          <Columns multiline className="is-centered">
            <Column className="s-6-tablet" is-3-desktop>
              <Office
                title={t('mainOffice')}
                address={isBosnianLang ? t('st') + ' Londža 128b PC Roma II,\n72 000 Zenica, BiH' : 'Londža ' + t("street") + ' 128b PC Roma II,\n72 000 Zenica, BiH'}
                phone="+ 387 32 44 55 40"
                mail="info@aksa.ba"
              />
            </Column>
            <Column className="is-6-tablet is-3-desktop">
              <Office
                title={t('archOffice')}
                address={isBosnianLang ? t('st') + ' Londža 128b PC Roma II,\n72 000 Zenica, BiH' : 'Londža ' + t("street") + ' 128b PC Roma II,\n72 000 Zenica, BiH'}
                phone="+ 387 32 44 55 41"
                mail="arhitektura@aksa.ba"
              />
            </Column>
            <Column className="is-6-tablet is-3-desktop">
              <Office
                title={t('constOffice')}
                address={isBosnianLang ? t('st') + ' Londža 128b PC Roma II,\n72 000 Zenica, BiH' : 'Londža ' + t("street") + ' 128b PC Roma II,\n72 000 Zenica, BiH'}
                phone="+ 387 32 44 55 42"
                mail="konstrukcija@aksa.ba"
              />
            </Column>
            <Column className="is-6-tablet is-3-desktop">
              <Office
                title={t('FacadeEngineering')}
                address={isBosnianLang ? t('st') + ' Londža 128b PC Roma II,\n72 000 Zenica, BiH' : 'Londža ' + t("street") + ' 128b PC Roma II,\n72 000 Zenica, BiH'}
                phone="+ 387 32 44 55 40 lokal 109"
                mail="info@aksa.ba"
              />
            </Column>
          </Columns>

          <Columns className="my-4rem">
            <Column size={4}>
              <h3 className="title is-3 is-uppercase">{t('connect')}</h3>
              <SocialButtons />
            </Column>

            <Column size={4}>
              <h3 className="title is-3 is-uppercase">{t('workingHours')}:</h3>
              <p className="mb-2">{t('mon-fri')}: 08-16:30</p>
              <p>
                {t('sat-sun')}: {t('nonWorking')}
              </p>
            </Column>
          </Columns>
        </Section>
        <div className="my-4rem">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.5680174239633!2d17.915170615848634!3d44.195366379106474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee24144ad7b1b%3A0x5c460b62868da579!2sAksa%20d.o.o.%20Zenica!5e0!3m2!1sbs!2sba!4v1615497696189!5m2!1sbs!2sba"
            width="100%"
            height="450"
            loading="lazy"></iframe>
        </div>
      </Container>
    </>
  );
};

export default Contact;
