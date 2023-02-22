import { EmailShareButton, FacebookShareButton, LinkedinShareButton } from 'react-share';
import React, { FC } from 'react';

import Button from '../Bulma/Button';
import { useRouter } from 'next/router';
import { useWindowSize } from '../../hooks/useWindowSize';

export interface ShareButtonsProps {
  color?: string;
  className?: string;
}

const ShareButtons: FC<ShareButtonsProps> = ({ color, className }) => {
  const windowSize = useWindowSize();
  const router = useRouter();

  return (
    <div
      className={`buttons social-media-buttons share-media-buttons ${className ? className : ''}`}>
      <LinkedinShareButton url={`https://aksa.imperea.dev/${router.asPath}`}>
        <Button className="is-shadowless">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill={color}>
            <g>
              <path
                d="M9.076 16H6V5.593h3.076v1.17A3.786 3.786 0 0 1 12.217 5C14.586 5 16 6.586 16 9.241V16h-3.077v-5.6c0-1.548-.646-2.4-1.823-2.4-1.266 0-2.024.9-2.024 2.4V16zM3 16H0V6h3v10zM1.5 3a1.5 1.5 0 1 1 1.061-.44A1.5 1.5 0 0 1 1.5 3z"
                transform="translate(10 10)"
              />
            </g>
          </svg>
        </Button>
      </LinkedinShareButton>

      <EmailShareButton url={`https://aksa.imperea.dev/${router.asPath}`}>
        <Button className="is-shadowless">
          <svg
            width="20px"
            height="15px"
            viewBox="0 0 20 15"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-340.000000, -922.000000)"
                fill="#000000">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z"
                    id="email-[#1572]"
                  />
                </g>
              </g>
            </g>
          </svg>
        </Button>
      </EmailShareButton>

      <FacebookShareButton url={`https://aksa.imperea.dev/${router.asPath}`}>
        <Button className="is-shadowless">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill={color}>
            <g>
              <path
                d="M5.457 15V8.25h2.186l.357-3H5.457V3.789c0-.773.021-1.539 1.172-1.539H7.8V.1A13.748 13.748 0 0 0 5.781 0a3.184 3.184 0 0 0-3.442 3.525V5.25H0v3h2.339V15z"
                transform="translate(14 11)"
              />
            </g>
          </svg>
        </Button>
      </FacebookShareButton>
    </div>
  );
};

export { ShareButtons };
