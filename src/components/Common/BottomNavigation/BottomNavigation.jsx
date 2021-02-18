import React, {useState, useEffect} from 'react';
import { BottomNavigation, ListItemAvatar } from '@material-ui/core';
import {BottomNavigationAction} from '../BottomNavigationAction/BottomNavigationAction.jsx';

const CustomBottomNavigation = (props) => {
  const { storage } = props;
  const [data, setData] = useState(storage);

  useEffect(() => {
      console.log('useEffecr was called');
  })

  const onClickHandler = (event, index) => {
    const newData = data.map((item, itemIndex) => {
      itemIndex === index? item.selected = 1 : item.selected = 0;
      return item;
    });
    setData(newData);
  }

  return (
    <BottomNavigation>
      {
        data.map((item, index) => 
          <BottomNavigationAction
            isSelected={item.selected === 1? true :  false}
            label={item.label} 
            index={index} 
            key={index.toString()}
            onClickHandler={onClickHandler} 
          />
        )
      }
    </BottomNavigation>
  );
}

export { CustomBottomNavigation as BottomNavigation};