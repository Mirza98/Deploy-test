import Box from '../../components/Bulma/Box';
import Column from '../../components/Bulma/Column';
import Columns from '../../components/Bulma/Columns';
import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';
import { RelatedProjects } from '../../components/RelatedProjects';
import Section from '../../components/Bulma/Section';
import { ServicesPageData } from '../../lib/ServicesPageData';
import useTranslation from 'next-translate/useTranslation';

const Supervision: NextPage = () => {
  let { t } = useTranslation('supervision');

  const { supervision } = ServicesPageData;

  return (
    <>
      <Head>
        <title>{t('title')} | AKSA d.o.o</title>
      </Head>
      <Section container className="py-0">
        <h1 className="title is-1 has-text-centered my-4rem">{t('title')}</h1>
        <Columns multiline className="py-0 my-4rem is-tablet">
          <Column className="is-6-tablet is-8-widescreen is-7-widescreen-only is-flex is-flex-direction-column is-justify-content-space-between has-text-justified-tablet">
            <p className="designing-block">{t('p1')}</p>

            <Box>
              <Columns>
                <Column>
                  <ul className="dashed">
                    {supervision.serviceDescriptionList.map((item, i) => {
                      return (
                        <li className="title is-4 mb-4" key={'Ip9rPniriv' + i}>
                          {t(`supervision.serviceDescriptionList.${i}`)}
                        </li>
                      );
                    })}
                  </ul>
                </Column>
              </Columns>
            </Box>
          </Column>
          <Column className="is-6-tablet is-4-widescreen is-5-widescreen-only has-text-centered-touch has-text-right-desktop">
            <img
              className="services-photo"
              src="/slike/nadzor.jpeg"
              alt="our team on project"></img>
          </Column>
        </Columns>
      </Section>
      <RelatedProjects
        typeOf="service"
        projectsIds={[6, 19]}
        tags={['nadzor-nad-izvođenjem-radova']}
      />
    </>
  );
};

export const Services = {
  arhitecture: {
    label: 'Arhitektura',
    list: [
      'Idejna rješenja',
      'Glavni projekti',
      'Izvedbeni projekti',
      'Projekti izvedenog stanja',
      'Projekti sanacija, rekonstrukcija i restauracija',
      'Projekti enterijera',
    ],
  },
  construction: {
    label: 'Konstrukcije',
    list: [
      'Idejni projekti konstrukcije',
      'Glavni i izvedbeni projekti armirano- betonskih,čeličnih i drvenih konstrukcija.',
      'Izrada nacrta izvedbenih detalja čeličnih, armirano-betonskih i drvenih konstrukcija',
      'Projekti sanacija i rekonstrukcija',
      'Stručni pregledi, procjene i mišljenje',
    ],
  },
};

export default Supervision;
