import React, {useEffect, SyntheticEvent} from 'react';
import { BottomNavigation } from '@material-ui/core';
import {BottomNavigationAction} from '../BottomNavigationAction/BottomNavigationAction';

import { DiskInfoI } from '../../Context/FileHandlerInterface'; 

interface CustButProps {
  navigationItems: DiskInfoI;
  activeNavigationItem: number;
  clickHandler: (event: SyntheticEvent<any, Event>, index: number) => void;
}

const CustomBottomNavigation = (props: CustButProps) => {
  const { navigationItems, clickHandler, activeNavigationItem } = props;

  useEffect(() => {})

  const buildNavigationItems = () => {
    let navItemsArr = [];
    for (let prop in navigationItems) {
      let item = navigationItems[prop];
      navItemsArr.push(
        <BottomNavigationAction
          isSelected={parseInt(prop) === activeNavigationItem ? true : false}
          label={`${item.Mounted}: ${item.Capacity}`}
          index={parseInt(prop)}
          key={prop.toString()}
          onClickHandler={clickHandler}
        />
      );
    }
    return navItemsArr;
  }

  return (
    <BottomNavigation>
      {buildNavigationItems()}
    </BottomNavigation>
  );
}

export { CustomBottomNavigation as BottomNavigation};