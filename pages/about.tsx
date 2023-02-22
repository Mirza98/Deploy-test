import Column from '../components/Bulma/Column';
import Columns from '../components/Bulma/Columns';
import Container from '../components/Bulma/Container';
import Gap from '../components/Bulma/Gap';
import Head from 'next/head';
import Link from 'next/link';
import { NextPage } from 'next';
import React from 'react';
import { ReadMoreButton } from '../components/Buttons/ReadMoreButton';
import Section from '../components/Bulma/Section';
import useTranslation from 'next-translate/useTranslation';

const About: NextPage = () => {
  let { t } = useTranslation('about');

  return (
    <>
      <Head>
        <title>{t('common:O nama')} | AKSA d.o.o.</title>
      </Head>
      <header className="about-header fade-in">
        <h1 className="title is-1 has-text-centered">{t('title')}</h1>
      </header>
      <Section container className="my-2rem">
        <Columns multiline>
          <Column xs={12} md={6} className="is-flex is-flex-direction-column">
            {t('content')
              .split('\n')
              .map((p, i) => {
                return (
                  <React.Fragment key={i}>
                    <p>{p}</p>
                    <Gap size={0.25} />
                  </React.Fragment>
                );
              })}
          </Column>
          <Column className="has-text-centered is-inline-flex">
            <img
              className="img-about-page"
              src="/slike/o-nama2.jpeg"
              alt="working in group photo"
            />
          </Column>
        </Columns>
      </Section>

      <Container>
        <Section className="is-small">
          <h2 id="quote" className="title is-2 m-4">
            {t('quote')}
          </h2>
        </Section>
        <Link href="/team">
          <div style={{ cursor: 'pointer' }}>
            <Section className="team-section my-4rem">
              <h2 className="title is-2 mb-5">{t('ourTeam')}</h2>
              <div className="is-flex is-justify-content-flex-start">
                <ReadMoreButton
                  arrowColor="white"
                  className="read-more-button-team"
                  href={'/team'}
                />
              </div>
            </Section>
          </div>
        </Link>
      </Container>
    </>
  );
};

export default About;
