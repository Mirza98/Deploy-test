import React, { FC } from 'react';

export interface ContainerProps {
  children: any;
  className?: string | undefined;
}

const Container: FC<ContainerProps> = (props) => (
  <div className={`container ${props.className ? props.className : ''}`}>{props.children}</div>
);

export default Container;
