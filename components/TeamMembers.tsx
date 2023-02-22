import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

import Column from './Bulma/Column';
import Columns from './Bulma/Columns';
import Container from './Bulma/Container';
import Section from './Bulma/Section';

export interface Member {
  name: string;
  img?: { src: string; alt: string; width: number; height: number };
  title?: string;
  position?: string;
  titleEn?: string;
  positionEn?: string;
}

export interface TeamMembersProps {
  members: Member[];
  className?: string;
}

const TeamMembers: FC<TeamMembersProps> = ({ members, className }) => {
  const { lang } = useTranslation();

  console.log(lang);

  return (
    <Columns multiline>
      {members.map((member, i) => {
        return (
          <Column key={'ah5O3dXiB' + i} className="is-4-desktop is-6-tablet">
            <div className={`${className} member-card`}>
              {member.img ? (
                <div className="member-card__image">
                  <img
                    src={member.img.src}
                    alt={member.img.alt}
                    width={member.img.width}
                    height={member.img.height}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              ) : null}
              <div className="member-card__body">
                <div className="is-flex is-align-items-baseline is-flex-wrap-wrap">
                  <h2 className="title is-2 mr-2 letter-spacing">{member.name}</h2>
                  <span className="title is-4 mt-2">
                    {lang === 'en' ? member.titleEn : member.title}
                  </span>
                </div>

                <h3 className="title mt-2 is-3">
                  {lang === 'en' ? member.positionEn : member.position}
                </h3>
              </div>
            </div>
          </Column>
        );
      })}
    </Columns>
  );
};

export { TeamMembers };
