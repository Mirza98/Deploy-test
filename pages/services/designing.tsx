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

const Designing: NextPage = () => {
  let { t } = useTranslation('designing');
  const { designing } = ServicesPageData;
  return (
    <>
      <Head>
        <title>{t('title')} | AKSA d.o.o</title>
      </Head>
      <Section container className="py-0">
        <h1 className="title is-1 has-text-centered my-4rem">{t('title')}</h1>
        <Columns multiline className="py-0 my-4rem is-tablet">
          <Column className="is-6-tablet is-8-widescreen is-7-widescreen-only has-text-justified-tablet">
            <p className="designing-block">{t('designing:p1')}</p>
            <p className="designing-block">{t('p2')}</p>
            <p className="designing-block">{t('p3')}</p>
            <p className="designing-block">{t('p4')}</p>
          </Column>
          <Column className="is-6-tablet is-4-widescreen is-5-widescreen-only">
            <img
              className="services-photo"
              src="/slike/projektovanje.jpeg"
              alt="our team on project"></img>
          </Column>
        </Columns>

        <Box>
          <Columns>
            {designing.serviceDescriptionLists.map((list, i) => (
              <Column key={i}>
                <h3 className="title is-3 is-uppercase no-letter-spacing">
                  {t(`designing.serviceDescriptionLists.${i}.title`)}
                </h3>
                <ul className="dashed">
                  {list.body.map((service, innerIndex) => {
                    return (
                      <li className="title is-4 mb-4" key={'Ip9rPirwiv' + i}>
                        {`${t(`designing.serviceDescriptionLists.${i}.body.${innerIndex}`)}`}
                      </li>
                    );
                  })}
                </ul>
              </Column>
            ))}
          </Columns>
        </Box>
      </Section>
      <RelatedProjects typeOf="service" projectsIds={[6, 1]} tags={['projektovanje']} />
    </>
  );
};

export default Designing;
