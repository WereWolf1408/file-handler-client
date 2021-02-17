import React from 'react';
import Button from '@material-ui/core/Button';

const PrimaryButton = (props) => {
  return (
    <Button variant="contained" color="primary">
      {props.title}
    </Button>
  );
}

export default PrimaryButton;