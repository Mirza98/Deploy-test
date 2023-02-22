import React, { useEffect, useState } from 'react';

import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="scrollTop"
      onClick={scrollTop}
      style={{ display: showScroll ? 'inline' : 'none' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
        <g id="arrow-up" transform="translate(-2263 -1155)">
          <rect
            id="background"
            width="38"
            height="38"
            transform="translate(2265 1157)"
            fill="#fff"
          />
          <path
            id="arrow-up-2"
            data-name="arrow-up"
            d="M4.5,3h33A4.5,4.5,0,0,0,42-1.5v-33A4.5,4.5,0,0,0,37.5-39H4.5A4.5,4.5,0,0,0,0-34.5v33A4.5,4.5,0,0,0,4.5,3ZM3-34.5A1.5,1.5,0,0,1,4.5-36h33A1.5,1.5,0,0,1,39-34.5v33A1.5,1.5,0,0,1,37.5,0H4.5A1.5,1.5,0,0,1,3-1.5Zm18.8,9.038a1.164,1.164,0,0,0-1.6-.009L9.413-14.681a1.126,1.126,0,0,0,0,1.594l.666.666a1.126,1.126,0,0,0,1.594,0L21-21.75l9.319,9.337a1.126,1.126,0,0,0,1.594,0l.666-.666a1.126,1.126,0,0,0,0-1.594Z"
            transform="translate(2263 1194)"
            fill="#484848"
          />
        </g>
      </svg>
    </div>
  );
};
export { ScrollArrow };
