import { FC, useEffect, useState } from 'react';

interface LoadableImageProps {
  width: string;
  height?: string;
  src: string;
  alt: string;
  className?: string;
}

const LoadableImage: FC<LoadableImageProps> = ({ width, height, src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  //you can always store errors to show an error image if it could not be found etc
  const [error, setError] = useState(null);

  const loadingImgStyle = {
    display: loaded ? 'none' : undefined,
    width: '150px',
    height: '150px',
  };

  const displayImgStyle = {
    display: loaded ? undefined : 'none',
  };

  return (
    <div style={{ width: `${width}`, height }}>
      <img src={'/assets/logos/logo-black.svg'} style={loadingImgStyle} alt={'Loading'} />
      <img
        className={className}
        src={src}
        alt={alt}
        style={displayImgStyle}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default LoadableImage;
