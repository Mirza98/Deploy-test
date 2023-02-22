import { ArrowButton } from '../../components/Buttons/ArrowButton';
import { BlogData } from '../../lib/BlogData';
import { Breadcrumb } from '../../components/Bulma/Breadcrumb';
import Gap from '../../components/Bulma/Gap';
import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';
import { ScrollArrow } from '../../components/ScrollArrow';
import Section from '../../components/Bulma/Section';
import { ShareButtons } from '../../components/Buttons/ShareButtons';
import useTranslation from 'next-translate/useTranslation';
import { useWindowSize } from '../../hooks/useWindowSize';

const BlogPage: NextPage<any> = ({ imgUrl, title, date, content, tags, slug, index }) => {
  const windowSize = useWindowSize();
  let { t } = useTranslation('blog');
  const BreadcrumbBlogItems = [
    { label: 'Blog', href: '/blog' },
    { label: t(`stories.${index}.title`), href: `/blog/${slug}` },
  ];

  return (
    <>
      <Head>
        <title>{t(`stories.${index}.title`)} | AKSA d.o.o</title>
      </Head>
      <header
        style={{
          height: `${windowSize.height < 768 ? '90vh' : '70vh'}`,
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(245, 246, 252, 0.12),
            rgba(0, 0, 0, 0.73)
          ),url("${imgUrl}")`,
        }}
        className="single-blog-page__header">
        <Section className="p-0-mobile" container>
          <ScrollArrow />
          <div className="is-flex is-align-items-center mb-5 blog-item-breadcrumb">
            <ArrowButton
              href={`/blog#${slug}`}
              arrowColor="white"
              className="arrow-button-left has-text-white blog-arrow-button-left"
            />
            <Breadcrumb
              items={BreadcrumbBlogItems}
              className="blog-breadcrumb has-text-white has-text-weight-medium is-align-self-center ml-0-mobile ml-3-desktop"
            />
          </div>
          <h3 className="title is-3 blog-item-date is-uppercase">{date}</h3>
          <h2 className="title is-2 blog-item-title">{t(`stories.${index}.title`)}</h2>
        </Section>
      </header>

      <Section container className="py-0 my-4rem">
        {t(`stories.${index}.content`)
          .split('\n')
          .map((text, innerIndex) => (
            <p className="block" key={'9K_dItFdV' + innerIndex}>
              {text}
            </p>
          ))}
      </Section>
      <Section className="py-6 has-grey-background" container>
        <h4 className="title is-4 tags-label">{t('common:Tagovi')}:</h4>
        <div className="tags">
          {tags.map((tag, innerIndex) => (
            <span key={'1SoPUY_At' + innerIndex} className="tag is-size-7">
              {t(`stories.${index}.tags.${innerIndex}`)}
            </span>
          ))}
        </div>
        <Gap size={1.25} />
        <div className="is-flex is-align-items-center">
          <h4 className="title is-4 m-0 mr-5 share-label">{t('common:Podijeli')}:</h4>
          <ShareButtons />
        </div>
      </Section>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const data = BlogData.find((item, i) => {
    return item.slug === params.slug;
  });

  console.log({slug: params.slug, data});

  const storyIndex = BlogData.findIndex((item) => item.slug === params.slug);

  return {
    props: { ...data, index: storyIndex },
  };
}

export async function getStaticPaths({ locales }) {
  const paths = [];

  locales.forEach((locale, i) => {
    BlogData.forEach((post, i) => {
      paths.push({ params: { slug: post.slug }, locale });
    });
  });

  return { paths, fallback: false };
}

export default BlogPage;
