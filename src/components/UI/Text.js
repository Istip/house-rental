import React from 'react';
import { fonts } from './tokens';

const Text = ({ variant, tag, children, color, lineHeight, ...props }) => {
  const Tag = tag || 'p';
  return (
    <Tag style={{ ...fonts[variant], color, lineHeight }} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
