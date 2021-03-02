import React from 'react';
import Button from '@material-ui/core/Button';

interface PrimaryButtonI {
  title: string,
}

const PrimaryButton = (props: PrimaryButtonI) => {
  return (
    <Button variant="contained" color="primary">
      {props.title}
    </Button>
  );
}

export default PrimaryButton;