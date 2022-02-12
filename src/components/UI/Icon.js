import React from 'react';
import { Center } from '.';

// all the project icons imported here
import Facebook from './icons/facebook.icon';
import Google from './icons/google.icon';
import Menu from './icons/menu.icon';
import Close from './icons/close.icon';
import Search from './icons/search.icon';
import Down from './icons/down.icon';
import Location from './icons/location.icon';
import Price from './icons/price.icon';
import Person from './icons/person.icon';
import People from './icons/people.icon';
import ChevronRight from './icons/chevronRight.icon';
import ChevronLeft from './icons/chevronLeft.icon';
import Heart from './icons/heart.icon';
import HeartEmpty from './icons/heartEmpty.icon';
import Phone from './icons/phone.icon';
import Settings from './icons/settings.icon';

const Icon = (props) => {
  const icons = {
    facebook: <Facebook {...props} />,
    google: <Google {...props} />,
    menu: <Menu {...props} />,
    close: <Close {...props} />,
    search: <Search {...props} />,
    down: <Down {...props} />,
    location: <Location {...props} />,
    price: <Price {...props} />,
    person: <Person {...props} />,
    people: <People {...props} />,
    chevronRight: <ChevronRight {...props} />,
    chevronLeft: <ChevronLeft {...props} />,
    heart: <Heart {...props} />,
    heartEmpty: <HeartEmpty {...props} />,
    phone: <Phone {...props} />,
    settings: <Settings {...props} />,
  };

  return (
    <Center style={{ cursor: 'pointer' }} {...props}>
      {icons[props.icon]}
    </Center>
  );
};

export default Icon;
