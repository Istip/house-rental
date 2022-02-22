import React, { useRef, useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import Required from './Required';
import { Text, Center, tokens, Input, Button } from './';

const Select = ({ list, selected, setSelected, ...props }) => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');

  const wrapperNode = useRef();

  const handleClickOutside = (e) => {
    if (wrapperNode.current && wrapperNode.current.contains(e.target)) {
      return;
    }
    setVisible(false);
    setSearch('');
  };

  const handleSelect = (item) => {
    setSelected(item);
    setVisible(false);
    setSearch('');
  };

  const handleClose = () => {
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
      <ReactTooltip place="right" type="error" effect="solid" />

      {props.label && (
        <Text tag="div" variant="medium14" color={tokens.colors.primaryDark4}>
          {props.label}
          <span data-tip="Kotelezo mezo!">
            <Required required={props.required} />
          </span>
        </Text>
      )}

      <SelectWrapper
        ref={wrapperNode}
        visible={visible}
        onClick={() => (!visible ? setVisible(true) : null)}
        hasLabel={props.label}
        small={props.small}
        bottom={props.bottom}
      >
        {props.icon && <span>{props.icon}</span>}

        <TextWrapper selected={selected} icon={props.icon} small={props.small}>
          <Text tag="div" variant={props.small ? 'regular14' : 'regular16'}>
            {selected || props.placeholder}
          </Text>
        </TextWrapper>

        {visible && (
          <SelectMenu
            onMouseLeave={() => setVisible(false)}
            small={props.small}
          >
            <InputWrapper>
              <Input
                type="text"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Helyseg keresese..."
                autoFocus
                border
                shadow
              />

              <Button variant="error" size="small" block onClick={handleClose}>
                Mégse
              </Button>
            </InputWrapper>

            {list
              .filter((item) => {
                if (
                  item.hu
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  item.ro
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return true;
                }
                return null;
              })
              .map((item, i) => (
                <SelectMenuItem
                  key={i}
                  // 👇 add function to display text based on the current language
                  onClick={() => handleSelect(item.hu)}
                  className={item.hu === selected ? 'active' : ''}
                  small={props.small}
                >
                  <Center>
                    <Text
                      tag="div"
                      variant={item.hu === selected ? 'medium14' : 'regular14'}
                    >
                      {item.hu}
                      <br />
                    </Text>
                  </Center>

                  <Center>
                    <Text variant="regular10" color={tokens.colors.mediumGrey}>
                      {item.ro}
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
  height: ${(props) => (props.small ? '35px' : '48px')};
  background: ${tokens.colors.white};
  border-radius: ${(props) => (props.visible ? '2px 2px 0 0' : '2px')};
  border: ${(props) =>
    props.visible
      ? `1px solid ${tokens.colors.primaryLight1}`
      : `1px solid ${tokens.colors.primaryLight2}`};
  cursor: pointer;
  margin-top: ${(props) => (props.hasLabel ? '2px' : 0)};
  transition: 250ms ease;
  margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)};

  &:hover {
    border: 1px solid ${tokens.colors.primaryDark1};
  }

  span {
    position: absolute;
    width: 48px;
    height: 48px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  opacity: ${(props) => (props.selected ? 1 : 0.5)};
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: ${(props) => (props.icon ? '42px' : '12px')};
  font-size: ${(props) => (props.small ? '14px' : '16px')};
  color: ${(props) =>
    props.selected
      ? `${tokens.colors.primaryBlack}`
      : `${tokens.colors.mediumGrey}`};
`;

const InputWrapper = styled.div`
  scroll-snap-align: start;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px 20px;
  background: ${tokens.colors.white};
`;

const SelectMenu = styled.div`
  position: absolute;
  top: ${(props) => (props.small ? '33px' : '46px')};
  left: -1px;
  right: -1px;
  min-height: 37px;
  max-height: 234px;
  overflow: auto;
  scroll-behavior: smooth;
  background: ${tokens.colors.white};
  border-radius: 0 0 4px 4px;
  border: 1px solid ${tokens.colors.primaryDark2};
  color: ${tokens.colors.primaryDark1};
  z-index: 2;
  scroll-snap-type: y mandatory;
`;

const SelectMenuItem = styled.div`
  width: 100%;
  padding: 5px;
  background: ${tokens.colors.white};
  transition: 250ms ease;
  scroll-snap-align: start;
  color: ${tokens.colors.primaryBlack};
  background: ${(props) => (props.firstElement ? 'red' : '')}
  font-size: ${(props) => (props.small ? '12px' : '14px')}

  &:first-child {
    margin-top: 50px;
  }

  &.active {
    background: ${tokens.colors.whiteGrey};
    color: ${tokens.colors.primary};
  }

  &:hover {
    background: ${tokens.colors.whiteGrey};
  }
`;

export default Select;
