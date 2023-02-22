import React, { FC } from 'react';

const Direction = {
  up: -90,
  down: 90,
  left: 180,
  right: 0,
};

export interface IconProps {
  color?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const Icon: FC<IconProps> = ({ color, direction, className }) => {
  return (
    <span className={className ? className : ''}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill={color}
        viewBox="0 0 24 24"
        style={{ rotate: `${Direction[direction]}deg` }}>
        <defs>
          <clipPath id="2u5g0qf43a">
            <path d="M6.665-8l2.823 2.823a.69.69 0 0 1 0 .975.69.69 0 0 1-.975 0L5.2-7.512a.69.69 0 0 1 0-.975l3.31-3.31a.69.69 0 0 1 .975 0 .69.69 0 0 1 0 .975z" />
          </clipPath>
          <clipPath id="wi4keo2r6b">
            <path d="M-312 1425h1680V-580H-312z" />
          </clipPath>
        </defs>
        <g transform="rotate(180 12 12)">
          <rect width="24" height="24" fill="transparent" rx="6" />
          <g>
            <g clip-path="url(#2u5g0qf43a)" transform="translate(5 20)">
              <g clip-path="url(#wi4keo2r6b)">
                <path d="M0-17h14.69V1H0z" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
};

export { Icon };
