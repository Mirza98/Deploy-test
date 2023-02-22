import React, { useEffect } from 'react';

import { AreaIcon } from '../../components/Icons/AreaIcon';
import { Arrow } from '../../components/Icons/Arrow';
import { ArrowButton } from '../../components/Buttons/ArrowButton';
import { Breadcrumb } from '../../components/Bulma/Breadcrumb';
import { BuildingIcon } from '../../components/Icons/BuildingIcon';
import Button from '../../components/Bulma/Button';
import { CalendarIcon } from '../../components/Icons/CalendarIcon';
import Column from '../../components/Bulma/Column';
import Columns from '../../components/Bulma/Columns';
import Gap from '../../components/Bulma/Gap';
import Head from 'next/head';
import Link from 'next/link';
import { LocationIcon } from '../../components/Icons/LocationIcon';
import { NextPage } from 'next';
import { ProjectsData } from '../../lib/ProjectsData';
import { RelatedProjects } from '../../components/RelatedProjects';
import { ScrollArrow } from '../../components/ScrollArrow';
import { ServiceIcon } from '../../components/Icons/ServiceIcon';
import { ShareButtons } from '../../components/Buttons/ShareButtons';
import { filter } from '../projects';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { useWindowSize } from '../../hooks/useWindowSize';

