import { Countries, ServiceMenuFilter, projectsMenu } from '../../lib/Navigations';
import React, { FC, useState } from 'react';

import { ArrowButton } from '../Buttons/ArrowButton';
import { CloseIcon } from '../Icons/CloseIcon';
import Column from '../Bulma/Column';
import Columns from '../Bulma/Columns';
import Gap from '../Bulma/Gap';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const list1 = [];
const list2 = [];

for (let i = 0; i < projectsMenu.items.length; i++)
  if (i < 5) list1.push(projectsMenu.items[i]);
  else list2.push(projectsMenu.items[i]);

const Filter: FC = () => {
  const [displayFilters, setDisplayFilters] = useState(true);
  let InitMenuState = {};
  InitMenuState[projectsMenu.label] = true;
  /*   InitMenuState[ServiceMenuFilter.label] = true;
  InitMenuState[aboutMenu.label] = true; */

  const [displayMenu, setDisplayMenu] = useState(InitMenuState);
  const router = useRouter();
  let { t } = useTranslation('common');

  const filters = router.query.type ? String(router.query.type).split(',') : [];

  const handleFilter = (filter: string, action: 'add' | 'remove' = null) => {
    const newFilters =
      action === 'remove' ? filters.filter((i) => i != filter) : [...filters, filter];

    router
      .push({
        pathname: router.pathname,
        query: { ...router.query, type: newFilters.join(',') },
      })
      .then(() => window.scrollTo(0, 280));
  };

  return (
    <div className="mx-2rem py-5">
      <div className="is-flex is-align-items-center">
        <button
          className="button filter-button is-shadowless p-1 m-0 mr-2"
          onClick={() => setDisplayFilters(!displayFilters)}>
          <img src="/assets/icons/filter-icon.svg" alt="filter icon" />
        </button>
        <label className="title is-4 m-0">{t('Filtriraj')}</label>
      </div>
      <Gap />
      <Columns variable gap={0} className={displayFilters ? '' : 'is-hidden'}>
        <Column>
          <div className={`filter-menu ${displayMenu[projectsMenu.label] ? 'is-active' : ''}`}>
            <h3 className="title is-3 border-bottom mb-4 pb-4 is-uppercase filter-label-heading is-relative">
              {t('Tipovi')}
              <span
                className="dropdown-arrow-toggler filters-toggler arrow-button-mobile"
                onClick={() =>
                  setDisplayMenu({
                    [projectsMenu.label]: !displayMenu[projectsMenu.label],
                  })
                }>
                <ArrowButton />
              </span>
            </h3>
            <div className="filters">
              <ul className="filter-list filter-list-1 ">
                {list1.map((item, i) => (
                  <li
                    key={'WsGcppH7T' + i}
                    className="button title is-4 is-flex is-align-items-center">
                    <div
                      className={`underline-hover ${
                        filters.includes(item.tag) ? 'underline' : ''
                      }`}>
                      <span
                        className={`is-block filter-label ${
                          filters.includes(item.tag) ? 'underline' : ''
                        }`}
                        onClick={() => {
                          if (!filters.includes(item.tag)) {
                            handleFilter(item.tag);
                          }
                        }}>
                        {t(item.label)}
                      </span>
                    </div>
                    <button
                      className={`button is-shadowless ${
                        filters.includes(item.tag) ? '' : 'is-hidden'
                      }`}
                      onClick={() => {
                        handleFilter(item.tag, 'remove');
                      }}>
                      <CloseIcon />
                    </button>
                  </li>
                ))}
              </ul>

              <ul className="filter-list filter-list-2 ">
                {list2.map((item, i) => (
                  <li
                    key={'1H6ac6DrU' + i}
                    className="button title is-4 mr-3 is-flex is-align-items-center">
                    <div
                      className={`underline-hover ${
                        filters.includes(item.tag) ? 'underline' : ''
                      }`}>
                      <span
                        className={`is-block filter-label ${
                          filters.includes(item.tag) ? 'underline' : ''
                        }`}
                        onClick={() => {
                          if (!filters.includes(item.tag)) {
                            handleFilter(item.tag);
                          }
                        }}>
                        {t(item.label)}
                      </span>
                    </div>
                    <button
                      className={`button is-shadowless ${
                        filters.includes(item.tag) ? '' : 'is-hidden'
                      }`}
                      onClick={() => {
                        handleFilter(item.tag, 'remove');
                      }}>
                      <CloseIcon />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Column>
        <Column>
          <div className={`filter-menu ${displayMenu[ServiceMenuFilter.label] ? 'is-active' : ''}`}>
            <h3
              className={`title is-3 border-bottom pb-4 mb-4 is-uppercase filter-label-heading is-relative`}>
              {t(ServiceMenuFilter.label)}
              <span
                className="dropdown-arrow-toggler filters-toggler arrow-button-mobile"
                onClick={() =>
                  setDisplayMenu({
                    [ServiceMenuFilter.label]: !displayMenu[ServiceMenuFilter.label],
                  })
                }>
                <ArrowButton />
              </span>
            </h3>
            <ul className="filter-list filter-list-3">
              {ServiceMenuFilter.items.map((item, i) => (
                <li
                  key={'h0_Yefbwa' + i}
                  className="button title is-4 mr-3 is-flex is-align-items-center">
                  <div
                    className={`underline-hover ${filters.includes(item.tag) ? 'underline' : ''}`}>
                    <span
                      className={`is-block filter-label ${
                        filters.includes(item.tag) ? 'underline' : ''
                      }`}
                      onClick={() => {
                        if (!filters.includes(item.tag)) {
                          handleFilter(item.tag);
                        }
                      }}>
                      {t(item.label)}
                    </span>
                  </div>
                  <button
                    className={`button is-shadowless ${
                      filters.includes(item.tag) ? '' : 'is-hidden'
                    }`}
                    onClick={() => {
                      handleFilter(item.tag, 'remove');
                    }}>
                    <CloseIcon />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Column>
        <Column>
          <div className={`filter-menu ${displayMenu[Countries.label] ? 'is-active' : ''}`}>
            <h3 className="title is-3 border-bottom pb-4 mb-4 is-uppercase filter-label-heading is-relative">
              {t(Countries.label)}
              <span
                className="dropdown-arrow-toggler filters-toggler arrow-button-mobile"
                onClick={() =>
                  setDisplayMenu({
                    [Countries.label]: !displayMenu[Countries.label],
                  })
                }>
                <ArrowButton />
              </span>
            </h3>
            <ul className="filter-list filter-list-3">
              {Countries.items.map((item, i) => (
                <li
                  key={'nh5KD-Kx6' + i}
                  className="button title is-4 mr-3 is-flex is-align-items-center">
                  <div
                    className={`underline-hover ${filters.includes(item.tag) ? 'underline' : ''}`}>
                    <span
                      className={`is-block filter-label ${
                        filters.includes(item.tag) ? 'underline' : ''
                      }`}
                      onClick={() => {
                        if (!filters.includes(item.tag)) {
                          handleFilter(item.tag);
                        }
                      }}>
                      {t(item.label)}
                    </span>
                  </div>
                  <button
                    className={`button is-shadowless ${
                      filters.includes(item.tag) ? '' : 'is-hidden'
                    }`}
                    onClick={() => {
                      handleFilter(item.tag, 'remove');
                    }}>
                    <CloseIcon />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Column>
      </Columns>
    </div>
  );
};

export { Filter };
