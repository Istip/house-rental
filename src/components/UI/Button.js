import React from 'react';
import styled from 'styled-components';
import { Center, tokens } from './';

const Button = (props) => {
  return (
    <ButtonItem {...props} className={props.variant || 'primary'}>
      <ButtonText withIcon={props.icon} social={props.variant}>
        {props.icon && <Center>{props.icon}</Center>}
        {props.children}
      </ButtonText>
    </ButtonItem>
  );
};

const ButtonItem = styled.button`
  height: ${(props) =>
    props.size === 'small'
      ? '24px'
      : props.size === 'medium'
      ? '32px'
      : '48px'};
  padding: ${(props) =>
    props.size === 'small'
      ? '0 8px'
      : props.size === 'medium'
      ? '0 12px'
      : '0 24px'};
  width: ${({ block }) => (block ? '100%' : 'auto')};
  display: ${({ block }) => (block ? 'block' : '')};
  text-align: center;
  border-radius: ${(props) => (props.rounded ? '50%' : '4px')};
  cursor: pointer;
  transition: 250ms ease;

  &:disabled {
    opacity: 0.5;
  }

  &.primary {
    color: ${tokens.colors.white};
    background: ${tokens.colors.primary};
    border: 1px solid ${tokens.colors.primary};
    font-weight: 700;

    &:hover {
      background: ${tokens.colors.primaryDark1};
      border: 1px solid ${tokens.colors.primaryDark1};
    }

    &:active {
      background: ${tokens.colors.primaryDark2};
      border: 1px solid ${tokens.colors.primaryDark2};
    }
  }

  &.secondary {
    color: ${tokens.colors.primaryLight1};
    background: ${tokens.colors.white};
    border: 1px solid ${tokens.colors.primaryWhite};

    &:hover {
      color: ${tokens.colors.primary};
      background: ${tokens.colors.primaryLight2};
      border: 1px solid ${tokens.colors.primaryLight1};
    }

    &:active {
      color: ${tokens.colors.white};
      background: ${tokens.colors.primaryLight1};
      border: 1px solid ${tokens.colors.primaryLight1};
    }
  }

  &.neutral {
    color: ${tokens.colors.darkGrey};
    background: ${tokens.colors.lightGrey};
    border: 1px solid ${tokens.colors.lightGrey};

    &:hover {
      color: ${tokens.colors.lightGrey};
      background: ${tokens.colors.mediumGrey};
      border: 1px solid ${tokens.colors.mediumGrey};
    }
  }

  &.success {
    color: ${tokens.colors.success};
    background: ${tokens.colors.success + '33'};
    border: 1px solid ${tokens.colors.success};

    &:hover {
      background: ${tokens.colors.success + '66'};
    }

    &:active {
      background: ${tokens.colors.success + '66'};
    }
  }

  &.error {
    color: ${tokens.colors.error};
    background: ${tokens.colors.error + '33'};
    border: 1px solid ${tokens.colors.error};

    &:hover {
      background: ${tokens.colors.error + '66'};
    }

    &:active {
      background: ${tokens.colors.error + '66'};
    }
  }

  &.warning {
    color: ${tokens.colors.warning};
    background: ${tokens.colors.warning + '33'};
    border: 1px solid ${tokens.colors.warning};

    &:hover {
      background: ${tokens.colors.warning + '66'};
    }

    &:active {
      background: ${tokens.colors.warning + '66'};
    }
  }

  &.facebook {
    color: ${tokens.colors.white};
    font-weight: 700;
    background: #4267b2;
    border: none;
  }

  &.google {
    color: ${tokens.colors.primaryDark2};
    font-weight: 700;
    background: ${tokens.colors.white};
    border: 1px solid ${tokens.colors.darkGrey};
  }
`;

const ButtonText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.withIcon ? '5px' : 0)};
`;

export default Button;
