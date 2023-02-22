import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { Header } from './Header';
import { Footer } from './Footer';

export interface LayoutProps {
  children?: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const noFooter = ['/', '/en', '/bs'];
  const [showPage, setShowPage] = React.useState(true);

  const onClickHandler = (burger: boolean, link: boolean) => {
    if (burger) setShowPage(!showPage);
    if (link) setShowPage(true);
  };

  return (
    <>
      <Header onClick={onClickHandler} />

      <div className={showPage ? '' : 'is-hidden'}>
        <div style={{ maxWidth: 3840, marginLeft: 'auto', marginRight: 'auto' }}>{children}</div>
        {noFooter.includes(router.asPath) ? null : <Footer />}
      </div>
    </>
  );
};

export { Layout };