const ProjectPage: NextPage<any> = ({
  imgs,
  id,
  type,
  services,
  title,
  location,
  area,
  client,
  description,
  tags,
  video,
  year,
}) => {
  let { t } = useTranslation('projects');
  const { query, back } = useRouter();
  const BreadcrumbProjectItems = [
    { label: t('common:Projekti'), href: '/projects' },
    { label: t(`projects.${id}.title`), href: `/projects/${id}` },
  ];

  const windowSize = useWindowSize();

  let relatedData = filter(query, ProjectsData);

  const projectNavigator = (id: string, direction: string) => {
    const indexOfCurrentProject = relatedData.findIndex((project) => project.id === id);
    if (direction === 'left' && indexOfCurrentProject > 0)
      return relatedData[indexOfCurrentProject - 1].id;
    if (direction === 'right' && indexOfCurrentProject + 1 < relatedData.length)
      return relatedData[indexOfCurrentProject + 1].id;
  };

  const handleWindowSize = (windowSize: { width: number; height: number }) => {
    if (windowSize.height && windowSize.height <= 768) return 'font-size:13px';
    else if (windowSize.height && windowSize.height <= 768 && windowSize.width >= 1023)
      return 'font-size:12px';
    else if (
      windowSize.height &&
      windowSize.height > 600 &&
      windowSize.height < 930 &&
      windowSize.width >= 1023
    )
      return 'font-size:13px';
  };

  return (
    <>
      <Head>
        <title>{t('common:Projekti')} | AKSA d.o.o.</title>
      </Head>
      <style global jsx>{`
        html {
          ${handleWindowSize(windowSize)};
        }
      `}</style>
      <ScrollArrow />

      <div className="single-project-page">
        <div className="is-flex mobile-is-justify-content-center is-align-items-center mx-2rem-mobile mr-0">
          <ArrowButton onClickHandler={() => back()} />
          <Breadcrumb
            items={BreadcrumbProjectItems}
            className="is-size-6 has-text-weight-medium is-align-self-center ml-4"
          />
        </div>
        <Columns className="is-desktop is-flex reverse my-1 has-text-centered">
          <Column className="is-12 is-8-desktop">
            <Columns multiline>
              {video && (
                <Column className="video-column">
                  <video width="100%" height="auto" preload="auto" playsInline={true} controls loop>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                </Column>
              )}

              {imgs.map((img, i) => (
                <Column key={'yH3-SLKMM' + i} className="p-0-mobile is-12">
                  {/*    <LoadableImage
                    className="projectPhoto"
                    width="100%"
                    src={img.src}
                    alt={img.alt}
                  /> */}
                  <img width="100%" height="auto" src={img.src} alt={img.alt} />
                </Column>
              ))}
              <Column>
                <div className="is-flex is-justify-content-space-between px-3">
                  <Button
                    key="left"
                    className={`is-shadowless read-more-button ${
                      relatedData.length !== 0 &&
                      relatedData.findIndex((project) => project.id === id) !== 0
                        ? ''
                        : 'is-invisible'
                    }`}>
                    <Link
                      href={{
                        pathname: `/projects/${projectNavigator(id, 'left')}`,
                        query: { type: query.type },
                      }}>
                      <a className="is-flex is-align-items-center">
                        <Arrow className="arrow-button-left-project is-flex is-align-items-center" />
                        <span className="size-is-4 has-text-weight-bold ml-2">
                          {t('previousProject')}
                        </span>
                      </a>
                    </Link>
                  </Button>
                  <Button
                    key="right"
                    className={`is-shadowless read-more-button ${
                      relatedData.length !== 0 &&
                      relatedData.findIndex((project) => project.id === id) !==
                        relatedData.length - 1
                        ? ''
                        : 'is-invisible'
                    }`}>
                    <Link
                      href={{
                        pathname: `/projects/${projectNavigator(id, 'right')}`,
                        query: { type: query.type },
                      }}>
                      <a className="size-is-4 is-flex is-align-items-center">
                        <span className="has-text-weight-bold mr-2">{t('nextProject')}</span>
                        <Arrow className="is-flex is-align-items-center" />
                      </a>
                    </Link>
                  </Button>
                </div>
                <RelatedProjects
                  tags={tags[0]}
                  className="related-projects-single-project"
                  projectId={id}
                />
              </Column>
            </Columns>
          </Column>
          <Column size={4} className="p-0-mobile project-overview-column is-12 is-4-desktop">
            <div className="box project-overview sticky animated fadeInRight">
              {type && type.length ? (
                <h3 className="title is-3 is-uppercase">{t(`projects.${id}.type`)}</h3>
              ) : null}
              <h2 className="title is-2">{t(`projects.${id}.title`)}</h2>

              <div className="py-5">
                {location?.length ? (
                  <div className="project-overview__item">
                    <LocationIcon />
                    <div className="project-overview__item-label">
                      <p className="title is-6 is-uppercase">{t(`location`)}</p>
                      <p className="title is-7">{t(`projects.${id}.location`)}</p>
                    </div>
                  </div>
                ) : null}

                {area?.length ? (
                  <div className="project-overview__item">
                    <AreaIcon />

                    {typeof area !== typeof [] ? (
                      <div className="project-overview__item-label">
                        <p className="title is-6 is-uppercase">{t(`areaLabel`)}</p>
                        <p
                          className="title is-7"
                          dangerouslySetInnerHTML={{ __html: t(`projects.${id}.area`) }}>
                          {/* {t(`projects.${id}.area`)} */}
                        </p>{' '}
                      </div>
                    ) : (
                      area.map((ar, i) => (
                        <div key={'uxL4BiSO' + i} className="project-overview__item-label">
                          <p className="title is-6 is-uppercase">
                            {t(`projects.${id}.area.${i}.label`)}
                          </p>
                          <p className="title is-7" dangerouslySetInnerHTML={{ __html: ar.value }}>
                            {/* ar.value */}
                            {/* m<sup>2</sup> */}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                ) : null}
                {console.log({ id })}
                {year?.length ? (
                  <div className="project-overview__item">
                    <CalendarIcon />
                    <div className="project-overview__item-label">
                      <p className="title is-6 is-uppercase">{t(`date`)}</p>
                      <p className="title is-7">{t(`projects.${id}.date`)}</p>
                    </div>
                  </div>
                ) : null}
                {client.length ? (
                  <div className="project-overview__item">
                    <BuildingIcon />
                    <div className="project-overview__item-label">
                      <p className="title is-6 is-uppercase">{t(`client`)}</p>
                      <p className="title is-7">{t(`projects.${id}.client`)}</p>
                    </div>
                  </div>
                ) : null}

                <div className="project-overview__item">
                  <ServiceIcon />
                  <div className="project-overview__item-label">
                    <p className="title is-6 is-uppercase">{t(`service`)}</p>
                    <p className="title is-7">
                      {services.map(
                        (service, i) =>
                          `${i === 0 ? '' : ', '}${t(`projects.${id}.services.${i}`)}`,
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="block project-overview__description">
                {t(`projects.${id}.description`)
                  .split('\n')
                  .map((p, i) => {
                    return (
                      <div key={'KrGkxm0kP' + i}>
                        <p>{p}</p>
                        <Gap size={0.25} />
                      </div>
                    );
                  })}
              </div>
              <Gap />
              <div className="is-flex is-align-items-center">
                <h4 className="title is-4 mb-0 mr-5 share-label">{t('common:Podijeli')}:</h4>
                <ShareButtons color={'#06f'} className="project-social-buttons mb-0" />
              </div>
            </div>
          </Column>
        </Columns>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const data = ProjectsData.find((item) => item.id === params.id);
  const translations = await import(`../../locales/${context.locale}/projects.json`).then(
    (m) => m.default,
  );
  return {
    props: { ...data, ...translations },
  };
}

export async function getStaticPaths({ locales }) {
  const paths = [];

  locales.forEach((locale, i) => {
    ProjectsData.forEach((project, i) => {
      paths.push({ params: { id: project.id }, locale });
    });
  });
  return { paths, fallback: false };
}

export default ProjectPage;
