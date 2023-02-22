import React, { FC } from 'react';

import Gap from '../Bulma/Gap';
import Link from 'next/link';
import { ReadMoreButton } from '../Buttons/ReadMoreButton';
import Section from '../Bulma/Section';
import useTranslation from 'next-translate/useTranslation';

export interface BlogItemProps {
  imgUrl: string;
  date: string;
  title: string;
  contentSum?: string;
  projectValue?: string;
  slug?: string;
  index: number;
}

const BlogItem: FC<BlogItemProps> = ({
  imgUrl,
  title,
  date,
  contentSum = '',
  projectValue = '',
  slug,
  index,
}) => {
  const { t } = useTranslation('blog');
  return (
    <Section className="p-0 my-4rem">
      <div className="cover-blog-photo">
        <Link href={`/blog/${slug}`}>
          <a>
            <img
              src={imgUrl}
              alt="Project cover photo"
              style={{ objectFit: 'cover', width: '100%', height: '100%', objectPosition: 'top' }}
            />
          </a>
        </Link>
      </div>
      <div id={slug} className="back-to-position"></div>
      <Section container>
        <p className="title is-7 has-text-centered">{date}</p>
        <h2 className="title is-2  has-text-centered">
          {t(`stories.${index}.title`)
            .split('\n')
            .map((text, i) => {
              return <p key={'hmN-k-XVq' + i}>{text}</p>;
            })}
        </h2>

        <p className="block">{t(`stories.${index}.contentSum`)}</p>
        {projectValue && projectValue.length && (
          <p className="block">{t(`stories.${index}.projectValue`)}</p>
        )}

        <Gap />
        <div className="is-flex justify-is-align-content-flex-start">
          <ReadMoreButton href={`/blog/${slug}`} />
        </div>
      </Section>
    </Section>
  );
};

export { BlogItem };
