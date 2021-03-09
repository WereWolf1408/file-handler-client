import React, {Component, useContext, SyntheticEvent, FunctionComponent as FC, useEffect} from 'react';
import PrimaryButton from "../Common/Buttons/PrimaryButton";
import {Container} from '../Common/Container/Container';
import {BottomNavigation} from '../Common/BottomNavigation/BottomNavigation';
import {CustomCard} from '../Common/Card/CustomCard';
import {FileHandlerContext} from '../Context/FileHandlerContext';

import {buttomNavigationClickHandler} from '../../utils/tools';

import './FileHandler.less';

interface FileHandlerPropsI {}

const FileHandler: FC<FileHandlerPropsI> = () => {
  const {stockData: data, setStockData: setData} = useContext(FileHandlerContext);
  const allData = useContext(FileHandlerContext);

  useEffect(() => {
    console.log('new file handle class based on hooks');
    console.log(data);
    console.log(allData);
  })

  const clickHandler = (event: SyntheticEvent<any, Event>, index: number) => {
    console.log("click handler");
    console.log(index);
    const {activeIndex, newData} = buttomNavigationClickHandler(index, data);
   
    setData({
      navigation: newData,
      activeIndex: activeIndex,
      cards: data.cards,
    });
  }

  return (
    <Container classes="file-handler-container">
      <h3>FileHandler Component !</h3>
      <PrimaryButton title="Click me !" />

      <div className="file-handler-nav-panel">
        <BottomNavigation
          navigationItems={data.navigation}
          clickHandler={clickHandler}
        ></BottomNavigation>
      </div>

      <div className="file-handler-cards-panel">
        {data.cards[data.activeIndex].map((item, index) => (
          <CustomCard key={index.toString()}>
            <h1>{item.label}</h1>
          </CustomCard>
        ))}
      </div>

    </Container>
  );
}

export default FileHandler;