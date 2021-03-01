import React, {useState, useEffect} from 'react';
import { BottomNavigation, ListItemAvatar } from '@material-ui/core';
import {BottomNavigationAction} from '../BottomNavigationAction/BottomNavigationAction.jsx';

const CustomBottomNavigation = (props) => {
  const { storage, clickHandler } = props;

  useEffect(() => {
      console.log('useEffecr was called');
  })

  return (
    <BottomNavigation>
      {storage.map((item, index) => (
        <BottomNavigationAction
          isSelected={item.selected === 1 ? true : false}
          label={item.label}
          index={index}
          key={index.toString()}
          onClickHandler={clickHandler}
        />
      ))}
    </BottomNavigation>
  );
}

export { CustomBottomNavigation as BottomNavigation};