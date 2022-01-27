import React from 'react';
import { Center } from '.';

// existing icons
import Facebook from './icons/facebook.icon';
import Google from './icons/google.icon';

const Icon = (props) => {
  const icons = {
    facebook: <Facebook {...props} />,
    google: <Google {...props} />,
  };

  return <Center {...props}>{icons[props.icon]}</Center>;
};

export default Icon;
