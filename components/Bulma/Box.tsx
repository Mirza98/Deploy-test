import React from 'react';

export interface BoxProps {
  className?: string;
  children?: any;
}

export default function Box(props: BoxProps) {
  return (
    <div className={(props.className ? `${props.className} ` : '') + 'box'}>{props.children}</div>
  );
}
