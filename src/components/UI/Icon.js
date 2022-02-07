import React from 'react';
import { Center } from '.';

// all the project icons imported here
import Facebook from './icons/facebook.icon';
import Google from './icons/google.icon';
import Menu from './icons/menu.icon';
import Close from './icons/close.icon';
import Search from './icons/search.icon';
import Down from './icons/down.icon';

const Icon = (props) => {
  const icons = {
    facebook: <Facebook {...props} />,
    google: <Google {...props} />,
    menu: <Menu {...props} />,
    close: <Close {...props} />,
    search: <Search {...props} />,
    down: <Down {...props} />,
  };

  return (
    <Center style={{ cursor: 'pointer' }} {...props}>
      {icons[props.icon]}
    </Center>
  );
};

export default Icon;
