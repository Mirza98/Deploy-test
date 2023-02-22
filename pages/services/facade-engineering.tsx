import Column from '../../components/Bulma/Column';
import Columns from '../../components/Bulma/Columns';
import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';
import { RelatedProjects } from '../../components/RelatedProjects';
import Section from '../../components/Bulma/Section';
import { ServicesPageData } from '../../lib/ServicesPageData';
import useTranslation from 'next-translate/useTranslation';

const FacadeEngineering: NextPage = () => {
  let { t } = useTranslation('facade-engineering');
  const { fasadeEngeenering } = ServicesPageData;
  return (
    <>
      <Head>
        <title>{t('title')} | AKSA d.o.o</title>
      </Head>
      <Section container className="py-0">
        <h1 className="title is-1 has-text-centered my-4rem">{t('title')}</h1>
        <Columns multiline className="py-0 my-4rem is-tablet">
          <Column className="is-6-tablet is-8-widescreen is-7-widescreen-only has-text-justified-tablet">
            {fasadeEngeenering.content.map((item, i) => (
              <div key={i}>
                <h3 className="title is-3 is-uppercase no-letter-spacing mb-4">
                  {t(`fasadeEngeenering.content.${i}.title`)}
                </h3>
                <ul>
                  <li className="has-text-weight-normal mb-5" key={'Ip9rwqPiriv' + i}>
                    {t(`fasadeEngeenering.content.${i}.body`)}
                  </li>
                </ul>
              </div>
            ))}
          </Column>
          <Column className="is-6-tablet is-4-widescreen is-5-widescreen-only has-text-centered-touch has-text-right-desktop">
            <img
              className="services-photo"
              src="/slike/fasadni-inzenjering.jpeg"
              alt="our team on project"></img>
          </Column>
        </Columns>
      </Section>
      <RelatedProjects typeOf="service" projectsIds={[34, 36]} tags={['fasadni-inzenjering']} />
    </>
  );
};

export default FacadeEngineering;
