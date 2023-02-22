import { AksaTeam } from '../lib/TeamData';
import Column from '../components/Bulma/Column';
import Columns from '../components/Bulma/Columns';
import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';
import Section from '../components/Bulma/Section';
import { TeamMembers } from '../components/TeamMembers';
import useTranslation from 'next-translate/useTranslation';

const Team: NextPage = () => {
  const { t } = useTranslation('team');
  return (
    <>
      <Head>
        <title>{t('title')} | AKSA d.o.o.</title>
      </Head>
      <header className="team-header fade-in">
        <h1 className="title is-1">{t('title')}</h1>
      </header>
      <Section container id="team-list">
        <div data-aos="fade-up" data-aos-duration="500">
          <TeamMembers members={AksaTeam} />
        </div>
      </Section>
    </>
  );
};

export default Team;
