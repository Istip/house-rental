import React from 'react';
import { Center, Icon, Text, tokens, Divider } from '../UI';
import { List, ListItem } from './styles';

const Information = ({ house }) => {
  const data = [
    { icon: 'price', title: 'Ar', name: house.price, info: 'lei' },
    { icon: 'person', title: 'Min', name: house.minPerson, info: 'szemely' },
    { icon: 'people', title: 'Max', name: house.maxPerson, info: 'szemely' },
  ];

  return (
    <List>
      {data.map((item, i) => (
        <span key={i}>
          {i === 1 && (
            <Divider color={tokens.colors.primaryLight2} padding="20px 0" />
          )}
          <ListItem key={i}>
            <Center gap={10} between>
              <Center gap={10}>
                <Icon icon={item.icon} color={tokens.colors.primary} />
                <Text variant="regular14" color={tokens.colors.primaryDark2}>
                  {item.title}
                </Text>
              </Center>

              <Center gap={3}>
                <Text variant="black14" color={tokens.colors.primaryDark1}>
                  {item.name}
                </Text>
                <Text variant="regular12" color={tokens.colors.primaryDark1}>
                  {item.info}
                </Text>
              </Center>
            </Center>
          </ListItem>
        </span>
      ))}
    </List>
  );
};

export default Information;
