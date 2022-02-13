import React from 'react';
import { Text, tokens } from '.';

const Required = (props) => {
  if (!props.required) {
    return null;
  }

  return (
    <Text
      variant="black12"
      tag="span"
      color={tokens.colors.error}
      title="Ezt a mezot kotelezoen ki kell tolteni!"
    >
      *
    </Text>
  );
};

export default Required;
