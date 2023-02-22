import React, { Suspense, useEffect } from 'react';

import { Filter } from '../components/Projects/Filter';
import Gap from '../components/Bulma/Gap';
import Head from 'next/head';
import Link from 'next/link';
import LoadableImage from '../components/LoadableImage';
import { NextPage } from 'next';
import { ProjectsData } from '../lib/ProjectsData';
import { ScrollArrow } from '../components/ScrollArrow';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

let dataToRender = [];

export const filter = (query, ProjectsData) => {
  const filters = query.type ? String(query.type).split(',') : [];
  let filteredProjects = [];

  if (filters.length === 0) {
    filteredProjects = ProjectsData;
  } else {
    const types = filters.filter(
      (filter) =>
        filter !== 'projektovanje' &&
        filter !== 'nadzor-nad-izvođenjem-radova' &&
        filter !== 'fasadni-inzenjering' &&
        filter !== 'upravljanje-projektima' &&
        filter !== 'bih' &&
        filter !== 'ger' &&
        filter !== 'usa',
    );
    const services = filters.filter(
      (filter) =>
        filter === 'projektovanje' ||
        filter === 'nadzor-nad-izvođenjem-radova' ||
        filter === 'fasadni-inzenjering' ||
        filter === 'upravljanje-projektima',
    );
    const countries = filters.filter(
      (filter) => filter === 'bih' || filter === 'ger' || filter === 'usa',
    );

    ProjectsData.map((project) => {
      const typeIsMatched = project.tags.some((tag) => types.includes(tag));
      const serviceIsMatched = project.tags.some((tag) => services.includes(tag));
      const countryIsMatched = project.tags.some((tag) => countries.includes(tag));

      if (types.length && !services.length && !countries.length && typeIsMatched)
        filteredProjects.push(project);
      else if (services.length && !types.length && !countries.length && serviceIsMatched)
        filteredProjects.push(project);
      else if (countries.length && !types.length && !services.length && countryIsMatched)
        filteredProjects.push(project);
      else if (
        types.length &&
        services.length &&
        !countries.length &&
        typeIsMatched &&
        serviceIsMatched
      )
        filteredProjects.push(project);
      else if (
        types.length &&
        countries.length &&
        !services.length &&
        typeIsMatched &&
        countryIsMatched
      )
        filteredProjects.push(project);
      else if (
        services.length &&
        countries.length &&
        !types.length &&
        serviceIsMatched &&
        countryIsMatched
      )
        filteredProjects.push(project);
      else if (
        services.length &&
        countries.length &&
        types.length &&
        typeIsMatched &&
        serviceIsMatched &&
        countryIsMatched
      )
        filteredProjects.push(project);
    });
  }

  return filteredProjects;
};

const Projects: NextPage = () => {
  const { query } = useRouter();
  const locale = useTranslation('projects');

  const { t } = locale;

  dataToRender = filter(query, ProjectsData);

  return (
    <>
      <Head>
        <title>{t('common:Projekti')} | AKSA d.o.o.</title>
      </Head>
      <ScrollArrow />
      <h1 className="title is-1 has-text-centered projects-title my-4rem">
        {t('common:Projekti')}
      </h1>
      <div className="my-4rem">
        <Filter />

        {/*   <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {dataToRender.length
            ? dataToRender.map((project, i) => {
                return (
                  <div
                    className="project-card underline-hover"
                    key={'EckOLCTWX' + i}
                    data-aos="fade-up"
                    data-aos-delay={`${50 * i}`}>
                    <div className="project--card-hover has-text-centered">
                      <Link
                        href={{
                          pathname: `/projects/${encodeURIComponent(project.id)}`,
                          query: query,
                        }}>
                        <a>
                          <LoadableImage
                            className="relatedImg"
                            width="100%"
                            height="auto"
                            src={project.thumbnail.src}
                            alt={project.thumbnail.alt}
                          />
                        </a>
                      </Link>
                      <div className="project-labels title is-3"></div>

                      <Link
                        href={{
                          pathname: `/projects/${encodeURIComponent(project.id)}`,
                          query: query,
                        }}>
                        <a>
                          <h2 className="title is-2">
                            <span className="underline-span">{project.title}</span>
                          </h2>
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })
            : null}
        </Masonry>
        {dataToRender.length === 0 ? (
          <h2 className="title is-3 has-text-centered box">Nema rezultata</h2>
        ) : null}
      </div> */}
        <div className="mx-2rem">
          <div className="columns is-multiline">
            {dataToRender.length
              ? dataToRender.map((project, i) => {
                  return (
                    <div key={project.id} className="column is-4-desktop is-6-tablet">
                      <div
                        className="project-card underline-hover"
                        key={'EckOLCTWX' + i}
                        data-aos="fade-up"
                        data-aos-delay={`${50 * i}`}>
                        <div className="project--card-hover has-text-centered">
                          <Link
                            href={{
                              pathname: `/projects/${encodeURIComponent(project.id)}`,
                              query: query,
                            }}>
                            <a>
                              {/*   <LoadableImage
                                className="projectsImg"
                                width="100%"
                                height="auto"
                                src={project.thumbnail.src}
                                alt={project.thumbnail.alt}
                              /> */}

                              <img
                                className="projectPhoto"
                                width="100%"
                                src={project.thumbnail.src}
                                alt={project.thumbnail.alt}
                              />
                            </a>
                          </Link>
                          <div className="project-labels title is-3"></div>

                          <Link
                            href={{
                              pathname: `/projects/${encodeURIComponent(project.id)}`,
                              query: query,
                            }}>
                            <a>
                              <h2 className="title is-2">
                                <span className="underline-span">
                                  {t(`projects.${project.id}.title`)}
                                </span>
                              </h2>
                            </a>
                          </Link>
                          <Gap size={0.25} />
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}

            {dataToRender.length === 0 ? (
              <h2 className="title is-3 has-text-centered box">{t('common:noResults')}</h2>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

// export { dataToRender };

export async function getStaticProps({ locale }) {
  const translations = await import(`../locales/${locale}/projects.json`).then((m) => m.default);

  return { props: { translations } };
}

export default Projects;
