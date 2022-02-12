import React from 'react';
import styled from 'styled-components';

const Avatar = (props) => {
  const name = props.name || 'user';
  const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
  let initials = [...name.matchAll(rgx)] || [];

  initials = (
    (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
  ).toUpperCase();

  return <AvatarWrapper>{props.image || initials}</AvatarWrapper>;
};

const AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Avatar;
