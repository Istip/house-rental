import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Text, Center, tokens, Icon, Input } from './';

const Select = ({ list, selected, setSelected, ...props }) => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');

  const wrapperNode = useRef();

  const handleClickOutside = (e) => {
    if (wrapperNode.current && wrapperNode.current.contains(e.target)) {
      return;
    }
    setVisible(false);
  };

  const handleSelect = (item) => {
    setSelected(item);
    setVisible(false);
    setSearch('');
  };

  useEffect(() => {
    if (wrapperNode) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {props.label && (
        <Text tag="div" variant="medium14" color={tokens.colors.primaryDark4}>
          {props.label}
        </Text>
      )}
      <SelectWrapper
        ref={wrapperNode}
        visible={visible}
        onClick={() => (!visible ? setVisible(true) : null)}
        hasLabel={props.label}
      >
        <IconWrapper className={visible ? 'visible' : ''}>
          <Center style={{ height: '100%' }}>
            <Icon icon="down" size={12} color={tokens.colors.primary} />
          </Center>
        </IconWrapper>

        {props.icon && <span>{props.icon}</span>}

        <TextWrapper icon={props.icon}>
          <Text
            tag="div"
            variant="regular16"
            color={selected ? tokens.colors.primaryDark4 : '#757575'}
          >
            {selected || 'Not selected yet'}
          </Text>
        </TextWrapper>

        {visible && (
          <SelectMenu>
            <InputWrapper>
              <Input
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Helyseg keresese..."
                autoFocus
                border
              />
            </InputWrapper>

            {list
              .filter((item) => {
                if (!search) return true;
                if (item.toLowerCase().includes(search.toLowerCase())) {
                  return true;
                }
                return null;
              })
              .map((item, i) => (
                <SelectMenuItem
                  key={i}
                  onClick={() => handleSelect(item)}
                  className={item === selected ? 'active' : ''}
                >
                  <Center>
                    <Text
                      tag="div"
                      variant={item === selected ? 'medium14' : 'regular14'}
                    >
                      {item}
                    </Text>
                  </Center>
                </SelectMenuItem>
              ))}
          </SelectMenu>
        )}
      </SelectWrapper>
    </>
  );
};

// styled components
const SelectWrapper = styled.div`
  max-width: 600px;
  position: relative;
  width: 100%;
  height: 48px;
  background: ${tokens.colors.white};
  border-radius: ${(props) => (props.visible ? '4px 4px 0 0' : '4px')};
  border: ${(props) =>
    props.visible
      ? `1px solid ${tokens.colors.primaryLight1}`
      : `1px solid ${tokens.colors.primaryLight2}`};
  cursor: pointer;
  margin-top: ${(props) => (props.hasLabel ? '2px' : 0)};
  transition: 250ms ease;

  &:hover {
    border: 1px solid ${tokens.colors.primaryDark1};
  }

  span {
    position: absolute;
    width: 48px;
    height: 46px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  right: 0;
  transition: 250ms ease;

  &.visible {
    transform: rotate(180deg);
  }
`;

const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: ${(props) => (props.icon ? '42px' : '12px')};
`;

const InputWrapper = styled.div`
  scroll-snap-align: start;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: ${tokens.colors.white};
`;

const SelectMenu = styled.div`
  position: absolute;
  top: 46px;
  left: -1px;
  right: -1px;
  min-height: 37px;
  max-height: 234px;
  overflow: auto;
  scroll-behavior: smooth;
  background: ${tokens.colors.primaryWhite};
  border-radius: 0 0 4px 4px;
  border: 1px solid ${tokens.colors.primaryDark2};
  color: ${tokens.colors.primaryDark1};
  z-index: 2;
  scroll-snap-type: y mandatory;
`;

const SelectMenuItem = styled.div`
  width: 100%;
  padding: 10px;
  background: ${tokens.colors.white};
  transition: 250ms ease;
  scroll-snap-align: start;
  color: ${tokens.colors.primaryBlack};

  &:first-child {
    margin-top: 50px;
  }

  &.active {
    background: ${tokens.colors.lightGrey};
    color: ${tokens.colors.primaryLight1};
  }

  &:hover {
    background: ${tokens.colors.lightGrey};
  }
`;

export default Select;
