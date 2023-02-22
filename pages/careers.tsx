import { CareerPost } from '../components/CareerPost';
import Container from '../components/Bulma/Container';
import Head from 'next/head';
import { JobOffers } from '../lib/JobOffers';
import { NextPage } from 'next';
import React from 'react';
import Section from '../components/Bulma/Section';
import useTranslation from 'next-translate/useTranslation';

const Careers: NextPage = () => {
  let { t } = useTranslation('career');

  return (
    <>
      <Head>
        <title>{t('title')} | Aksa d.o.o.</title>
      </Head>
      <Container>
        <h1 className="title is-1 has-text-centered my-4rem">{t('title')}</h1>
        <Container>
          <div className="career-box box block">
            <p className="title is-4 break-lines">{t('topAnnouncement')}</p>
          </div>
        </Container>
        <Section container>
          {JobOffers.map((jobOffer, i) => (
            <CareerPost data={jobOffer} key={'UKAnKxTFX' + i} index={i} />
          ))}
        </Section>
      </Container>
    </>
  );
};

export default Careers;
