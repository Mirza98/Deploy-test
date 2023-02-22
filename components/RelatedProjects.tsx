import React, { FC } from 'react';
import projects, { filter } from '../pages/projects';

import Column from './Bulma/Column';
import Columns from './Bulma/Columns';
import Gap from './Bulma/Gap';
import Link from 'next/link';
import LoadableImage from './LoadableImage';
import { ProjectsData } from '../lib/ProjectsData';
import Section from './Bulma/Section';
import useTranslation from 'next-translate/useTranslation';

export interface RelatedProjectsProps {
  tags?: string[];
  className?: string;
  projectId?: number;
  typeOf?: 'type' | 'service';
  projectsIds?: number[];
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const ShuffledData = [...ProjectsData];
shuffle(ShuffledData);

const RelatedProjects: FC<RelatedProjectsProps> = ({
  tags,
  className,
  projectId = 1,
  typeOf,
  projectsIds = [],
}) => {
  const filteredData = filter({ type: tags }, ShuffledData).filter(
    (project) => project.id !== projectId,
  );

  let dataToRender = [];

  if (typeOf === 'service' && projectsIds.length > 0) {
    dataToRender.push(ProjectsData.find((project) => +project.id == projectsIds[0]));
    dataToRender.push(ProjectsData.find((project) => +project.id == projectsIds[1]));
  } else dataToRender = filteredData.slice(0, 2);

  let { t } = useTranslation('projects');

  return dataToRender.length !== 0 ? (
    <>
      <Section container className={`is-flex related-projects mt-6 ${className}`}>
        <h1 className="title is-1 mb-6 has-text-centered">{t('common:relatedProjects')}</h1>
        <Columns className="is-centered">
          {dataToRender.map((project, i) => {
            return (
              <Column className="is-6" key={'4wG3LbgBH' + i}>
                <div className="card has-text-centered is-shadowless underline-hover">
                  <div className="card-image">
                    <Link
                      href={{
                        pathname: `/projects/${project.id}`,
                        query: { type: typeOf !== 'service' ? project.tags[0] : tags[0] },
                      }}>
                      <a>
                        {/*  <LoadableImage
                          className="relatedImg"
                          src={project.thumbnail.src}
                          alt={project.thumbnail.alt}
                          width="100%"
                          height="100%"
                        /> */}
                        <img
                          className="relatedImg"
                          width="100%"
                          src={project.thumbnail.src}
                          alt={project.thumbnail.alt}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="related-projects__body">
                    {/* <div className="project-labels title is-3">
                  <div className="project-labels__type ">
                    <Link
                      href={{
                        pathname: `/projects/${project.id}`,
                        query: {
                          type: project.type.split(' ').join('-').split('/').join('-'),
                        },
                      }}>
                      <a>{project.type}</a>
                    </Link>
                  </div>
                  <span className="project-labels__divider">/</span>
                  <div className="project-labels__service">
                    <Link
                      href={{
                        pathname: `projects/`,
                        query: {
                          type:
                            project.services[0] === 'fasadni inženjering'
                              ? 'fasadni-inzenjering'
                              : project.services[0],
                        },
                      }}>
                      <a>{project.services[0]}</a>
                    </Link>
                  </div>
                </div>
*/}
                    <Link
                      href={{
                        pathname: `/projects/${project.id}`,
                        query: { type: typeOf !== 'service' ? project.tags[0] : tags[0] },
                      }}>
                      <a>
                        <h2 className="title is-2">
                          <span className="underline-span">
                            {t(`projects.${project.id}.title`)}
                          </span>
                        </h2>
                      </a>
                    </Link>
                  </div>
                </div>
              </Column>
            );
          })}
        </Columns>
      </Section>
      <Gap size={4} />
    </>
  ) : (
    <Gap size={4} />
  );
};

export { RelatedProjects };
