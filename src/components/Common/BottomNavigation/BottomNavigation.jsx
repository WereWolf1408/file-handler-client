import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation } from '@material-ui/core';
import {BottomNavigationAction} from '../BottomNavigationAction/BottomNavigationAction.jsx';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const CustomBottomNavigation = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    console.log('123');
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction />
      <BottomNavigationAction />
      <BottomNavigationAction />
    </BottomNavigation>
  );
}

export { CustomBottomNavigation as BottomNavigation};