import React from 'react';
import { Center } from '.';

// all the project icons imported here
import Facebook from './icons/facebook.icon';
import Google from './icons/google.icon';
import Menu from './icons/menu.icon';
import Close from './icons/close.icon';

const Icon = (props) => {
  const icons = {
    facebook: <Facebook {...props} />,
    google: <Google {...props} />,
    menu: <Menu {...props} />,
    close: <Close {...props} />,
  };

  return (
    <Center style={{ cursor: 'pointer' }} {...props}>
      {icons[props.icon]}
    </Center>
  );
};

export default Icon;
