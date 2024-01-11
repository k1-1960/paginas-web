import React from 'react';

export type ButtonProps = {
  style?: React.CSSProperties;
  className?: string;
  id?: string;
  label?: string;
  startContent?: React.JSX.Element;
  endContent?: React.JSX.Element;
  withDividers?: boolean;
};
