import useTranslation from 'next-translate/useTranslation';

export default function Custom400() {
  let { t } = useTranslation('error');
  return (
    <>
      <div className="error-page">
        <h1 className="title is-1">400</h1>
        <h3 className="title is-3">{t('404')}</h3>
      </div>
    </>
  );
}
