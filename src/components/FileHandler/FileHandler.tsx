import React, {Component, useContext, SyntheticEvent, FunctionComponent as FC, useEffect} from 'react';
import {Container} from '../Common/Container/Container';
import {BottomNavigation} from '../Common/BottomNavigation/BottomNavigation';
import {CustomCard} from '../Common/Card/CustomCard';
import {FileHandlerContext} from '../Context/FileHandlerContext';

import './FileHandler.less';

interface FileHandlerPropsI {}

const FileHandler: FC<FileHandlerPropsI> = () => {
  const {stockData: data, setStockData: setData} = useContext(FileHandlerContext);

  useEffect(() => {
    console.log('--> FileHandler Component useEffect');
  })

  const clickHandler = (event: SyntheticEvent<any, Event>, index: number) => {
    setData(Object.assign({}, data, { navigationActiveIndex: index }));
  }

  const renderBody = () => {
    console.log("conditional rendering");
    if (data !== undefined) {
      return (
        <React.Fragment>
          <h1>Data fully loaded</h1>
          <div className="file-handler-nav-panel">
            <BottomNavigation
              activeNavigationItem={data.navigationActiveIndex}
              navigationItems={data.navigationItem}
              clickHandler={clickHandler}
            ></BottomNavigation>
          </div>

          {/* <div className="file-handler-cards-panel">
            {data.cards[data.activeIndex].map((item, index) => (
              <CustomCard key={index.toString()}>
                <h1>{item.label}</h1>
              </CustomCard>
            ))}
          </div> */}
        </React.Fragment>
      );
    } else {
      return <h1>Here must be a spinner! Data is still loading</h1>;
    }
  };

  return (
    <Container classes="file-handler-container">
      <h3>FileHandler Component !</h3>
      {renderBody()}
    </Container>
  );
}

export default FileHandler;