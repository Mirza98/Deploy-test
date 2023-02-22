import React, { FC } from 'react';
import { aboutMenu, projectsMenu, servicesMenu } from '../../lib/Navigations';

import { ArrowButton } from '../Buttons/ArrowButton';
import { Breadcrumb } from '../Bulma/Breadcrumb';
import Column from '../Bulma/Column';
import Columns from '../Bulma/Columns';
import Link from 'next/link';
import { Logo } from './Logo';
import Section from '../Bulma/Section';
import { SocialButtons } from '../Buttons/SocialButtons';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

export const isOverlay = ['/', '/about', '/team', '/blog/[slug]'];

export interface HeaderProps {
  onClick?: Function;
}

const Header: FC<HeaderProps> = ({ onClick }) => {
  let InitMenuState = {};
  InitMenuState[projectsMenu.label] = true;
  /*   InitMenuState[servicesMenu.label] = true;
  InitMenuState[aboutMenu.label] = true; */
  const [isActive, setActive] = React.useState(false);
  const [displayMenu, setDisplayMenu] = React.useState(InitMenuState);
  const router = useRouter();
  let { t } = useTranslation('common');

  const langs = [
    {
      href: router.asPath,
      label: 'Bos',
      locale: 'bs',
    },
    {
      href: router.asPath,
      label: 'Eng',
      locale: 'en',
    },
  ];

  const handleCloseMenu = () => {
    setActive(false);
    onClick(false, true);
  };

  return (
    <>
      <header className={`header ${isOverlay.includes(router.pathname) ? 'is-absolute' : ''}`}>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Logo
              src={
                isOverlay.includes(router.pathname) && !isActive
                  ? '/assets/logos/logo-white.svg'
                  : '/assets/logos/logo-black.svg'
              }
              onClick={handleCloseMenu}
            />
          </div>
          <div className="navbar-menu is-active">
            <div className="navbar-end is-flex is-align-items-center">
              {
                <Breadcrumb
                  items={langs}
                  className={`is-flex is-align-items-center ${
                    isOverlay.includes(router.pathname) && !isActive
                      ? 'langs-breadcrumb-overlay'
                      : 'langs-breadcrumb'
                  }`}
                />
              }

              <a
                role="button"
                className={`navbar-burger is-block ${isActive ? 'is-active' : ''} ${
                  isOverlay.includes(router.pathname) && !isActive ? 'navbar-burger-overlay' : ''
                }`}
                aria-label="menu"
                aria-expanded="true"
                data-target="navMenu"
                onClick={() => {
                  {
                    onClick(true, false);
                    setActive(!isActive);
                  }
                }}>
                <span aria-hidden="false"></span>
                <span aria-hidden="false"></span>
                <span aria-hidden="false"></span>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className={`navmenu ${isActive ? 'showNavbarMenu' : ''}`}>
        <Section container>
          <Columns className="is-flex-tablet is-justify-content-space-evenly">
            <Column className="is-narrow">
              <div className={`navigation ${displayMenu[projectsMenu.label] ? 'is-active' : ''}`}>
                <div className="navigation__label title is-3 is-uppercase is-relative">
                  <Link href="/projects">
                    <span
                      onClick={() => {
                        onClick(false, true);
                        setActive(!isActive);
                      }}
                      style={{ cursor: 'pointer' }}>
                      {t(projectsMenu.label)}
                    </span>
                  </Link>
                  <span
                    className="dropdown-arrow-toggler arrow-button-mobile"
                    onClick={() =>
                      setDisplayMenu({
                        [projectsMenu.label]: !displayMenu[projectsMenu.label],
                      })
                    }>
                    <ArrowButton />
                  </span>
                </div>

                <ul className="navigation__list">
                  {projectsMenu.items.map((item, i) => (
                    <li
                      key={'JjcqGcAJV' + i}
                      className={`navigation__list-item underline-hover title is-2`}>
                      <Link href={item.href}>
                        <a
                          onClick={() => {
                            onClick(false, true);
                            setActive(!isActive);
                          }}>
                          <span className="underline-span">{t(item.label)}</span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Column>
            <Column className="is-narrow ">
              <div className={`navigation ${displayMenu[servicesMenu.label] ? 'is-active' : ''}`}>
                <div className="navigation__label title is-3 is-uppercase is-relative">
                  {t(servicesMenu.label)}
                  <span
                    className="dropdown-arrow-toggler arrow-button-mobile"
                    onClick={() =>
                      setDisplayMenu({
                        [servicesMenu.label]: !displayMenu[servicesMenu.label],
                      })
                    }>
                    <ArrowButton />
                  </span>
                </div>

                <ul className="navigation__list">
                  {servicesMenu.items.map((item, i) => (
                    <li
                      key={'bEVOd5QtW' + i}
                      className={`navigation__list-item underline-hover title is-2`}>
                      <Link href={item.href}>
                        <a
                          onClick={() => {
                            onClick(false, true);
                            setActive(!isActive);
                          }}>
                          <span className="underline-span">{t(item.label)}</span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Column>
            <Column className="is-narrow ">
              <div className={`navigation ${displayMenu[aboutMenu.label] ? 'is-active' : ''}`}>
                <div className="navigation__label title is-3 is-uppercase is-relative">
                  {t(`${aboutMenu.label}`)}
                  <span
                    className="dropdown-arrow-toggler arrow-button-mobile"
                    onClick={() =>
                      setDisplayMenu({
                        [aboutMenu.label]: !displayMenu[aboutMenu.label],
                      })
                    }>
                    <ArrowButton />
                  </span>
                </div>

                <ul className="navigation__list">
                  {aboutMenu.items.map((item, i) => (
                    <li
                      key={'Jeqk_oei5' + i}
                      className={`navigation__list-item underline-hover title is-2`}>
                      <Link href={item.href}>
                        <a
                          onClick={() => {
                            onClick(false, true);
                            setActive(!isActive);
                          }}>
                          <span className="underline-span">{t(item.label)}</span>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Column>
          </Columns>
        </Section>
        <SocialButtons className="is-hidden-desktop p-3" />
      </div>
    </>
  );
};

export { Header };
