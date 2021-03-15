import React, {useState, useEffect, SyntheticEvent} from 'react';
import { BottomNavigation } from '@material-ui/core';
import {BottomNavigationAction} from '../BottomNavigationAction/BottomNavigationAction';

interface NavigationItemsItem {
  index: string;
  label: string;
  selected: number;
}

interface CustButProps {
  navigationItems: Array<NavigationItemsItem>;
  clickHandler: (event: SyntheticEvent<any, Event>, index: number) => void;
}

const CustomBottomNavigation = (props: CustButProps) => {
  const { navigationItems, clickHandler } = props;

  useEffect(() => {
  })

  return (
    <BottomNavigation>
      {navigationItems.map((item: any, index: number) => (
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