import { BlogItemList } from '../components/Blog/BlogItemList';
import Head from 'next/head';
import { NextPage } from 'next';
import React from 'react';
import { ScrollArrow } from '../components/ScrollArrow';
import useTranslation from 'next-translate/useTranslation';

const Blog: NextPage = () => {
  let { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t('Naše priče')} | AKSA d.o.o.</title>
      </Head>
      <div>
        <ScrollArrow />
        <h1 id="blog-title" className="title is-1 has-text-centered my-4rem">
          {t('Naše priče')}
        </h1>
        <BlogItemList />
      </div>
    </>
  );
};

export default Blog;
